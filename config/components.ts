export type ComponentItem = {
  slug: string;
  name: string;
  category: string;
  description: string;
  tag: "New" | "Popular" | "Updated" | null;
  complexity: "Primitive" | "Composite" | "Section";
};

export const components: ComponentItem[] = [
  {
    slug: "dynamic-island",
    name: "Dynamic Island",
    category: "Navigation",
    description:
      "A context-aware control surface that fluidly changes shape around the current task.",
    tag: "Popular",
    complexity: "Composite",
  },
  {
    slug: "live-activity",
    name: "Live Activity",
    category: "System",
    description:
      "A compact real-time status surface that expands into controls without losing context.",
    tag: "New",
    complexity: "Composite",
  },
  {
    slug: "control-center",
    name: "Control Center",
    category: "System",
    description:
      "A modular control surface for immediate settings with clear state and tactile feedback.",
    tag: "New",
    complexity: "Composite",
  },
  {
    slug: "airplay-picker",
    name: "Output Picker",
    category: "System",
    description:
      "A focused destination picker with live connection state and unambiguous selection.",
    tag: null,
    complexity: "Composite",
  },
  {
    slug: "glass-segmented-control",
    name: "Glass Segmented Control",
    category: "Glass",
    description:
      "A compact selection control with shared-layout motion and refractive depth.",
    tag: null,
    complexity: "Primitive",
  },
  {
    slug: "glass-sheet",
    name: "Glass Sheet",
    category: "Glass",
    description:
      "A responsive bottom sheet with staged disclosure, drag affordance, and layered material.",
    tag: "New",
    complexity: "Composite",
  },
  {
    slug: "media-capsule",
    name: "Media Capsule",
    category: "Media",
    description:
      "A minimal now-playing controller that expands only when deeper controls are requested.",
    tag: null,
    complexity: "Composite",
  },
  {
    slug: "liquid-glass-navbar",
    name: "Liquid Glass Navbar",
    category: "Navigation",
    description:
      "A refractive floating navbar with active-route clarity and restrained optical depth.",
    tag: "New",
    complexity: "Section",
  },
  {
    slug: "floating-header",
    name: "Floating Header",
    category: "Header",
    description:
      "A compact responsive header that condenses around scroll intent and current context.",
    tag: null,
    complexity: "Section",
  },
  {
    slug: "editorial-footer",
    name: "Editorial Footer",
    category: "Footer",
    description:
      "A composed site ending with strong hierarchy, useful navigation, and quiet brand presence.",
    tag: null,
    complexity: "Section",
  },
  {
    slug: "command-orbit",
    name: "Command Orbit",
    category: "Command",
    description:
      "A radial command interface for fast, spatial keyboard and pointer navigation.",
    tag: "New",
    complexity: "Composite",
  },
  {
    slug: "magnetic-button",
    name: "Magnetic Button",
    category: "Button",
    description:
      "A restrained pointer-responsive action with spring-based attraction and release.",
    tag: null,
    complexity: "Primitive",
  },
  {
    slug: "prism-action",
    name: "Prism Action",
    category: "Button",
    description:
      "A premium action button with a controlled spectral edge and tactile press response.",
    tag: "Popular",
    complexity: "Primitive",
  },
  {
    slug: "liquid-tabs",
    name: "Liquid Tabs",
    category: "Tabs",
    description:
      "A shared-layout tab system with a continuous, tactile selection surface.",
    tag: "Popular",
    complexity: "Primitive",
  },
  {
    slug: "spatial-card",
    name: "Spatial Card",
    category: "Card",
    description:
      "A layered card that reveals depth through pointer position instead of theatrical tilt.",
    tag: null,
    complexity: "Composite",
  },
  {
    slug: "liquid-glass-card",
    name: "Liquid Glass Card",
    category: "Glass",
    description:
      "A layered translucent surface with edge refraction, highlight tracking, and readable contrast.",
    tag: "New",
    complexity: "Composite",
  },
  {
    slug: "glass-command-bar",
    name: "Glass Command Bar",
    category: "Glass",
    description:
      "A floating command surface that keeps content visible while bringing actions into focus.",
    tag: null,
    complexity: "Composite",
  },
  {
    slug: "glass-toggle",
    name: "Glass Toggle",
    category: "Glass",
    description:
      "A physical-feeling mode control with a refractive thumb and clear state transition.",
    tag: null,
    complexity: "Primitive",
  },
  {
    slug: "glass-profile-menu",
    name: "Glass Profile Menu",
    category: "Glass",
    description:
      "A compact account menu using transparency carefully without sacrificing legibility.",
    tag: null,
    complexity: "Composite",
  },
  {
    slug: "focus-command",
    name: "Focus Command",
    category: "Input",
    description:
      "An input that grows from a quiet field into a complete command workspace.",
    tag: null,
    complexity: "Composite",
  },
  {
    slug: "morph-dialog",
    name: "Morph Dialog",
    category: "Dialog",
    description:
      "A trigger that becomes its dialog while preserving visual and spatial context.",
    tag: "New",
    complexity: "Composite",
  },
  {
    slug: "signal-toast",
    name: "Signal Toast",
    category: "Feedback",
    description:
      "A compact status stack with clear timing, hierarchy, and reversible actions.",
    tag: null,
    complexity: "Primitive",
  },
  {
    slug: "kinetic-heading",
    name: "Kinetic Heading",
    category: "Typography",
    description:
      "Editorial typography that reveals rhythmically and responds to reading direction.",
    tag: null,
    complexity: "Primitive",
  },
  {
    slug: "adaptive-dock",
    name: "Adaptive Dock",
    category: "Dock",
    description:
      "A compact tool dock that prioritizes nearby actions without disrupting layout.",
    tag: "Updated",
    complexity: "Composite",
  },
];

export const categories = [...new Set(components.map((item) => item.category))];
export function getComponent(slug: string) {
  return components.find((item) => item.slug === slug);
}
