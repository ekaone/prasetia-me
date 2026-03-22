const projects = [
  {
    title: "Repository Intelligence",
    description:
      "A blazing-fast CLI tool powered by a Rust core that scans your codebase, detects your tech stack, and generates rich AI agent SKILL docs, so tools like Claude Code, Cursor, and GitHub Copilot actually understand your project.",
    active: true,
    stack: [
      "1,000 files ~30ms",
      "6,000 files ~150ms",
      "20,000 files ~500ms",
      "LLM generation (1 agent) ~35-40s",
      "LLM generation (3 agents) ~90-120s",
      "--no-ai mode ~200ms total",
    ],
    url: "https://github.com/ekaone/repo-intel",
  },
  {
    title: "Shielded",
    description:
      "A small primitive for protecting sensitive state (tokens, PII) at the runtime level. Uses sealed values to eliminate accidental leaks across logs, error tracking, and SSR",
    active: false,
    stack: [
      "createStore",
      "store.subscribe",
      "sealed",
      "withTTL",
      "isSealedValue",
    ],
    url: "https://github.com/ekaone/shielded",
  },
  {
    title: "Masking Token",
    description:
      "Token masking library, for masking API keys, secrets, and tokens. Follow NIST SP 800-122, PCI-DSS, and OWASP A02 compliant. Entropy-Safe: Fixed-length masking prevents length-based attacks. Auto-detects 43+ token types (NPM, GitHub, Stripe, AWS, etc.)",
    active: false,
    stack: [
      "fixedLength",
      "showTail",
      "showHead",
      "maskChar",
      "warnIfPlain",
      "validators",
      "onWarning",
    ],
    url: "https://github.com/ekaone/shielded",
  },
  {
    title: "LLM Gate",
    description:
      "Problem space: AI agents can silently burn through your API credits if they enter infinite loops or receive malicious prompts designed to trigger excessive token consumption. LLM Gate wraps every LLM call with a stateful circuit breaker that tracks token usage, cost, and request frequency, then trips before the damage is done.",
    active: false,
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
    url: "https://github.com/ekaone/llm-gate",
  },
  {
    title: "Masking Email",
    description:
      "A small utility for safely displaying email addresses by masking sensitive parts. Offers flexible control, custom mask character, domain and sub-domain masking",
    active: false,
    stack: ["maskChar", "visibleChars", "maskDomain", "viewable"],
    url: "https://github.com/ekaone/mask-email",
  },
  {
    title: "Masking Card",
    description:
      "TypeScript utility for masking credit card numbers, handles formatting, partial visibility, supports flexible masking rules, grouping, and formatting",
    active: false,
    stack: [
      "maskChar",
      "unmaskedStart",
      "unmaskedEndmasking",
      "preserveSpacing",
      "grouping",
      "showLength",
      "validateInput",
    ],
    url: "https://github.com/ekaone/mask-card",
  },
  {
    title: "Entropy",
    description:
      "Measures randomness density, best used for generated tokens, secrets, and API keys. Not intended for judging human-chosen passwords",
    active: false,
    stack: ["numeric", "alpha", "hex", "alphanumeric", "mixed"],
    url: "https://github.com/ekaone/entropy",
  },
  {
    title: "Nano OTP (One-Time Password)",
    description:
      "OTP utility built on Node's crypto, designed for code generation, includes batch generation, custom charset, verify option an OTP using constant-time comparison to prevent timing attacks",
    active: false,
    stack: ["generate", "verify", "batch", "batchUnique"],
    url: "https://github.com/ekaone/nano-otp",
  },
  {
    title: "Masking Phone",
    description:
      "A utility to mask phone numbers for privacy protection. Follows GDPR and data protection standards, extensive customization options: Character used for masking, Number of digits to show at the beginning/end, Alias for showFirst/showLast",
    active: false,
    stack: [
      "maskChar",
      "showFirst",
      "showStart",
      "showLast",
      "visibleRanges",
      "preserveFormat",
      "customMask",
    ],
    url: "https://github.com/ekaone/mask-phone",
  },
  {
    title: "Rounded",
    description:
      "TypeScript rounding library for financial use cases. Handles half-up, banker's rounding, cash rounding, and ISO 4217 currency precision with float-safe logic and null-safe APIs",
    active: false,
    stack: ["rounded", "rounded.cash", "rounded.currency"],
    url: "https://github.com/ekaone/rounded",
  },
  {
    title: "Masking Name",
    description:
      "A utility to mask personal names for privacy protection. Supports Latin, Chinese, and Japanese scripts with fully customizable options",
    active: false,
    stack: ["char", "visibleStart", "visibleEnd", "locale", "preserveSpacing"],
    url: "https://github.com/ekaone/mask-name",
  },
];

export { projects };
