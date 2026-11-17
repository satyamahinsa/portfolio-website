import { Award, GraduationCap } from "lucide-react";
import { achievements, education } from "@/content/profile";
import { Reveal, SectionHeading } from "../motion";

export function Education() {
  return (
    <section id="education" className="bg-glow-left px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading label="Education" />

        <div className="divide-y divide-line border-y border-line">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 0.08}>
              <div className="grid gap-2 py-8 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8">
                <span className="grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent">
                  <GraduationCap className="size-5" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{e.school}</h3>
                  <p className="mt-1 text-muted">
                    {e.degree} <span className="mx-1.5 opacity-40">|</span> {e.detail}
                  </p>
                </div>
                <span className="font-mono text-sm text-muted">{e.period}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Achievements
          </h3>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {achievements.map((a, i) => (
            <Reveal
              key={a.title}
              delay={i * 0.08}
              className="flex flex-col justify-between gap-6 rounded-3xl border border-line bg-surface p-6"
            >
              <Award className="size-5 text-accent" />
              <div>
                <p className="font-medium leading-snug">{a.title}</p>
                <p className="mt-2 font-mono text-xs text-muted">{a.date}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
