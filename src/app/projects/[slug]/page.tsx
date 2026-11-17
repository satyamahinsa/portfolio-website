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

  type LinkItem = { href: string; label: string; primary: boolean; icon: React.ReactNode };
  const links: LinkItem[] = [];
  if (project.links.live)
    links.push({
      href: project.links.live,
      label: "View dashboard",
      primary: true,
      icon: <ArrowUpRight className="size-4" />,
    });
  if (project.links.github)
    links.push({
      href: project.links.github,
      label: "Code",
      primary: !project.links.live,
      icon: <GithubIcon />,
    });
  if (project.links.paper)
    links.push({
      href: project.links.paper,
      label: "Paper",
      primary: false,
      icon: <ArrowUpRight className="size-4" />,
    });

  // Problem / approach / results cards; empty sections are skipped.
  type Card = { title: string; body: React.ReactNode };
  const cards: Card[] = [];
  if (project.problem) cards.push({ title: "The problem", body: <p>{project.problem}</p> });
  cards.push(
    {
      title: "Approach",
      body: (
        <ol className="space-y-3">
          {project.approach.map((step, i) => (
            <li key={step} className="flex gap-4 rounded-2xl border border-line bg-bg p-4">
              <span className="font-mono text-sm leading-6 text-accent">0{i + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      ),
    });
  if (project.results.length > 0)
    cards.push({
      title: "Results",
      body: (
        <ol className="space-y-3">
          {project.results.map((r, i) => (
            <li key={r} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
              <span className="font-mono text-sm leading-6 text-[#8fb0ff]">0{i + 1}</span>
              <span>{r}</span>
            </li>
          ))}
        </ol>
      ),
    });

  const cols = cards.length === 3 ? "lg:grid-cols-3" : cards.length === 2 ? "md:grid-cols-2" : "";

  return (
    <article className="mx-auto max-w-6xl">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
      >
        <ArrowLeft className="size-4" /> All projects
      </Link>

      {/* Split hero: title, summary and links beside the image */}
      <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <Reveal>
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted">
              <span className="rounded-full bg-accent-soft px-2.5 py-1 text-accent">{project.group}</span>
              <span>{project.category}</span>
              <span aria-hidden>·</span>
              <span>{project.year}</span>
            </p>
          </Reveal>
          <h1 className="mt-5 text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
            <SplitText text={project.title} />
          </h1>
          <Reveal delay={0.2}>
            <p className="mt-5 text-lg leading-relaxed text-muted">{project.summary}</p>
          </Reveal>
          <Reveal delay={0.25} className="mt-6 space-y-3">
            {[
              { label: "Role", items: project.role.split(" · ") },
              { label: "Tech stack", items: project.tags },
            ].map((row) => (
              <div key={row.label} className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4">
                <h2 className="shrink-0 whitespace-nowrap pt-2 text-xs font-medium uppercase tracking-[0.2em] text-muted sm:w-28">
                  {row.label}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {row.items.map((t) => (
                    <span key={t} className="rounded-full border border-line px-3.5 py-1.5 text-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.3} className="mt-8 flex flex-wrap items-center gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-transform hover:scale-[1.03] ${
                  l.primary ? "bg-accent text-accent-fg" : "border border-line hover:bg-surface-2"
                }`}
              >
                {l.label === "Code" && l.icon}
                {l.label}
                {l.label !== "Code" && l.icon}
              </a>
            ))}
            {links.length === 0 && <span className="text-sm text-muted">Links coming soon</span>}
          </Reveal>
        </div>

        <Reveal delay={0.25} className="aspect-[4/3] overflow-hidden rounded-[2rem] border border-line">
          <ProjectCover project={project} index={index} large />
        </Reveal>
      </div>

      <Reveal className="mt-20 border-t border-line pt-10">
        <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted">Overview</h2>
        <p className="mt-4 max-w-4xl text-2xl leading-snug tracking-tight">{project.overview}</p>
      </Reveal>

      <div className={`mt-10 grid gap-5 ${cols}`}>
        {cards.map((c, i) => (
          <Reveal
            key={c.title}
            delay={i * 0.08}
            className={`h-full rounded-[1.5rem] p-6 sm:p-7 ${
              c.title === "Results" ? "bg-navy text-white" : "border border-line bg-surface"
            }`}
          >
            <h2
              className={`text-sm font-medium uppercase tracking-[0.2em] ${
                c.title === "Results" ? "text-white/60" : "text-muted"
              }`}
            >
              {c.title}
            </h2>
            <div className="mt-5 leading-relaxed">{c.body}</div>
          </Reveal>
        ))}
      </div>

      <Link
        href={`/projects/${next.slug}`}
        className="group mt-24 flex items-end justify-between gap-6 border-t border-line pt-10"
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
