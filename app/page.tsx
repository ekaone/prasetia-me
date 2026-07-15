import Link from "next/link";

import { PackageExplorer } from "./components/package-explorer";
import { categories, packages } from "./data/project";
import { links } from "./data/link";

const featuredPackages = packages.filter((project) => project.featured).slice(0, 4);
const activeCount = packages.filter((project) => project.status === "active").length;
const categoryCount = categories.length;

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-white/10 bg-[linear-gradient(180deg,rgba(9,9,11,0.96),rgba(9,9,11,0.72))]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 md:py-14 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-md border border-emerald-300/30 bg-emerald-300/10 px-2.5 py-1 text-xs font-bold text-emerald-200">
                Available for work
              </span>
              <span className="font-mono text-xs text-zinc-500">
                npm catalog / zero-dependency bias / OSS devtools
              </span>
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl">
              Eka Prasetia
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
              I build small, sharp npm packages for agents, privacy, CLIs, and
              TypeScript utility work. This catalog is tuned for scanning,
              filtering, and grabbing the package you came for.
            </p>

            <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3">
              <Metric label="Packages" value={packages.length.toString()} />
              <Metric label="Active" value={activeCount.toString()} />
              <Metric label="Categories" value={categoryCount.toString()} />
            </div>
          </div>

          <aside className="self-end rounded-lg border border-white/10 bg-zinc-950/75 p-4">
            <h2 className="text-sm font-bold text-zinc-100">Find me</h2>
            <div className="mt-4 grid grid-cols-5 gap-2">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-zinc-300 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-zinc-500">
              Most packages here are deliberately narrow: one job, typed APIs,
              easy installs, and no decorative dependency pile.
            </p>
          </aside>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section aria-labelledby="featured-heading" className="mb-8">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <h2
                id="featured-heading"
                className="text-lg font-black tracking-tight text-zinc-100"
              >
                Featured packages
              </h2>
              <p className="mt-1 text-sm text-zinc-500">
                The packages I would show first in a quick OSS tour.
              </p>
            </div>
            <span className="hidden font-mono text-xs text-zinc-600 sm:block">
              curated:{featuredPackages.length}
            </span>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {featuredPackages.map((project) => (
              <a
                key={project.packageName}
                href={project.npmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-white/10 bg-zinc-950/65 p-4 transition hover:border-cyan-300/35 hover:bg-zinc-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-xs font-bold text-zinc-400">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-cyan-200">npm</span>
                </div>
                <h3 className="mt-4 text-base font-black text-zinc-100">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-500">
                  {project.description}
                </p>
                <code className="mt-4 block truncate font-mono text-xs text-zinc-300">
                  {project.installCommand}
                </code>
              </a>
            ))}
          </div>
        </section>

        <PackageExplorer packages={packages} categories={categories} />
      </div>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-zinc-950/65 p-4">
      <div className="font-mono text-2xl font-black text-zinc-100">{value}</div>
      <div className="mt-1 text-xs font-semibold text-zinc-500">{label}</div>
    </div>
  );
}
