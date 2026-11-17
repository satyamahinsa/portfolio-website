"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projectGroups, projects, type Project, type ProjectGroup } from "@/content/profile";
import { ProjectCover } from "../ProjectCover";
import { Reveal, SectionHeading, ease } from "../motion";

export function Projects() {
  const groups = projectGroups
    .map((g) => ({ name: g, items: projects.filter((p) => p.group === g) }))
    .filter((g) => g.items.length > 0);
  // The first category (Computer Vision) is shown by default.
  const [active, setActive] = useState<ProjectGroup>(groups[0].name);
  const current = groups.find((g) => g.name === active) ?? groups[0];

  return (
    <section id="projects" className="bg-glow-top px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Projects"
          aside={<span>{projects.length} projects · {groups.length} categories</span>}
        />

        <Reveal>
          <div
            role="tablist"
            aria-label="Project categories"
            className="-mt-4 mb-10 flex flex-wrap gap-2 sm:-mt-6 sm:mb-12"
          >
            {groups.map((g) => {
              const selected = g.name === current.name;
              return (
                <button
                  key={g.name}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(g.name)}
                  className={`relative isolate rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    selected
                      ? "border-transparent text-accent-fg"
                      : "border-line text-muted hover:border-fg hover:text-fg"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="project-category"
                      className="absolute inset-0 -z-10 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  {g.name}
                  <span className={`ml-1.5 font-mono text-xs ${selected ? "opacity-80" : "opacity-60"}`}>
                    {g.items.length}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.name}
            role="tabpanel"
            aria-label={current.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease }}
          >
            <ProjectGroupSlider name={current.name} items={current.items} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/** One category: shows its newest project, with arrows and page numbers for the rest. */
function ProjectGroupSlider({ name, items }: { name: ProjectGroup; items: Project[] }) {
  const [[page, dir], setPage] = useState<[number, number]>([0, 0]);
  const count = items.length;
  const go = (next: number) => {
    const wrapped = (next + count) % count;
    setPage([wrapped, next > page ? 1 : -1]);
  };
  const p = items[page];
  const index = projects.indexOf(p);

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-4">
        <div className="flex items-baseline gap-3">
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{name}</h3>
          <span className="font-mono text-sm text-muted">
            {count} {count === 1 ? "project" : "projects"}
          </span>
        </div>

        {count > 1 && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(page - 1)}
              aria-label={`Previous ${name} project`}
              className="grid size-10 place-items-center rounded-full border border-line transition-colors hover:border-fg"
            >
              <ArrowLeft className="size-4" />
            </button>
            <div className="flex items-center gap-1" role="tablist" aria-label={`${name} projects`}>
              {items.map((it, i) => (
                <button
                  key={it.slug}
                  type="button"
                  role="tab"
                  aria-selected={i === page}
                  aria-label={`${it.title} (${i + 1} of ${count})`}
                  onClick={() => go(i)}
                  className={`grid size-8 place-items-center rounded-full font-mono text-xs transition-colors ${
                    i === page ? "bg-accent text-accent-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(page + 1)}
              aria-label={`Next ${name} project`}
              className="grid size-10 place-items-center rounded-full border border-line transition-colors hover:border-fg"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        )}
      </div>

      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" initial={false} custom={dir}>
          <motion.article
            key={p.slug}
            custom={dir}
            variants={{
              enter: (d: number) => ({ opacity: 0, x: d * 60 }),
              center: { opacity: 1, x: 0 },
              exit: (d: number) => ({ opacity: 0, x: d * -60 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease }}
          >
            <Link
              href={`/projects/${p.slug}`}
              className="group grid items-center gap-6 md:grid-cols-[1.3fr_1fr] md:gap-10"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.75rem] border border-line">
                <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                  <ProjectCover project={p} index={index} />
                </div>
                <span className="absolute right-4 top-4 grid size-12 scale-75 place-items-center rounded-full bg-white text-[#0d2052] opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  <ArrowUpRight className="size-5" />
                </span>
              </div>

              <div>
                <div className="flex items-center gap-3 font-mono text-xs text-muted">
                  <span>{p.category}</span>
                  <span aria-hidden>·</span>
                  <span>{p.year}</span>
                </div>
                <h4 className="mt-3 text-2xl font-semibold leading-tight tracking-tight transition-colors group-hover:text-accent sm:text-3xl">
                  {p.title}
                </h4>
                <p className="mt-3 leading-relaxed text-muted">{p.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  View project
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  );
}
