const projects = [
  {
    title: "Shielded",
    description:
      "A small primitive for protecting sensitive state (tokens, PII) at the runtime level. Uses sealed values to eliminate accidental leaks across logs, error tracking, and SSR",
    active: true,
    stack: ["security", "state-management", "sealed", "logging"],
    url: "https://github.com/ekaone/shielded",
  },
  {
    title: "Masking Email",
    description:
      "A small utility for safely displaying email addresses by masking sensitive parts. Offers flexible control, custom mask character, domain and sub-domain masking",
    active: false,
    stack: ["email-masking", "npm", "library", "obfuscate", "privacy"],
    url: "https://github.com/ekaone/mask-email",
  },
  {
    title: "Masking Card",
    description:
      "TypeScript utility for masking credit card numbers, handles formatting, partial visibility, supports flexible masking rules, grouping, and formatting",
    active: false,
    stack: ["utility", "credit-card", "masking", "privacy"],
    url: "https://github.com/ekaone/mask-card",
  },
  {
    title: "Entropy",
    description:
      "Measures randomness density — best used for generated tokens, secrets, and API keys. Not intended for judging human-chosen passwords",
    active: false,
    stack: ["density", "randomness", "entropy"],
    url: "https://github.com/ekaone/entropy",
  },
  {
    title: "Nano OTP (One-Time Password)",
    description:
      "OTP utility built on Node's crypto, designed for code generation, includes batch generation, custom charset, verify option an OTP using constant-time comparison to prevent timing attacks",
    active: false,
    stack: ["otp", "generator", "2fa"],
    url: "https://github.com/ekaone/nano-otp",
  },
  {
    title: "Rounded",
    description:
      "TypeScript rounding library for financial use cases. Handles half-up, banker's rounding, cash rounding, and ISO 4217 currency precision with float-safe logic and null-safe APIs",
    active: false,
    stack: ["bankers", "halfup", "rounded", "currency"],
    url: "https://github.com/ekaone/rounded",
  },
];

export { projects };
