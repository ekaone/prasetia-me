import Link from "next/link";

import { projects } from "./data/project";
import { links } from "./data/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      <div className="max-w-xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs text-emerald-500">Available for work</span>
          </div>
          <h1 className="text-2xl text-gray-300 font-semibold tracking-tight mb-2">
            Eka Prasetia
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            OSS Builder. Building tools.
            <br />
            Focused on Security, Privacy, LLMs, Primitive, Lightweight, and
            zero-dependency TypeScript libraries.
          </p>
        </div>

        {/* Projects */}
        <div className="mb-16">
          <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Shipping
          </h2>
          <ul className="space-y-4">
            {projects.map((project) => (
              <li key={project.title} className="group flex items-start gap-3">
                <span
                  className={`project-status-dot ${
                    project.active ? "bg-green-400" : "bg-amber-300"
                  }`}
                />
                <div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:text-green-400 transition-colors inline-flex items-center gap-1"
                  >
                    {project.title}
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-gray-800 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Links
          </h2>
          <div className="flex gap-6">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
