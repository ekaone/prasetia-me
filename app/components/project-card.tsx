type Badge = {
  imageUrl: string;
  linkUrl: string;
  alt: string;
};

type Project = {
  title: string;
  description: string;
  active: boolean;
  stack: string[];
  badges?: Badge[];
  url: string;
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(0,0,0,0.45)]">
      <div
        className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full blur-2xl ${
          project.active ? "bg-emerald-500/20" : "bg-amber-500/20"
        }`}
      />
      <div className="relative z-10">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${
              project.active
                ? "bg-emerald-500/15 text-emerald-300"
                : "bg-amber-500/15 text-amber-300"
            }`}
          >
            {project.active ? "Active" : "Postpone"}
          </span>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold text-zinc-400 transition group-hover:text-emerald-400"
          >
            Open project {"->"}
          </a>
        </div>

        <h3 className="text-lg font-extrabold leading-tight text-zinc-100">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-zinc-700 bg-zinc-900 px-2 py-1 text-[11px] font-semibold text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.badges && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.badges.map((badge, index) => (
              <a
                key={index}
                href={badge.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-sm bg-zinc-900/80 ring-1 ring-zinc-700"
              >
                <img
                  src={badge.imageUrl}
                  alt={badge.alt}
                  className="h-5"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
