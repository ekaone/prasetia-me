"use client";

import { useState } from "react";
import Link from "next/link";

import { projects } from "./data/project";
import { links } from "./data/link";
import { Filter } from "./components/icons/filter";
import { ProjectCard } from "./components/project-card";

export default function Home() {
  const [filter, setFilter] = useState<"all" | "active" | "postpone">("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "active") return project.active;
    if (filter === "postpone") return !project.active;
    return true;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-12 md:mb-14">
          <span className="inline-flex items-center rounded-full border border-emerald-600/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-emerald-400">
            Available for work
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-zinc-100 md:text-5xl">
            Eka Prasetia
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
            OSS Builder. I build DevTools, stay lightweight, and zero
            dependency.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 bg-zinc-950/70 p-4 shadow-[0_14px_50px_rgba(0,0,0,0.35)] backdrop-blur md:flex-row md:items-center md:justify-between">
          <h2 className="text-lg uppercase tracking-[0.3em] text-zinc-500">
            Shipping
          </h2>
          <div className="flex items-center gap-2">
            <Filter className="h-3.5 w-3.5 text-zinc-500" />
            <select
              value={filter}
              onChange={(e) =>
                setFilter(e.target.value as "all" | "active" | "postpone")
              }
              className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-200 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            >
              <option value="all">All ({projects.length})</option>
              <option value="active">
                Active ({projects.filter((p) => p.active).length})
              </option>
              <option value="postpone">
                Postpone ({projects.filter((p) => !p.active).length})
              </option>
            </select>
          </div>
        </div>

        <ul className="mb-16 grid grid-cols-1 gap-5 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <li key={project.title} className="h-full">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>

        <div className="bg-zinc-950/70 p-4 shadow-[0_14px_45px_rgba(0,0,0,0.35)] backdrop-blur">
          <h2 className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
            Links
          </h2>
          <div className="flex gap-3">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-zinc-700 bg-zinc-900 p-2.5 text-zinc-300 transition hover:-translate-y-0.5 hover:border-emerald-500 hover:text-emerald-400"
                aria-label={link.label}
              >
                <link.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
