import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/content/profile";
import { GithubIcon, LinkedinIcon, ScholarIcon } from "../icons";
import { Reveal, SplitText } from "../motion";

export function Contact() {
  const socials = [
    { href: profile.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
    { href: profile.socials.github, label: "GitHub", Icon: GithubIcon },
    { href: profile.socials.scholar, label: "Google Scholar", Icon: ScholarIcon },
  ].filter((s) => s.href);

  return (
    <footer id="contact" className="px-3 pb-3 sm:px-6 sm:pb-6">
      <div className="mx-auto max-w-[90rem] overflow-hidden rounded-[2.5rem] bg-ink-panel px-6 pt-20 pb-8 text-white sm:px-12 sm:pt-28">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-sm text-white/50">Contact</p>
          <h2 className="mt-6 text-[clamp(2.75rem,9vw,8rem)] font-semibold leading-[0.9] tracking-[-0.04em]">
            <SplitText text="Let's work" inView />
            <br />
            <span className="font-serif font-normal italic text-[#8fb0ff]">
              <SplitText text="together." inView delay={0.15} />
            </span>
          </h2>

          <Reveal>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/65 sm:text-xl">
              Have a role, project or research idea in mind? My inbox is always open.
            </p>
          </Reveal>
          <Reveal className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-3 text-xl font-medium sm:text-3xl"
            >
              <span className="grid size-12 place-items-center rounded-full bg-white text-[#0a0a0b] transition-transform group-hover:scale-110 sm:size-14">
                <Mail className="size-5" />
              </span>
              <span className="border-b border-white/20 pb-1 transition-colors group-hover:border-white">
                {profile.email}
              </span>
            </a>
            <div className="flex flex-wrap gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm transition-colors hover:bg-white hover:text-[#0a0a0b]"
                >
                  <Icon /> {label} <ArrowUpRight className="size-3.5" />
                </a>
              ))}
            </div>
          </Reveal>

          <div className="mt-24 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:justify-between">
            <p>
              © 2026 {profile.fullName}
            </p>
            <a href="#top" className="hover:text-white">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
