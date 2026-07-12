# design.md — the living design contract

v1, 2026-07-12. Direction **A — warm cinematic dark** (takis's pick), tuned to v2.1 on `/tiles/a`. Every visual decision continues **from this file, never from memory**. The style tile and this file must never diverge: change one, change the other, same commit.

Status marks: ✅ decided · 🔧 working (live on the tile, still tunable) · ⏳ open (owner named).

Strategy sources (vault, read-only from here): `plan.md` (locked decisions), `voice.md` (copy), `design-framework.md` (procedure), `moodboard.md` (evidence + brief archive).

---

## 0. Reference anatomy — what we learned, what we take, what we refuse

Studied 2026-07-12 (HTML + bundle fingerprints + user-feel read):

**lusion.co** — Astro (our stack!) static shell; content is real HTML/DOM with a **persistent WebGL canvas living UNDER the typography** plus a **dedicated `transition-overlay` canvas** for page changes; tiny IA (/, /projects, /about); Three.js engine; analytics is the only third-party. Feels: one continuous space you travel through, content always readable, cinema never blocks.

**minhpham.design** — custom creative-dev build; **one-page storytelling** over anchor sections (#work #about #contact); GSAP + Lenis smooth scroll + Three.js; **sound as an opt-in toggle in the chrome**; humour carried by interactions. Feels: a guided monologue with jokes landing on scroll beats.

**Adopt (adapted, ours):** effect layer as a *underlay* to real HTML (their architecture literally validates our static-first law) · dedicated, intentional transition choreography · tiny-IA energy — few pages, each with strong identity · sound opt-in in the chrome, only where a scene earns it · storytelling pacing on Home/Lab.

**Refuse (no-copy rule + our laws):** their literal devices (masked front/back copy — vetoed; their cursor/loader forms) · scroll-jacking · one-page architecture (our IA is multi-page, locked in plan.md) · JS-dependent text (all our type renders without JS, always).

**Lineage guard:** if a visitor who knows minh/lusion can name an element's source, redo it. Register may rhyme; devices must be ours (the masked word-risers, Athens living accent and circular theme sweep are examples of ours).

---

## 1. Feel

**minimal · typographic · cinematic · warm · precise · playful · honest · experimental** (takis-confirmed, 2026-07-12).

Translation, the tiebreaker paragraph: *a dark, warm room where type does the talking.* Type is the hero graphic — big, legible, adaptive. Copy is short: meaning first, no filler, no jargon; breathing room composes the page. The cinematic layer (reveals, scenes, transitions) earns its place by experience value and vanishes for anyone who asked for calm (reduced-motion/save-data/touch). Humour is self-sarcasm, rationed by voice.md. When a call is ambiguous, re-read this paragraph and pick the quieter option.

## 2. Type

- ⏳ **Faces: DEFERRED — takis's call.** Live comparison at `/tiles/fonts` (his 8: Epilogue, Sora, General Sans, Outfit, Spline Sans, Plus Jakarta, Poppins-VF, JetBrains Mono) + premium shortlist in moodboard (PP Neue Montreal / Söhne / Tiempos / ABC Diatype). Until then **Archivo VF stands in** (display: wide 118–125% + heavy 800–840; body: normal width). Mono: **JetBrains Mono VF** (working keep).
- ✅ Mechanism: Astro Fonts API, `fontProviders.local()`, self-hosted woff2 in `src/assets/fonts/`, `<Font preload />` for essential faces only. No CDN, ever. Recipe in AGENTS.md.
- ✅ Fluid scale (tokens live in the tile):
  `--size-display: clamp(2.75rem, 1.1rem + 8.8vw, 7.75rem)` · h1 `clamp(2.1–3.5rem)` · h2 `clamp(1.65–2.35rem)` · h3 `clamp(1.3–1.65rem)` · h4 `clamp(1.08–1.25rem)` · body `clamp(1–1.125rem)` · small `0.875rem` · caption `0.8125rem`.
- ✅ **Prose measure ~72ch** (takis: "perfect"); display/structure run full width. Line-height 1.6 body, ~0.98 display.
- ✅ Real quotes/dashes, tabular numerals in columns, no faux bold/italic.

## 3. Colour

- ✅ Authored in **OKLCH with hex fallbacks** (two-declaration pattern), themed via **`light-dark()`**; `color-scheme` on `:root`. **System default + manual override** (persisted, pre-paint restore). **No pure #000/#fff anywhere.**
- ✅ Semantic tokens only in components. Current values (tile A, dark = home; hex fallback = dark set):

| Token | Dark (home) | Light |
|---|---|---|
| `--bg` | `#161210` · `oklch(18.6% 0.008 48.3)` | `#faf5ee` · `oklch(97.2% 0.011 76.6)` |
| `--bg-raised` | `#221b15` · `oklch(22.8% 0.016 62.5)` | `#f3ebdf` · `oklch(94.3% 0.018 78.2)` |
| `--text` | `#f2eae1` · `oklch(94.1% 0.015 70.9)` | `#201913` · `oklch(22% 0.016 62.5)` |
| `--text-muted` | `#a89a8c` · `oklch(69.4% 0.026 67.4)` | `#6b5f52` · `oklch(49.3% 0.025 69.4)` |
| `--accent` | `#e8a04c` · `oklch(76.1% 0.131 67.6)` | `#8a5a1f` · `oklch(50.9% 0.096 67.6)` |
| `--border` | `#3a312a` · `oklch(32.1% 0.018 60)` | `#dfd3c2` · `oklch(87.2% 0.027 76.8)` |

- ✅ Measured contrast (WCAG 2.2, verified by script): text/bg 15.63 (dark) · 16.00 (light); muted/bg 6.80 · 5.72; accent/bg 8.48 · 5.43; text/raised 14.27 · 15.20. Floor: 4.5:1 body, 3:1 large. Any new pair gets measured before it ships; CI (axe) re-checks rendered output at Phase 4.
- 🔧 **One accent (amber)**, used sparingly: links, focus, current-nav, the odd chip. ⏳ Accent final + the **Athens living accent** (prototype lives on `/tiles/c` — deterministic sky-clock, all phases AA): takis decides if it graduates to the real site (Lab-only is a candidate).
- ✅ The tp mark is inline SVG with `--mark-bg`/`--mark-fg` fill tokens — themeable, animatable, never redesigned.

## 4. Space & layout

- ✅ **No fixed page width.** Fluid gutters `--pad-x: clamp(1.25rem, 5vw, 7rem)`; the screen is used, empty space composes. Prose capped at 72ch.
- ✅ Spacing scale `--space-1…7`: 0.25 / 0.5 / 1 / 1.5 / 2.5 / 4 / 6.5 rem; sections separated by `--space-7`. Generous by default — the dark room needs air.
- 🔧 **Corners round where the hand goes, radius scales with the viewport:** `--radius-s: clamp(6px, 0.4vw+4px, 10px)` · `-m: clamp(12px, 1vw+8px, 20px)` · `-l: clamp(18px, 2vw+12px, 34px)`; buttons are pills. ⏳ Adaptive-radius rules to refine with takis (lusion register).
- ✅ Depth = raised surfaces (`--bg-raised`) + hairlines, not shadows. Container queries over device breakpoints as the mindset.

## 5. Motion

- ✅ Tokens: `--motion-quick: 140ms` (presses) · `--motion-base: 400ms` (hovers, lifts) · `--motion-slow: 780ms` (sweeps). Easings: `--ease-fluid: cubic-bezier(0.65,0,0.35,1)` (symmetric sweeps) · `--ease-settle: cubic-bezier(0.16,1,0.3,1)` (everything that arrives). Fluid and eased — nothing snaps.
- ✅ **Signature pattern:** cross-document **View Transitions** (`@view-transition`, pure CSS) — element morphs between pages. Reduced-motion → crossfade/none.
- 🔧 **Registers** (all live on `/tiles/a`): intro (header settles, hero words rise staggered) · appear (sections lift on scroll timeline) · **per-word masked risers** — words rise from behind their own line, load + scroll, static spans + CSS scroll timeline, zero JS · hover (underline draw, icon nudges along travel direction, card lift + border warm) · press (compress 0.96) · **theme switch: icon morph + 780ms circular reveal** from the button.
- ✅ Laws: `prefers-reduced-motion` collapses every register to plain visibility; content never waits for motion; nothing over `--motion-slow` except an intentional scene boot; **never scroll-jack** (anti-ref, closed).
- ⏳ **Heavy layer** (the lusion-style underlay): if/when Home/Lab get a scene — persistent canvas UNDER the HTML, lazy after first paint, killed by reduced-motion/save-data/touch. Candidate tech, verify-on-adoption: Three.js island; smooth scroll only if it earns it (Lenis is the reference; CSS-first until proven needed). Sound: opt-in toggle in the chrome, only with a scene (minh register, our device).

## 6. Components

Live on `/tiles/a`, tokens only, one usage line each:

- **Button**: pill; primary = accent fill (+arrow nudge), secondary = text outline (+download dip), ghost = accent text (+diagonal nudge). Verb-first outcome labels (voice.md).
- **Link**: body links = accent + real underline; nav/card links = underline-draw on hover, `is-current` stays drawn.
- **Card**: raised surface, `--radius-m`, lift + border-warm on hover, whole-card focusable link with icon nudge.
- **Chip/tag**: pill hairline, muted; `chip-live` = accent (status).
- **Code block**: raised + hairline, `--radius-m`, JetBrains Mono, 72ch cap.
- **Callout**: accent left bar on raised surface.
- **Table**: hairline rows, tabular numerals, caption top-left (the contrast table is the living sample).
- **Theme toggle**: icon morph monitor→moon→sun, circular sweep, aria-live announced (shared component `ThemeToggle.astro`).
- **Figure + caption**: caption in `--size-caption` muted.
- **Focus**: every interactive gets the **halo** — `box-shadow: 0 0 0 2px var(--bg), 0 0 0 6px color-mix(in oklab, var(--accent) 45%, transparent)`; forced-colors-safe via transparent outline.
- ⏳ **Nav**: sample only (underline-draw row). Takis wants more — next iteration together.
- ⏳ 404/error surface: playful, per-tile sample exists; real `/404` ships with first pages. PWA offline page at Phase 4, same register.

## 7. Imagery & iconography

- ✅ **All SVG inline** so colour/motion are tokenised (mark, icons, future illustrations).
- 🔧 Icons: **Lucide** (ISC) placeholders in `src/assets/icons/` via `Icon.astro` — ⏳ replaced by takis's own set eventually.
- ✅ tp mark: tokenised fills, hover micro-rotate; full favicon/manifest set derived at Phase 2/4. Never redesigned.
- ⏳ Photography/screenshot treatment: decided with first case study (Phase 3; anti-ref law: VR work = real captures/WebXR, never headset-photoshop). Content images via `astro:assets`, never `public/`.
- ⏳ Calligraphic signature (About-end, takis's hand → SVG, draw-on optional) and **Spot** treatment — waiting on takis's assets.

## 8. Voice in the UI

voice.md governs every string. Microcopy: outcome-verb buttons, zero cleverness on critical paths, one wink max in empty/pause states, alt text = content not mood. Copy density law (takis): short, meaning-first, no jargon — the type carries it.

---

## Page structures (v1 skeleton — plan.md §Page structures + reference anatomy)

- **Home** — the dark room. Hero: name-line + spine sentence in per-word risers over (future) scene underlay; 3–4 selected work cards; latest writing; lab teaser; contact strip. Fewest words on the site.
- **Work / Writing indexes** — calm, typographic lists/grids; filters only when three items need them.
- **Case study / Article** — long-form at 72ch, evidence-dense, print-friendly (case studies).
- **Lab** — the second dark-room surface: experiment cards in changelog register; where the living accent and future scenes belong.
- **About** — most personal; arc timeline, losses in, Spot, signature closes the page.
- **404** — full fun allowance ("Nothing here but very good kerning.").

## Tech contract (short form)

Astro 7 static — same stack as lusion, which proves the ceiling. Static-first: text is HTML/CSS, zero render-blocking JS; motion is CSS-first (scroll timelines, view transitions); JS islands lazy after first paint and only where they earn it (theme sweep ~30 lines; future scene = Three.js island). Field metrics law: LCP ≤ 2.0s mid-mobile, CLS ≈ 0, INP < 200ms. Zero third-party except CF analytics. Full contract: plan.md §Speed.

## Open items (owners)

1. ⏳ Fonts — takis picks at `/tiles/fonts` (or premium trial round) → re-cut tile + this file §2.
2. ⏳ Navigation treatment — takis + opus, next tile iteration.
3. ⏳ Adaptive-radius rules — takis + opus, with nav.
4. ⏳ Accent final + living-accent graduation — takis.
5. ⏳ Home/Lab scene underlay (whether, then what) — takis + opus; must pass the earn-it bar.
6. ⏳ Signature samples, Spot photos, portrait — takis assets.
7. ⏳ Icon set of our own — takis designs, replaces Lucide.
