import { about } from "@/content/profile";
import { Counter, Reveal, SectionHeading } from "../motion";

export function About() {
  return (
    <section id="about" className="bg-glow-right px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading label="About" />
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p
                  className={
                    i === 0
                      ? "text-2xl font-medium leading-snug tracking-tight sm:text-3xl"
                      : "text-lg leading-relaxed text-muted"
                  }
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-3xl border border-line bg-line">
            {about.stats.map((s, i) => (
              <Reveal key={s.label} delay={0.1 + i * 0.08} y={16} className="bg-bg p-6 sm:p-8">
                <p className="text-4xl font-semibold tracking-tight text-accent sm:text-5xl">
                  <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
