"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight, FileText, GraduationCap, Mail, ScrollText } from "lucide-react";
import { profile } from "@/content/profile";
import { LinkedinIcon, GithubIcon, ScholarIcon } from "../icons";
import { SplitText, ease } from "../motion";

export function Hero() {
  const { scrollY } = useScroll();
  const headY = useTransform(scrollY, [0, 700], [0, -60]);
  const photoY = useTransform(scrollY, [0, 700], [0, 50]);

  const socials = [
    { href: profile.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
    { href: profile.socials.github, label: "GitHub", Icon: GithubIcon },
    { href: profile.socials.scholar, label: "Scholar", Icon: ScholarIcon },
  ].filter((s) => s.href);

  return (
    <section id="top" className="bg-hero relative overflow-hidden px-4 pt-28 pb-16 sm:px-6 sm:pt-32">
      {/* navy glow comes from .bg-hero; dotted grid adds texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(var(--line)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />

      <div className="relative mx-auto max-w-7xl text-center">
        <motion.h1 style={{ y: headY }} className="relative z-10 mt-6 sm:mt-10">
          <span className="block text-[clamp(3rem,10vw,8.5rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
            <SplitText text={`Hi, I'm ${profile.nickname}`} delay={0.1} />
          </span>
          <span className="block font-serif text-[clamp(3.25rem,11vw,9.5rem)] leading-[0.9] tracking-[-0.02em] text-accent italic">
            <SplitText text={profile.role} delay={0.3} />
          </span>
        </motion.h1>
      </div>

      <div className="relative mx-auto -mt-12 grid max-w-7xl items-end gap-10 sm:-mt-20 lg:-mt-28 lg:grid-cols-[1fr_auto_1fr]">
        {/* left: intro */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease }}
          className="order-2 text-center lg:order-1 lg:pb-16 lg:text-left"
        >
          <p className="mx-auto max-w-sm text-base leading-relaxed text-muted lg:mx-0">{profile.tagline}</p>
          <p className="mt-4 font-mono text-xs tracking-wide text-muted/80">{profile.focus}</p>
        </motion.div>

        {/* center: portrait */}
        <motion.div
          style={{ y: photoY }}
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.35, ease }}
          className="relative order-1 mx-auto w-[min(88vw,29rem)] lg:order-2"
        >
          <div className="group relative aspect-[1051/1365] [mask-image:linear-gradient(to_bottom,black_82%,transparent)]">
            {profile.photo ? (
              <Image
                src={profile.photo}
                alt={profile.fullName}
                fill
                priority
                quality={95}
                sizes="(min-width: 1024px) 29rem, 88vw"
                className="object-contain object-bottom grayscale transition duration-700 group-hover:grayscale-0"
              />
            ) : (
              <div className="grid h-full place-items-center rounded-t-full bg-navy font-serif text-[8rem] text-white/90 italic">
                {profile.firstName[0]}
                {profile.lastName[0]}
              </div>
            )}
          </div>

          {/* floating badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { delay: 1.1 },
              scale: { delay: 1.1, ease },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
            }}
            className="absolute top-[38%] -left-6 flex items-center gap-2 rounded-2xl border border-line bg-surface/90 px-3 py-2 text-left shadow-lg backdrop-blur sm:-left-16"
          >
            <span className="grid size-8 place-items-center rounded-full bg-accent-soft text-accent">
              <GraduationCap className="size-4" />
            </span>
            <span>
              <span className="block text-sm font-semibold">GPA 3.99</span>
              <span className="block text-[11px] text-muted">Summa Cum Laude</span>
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, 8, 0] }}
            transition={{
              opacity: { delay: 1.25 },
              scale: { delay: 1.25, ease },
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.6 },
            }}
            className="absolute top-[60%] -right-6 flex items-center gap-2 rounded-2xl border border-line bg-surface/90 px-3 py-2 text-left shadow-lg backdrop-blur sm:-right-16"
          >
            <span className="grid size-8 place-items-center rounded-full bg-accent-soft text-accent">
              <ScrollText className="size-4" />
            </span>
            <span>
              <span className="block text-sm font-semibold">4 Publications</span>
              <span className="block text-[11px] text-muted">IEEE · JITE · Intellectual Property</span>
            </span>
          </motion.div>
        </motion.div>

        {/* right: actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease }}
          className="order-3 flex flex-col items-center gap-4 lg:items-end lg:pb-16"
        >
          {profile.available && (
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-muted">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {profile.availabilityText}
            </span>
          )}
          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-end">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-fg transition-transform hover:scale-[1.03]"
            >
              <Mail className="size-4" /> Get in touch
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            {profile.cvUrl && (
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium transition-colors hover:bg-surface-2"
              >
                <FileText className="size-4" /> Download CV
              </a>
            )}
          </div>
          <div className="flex items-center gap-2">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-fg hover:text-fg"
              >
                <Icon />
              </a>
            ))}
            <span className="ml-2 font-mono text-xs text-muted">Based in {profile.location}</span>
          </div>
        </motion.div>
      </div>

      {/* fade the hero into the next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-bg"
      />

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="relative mx-auto mt-8 hidden w-fit items-center gap-2 text-xs tracking-[0.2em] text-muted uppercase lg:flex"
      >
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown className="size-4" />
        </motion.span>
        Scroll
      </motion.a>
    </section>
  );
}
