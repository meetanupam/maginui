# themaginui

themaginui is a production-ready, source-first React component library and documentation platform built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, Motion, and Radix UI. Local development uses Turbopack; production builds use Next's stable webpack compiler for deterministic CI and Vercel builds.

## Features

- Ten signature interaction components
- Statically generated documentation page for every component
- Live desktop, mobile, dark-mode, and source previews
- Search command palette (`⌘K` / `Ctrl+K`)
- Component, category, and complexity filtering
- MDX content foundation and 15 complete documentation guides
- Interactive motion playground
- Light, dark, system, and high-contrast themes
- Sitemap, robots directives, RSS, metadata, and custom 404
- Reduced-motion support and accessibility guidance

## Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
pnpm lint
pnpm build
```

## Deployment

Import the repository into Vercel. The framework, build command, and output are detected automatically; no environment variables or configuration changes are required.

## Structure

- `app/` — App Router pages, metadata routes, RSS, sitemap
- `components/` — shared UI, search, previews, documentation shells
- `config/` — navigation, docs, and editorial page content
- `content/` — MDX documentation source
- `lib/` — shared utilities
- `providers/` — client context providers
- `registry/` — typed component catalog

MIT licensed.
