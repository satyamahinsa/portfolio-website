"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Monitor, Moon, Sun } from "lucide-react";
import { applyMode, readMode, saveMode, type ThemeMode } from "./theme";

const options: { mode: ThemeMode; label: string; Icon: typeof Sun }[] = [
  { mode: "auto", label: "Auto", Icon: Monitor },
  { mode: "light", label: "Day", Icon: Sun },
  { mode: "dark", label: "Night", Icon: Moon },
];

export function ThemeSwitch({ className = "" }: { className?: string }) {
  const [mode, setMode] = useState<ThemeMode | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reading localStorage after mount
    setMode(readMode());
  }, []);

  // Follow OS changes live while in Auto.
  useEffect(() => {
    if (mode !== "auto") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyMode("auto");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [mode]);

  const choose = (m: ThemeMode) => {
    setMode(m);
    saveMode(m);
    applyMode(m);
  };

  return (
    <div
      role="radiogroup"
      aria-label="Color theme"
      className={`relative flex items-center gap-0.5 rounded-full border border-line bg-surface/70 p-1 backdrop-blur ${className}`}
    >
      {options.map(({ mode: m, label, Icon }) => {
        const active = mode === m;
        return (
          <button
            key={m}
            role="radio"
            aria-checked={active}
            aria-label={label}
            title={label}
            onClick={() => choose(m)}
            className={`relative z-10 grid size-7 place-items-center rounded-full transition-colors ${
              active ? "text-accent-fg" : "text-muted hover:text-fg"
            }`}
          >
            {active && (
              <motion.span
                layoutId="theme-pill"
                className="absolute inset-0 -z-10 rounded-full bg-accent"
                transition={{ type: "spring", stiffness: 500, damping: 38 }}
              />
            )}
            <Icon className="size-3.5" strokeWidth={2} />
          </button>
        );
      })}
    </div>
  );
}
