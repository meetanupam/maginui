export const docs = [
  {
    slug: "",
    title: "Introduction",
    description:
      "Build expressive interfaces with source-owned React components.",
    sections: [
      [
        "What is themaginui?",
        "themaginui is a curated collection of React component source. Open any component, preview the interaction, copy the code, and adapt every detail inside your project.",
      ],
      [
        "Design principles",
        "Motion explains state. APIs stay composable. Accessibility is structural. Defaults are polished, but never precious.",
      ],
    ],
  },
  {
    slug: "copying-components",
    title: "Copying components",
    description: "Move a component into your project in seconds.",
    sections: [
      [
        "Choose and copy",
        "Open a component page, switch to the Code tab, and use Copy component code. Paste the source into your own components folder.",
      ],
      [
        "Make it yours",
        "Review the imports, connect the semantic color tokens to your design system, and adjust the component API for your product.",
      ],
    ],
  },
  {
    slug: "tailwind",
    title: "Tailwind setup",
    description: "Connect themaginui tokens to Tailwind CSS v4.",
    sections: [
      [
        "CSS-first configuration",
        "Import Tailwind in your global stylesheet and define the semantic tokens inside :root. Dark mode overrides the same stable token names.",
      ],
      [
        "Class merging",
        "Use the included cn helper to combine conditional classes without conflicting Tailwind utilities.",
      ],
    ],
  },
  {
    slug: "dark-mode",
    title: "Dark mode",
    description: "Ship light, dark, system, and high-contrast experiences.",
    sections: [
      [
        "Theme provider",
        "Use a class-based theme strategy. themaginui previews can be toggled independently from the documentation shell.",
      ],
      [
        "Contrast mode",
        "High contrast is token-driven and keeps layout dimensions stable when enabled.",
      ],
    ],
  },
  {
    slug: "theming",
    title: "Theming",
    description: "Adapt the components to your product.",
    sections: [
      [
        "Semantic tokens",
        "Surfaces, text, borders, accents, and semantic states use CSS custom properties. Change the meaning once and every copied component follows.",
      ],
      [
        "Shape and type",
        "Radius, spacing, and typography are independent layers. Components use inheritance wherever practical.",
      ],
    ],
  },
  {
    slug: "animations",
    title: "Animations",
    description: "Understand the motion language and performance model.",
    sections: [
      [
        "Purpose before polish",
        "Entrance motion establishes hierarchy, shared transitions preserve context, and springs communicate direct manipulation.",
      ],
      [
        "Performance",
        "Animations favor transforms and opacity. Scroll-driven effects are bounded, and loops pause outside the viewport.",
      ],
    ],
  },
  {
    slug: "accessibility",
    title: "Accessibility",
    description: "Keyboard, screen-reader, contrast, and motion guidance.",
    sections: [
      [
        "Baseline",
        "Interactive primitives follow established ARIA patterns, preserve visible focus, and maintain 44-pixel touch targets.",
      ],
      [
        "Testing",
        "Test real task flows with keyboard navigation, VoiceOver or NVDA, browser zoom, forced colors, and reduced motion.",
      ],
    ],
  },
  {
    slug: "performance",
    title: "Performance",
    description: "Keep animated interfaces responsive.",
    sections: [
      [
        "Client boundaries",
        "Documentation and layout remain Server Components. Only previews and direct interactions cross the client boundary.",
      ],
      [
        "Bundle discipline",
        "Copied components are easy to audit and tree-shake. Import icons individually and lazy-load expensive canvas or WebGL effects.",
      ],
    ],
  },
  {
    slug: "faq",
    title: "FAQ",
    description:
      "Common questions about ownership, licensing, and compatibility.",
    sections: [
      [
        "Can I use themaginui commercially?",
        "Yes. The component source is MIT licensed and can be modified for commercial products.",
      ],
      [
        "Do I need another UI library?",
        "No. Each component is readable source and documents the primitives it uses. Keep, replace, or remove any dependency after copying.",
      ],
    ],
  },
] as const;

export function getDoc(slug: string) {
  return docs.find((item) => item.slug === slug);
}
