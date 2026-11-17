"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/profile";
import { ProjectCover } from "../ProjectCover";
import { SectionHeading, ease } from "../motion";

export function Projects() {
  return (
    <section id="projects" className="bg-glow-top px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading label="Projects" aside={<span>Selected work</span>} />
        <div className="grid gap-x-6 gap-y-14 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.1, ease }}
              className={i % 2 === 1 ? "md:mt-20" : ""}
            >
              <Link href={`/projects/${p.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
                  <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                    <ProjectCover project={p} index={i} />
                  </div>
                  <span className="absolute right-4 top-4 grid size-12 scale-75 place-items-center rounded-full bg-white text-[#0d2052] opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                    <ArrowUpRight className="size-5" />
                  </span>
                  {p.placeholder && (
                    <span className="absolute left-4 top-4 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
                      Placeholder
                    </span>
                  )}
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-muted">{p.summary}</p>
                  </div>
                  <span className="shrink-0 font-mono text-sm text-muted">{p.year}</span>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
