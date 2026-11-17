import { skills } from "@/content/profile";
import { Reveal, SectionHeading } from "../motion";

export function Skills() {
  const marquee = skills.slice(0, 3).flatMap((g) => g.items);

  return (
    <section id="skills" className="bg-band py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading label="Skills" />
      </div>

      {/* infinite marquee */}
      <div className="relative mb-16 overflow-hidden border-y border-line py-5 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap hover:[animation-play-state:paused]">
          {[...marquee, ...marquee].map((s, i) => (
            <span key={i} className="flex items-center gap-10 text-2xl font-semibold tracking-tight sm:text-4xl">
              {s}
              <span className="size-2 rounded-full bg-accent" aria-hidden />
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 0.06}
            className={`group rounded-3xl border border-line bg-surface p-6 transition-colors hover:border-accent/40 sm:p-8 ${
              i === 0 ? "lg:row-span-1" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold tracking-tight">{group.title}</h3>
              <span className="font-mono text-xs text-muted">0{i + 1}</span>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-bg px-3 py-1.5 text-sm transition-colors group-hover:border-accent/30"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
