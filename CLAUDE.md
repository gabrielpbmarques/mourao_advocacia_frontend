# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md
@DESIGN.md

## Commands

- `npm run dev` — start the Next.js dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint (flat config, `eslint.config.mjs`)

There is no test runner configured.

## Stack notes (read before coding)

- **Next.js 16.2.4 / React 19.2.4 / Tailwind CSS v4.** This is *not* the Next.js shape that older training data describes. Per `AGENTS.md`, consult `node_modules/next/dist/docs/` (especially `01-app/`) before introducing new APIs, file conventions, or config — and respect any deprecation notices.
- **Tailwind v4** is wired through `@tailwindcss/postcss` (see `postcss.config.mjs`); design tokens / theme are configured in CSS (`app/globals.css`), not `tailwind.config.*`.
- **Path alias:** `@/*` maps to the repo root (`tsconfig.json`).

## Architecture

Single-page landing site for a law firm, using the Next.js App Router. The whole product is one route:

- `app/layout.tsx` — root layout, fonts, global metadata.
- `app/page.tsx` — composes the landing page from section components in order.
- `app/globals.css` — Tailwind v4 entry + design tokens (colors/typography from `DESIGN.md`).
- `app/components/` — UI kit. `SectionWrapper`, `SectionHeader`, `ServiceCard`, `PrimaryButton`, `Header`, `BackToTop`, `TestimonialCard`, `Icons`. New sections should be built by composing these rather than introducing parallel primitives — `DESIGN.md` is the source of truth for naming, colors, and behavior.
- `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts` — SEO/PWA metadata generated via the App Router file conventions (not static files in `public/`). Update these when routes or branding change.

Navigation is anchor-based (`#inicio`, `#sobre`, `#atuacao`, `#contato`) — section `id`s are owned by `SectionWrapper` and must match the IDs referenced in `Header` and `DESIGN.md §4`.
