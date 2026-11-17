"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Briefcase, Building, Laptop, MapPin, Plus, Repeat } from "lucide-react";

const modeIcon = { "On-site": Building, Hybrid: Repeat, Remote: Laptop } as const;
import { experiences, type Experience as Exp } from "@/content/profile";
import { Reveal, SectionHeading, ease } from "../motion";

const filters: { key: "all" | Exp["type"]; label: string }[] = [
  { key: "all", label: "All" },
  { key: "work", label: "Work" },
  { key: "research", label: "Research" },
  { key: "organization", label: "Organization" },
];

export function Experience() {
  const [filter, setFilter] = useState<(typeof filters)[number]["key"]>("all");
  const [openIdx, setOpenIdx] = useState<string | null>(experiences[0]?.company + experiences[0]?.role);

  const list = experiences.filter((e) => filter === "all" || e.type === filter);

  return (
    <section id="experience" className="px-3 py-12 sm:px-6">
      {/* Dark navy panel, inspired by alternating light/dark sections */}
      <div className="mx-auto max-w-[90rem] rounded-[2.5rem] bg-navy-panel px-4 py-20 text-white sm:px-10 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            label="Experience"
            dark
            aside={<span>{experiences.length} roles since 2023</span>}
          />

          <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter experience">
            {filters.map((f) => (
              <button
                key={f.key}
                role="tab"
                aria-selected={filter === f.key}
                onClick={() => setFilter(f.key)}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  filter === f.key ? "text-[#0d2052]" : "text-white/60 hover:text-white"
                }`}
              >
                {filter === f.key && (
                  <motion.span
                    layoutId="exp-filter"
                    className="absolute inset-0 -z-0 rounded-full bg-white"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative">{f.label}</span>
              </button>
            ))}
          </div>

          <motion.ul layout className="border-t border-white/10">
            <AnimatePresence initial={false} mode="popLayout">
              {list.map((e) => {
                const id = e.company + e.role;
                const open = openIdx === id;
                return (
                  <motion.li
                    key={id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease }}
                    className="border-b border-white/10"
                  >
                    <Reveal y={16}>
                      <button
                        onClick={() => setOpenIdx(open ? null : id)}
                        aria-expanded={open}
                        className="group grid w-full grid-cols-[1fr_auto] items-center gap-4 py-6 text-left sm:grid-cols-[1.3fr_1fr_auto_auto] sm:gap-8"
                      >
                        <div>
                          <p className="text-lg font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-xl">
                            {e.company}
                          </p>
                          <p className="mt-1 text-sm text-white/55 sm:hidden">{e.role}</p>
                          <p className="mt-1 text-xs text-white/40 sm:hidden">
                            {e.employment} · {e.workMode}
                          </p>
                        </div>
                        <div className="hidden sm:block">
                          <p className="text-white/70">{e.role}</p>
                          <p className="mt-1 text-xs text-white/40">
                            {e.employment} · {e.workMode}
                          </p>
                        </div>
                        <p className="hidden font-mono text-sm text-white/50 sm:block">{e.period}</p>
                        <span
                          className={`grid size-9 place-items-center rounded-full border border-white/15 transition-all duration-300 ${
                            open ? "rotate-45 bg-white text-[#0d2052]" : "group-hover:border-white/40"
                          }`}
                        >
                          <Plus className="size-4" />
                        </span>
                      </button>
                    </Reveal>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 sm:pl-0">
                            <p className="mb-4 font-mono text-xs text-white/50 sm:hidden">{e.period}</p>
                            <ul className="mb-5 flex flex-wrap gap-2 text-xs text-white/75">
                              {[
                                { Icon: MapPin, text: e.location },
                                { Icon: Briefcase, text: e.employment },
                                { Icon: modeIcon[e.workMode], text: e.workMode },
                              ].map(({ Icon, text }) => (
                                <li
                                  key={text}
                                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5"
                                >
                                  <Icon className="size-3.5 text-[#8fb0ff]" />
                                  {text}
                                </li>
                              ))}
                            </ul>
                            <ul className="max-w-3xl space-y-3">
                              {e.points.map((p) => (
                                <li key={p} className="flex gap-3 leading-relaxed text-white/75">
                                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#8fb0ff]" />
                                  {p}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              })}
            </AnimatePresence>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
