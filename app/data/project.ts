const projects = [
  {
    title: "Shielded",
    description:
      "TypeScript primitive that prevents sensitive state from leaking through logging, devtools, and serialization",
    active: true,
    stack: ["security", "state-management", "sealed", "logging"],
    url: "https://github.com/ekaone/shielded",
  },
  {
    title: "Masking Email",
    description:
      "A lightweight, zero-dependency TypeScript library for masking email addresses to protect user privacy",
    active: false,
    stack: ["email-masking", "npm", "library", "obfuscate", "privacy"],
    url: "https://github.com/ekaone/mask-email",
  },
  {
    title: "Masking Card",
    description: "A component library for building retro-futuristic interfaces",
    active: false,
    stack: ["utility", "credit-card", "masking", "privacy"],
    url: "https://github.com/ekaone/mask-card",
  },
  {
    title: "Entropy",
    description: "Primitive Shannon entropy measurement for strings",
    active: false,
    stack: ["density", "randomness", "entropy"],
    url: "https://github.com/ekaone/entropy",
  },
  {
    title: "Nano OTP (One-Time Password)",
    description:
      "A tiny, zero-dependency One-Time Password (OTP) generator library",
    active: false,
    stack: ["otp", "generator", "2fa"],
    url: "https://github.com/ekaone/nano-otp",
  },
];

export { projects };
