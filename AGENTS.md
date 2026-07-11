# AGENTS.md — takispap.com

Personal site of Takis Papadopoulos (takispap): portfolio, writing, AI lab. Astro 7 static, Cloudflare Pages, no database, no cookie banner. Simple, smart, elegant, fun, fast. (CLAUDE.md symlinks here.)

## Canonical sources — read before working, never decide from memory

| What | Where |
|---|---|
| Operating manual (model routing, phase recipes, licensing, don't-do list) | vault `~/obsidian-vault/10-projects/takispap.com/handbook.md` — **read first** |
| Decisions, IA, content model, phases (locked — DO NOT REOPEN) | vault `.../takispap.com/plan.md` |
| Voice + positioning (all copy) | vault `.../takispap.com/voice.md` + voice-and-tone skill |
| Design contract (all visual work) | `design.md` in this repo (after Phase 1; skeleton = vault `design-framework.md`) |
| Task truth | Plane → project **Portfolio** |

If the vault is unreachable (non-Zeus session), stop and say so — do not improvise strategy.

## Hard rules

- **Budgets are law:** ≤50 KB JS per page, LCP < 1.5 s mid-range mobile, CLS ≈ 0, WCAG 2.2 AA floor, `prefers-reduced-motion` respected everywhere.
- **Zero JS by default.** An island must earn hydration; CSS/HTML first.
- **No third-party scripts** (sole exception: Cloudflare analytics beacon), no CDN fonts, no CMS, ever.
- **Tokens over raw values** — visual changes go through design.md's custom properties, then components.
- **Published URLs never change**; restructures ship 301s.
- **Licensing split:** /writing + /lab = CC BY-NC 4.0 (frontmatter `license` field); /work text = all rights reserved; company imagery/logos = © their owners, display only; /work excluded from llms.txt + AI training. Full policy in the handbook.
- **No secrets in this repo** — it is public; gitleaks pre-commit enforces. Secrets live in Vaultwarden.
- Copy ships only after the voice litmus tests and takis's approval. DNS/domain/publish actions are takis-only.

## Dev

```
pnpm dev          # or: astro dev --background (manage: astro dev stop/status/logs)
pnpm build        # must pass before any push
```

Node ≥ 22.12. Verify tool/config choices against current docs before adopting — this stack drifts (the plan was written on Astro 6; Astro 7 shipped days later).

## Where files go

- `public/` — served verbatim at site root: favicon.svg, logo.svg (URL-referenced), robots.txt, llms.txt, manifest icons.
- `src/assets/fonts/` — self-hosted webfont files (woff2 only, no CDN ever), consumed by **Astro's built-in Fonts API** (stable since v6). Wire in `astro.config.mjs`: `fonts: [{ provider: fontProviders.local(), name, cssVariable: "--font-<role>", options: { variants: [{ weight: "100 900", style: "normal", src: ["./src/assets/fonts/<file>.woff2"] }] } }]` (import `fontProviders` from `astro/config`); render in the layout head via `import { Font } from "astro:assets"` + `<Font cssVariable="--font-<role>" preload />` — preload essential faces only. The API generates @font-face, preload links and fallback-font metrics (serves the CLS ≈ 0 budget). Docs: https://docs.astro.build/en/guides/fonts/ + /en/reference/font-provider-reference/. Do NOT hand-roll @font-face in public/fonts.
- `src/assets/` — every image referenced from pages/components/content: goes through `astro:assets` (AVIF/WebP, explicit dimensions, CLS-proof). Content images NEVER go in `public/` — that bypasses optimisation and the perf budget depends on it. SVGs used inside components are imported from here too.
- `dist/` — build output. **Never hand-edit**: `pnpm build` wipes it, and it's gitignored so nothing in it reaches GitHub or Cloudflare Pages.

## Content flow

Drafts live in the vault, never here. A piece lands in `src/content/` only when final (see plan §Publish flow). Frontmatter is schema-enforced via content collections.

## Astro docs (consult before related tasks)

- [Routing](https://docs.astro.build/en/guides/routing/) · [Components](https://docs.astro.build/en/basics/astro-components/) · [Content collections](https://docs.astro.build/en/guides/content-collections/) · [Styling](https://docs.astro.build/en/guides/styling/)
