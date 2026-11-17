"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navItems, profile } from "@/content/profile";
import { ThemeSwitch } from "./ThemeSwitch";

export function Navbar({ onHome = true }: { onHome?: boolean }) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 200 && !open);
    setScrolled(y > 20);
  });

  useEffect(() => {
    if (!onHome) return;
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [onHome]);

  const href = (id: string) => (onHome ? `#${id}` : `/#${id}`);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-120%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border px-3 py-2 transition-all duration-300 sm:px-4 ${
            scrolled || !onHome
              ? "border-line bg-bg/75 shadow-[0_8px_30px_rgb(0_0_0/0.06)] backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <Link href="/" className="group flex items-center gap-2 pl-1 text-sm font-semibold tracking-tight">
            <span className="grid size-8 place-items-center rounded-full bg-accent font-serif text-base italic text-accent-fg">
              {profile.firstName[0]}
              {profile.lastName[0]}
            </span>
            <span className="hidden sm:inline">{profile.displayName}</span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={href(item.id)}
                  className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${
                    active === item.id ? "text-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-surface-2"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeSwitch />
            <a
              href={href("contact")}
              className="hidden items-center gap-1 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition-transform hover:scale-[1.03] md:inline-flex"
            >
              Let&apos;s talk <ArrowUpRight className="size-4" />
            </a>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="grid size-9 place-items-center rounded-full border border-line lg:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg/95 px-6 pt-28 backdrop-blur-xl lg:hidden"
          >
            <ul className="space-y-2">
              {[...navItems, { id: "contact", label: "Contact" }].map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={href(item.id)}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between border-b border-line py-3 text-3xl font-semibold tracking-tight"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
