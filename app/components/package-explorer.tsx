"use client";

import { useMemo, useState } from "react";

import type {
  PackageCategory,
  PackageProject,
  PackageStatus,
} from "../data/project";

type StatusFilter = "all" | PackageStatus;
type SortMode = "curated" | "name" | "status";

interface PackageExplorerProps {
  packages: PackageProject[];
  categories: PackageCategory[];
}

const statusLabels: Record<StatusFilter, string> = {
  all: "All",
  active: "Active",
  postponed: "Postponed",
};

const categoryDescriptions: Record<PackageCategory, string> = {
  "AI agents": "Planning, automation, and budget guardrails.",
  CLI: "Small command-line tools for local workflows.",
  Privacy: "Masking, sealing, and sensitive-data utilities.",
  Utilities: "Focused primitives with low dependency weight.",
  Finance: "Currency and rounding helpers.",
};

export function PackageExplorer({
  packages,
  categories,
}: PackageExplorerProps) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [category, setCategory] = useState<"all" | PackageCategory>("all");
  const [sortMode, setSortMode] = useState<SortMode>("curated");

  const statusCounts = useMemo(
    () => ({
      all: packages.length,
      active: packages.filter((project) => project.status === "active").length,
      postponed: packages.filter((project) => project.status === "postponed")
        .length,
    }),
    [packages],
  );

  const filteredPackages = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const results = packages.filter((project) => {
      const matchesStatus = status === "all" || project.status === status;
      const matchesCategory =
        category === "all" || project.category === category;
      const haystack = [
        project.title,
        project.packageName,
        project.description,
        project.category,
        project.installCommand,
        ...project.apiExamples,
        ...project.keywords,
      ]
        .join(" ")
        .toLowerCase();

      return (
        matchesStatus &&
        matchesCategory &&
        (normalizedQuery.length === 0 || haystack.includes(normalizedQuery))
      );
    });

    if (sortMode === "name") {
      return [...results].sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sortMode === "status") {
      return [...results].sort((a, b) => {
        if (a.status === b.status) return a.title.localeCompare(b.title);
        return a.status === "active" ? -1 : 1;
      });
    }

    return results;
  }, [category, packages, query, sortMode, status]);

  const resetFilters = () => {
    setQuery("");
    setStatus("all");
    setCategory("all");
    setSortMode("curated");
  };

  return (
    <section aria-labelledby="catalog-heading" className="space-y-5">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2
            id="catalog-heading"
            className="text-lg font-black tracking-tight text-zinc-100"
          >
            Package catalog
          </h2>
          <p className="mt-1 text-sm text-zinc-500">
            Search by package name, API surface, category, or problem space.
          </p>
        </div>
        <span className="font-mono text-xs text-zinc-600">
          static curated metadata
        </span>
      </div>

      <div className="sticky top-0 z-20 border-y border-white/10 bg-[color:var(--background)]/92 px-4 py-4 shadow-[0_18px_44px_rgba(0,0,0,0.24)] backdrop-blur md:top-4 md:rounded-lg md:border">
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:items-end">
          <label className="block min-w-0">
            <span className="mb-2 block text-xs font-semibold text-zinc-500">
              Search packages
            </span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="mask, llm, otp, cli..."
              className="h-11 w-full min-w-0 rounded-md border border-white/10 bg-zinc-950 px-3 font-mono text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
              type="search"
            />
          </label>

          <label className="block min-w-0">
            <span className="mb-2 block text-xs font-semibold text-zinc-500">
              Category
            </span>
            <select
              value={category}
              onChange={(event) =>
                setCategory(event.target.value as "all" | PackageCategory)
              }
              className="h-11 w-full rounded-md border border-white/10 bg-zinc-950 px-3 text-sm font-medium text-zinc-100 outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20 lg:w-44"
            >
              <option value="all">All categories</option>
              {categories.map((categoryOption) => (
                <option key={categoryOption} value={categoryOption}>
                  {categoryOption}
                </option>
              ))}
            </select>
          </label>

          <label className="block min-w-0">
            <span className="mb-2 block text-xs font-semibold text-zinc-500">
              Sort
            </span>
            <select
              value={sortMode}
              onChange={(event) => setSortMode(event.target.value as SortMode)}
              className="h-11 w-full rounded-md border border-white/10 bg-zinc-950 px-3 text-sm font-medium text-zinc-100 outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20 lg:w-36"
            >
              <option value="curated">Curated</option>
              <option value="name">Name</option>
              <option value="status">Status</option>
            </select>
          </label>
        </div>

        <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div
            className="inline-grid grid-cols-3 rounded-lg border border-white/10 bg-zinc-950 p-1"
            aria-label="Filter by status"
          >
            {(["all", "active", "postponed"] as StatusFilter[]).map(
              (statusOption) => {
                const isSelected = status === statusOption;

                return (
                  <button
                    key={statusOption}
                    type="button"
                    onClick={() => setStatus(statusOption)}
                    className={`rounded-md px-3 py-2 text-xs font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 ${
                      isSelected
                        ? "bg-zinc-100 text-zinc-950"
                        : "text-zinc-500 hover:bg-white/5 hover:text-zinc-200"
                    }`}
                    aria-pressed={isSelected}
                  >
                    {statusLabels[statusOption]}{" "}
                    <span className="font-mono opacity-70">
                      {statusCounts[statusOption]}
                    </span>
                  </button>
                );
              },
            )}
          </div>

          <p className="text-sm text-zinc-500">
            Showing{" "}
            <span className="font-mono font-semibold text-zinc-200">
              {filteredPackages.length}
            </span>{" "}
            of{" "}
            <span className="font-mono font-semibold text-zinc-200">
              {packages.length}
            </span>{" "}
            packages
          </p>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-5">
        {categories.map((categoryName) => (
          <button
            key={categoryName}
            type="button"
            onClick={() =>
              setCategory(category === categoryName ? "all" : categoryName)
            }
            className={`rounded-lg border p-3 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 ${
              category === categoryName
                ? "border-cyan-300/60 bg-cyan-300/10"
                : "border-white/10 bg-zinc-950/55 hover:border-white/20 hover:bg-zinc-900/70"
            }`}
          >
            <span className="block text-sm font-bold text-zinc-100">
              {categoryName}
            </span>
            <span className="mt-1 block text-xs leading-relaxed text-zinc-500">
              {categoryDescriptions[categoryName]}
            </span>
          </button>
        ))}
      </div>

      {filteredPackages.length > 0 ? (
        <div className="grid gap-3">
          {filteredPackages.map((project) => (
            <PackageRow key={project.packageName} project={project} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-white/15 bg-zinc-950/55 px-5 py-10 text-center">
          <h2 className="text-base font-bold text-zinc-100">
            No package found
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-zinc-500">
            Try a broader package name, API example, or category.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-5 rounded-md border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
          >
            Reset catalog
          </button>
        </div>
      )}
    </section>
  );
}

function PackageRow({ project }: { project: PackageProject }) {
  const statusClass =
    project.status === "active"
      ? "border-emerald-300/30 bg-emerald-300/10 text-emerald-200"
      : "border-amber-300/30 bg-amber-300/10 text-amber-200";

  return (
    <article className="group rounded-lg border border-white/10 bg-zinc-950/70 p-4 transition hover:border-cyan-300/35 hover:bg-zinc-950">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(260px,380px)] lg:items-start">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-md border px-2 py-1 text-xs font-bold ${statusClass}`}>
              {project.status === "active" ? "Active" : "Postponed"}
            </span>
            <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-xs font-bold text-zinc-400">
              {project.category}
            </span>
            <span className="font-mono text-xs text-cyan-200">
              {project.packageName}
            </span>
          </div>

          <h2 className="mt-3 text-xl font-black tracking-tight text-zinc-100">
            {project.title}
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-400">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.apiExamples.slice(0, 5).map((example) => (
              <span
                key={example}
                className="max-w-full rounded-md border border-white/10 bg-black/30 px-2 py-1 font-mono text-[11px] leading-5 text-zinc-300"
              >
                {example}
              </span>
            ))}
          </div>
        </div>

        <div className="min-w-0 rounded-lg border border-white/10 bg-black/30 p-3">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-semibold text-zinc-500">
              Install
            </span>
            <span className="text-xs font-semibold text-zinc-600">npm</span>
          </div>
          <code className="mt-2 block break-all font-mono text-sm leading-6 text-zinc-100">
            {project.installCommand}
          </code>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <a
              href={project.npmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-cyan-300/35 bg-cyan-300/10 px-3 py-2 text-center text-sm font-bold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
            >
              npm
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-sm font-bold text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
