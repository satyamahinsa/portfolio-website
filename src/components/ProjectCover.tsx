import type { Project } from "@/content/profile";

// Generated placeholder artwork until real project images are added.
const patterns = [
  "[background-image:radial-gradient(rgb(255_255_255/0.25)_1px,transparent_1px)] [background-size:16px_16px]",
  "[background-image:linear-gradient(rgb(255_255_255/0.12)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.12)_1px,transparent_1px)] [background-size:28px_28px]",
  "[background-image:repeating-linear-gradient(45deg,rgb(255_255_255/0.1)_0_1px,transparent_1px_14px)]",
  "[background-image:radial-gradient(circle_at_30%_30%,rgb(143_176_255/0.5),transparent_55%)]",
];

export function ProjectCover({
  project,
  index,
  large = false,
}: {
  project: Project;
  index: number;
  large?: boolean;
}) {
  const dark = index % 2 === 1;
  return (
    <div
      className={`relative h-full w-full overflow-hidden ${
        dark ? "bg-[#0a0a0b] dark:bg-[#1b1f2a]" : "bg-navy dark:bg-[#132a63]"
      }`}
    >
      <div aria-hidden className={`absolute inset-0 ${patterns[index % patterns.length]}`} />
      <div className="absolute inset-0 grid place-items-center p-6">
        <div
          className={`w-[72%] rounded-xl border border-white/15 bg-white/[0.06] p-3 shadow-2xl backdrop-blur ${
            large ? "max-w-xl" : ""
          }`}
        >
          <div className="mb-3 flex gap-1.5">
            <span className="size-2 rounded-full bg-white/30" />
            <span className="size-2 rounded-full bg-white/30" />
            <span className="size-2 rounded-full bg-white/30" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2 h-14 rounded-md bg-white/15" />
            <div className="h-14 rounded-md bg-[#8fb0ff]/40" />
            <div className="h-8 rounded-md bg-white/10" />
            <div className="h-8 rounded-md bg-white/10" />
            <div className="h-8 rounded-md bg-white/10" />
          </div>
        </div>
      </div>
      <span className="absolute bottom-4 left-5 font-serif text-xl italic text-white/80">
        {project.category}
      </span>
    </div>
  );
}
