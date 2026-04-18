interface Badge {
  imageUrl: string;
  linkUrl: string;
  alt: string;
}

interface Project {
  title: string;
  description: string;
  active: boolean;
  stack: string[];
  badges?: Badge[];
  url: string;
}

const projects: Project[] = [
  {
    title: "JSON-CLI",
    description:
      "AI-powered CLI task runner. Describe your goal in plain English, AI generates a validated JSON command plan, and the runner executes it step by step.",
    active: true,
    stack: [
      "json-cli 'please run tests'",
      "json-cli 'run tests and then build'",
    ],
    badges: [
      {
        imageUrl: "https://img.shields.io/npm/v/@ekaone/json-cli.svg",
        linkUrl: "https://www.npmjs.com/package/@ekaone/json-cli",
        alt: "npm version",
      },
      {
        imageUrl: "https://img.shields.io/badge/License-MIT-yellow.svg",
        linkUrl: "https://opensource.org/licenses/MIT",
        alt: "License: MIT",
      },
      {
        imageUrl: "https://img.shields.io/badge/TypeScript-5.0+-blue.svg",
        linkUrl: "https://www.typescriptlang.org/",
        alt: "TypeScript",
      },
    ],
    url: "https://github.com/ekaone/json-cli",
  },
  {
    title: "Repository Intelligence",
    description:
      "A blazing-fast CLI tool powered by a Rust core that scans your codebase, detects your tech stack, and generates rich AI agent SKILL docs, so tools like Claude Code, Cursor, and GitHub Copilot actually understand your project",
    active: false,
    stack: [
      "1,000 files ~30ms",
      "6,000 files ~150ms",
      "20,000 files ~500ms",
      "LLM generation (1 agent) ~35-40s",
      "LLM generation (3 agents) ~90-120s",
      "--no-ai mode ~200ms total",
    ],
    badges: [
      {
        imageUrl: "https://img.shields.io/npm/v/@ekaone/repo-intel.svg",
        linkUrl: "https://www.npmjs.com/package/@ekaone/repo-intel",
        alt: "npm version",
      },
      {
        imageUrl: "https://img.shields.io/badge/License-MIT-yellow.svg",
        linkUrl: "https://opensource.org/licenses/MIT",
        alt: "License: MIT",
      },
      {
        imageUrl: "https://img.shields.io/badge/TypeScript-5.0+-blue.svg",
        linkUrl: "https://www.typescriptlang.org/",
        alt: "TypeScript",
      },
      {
        imageUrl: "https://img.shields.io/badge/Rust-1.94+-orange.svg",
        linkUrl: "https://www.rust-lang.org/",
        alt: "Rust",
      },
    ],
    url: "https://github.com/ekaone/repo-intel",
  },
  {
    title: "Hamming",
    description:
      "Hamming distance utilities and LSH binary projection for TypeScript. Useful for Semantic caching for AI applications, Near-duplicate detection, with Performance XOR + popcount (extremely fast) vs Float vector math (pgvector)",
    active: true,
    stack: [
      "hammingString",
      "hammingStringNorm",
      "hammingBits",
      "hammingBigInt",
      "hammingBuffer",
      "hammingBufferNorm",
      "generatePlanes",
      "toBinaryCode",
      "binaryDistance",
    ],
    badges: [
      {
        imageUrl: "https://img.shields.io/npm/v/@ekaone/hamming.svg",
        linkUrl: "https://www.npmjs.com/package/@ekaone/hamming",
        alt: "npm version",
      },
      {
        imageUrl: "https://img.shields.io/badge/License-MIT-yellow.svg",
        linkUrl: "https://opensource.org/licenses/MIT",
        alt: "License: MIT",
      },
      {
        imageUrl: "https://img.shields.io/badge/TypeScript-5.0+-blue.svg",
        linkUrl: "https://www.typescriptlang.org/",
        alt: "TypeScript",
      },
    ],
    url: "https://github.com/ekaone/hamming",
  },
  {
    title: "Shielded",
    description:
      "A small primitive for protecting sensitive state (tokens, PII) at the runtime level. Uses sealed values to eliminate accidental leaks across logs, error tracking, and SSR",
    active: true,
    stack: [
      "createStore",
      "store.subscribe",
      "sealed",
      "withTTL",
      "isSealedValue",
    ],
    badges: [
      {
        imageUrl: "https://img.shields.io/npm/v/@ekaone/shielded.svg",
        linkUrl: "https://www.npmjs.com/package/@ekaone/shielded",
        alt: "npm version",
      },
      {
        imageUrl: "https://img.shields.io/badge/License-MIT-yellow.svg",
        linkUrl: "https://opensource.org/licenses/MIT",
        alt: "License: MIT",
      },
      {
        imageUrl: "https://img.shields.io/badge/TypeScript-5.0+-blue.svg",
        linkUrl: "https://www.typescriptlang.org/",
        alt: "TypeScript",
      },
    ],
    url: "https://github.com/ekaone/shielded",
  },
  {
    title: "Masking Token",
    description:
      "Token masking library, for masking API keys, secrets, and tokens. Follow NIST SP 800-122, PCI-DSS, and OWASP A02 compliant. Entropy-Safe: Fixed-length masking prevents length-based attacks. Auto-detects 43+ token types (NPM, GitHub, Stripe, AWS, etc.)",
    active: true,
    stack: [
      "fixedLength",
      "showTail",
      "showHead",
      "maskChar",
      "warnIfPlain",
      "validators",
      "onWarning",
    ],
    badges: [
      {
        imageUrl: "https://img.shields.io/npm/v/@ekaone/mask-token.svg",
        linkUrl: "https://www.npmjs.com/package/@ekaone/mask-token",
        alt: "npm version",
      },
      {
        imageUrl: "https://img.shields.io/badge/License-MIT-yellow.svg",
        linkUrl: "https://opensource.org/licenses/MIT",
        alt: "License: MIT",
      },
      {
        imageUrl: "https://img.shields.io/badge/TypeScript-5.0+-blue.svg",
        linkUrl: "https://www.typescriptlang.org/",
        alt: "TypeScript",
      },
    ],
    url: "https://github.com/ekaone/masking-token",
  },
  {
    title: "LLM Gate",
    description:
      "Problem space: AI agents can silently burn through your API credits if they enter infinite loops or receive malicious prompts designed to trigger excessive token consumption. LLM Gate wraps every LLM call with a stateful circuit breaker that tracks token usage, cost, and request frequency, then trips before the damage is done.",
    active: true,
    stack: [
      "maxTokens",
      "maxBudget",
      "maxRequests",
      "windowMs",
      "throttleAt",
      "pricing",
      "onThrottled",
      "onTripped",
      "onReset",
    ],
    badges: [
      {
        imageUrl: "https://img.shields.io/npm/v/@ekaone/llm-gate.svg",
        linkUrl: "https://www.npmjs.com/package/@ekaone/llm-gate",
        alt: "npm version",
      },
      {
        imageUrl: "https://img.shields.io/badge/License-MIT-yellow.svg",
        linkUrl: "https://opensource.org/licenses/MIT",
        alt: "License: MIT",
      },
      {
        imageUrl: "https://img.shields.io/badge/TypeScript-5.0+-blue.svg",
        linkUrl: "https://www.typescriptlang.org/",
        alt: "TypeScript",
      },
    ],
    url: "https://github.com/ekaone/llm-gate",
  },
  {
    title: "Masking Email",
    description:
      "A small utility for safely displaying email addresses by masking sensitive parts. Offers flexible control, custom mask character, domain and sub-domain masking",
    active: true,
    stack: ["maskChar", "visibleChars", "maskDomain", "viewable"],
    badges: [
      {
        imageUrl: "https://img.shields.io/npm/v/@ekaone/mask-email.svg",
        linkUrl: "https://www.npmjs.com/package/@ekaone/mask-email",
        alt: "npm version",
      },
      {
        imageUrl: "https://img.shields.io/badge/License-MIT-yellow.svg",
        linkUrl: "https://opensource.org/licenses/MIT",
        alt: "License: MIT",
      },
      {
        imageUrl: "https://img.shields.io/badge/TypeScript-5.0+-blue.svg",
        linkUrl: "https://www.typescriptlang.org/",
        alt: "TypeScript",
      },
    ],
    url: "https://github.com/ekaone/mask-email",
  },
  {
    title: "Masking Card",
    description:
      "TypeScript utility for masking credit card numbers, handles formatting, partial visibility, supports flexible masking rules, grouping, and formatting",
    active: true,
    stack: [
      "maskChar",
      "unmaskedStart",
      "unmaskedEndmasking",
      "preserveSpacing",
      "grouping",
      "showLength",
      "validateInput",
    ],
    badges: [
      {
        imageUrl: "https://img.shields.io/npm/v/@ekaone/mask-card.svg",
        linkUrl: "https://www.npmjs.com/package/@ekaone/mask-card",
        alt: "npm version",
      },
      {
        imageUrl: "https://img.shields.io/badge/License-MIT-yellow.svg",
        linkUrl: "https://opensource.org/licenses/MIT",
        alt: "License: MIT",
      },
      {
        imageUrl: "https://img.shields.io/badge/TypeScript-5.0+-blue.svg",
        linkUrl: "https://www.typescriptlang.org/",
        alt: "TypeScript",
      },
    ],
    url: "https://github.com/ekaone/mask-card",
  },
  {
    title: "Entropy",
    description:
      "Measures randomness density, best used for generated tokens, secrets, and API keys. Not intended for judging human-chosen passwords",
    active: true,
    stack: ["numeric", "alpha", "hex", "alphanumeric", "mixed"],
    badges: [
      {
        imageUrl: "https://img.shields.io/npm/v/@ekaone/entropy.svg",
        linkUrl: "https://www.npmjs.com/package/@ekaone/entropy",
        alt: "npm version",
      },
      {
        imageUrl: "https://img.shields.io/badge/License-MIT-yellow.svg",
        linkUrl: "https://opensource.org/licenses/MIT",
        alt: "License: MIT",
      },
      {
        imageUrl: "https://img.shields.io/badge/TypeScript-5.0+-blue.svg",
        linkUrl: "https://www.typescriptlang.org/",
        alt: "TypeScript",
      },
    ],
    url: "https://github.com/ekaone/entropy",
  },
  {
    title: "Nano OTP (One-Time Password)",
    description:
      "OTP utility built on Node's crypto, designed for code generation, includes batch generation, custom charset, verify option an OTP using constant-time comparison to prevent timing attacks",
    active: true,
    stack: ["generate", "verify", "batch", "batchUnique"],
    badges: [
      {
        imageUrl: "https://img.shields.io/npm/v/@ekaone/nano-otp.svg",
        linkUrl: "https://www.npmjs.com/package/@ekaone/nano-otp",
        alt: "npm version",
      },
      {
        imageUrl: "https://img.shields.io/badge/License-MIT-yellow.svg",
        linkUrl: "https://opensource.org/licenses/MIT",
        alt: "License: MIT",
      },
      {
        imageUrl: "https://img.shields.io/badge/TypeScript-5.0+-blue.svg",
        linkUrl: "https://www.typescriptlang.org/",
        alt: "TypeScript",
      },
    ],
    url: "https://github.com/ekaone/nano-otp",
  },
  {
    title: "Masking Phone",
    description:
      "A utility to mask phone numbers for privacy protection. Follows GDPR and data protection standards, extensive customization options: Character used for masking, Number of digits to show at the beginning/end, Alias for showFirst/showLast",
    active: true,
    stack: [
      "maskChar",
      "showFirst",
      "showStart",
      "showLast",
      "visibleRanges",
      "preserveFormat",
      "customMask",
    ],
    badges: [
      {
        imageUrl: "https://img.shields.io/npm/v/@ekaone/mask-phone.svg",
        linkUrl: "https://www.npmjs.com/package/@ekaone/mask-phone",
        alt: "npm version",
      },
      {
        imageUrl: "https://img.shields.io/badge/License-MIT-yellow.svg",
        linkUrl: "https://opensource.org/licenses/MIT",
        alt: "License: MIT",
      },
      {
        imageUrl: "https://img.shields.io/badge/TypeScript-5.0+-blue.svg",
        linkUrl: "https://www.typescriptlang.org/",
        alt: "TypeScript",
      },
    ],
    url: "https://github.com/ekaone/mask-phone",
  },
  {
    title: "Rounded",
    description:
      "TypeScript rounding library for financial use cases. Handles half-up, banker's rounding, cash rounding, and ISO 4217 currency precision with float-safe logic and null-safe APIs",
    active: true,
    stack: ["rounded", "rounded.cash", "rounded.currency"],
    badges: [
      {
        imageUrl: "https://img.shields.io/npm/v/@ekaone/rounded.svg",
        linkUrl: "https://www.npmjs.com/package/@ekaone/rounded",
        alt: "npm version",
      },
      {
        imageUrl: "https://img.shields.io/badge/License-MIT-yellow.svg",
        linkUrl: "https://opensource.org/licenses/MIT",
        alt: "License: MIT",
      },
      {
        imageUrl: "https://img.shields.io/badge/TypeScript-5.0+-blue.svg",
        linkUrl: "https://www.typescriptlang.org/",
        alt: "TypeScript",
      },
    ],
    url: "https://github.com/ekaone/rounded",
  },
  {
    title: "Masking Name",
    description:
      "A utility to mask personal names for privacy protection. Supports Latin, Chinese, and Japanese scripts with fully customizable options",
    active: true,
    stack: ["char", "visibleStart", "visibleEnd", "locale", "preserveSpacing"],
    badges: [
      {
        imageUrl: "https://img.shields.io/npm/v/@ekaone/mask-name.svg",
        linkUrl: "https://www.npmjs.com/package/@ekaone/mask-name",
        alt: "npm version",
      },
      {
        imageUrl: "https://img.shields.io/badge/License-MIT-yellow.svg",
        linkUrl: "https://opensource.org/licenses/MIT",
        alt: "License: MIT",
      },
      {
        imageUrl: "https://img.shields.io/badge/TypeScript-5.0+-blue.svg",
        linkUrl: "https://www.typescriptlang.org/",
        alt: "TypeScript",
      },
    ],
    url: "https://github.com/ekaone/mask-name",
  },
];

export { projects };
