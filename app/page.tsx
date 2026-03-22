import Link from "next/link";
import { XformerlyTwitter } from "./components/icons/x";
import { GitHub } from "./components/icons/github";
import { Gmail } from "./components/icons/mail";

export default function Home() {
  const projects = [
    {
      title: "DevFlow",
      description:
        "CLI tool for automating development workflows and CI/CD pipelines",
      active: true,
      stack: ["TypeScript", "Node.js", "Docker", "GitHub Actions"],
      url: "https://github.com/alexchen/devflow",
    },
    {
      title: "Synthwave UI",
      description:
        "A component library for building retro-futuristic interfaces",
      active: false,
      stack: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
      url: "https://github.com/alexchen/synthwave-ui",
    },
    {
      title: "Pulse API",
      description:
        "Real-time health monitoring service for distributed systems",
      active: false,
      stack: ["Go", "gRPC", "Redis", "AWS"],
      url: "https://github.com/alexchen/pulse-api",
    },
  ];

  const links = [
    { icon: Gmail, label: "Email", href: "mailto:ekaone3033@gmail.com" },
    { icon: GitHub, label: "GitHub", href: "https://github.com/ekaone" },
    {
      icon: XformerlyTwitter,
      label: "X",
      href: "https://x.com/ekaone3033",
    },
  ];

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
            OSS Builder. Building tools for developers.
            <br />
            Focused on DX, LLMs, and open source.
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
                    className="text-sm font-medium hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    {project.title}
                  </a>
                  <p className="text-xs text-muted-foreground mt-0.5">
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
