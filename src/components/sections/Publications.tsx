import { ArrowUpRight } from "lucide-react";
import { publications } from "@/content/profile";
import { Reveal, SectionHeading } from "../motion";

export function Publications() {
  const ipCount = publications.filter((p) => p.venue.includes("Intellectual Property")).length;
  const paperCount = publications.length - ipCount;
  const countLabel = [
    `${paperCount} ${paperCount === 1 ? "paper" : "papers"}`,
    ipCount > 0 ? `${ipCount} intellectual property` : "",
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <section id="publications" className="bg-band px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Publications"
          aside={<span>{countLabel}</span>}
        />
        <div className="border-t border-line">
          {publications.map((p, i) => (
            <Reveal key={p.url} delay={i * 0.06}>
              <div className="border-b border-line">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid gap-3 py-8 sm:grid-cols-[3rem_1fr_auto] sm:gap-8"
                >
                  <span className="font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-lg font-medium leading-snug tracking-tight transition-colors group-hover:text-accent sm:text-xl">
                      {p.title}
                    </h3>
                    <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-muted">
                      <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
                        {p.venue}
                      </span>
                      <span className="font-mono">{p.date}</span>
                    </p>
                  </div>
                  <span className="hidden size-11 place-items-center self-center rounded-full border border-line transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-fg sm:grid">
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
