export type PackageStatus = "active" | "postponed";

export type PackageCategory =
  | "AI agents"
  | "CLI"
  | "Privacy"
  | "Utilities"
  | "Finance";

export interface PackageProject {
  title: string;
  packageName: string;
  description: string;
  status: PackageStatus;
  category: PackageCategory;
  installCommand: string;
  apiExamples: string[];
  repoUrl: string;
  npmUrl: string;
  homepageUrl?: string;
  keywords: string[];
  featured?: boolean;
}

const npmPackageUrl = (name: string) => `https://www.npmjs.com/package/${name}`;

const packages: PackageProject[] = [
  {
    title: "JSON-CLI",
    packageName: "@ekaone/json-cli",
    description:
      "AI-powered CLI task runner. Describe a goal in plain English, receive a validated JSON command plan, and execute it step by step.",
    status: "active",
    category: "AI agents",
    installCommand: "npm i -g @ekaone/json-cli",
    apiExamples: [
      "json-cli 'please run tests'",
      "json-cli 'run tests and then build'",
    ],
    repoUrl: "https://github.com/ekaone/json-cli",
    npmUrl: npmPackageUrl("@ekaone/json-cli"),
    keywords: ["agent", "cli", "task runner", "json", "automation"],
    featured: true,
  },
  {
    title: "Kill-X",
    packageName: "@ekaone/killx",
    description:
      "Recursively kills processes and child trees using a signal strategy that escalates from SIGTERM to SIGKILL.",
    status: "active",
    category: "CLI",
    installCommand: "npm i @ekaone/killx",
    apiExamples: ["killx", "process tree", "SIGTERM -> SIGKILL"],
    repoUrl: "https://github.com/ekaone/killx",
    npmUrl: npmPackageUrl("@ekaone/killx"),
    keywords: ["cli", "process", "tree", "kill", "signal"],
  },
  {
    title: "Agent Surf",
    packageName: "@ekaone/agent-surf",
    description:
      "AI-powered browser automation CLI. Write in plain English, generate a validated browser command plan, and run it step by step.",
    status: "active",
    category: "AI agents",
    installCommand: "npm i -g @ekaone/agent-surf",
    apiExamples: ["agent-surf", "browser agent", "command plan"],
    repoUrl: "https://github.com/ekaone/agent-surf",
    npmUrl: npmPackageUrl("@ekaone/agent-surf"),
    keywords: ["agent", "browser", "automation", "cli", "ai"],
    featured: true,
  },
  {
    title: "Repository Intelligence",
    packageName: "@ekaone/repo-intel",
    description:
      "Fast repository scanner with a Rust core that detects a stack and generates rich AI-agent SKILL docs for coding tools.",
    status: "postponed",
    category: "AI agents",
    installCommand: "npm i -g @ekaone/repo-intel",
    apiExamples: [
      "1,000 files ~30ms",
      "20,000 files ~500ms",
      "--no-ai mode ~200ms total",
    ],
    repoUrl: "https://github.com/ekaone/repo-intel",
    npmUrl: npmPackageUrl("@ekaone/repo-intel"),
    keywords: ["repository", "rust", "scanner", "skills", "agents"],
  },
  {
    title: "Hamming",
    packageName: "@ekaone/hamming",
    description:
      "Hamming distance utilities and LSH binary projection for semantic caching, near-duplicate detection, and fast binary distance checks.",
    status: "active",
    category: "Utilities",
    installCommand: "npm i @ekaone/hamming",
    apiExamples: [
      "hammingString",
      "hammingBits",
      "generatePlanes",
      "binaryDistance",
    ],
    repoUrl: "https://github.com/ekaone/hamming",
    npmUrl: npmPackageUrl("@ekaone/hamming"),
    keywords: ["hamming", "lsh", "semantic cache", "binary", "popcount"],
  },
  {
    title: "Shielded",
    packageName: "@ekaone/shielded",
    description:
      "Runtime primitive for protecting tokens and PII with sealed values that avoid accidental leaks in logs, errors, and SSR.",
    status: "active",
    category: "Privacy",
    installCommand: "npm i @ekaone/shielded",
    apiExamples: ["createStore", "store.subscribe", "sealed", "withTTL"],
    repoUrl: "https://github.com/ekaone/shielded",
    npmUrl: npmPackageUrl("@ekaone/shielded"),
    keywords: ["privacy", "sealed", "token", "pii", "runtime"],
    featured: true,
  },
  {
    title: "Masking Token",
    packageName: "@ekaone/mask-token",
    description:
      "Token masking library for API keys and secrets with fixed-length masking, warnings, validators, and 43+ token-type detectors.",
    status: "active",
    category: "Privacy",
    installCommand: "npm i @ekaone/mask-token",
    apiExamples: ["fixedLength", "showTail", "validators", "onWarning"],
    repoUrl: "https://github.com/ekaone/mask-token",
    npmUrl: npmPackageUrl("@ekaone/mask-token"),
    keywords: ["privacy", "mask", "token", "secret", "validator"],
    featured: true,
  },
  {
    title: "LLM Gate",
    packageName: "@ekaone/llm-gate",
    description:
      "Stateful circuit breaker for LLM calls that tracks token usage, cost, and request frequency before runaway loops burn budget.",
    status: "active",
    category: "AI agents",
    installCommand: "npm i @ekaone/llm-gate",
    apiExamples: ["maxTokens", "maxBudget", "onThrottled", "onTripped"],
    repoUrl: "https://github.com/ekaone/llm-gate",
    npmUrl: npmPackageUrl("@ekaone/llm-gate"),
    keywords: ["llm", "budget", "circuit breaker", "tokens", "throttle"],
    featured: true,
  },
  {
    title: "Masking Email",
    packageName: "@ekaone/mask-email",
    description:
      "Small utility for safely displaying email addresses with custom masks, visible character controls, and domain masking.",
    status: "active",
    category: "Privacy",
    installCommand: "npm i @ekaone/mask-email",
    apiExamples: ["maskChar", "visibleChars", "maskDomain", "viewable"],
    repoUrl: "https://github.com/ekaone/mask-email",
    npmUrl: npmPackageUrl("@ekaone/mask-email"),
    keywords: ["privacy", "mask", "email", "domain", "pii"],
  },
  {
    title: "Masking Card",
    packageName: "@ekaone/mask-card",
    description:
      "Credit card masking utility with partial visibility, grouping, preserved spacing, and configurable validation.",
    status: "active",
    category: "Privacy",
    installCommand: "npm i @ekaone/mask-card",
    apiExamples: [
      "unmaskedStart",
      "preserveSpacing",
      "grouping",
      "validateInput",
    ],
    repoUrl: "https://github.com/ekaone/mask-card",
    npmUrl: npmPackageUrl("@ekaone/mask-card"),
    keywords: ["privacy", "mask", "card", "pci", "formatting"],
  },
  {
    title: "Entropy",
    packageName: "@ekaone/entropy",
    description:
      "Measures randomness density for generated tokens, secrets, and API keys without pretending to judge human passwords.",
    status: "active",
    category: "Utilities",
    installCommand: "npm i @ekaone/entropy",
    apiExamples: ["numeric", "alpha", "hex", "alphanumeric", "mixed"],
    repoUrl: "https://github.com/ekaone/entropy",
    npmUrl: npmPackageUrl("@ekaone/entropy"),
    keywords: ["entropy", "randomness", "secret", "token", "utility"],
  },
  {
    title: "Nano OTP",
    packageName: "@ekaone/nano-otp",
    description:
      "OTP utility built on Node crypto with batch generation, custom charsets, and constant-time verification.",
    status: "active",
    category: "Privacy",
    installCommand: "npm i @ekaone/nano-otp",
    apiExamples: ["generate", "verify", "batch", "batchUnique"],
    repoUrl: "https://github.com/ekaone/nano-otp",
    npmUrl: npmPackageUrl("@ekaone/nano-otp"),
    keywords: ["otp", "crypto", "verify", "security", "privacy"],
  },
  {
    title: "Masking Phone",
    packageName: "@ekaone/mask-phone",
    description:
      "Phone number masking utility with configurable visible ranges, formatting preservation, and custom mask characters.",
    status: "active",
    category: "Privacy",
    installCommand: "npm i @ekaone/mask-phone",
    apiExamples: ["showFirst", "showLast", "visibleRanges", "customMask"],
    repoUrl: "https://github.com/ekaone/mask-phone",
    npmUrl: npmPackageUrl("@ekaone/mask-phone"),
    keywords: ["privacy", "mask", "phone", "gdpr", "pii"],
  },
  {
    title: "Rounded",
    packageName: "@ekaone/rounded",
    description:
      "Float-safe TypeScript rounding library for finance with half-up, banker's rounding, cash rounding, and currency precision.",
    status: "active",
    category: "Finance",
    installCommand: "npm i @ekaone/rounded",
    apiExamples: ["rounded", "rounded.cash", "rounded.currency"],
    repoUrl: "https://github.com/ekaone/rounded",
    npmUrl: npmPackageUrl("@ekaone/rounded"),
    keywords: ["finance", "rounding", "currency", "cash", "typescript"],
  },
  {
    title: "Masking Name",
    packageName: "@ekaone/mask-name",
    description:
      "Personal-name masking utility with Latin, Chinese, and Japanese script support plus configurable spacing behavior.",
    status: "active",
    category: "Privacy",
    installCommand: "npm i @ekaone/mask-name",
    apiExamples: ["char", "visibleStart", "visibleEnd", "locale"],
    repoUrl: "https://github.com/ekaone/mask-name",
    npmUrl: npmPackageUrl("@ekaone/mask-name"),
    keywords: ["privacy", "mask", "name", "locale", "pii"],
  },
];

const categories = Array.from(
  new Set(packages.map((project) => project.category)),
).sort();

export { categories, packages, packages as projects };
