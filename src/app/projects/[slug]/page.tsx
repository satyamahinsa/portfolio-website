import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/content/profile";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/sections/Contact";
import { ProjectCover } from "@/components/ProjectCover";
import { GithubIcon } from "@/components/icons";
import { Reveal, SplitText } from "@/components/motion";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  return (
    <>
      <Navbar onHome={false} />
      <main className="px-4 pt-32 pb-24 sm:px-6">
        <Suspense fallback={<div className="min-h-dvh" />}>
          <ProjectDetail params={params} />
        </Suspense>
      </main>
      <Contact />
    </>
  );
}

async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  const meta = [
    { label: "Category", value: project.category },
    { label: "Year", value: project.year },
    { label: "Role", value: project.role },
  ];

  return (
    <article className="mx-auto max-w-6xl">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
      >
        <ArrowLeft className="size-4" /> All projects
      </Link>

      {project.placeholder && (
        <p className="mt-6 inline-block rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
          Placeholder content — edit src/content/profile.ts
        </p>
      )}

      <h1 className="mt-6 text-[clamp(2.75rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
        <SplitText text={project.title} />
      </h1>
      <Reveal delay={0.2}>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">
          {project.summary}
        </p>
      </Reveal>

      <Reveal
        delay={0.3}
        className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4"
      >
        {meta.map((m) => (
          <div key={m.label} className="bg-bg p-5">
            <p className="text-xs uppercase tracking-[0.15em] text-muted">
              {m.label}
            </p>
            <p className="mt-2 font-medium">{m.value}</p>
          </div>
        ))}
        <div className="flex items-center gap-2 bg-bg p-5">
          {project.links.live ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-fg"
            >
              Live <ArrowUpRight className="size-4" />
            </a>
          ) : null}
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-medium"
            >
              <GithubIcon /> Code
            </a>
          ) : null}
          {!project.links.live && !project.links.github && (
            <span className="text-sm text-muted">Links coming soon</span>
          )}
        </div>
      </Reveal>

      <Reveal
        delay={0.35}
        className="mt-12 aspect-[16/9] overflow-hidden rounded-[2rem]"
      >
        <ProjectCover project={project} index={index} large />
      </Reveal>

      <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Overview
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-2xl leading-snug tracking-tight">
            {project.overview}
          </p>
        </Reveal>

        <Reveal>
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            The problem
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-lg leading-relaxed text-muted">
            {project.problem}
          </p>
        </Reveal>

        <Reveal>
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Approach
          </h2>
        </Reveal>
        <div className="space-y-4">
          {project.approach.map((step, i) => (
            <Reveal key={step} delay={i * 0.06}>
              <div className="flex gap-5 rounded-2xl border border-line bg-surface p-5">
                <span className="font-mono text-sm text-accent">0{i + 1}</span>
                <p className="leading-relaxed">{step}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Results
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {project.results.map((r, i) => (
            <Reveal key={r} delay={i * 0.06}>
              <div className="h-full rounded-2xl bg-navy p-6 text-white">
                <p className="leading-relaxed">{r}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Tech stack
          </h2>
        </Reveal>
        <Reveal>
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-line px-4 py-2 text-sm"
              >
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Link
        href={`/projects/${next.slug}`}
        className="group mt-28 flex items-end justify-between gap-6 border-t border-line pt-10"
      >
        <div>
          <p className="text-sm text-muted">Next project</p>
          <p className="mt-2 text-4xl font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-6xl">
            {next.title}
          </p>
        </div>
        <span className="grid size-14 shrink-0 place-items-center rounded-full border border-line transition-all group-hover:bg-accent group-hover:text-accent-fg">
          <ArrowUpRight className="size-5 transition-transform group-hover:rotate-45" />
        </span>
      </Link>
    </article>
  );
}
