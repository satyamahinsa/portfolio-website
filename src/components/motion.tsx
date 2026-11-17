"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useScroll,
  useTransform,
  type HTMLMotionProps,
} from "motion/react";

export const ease = [0.22, 1, 0.36, 1] as const;

/** Fades and lifts children into view once. */
export function Reveal({
  delay = 0,
  y = 28,
  className,
  children,
  ...rest
}: { delay?: number; y?: number } & HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Text that slides up word by word from a mask. */
export function SplitText({
  text,
  className = "",
  delay = 0,
  stagger = 0.06,
  inView = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  inView?: boolean;
}) {
  const words = text.split(" ");
  // Each word is masked so it can slide up from below. The mask only clips the
  // bottom edge; it is widened on the sides and top so italic overhangs
  // (e.g. the serif "A" and "r") and descenders are never cut off.
  // The trigger lives on the outer (unclipped) span; words inherit the variant.
  const trigger = inView
    ? { whileInView: "shown", viewport: { once: true, margin: "-40px" } }
    : { animate: "shown" };
  return (
    <motion.span className={className} aria-label={text} initial="hidden" {...trigger}>
      {words.map((w, i) => (
        <span
          key={i}
          aria-hidden
          className="-mb-[0.14em] inline-block pb-[0.22em] align-bottom [clip-path:inset(-0.5em_-0.35em_0_-0.35em)]"
        >
          <motion.span
            className="inline-block"
            variants={{ hidden: { y: "110%" }, shown: { y: "0%" } }}
            transition={{ duration: 0.9, delay: delay + i * stagger, ease }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/** Number that counts up when scrolled into view. */
export function Counter({
  value,
  decimals = 0,
  suffix = "",
}: {
  value: number;
  decimals?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState((0).toFixed(decimals));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease,
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/** Section header: the label with a huge ghost word that drifts on scroll. */
export function SectionHeading({
  label,
  aside,
  dark = false,
}: {
  label: string;
  aside?: React.ReactNode;
  dark?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["6%", "-12%"]);

  return (
    <div ref={ref} className="relative mb-12 sm:mb-16">
      <motion.span
        aria-hidden
        style={{ x }}
        className={`pointer-events-none absolute -top-[0.45em] left-0 select-none whitespace-nowrap text-[clamp(4.5rem,16vw,13rem)] font-bold uppercase leading-none tracking-tighter ${
          dark ? "text-white/[0.05]" : "text-ghost"
        }`}
      >
        {label}
      </motion.span>
      <div className="relative flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold uppercase leading-none tracking-tight">
          <SplitText text={label} inView />
        </h2>
        {aside && (
          <div className={`flex items-center gap-4 text-sm ${dark ? "text-white/60" : "text-muted"}`}>
            {aside}
          </div>
        )}
      </div>
    </div>
  );
}
