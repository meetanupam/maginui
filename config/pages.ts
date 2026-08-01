export const pages: Record<
  string,
  {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; copy: string; meta: string }[];
  }
> = {
  templates: {
    eyebrow: "Production starters",
    title: "Launch from a stronger foundation.",
    description:
      "Complete, responsive Next.js experiences built with themaginui primitives and ready for real content.",
    items: [
      {
        title: "Atlas Workspace",
        copy: "A calm operations dashboard with command navigation and dense data views.",
        meta: "12 pages · 38 components",
      },
      {
        title: "Monument Studio",
        copy: "An editorial portfolio for independent studios and creative teams.",
        meta: "9 pages · 24 components",
      },
      {
        title: "Linear Commerce",
        copy: "A conversion-focused storefront with refined product storytelling.",
        meta: "14 pages · 42 components",
      },
    ],
  },
  blocks: {
    eyebrow: "Composable sections",
    title: "Skip the blank canvas.",
    description:
      "Production-ready sections that inherit your tokens and remain easy to pull apart.",
    items: [
      {
        title: "Editorial Hero",
        copy: "Type-led launch section with measured scroll motion.",
        meta: "Hero · Free",
      },
      {
        title: "Metric Bento",
        copy: "Responsive evidence grid for product outcomes.",
        meta: "Bento · Free",
      },
      {
        title: "Focus Testimonials",
        copy: "Accessible story switcher with shared layout transitions.",
        meta: "Social proof · Free",
      },
    ],
  },
  pricing: {
    eyebrow: "Fair and simple",
    title: "Choose the source you need.",
    description:
      "The signature collection is available with complete source, documentation, and updates.",
    items: [
      {
        title: "Collection",
        copy: "The complete component collection, documentation, and updates.",
        meta: "Free",
      },
      {
        title: "Studio",
        copy: "All templates, premium blocks, Figma kit, and private Discord.",
        meta: "$129 · One time",
      },
      {
        title: "Teams",
        copy: "Source reviews, design guidance, and priority support.",
        meta: "$399 · One time",
      },
    ],
  },
  blog: {
    eyebrow: "Notes from the workshop",
    title: "Designing software with intent.",
    description:
      "Practical writing about motion, accessibility, component APIs, and systems that last.",
    items: [
      {
        title: "Motion is information",
        copy: "A framework for deciding what deserves to move—and what should stay still.",
        meta: "8 min · Jul 24",
      },
      {
        title: "The source-owned component model",
        copy: "Why copyable source can create healthier product systems than runtime packages.",
        meta: "6 min · Jul 11",
      },
      {
        title: "Contrast beyond compliance",
        copy: "Building color systems that remain expressive and genuinely legible.",
        meta: "10 min · Jun 28",
      },
    ],
  },
  showcase: {
    eyebrow: "Built with themaginui",
    title: "Good ingredients. Distinct outcomes.",
    description:
      "Independent products using themaginui as a starting point—not an aesthetic constraint.",
    items: [
      {
        title: "Northstar Analytics",
        copy: "Climate intelligence for infrastructure teams.",
        meta: "Data platform",
      },
      {
        title: "Folio Protocol",
        copy: "A quieter way to manage creative production.",
        meta: "Collaboration",
      },
      {
        title: "Kinship Health",
        copy: "Patient communication that feels human.",
        meta: "Healthcare",
      },
    ],
  },
  changelog: {
    eyebrow: "Release notes",
    title: "Always getting more considered.",
    description:
      "New components, careful improvements, and transparent breaking changes.",
    items: [
      {
        title: "v1.4 · Signals",
        copy: "Added four charts, status surfaces, and improved reduced-motion behavior.",
        meta: "July 30, 2026",
      },
      {
        title: "v1.3 · Navigation",
        copy: "New command, dock, sidebar, and mobile menu primitives.",
        meta: "July 02, 2026",
      },
      {
        title: "v1.2 · Foundations",
        copy: "High-contrast mode, semantic color tokens, and clearer copy guidance.",
        meta: "June 12, 2026",
      },
    ],
  },
  roadmap: {
    eyebrow: "Public roadmap",
    title: "What we are shaping next.",
    description:
      "themaginui develops in public. Priorities follow genuine product needs and community evidence.",
    items: [
      {
        title: "Now · Copy workflows",
        copy: "Make source discovery and copying even faster.",
        meta: "In progress",
      },
      {
        title: "Next · Visual fixtures",
        copy: "Portable interaction and visual regression contracts.",
        meta: "Planned",
      },
      {
        title: "Later · Framework adapters",
        copy: "Bring the design language to additional view layers.",
        meta: "Research",
      },
    ],
  },
  about: {
    eyebrow: "Why themaginui exists",
    title: "Software can be useful and felt.",
    description:
      "themaginui is an independent open-source project exploring how purposeful motion, strong typography, and accessible primitives can coexist.",
    items: [
      {
        title: "Source over dependency",
        copy: "Your interface should never be held hostage by a package API.",
        meta: "Principle 01",
      },
      {
        title: "Calm over spectacle",
        copy: "Delight works when it preserves attention instead of consuming it.",
        meta: "Principle 02",
      },
      {
        title: "Specific over generic",
        copy: "Good systems enable distinctive products, not identical ones.",
        meta: "Principle 03",
      },
    ],
  },
  contact: {
    eyebrow: "Talk to us",
    title: "Bring the difficult interface problem.",
    description:
      "Questions, partnerships, support, and thoughtful component ideas are welcome.",
    items: [
      {
        title: "General",
        copy: "For project questions and collaboration.",
        meta: "hello@themaginui.dev",
      },
      {
        title: "Support",
        copy: "For Studio customers and implementation help.",
        meta: "support@themaginui.dev",
      },
      {
        title: "Security",
        copy: "Report vulnerabilities privately and responsibly.",
        meta: "security@themaginui.dev",
      },
    ],
  },
  license: {
    eyebrow: "MIT License",
    title: "Use it. Change it. Ship it.",
    description:
      "themaginui component source is available under the permissive MIT license.",
    items: [
      {
        title: "Commercial use",
        copy: "Use themaginui in personal, client, and commercial products.",
        meta: "Permitted",
      },
      {
        title: "Modification",
        copy: "Change any component and redistribute your version.",
        meta: "Permitted",
      },
      {
        title: "Attribution",
        copy: "Keep the license notice with substantial copies of the source.",
        meta: "Required",
      },
    ],
  },
  privacy: {
    eyebrow: "Legal / Privacy",
    title: "A small-data approach.",
    description:
      "themaginui documentation does not sell personal information or use cross-site advertising profiles.",
    items: [
      {
        title: "Data we receive",
        copy: "Basic request logs, optional analytics events, and messages you choose to send.",
        meta: "Minimal collection",
      },
      {
        title: "Why we use it",
        copy: "Reliability, abuse prevention, and understanding documentation quality.",
        meta: "Limited purpose",
      },
      {
        title: "Your choices",
        copy: "You may request access or deletion by contacting privacy@themaginui.dev.",
        meta: "User control",
      },
    ],
  },
  terms: {
    eyebrow: "Legal / Terms",
    title: "Clear expectations.",
    description:
      "These terms govern use of the themaginui website, component source, and optional paid resources.",
    items: [
      {
        title: "Open-source components",
        copy: "Component use is governed by the included MIT license.",
        meta: "MIT",
      },
      {
        title: "Paid resources",
        copy: "Studio resources are licensed to the purchasing person or team.",
        meta: "Commercial license",
      },
      {
        title: "Service availability",
        copy: "We work for reliable access but cannot promise uninterrupted service.",
        meta: "Best effort",
      },
    ],
  },
};
