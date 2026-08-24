---
name: wehuman
description: Official website for wehuman — calm AI tools that protect human attention
colors:
  bg: "#2A2925"
  fg: "#F6F1E7"
  accent: "#BC3A2C"
  paper: "#FCF9F2"
  ink: "#37362F"
typography:
  display:
    fontFamily: EB Garamond, Noto Serif SC, serif
    fontWeight: "400 (300 for zh)"
  mono:
    fontFamily: JetBrains Mono, ui-monospace, monospace
    fontSize: clamp(0.66rem, 0.55vw + 0.5rem, 0.8rem)
    letterSpacing: 0.14em
    textTransform: uppercase
rounded:
  DEFAULT: 4px
spacing:
  gutter: clamp(1.25rem, 8.9vw, 8.5rem)
---

## Overview

wehuman is the official website for a team building calm AI tools that protect human attention ("AI 时代，更像人地工作"). The layout system is modeled on the current hermes-agent.nousresearch.com landing page: viewport-wide ink frame, giant light-serif display titles, uppercase monospace labels for everything else, a paper-white terminal card, three big platform-style cards, a paper feature panel with `#N` numbered features, and a 100dvh statement footer with a ghost wordmark. The palette is translated from Hermes' electric-blue into wehuman's ink-and-vermilion identity.

## Colors

Four roles, mapped 1:1 from the Hermes system:

- **bg (#2A2925 墨黑):** Page ground — hero, tool cards, art frames, footer. (Hermes: #0000f2)
- **fg (#F6F1E7 纸白):** Text and solid buttons on dark. Never pure white. (Hermes: #f5f5f5)
- **accent (#BC3A2C 朱砂):** The single strong color — eyebrow numbers, terminal highlight, the seal, hover states. Scarce by design. (Hermes: #edff45)
- **paper (#FCF9F2):** The feature-panel flip and the terminal card. (Hermes: #fff)

## Typography

Two layers, like Hermes:

- **Display (EB Garamond / Noto Serif SC 300):** Hero three-line title, section titles, card names, footer statement, giant wordmarks. Weight 400 (300 for zh), line-height ≈ 1.02 (1.14 zh), tracking 0.02–0.04em.
- **Mono (JetBrains Mono):** Everything else — eyebrows, descriptions, buttons, terminal, nav. Uppercase, 0.14em tracking. This all-mono body voice is the signature of the style.

## Signature Mechanisms

- **Frame:** A fixed border (`--frame-w` ≈ 10–18px) in bg color around the whole viewport. Invisible over dark sections; crops the paper panel and wordmarks as they pass — the page reads as printed matter under a matte.
- **Noise:** Full-page fractal-noise overlay at 0.05 opacity; stronger (0.16, overlay blend) inside art frames. Flat color never looks flat.
- **Vignette:** Radial darkening on the hero and footer (`hw-vignette`).
- **Gutter:** `clamp(1.25rem, 8.9vw, 8.5rem)` — 210/2360 of viewport, Hermes' proportion. Text sizes use direct `clamp()` instead of Hermes' 2360-unit system; same result, simpler implementation.
- **Arc hover:** Tool cards reveal an animated gradient border (fg → accent → bg) on hover/focus (`hw-arc`, mask-composite ring).
- **Giant wordmarks:** `WEHUMAN` at ~21vw closes the feature panel and haunts the footer (ghost, accent at 0.13). Intentionally bleeding past the viewport edges.

## Page Structure

1. **Nav (3-column):** left Home/About · center WEHUMAN wordmark + GitHub icon · right language pill + Install. Mobile: stacked centered rows.
2. **Hero (ink):** eyebrow `OPEN SOURCE • MIT LICENSE` → three-line display title ending in an accent period → one mono line → "Get awedot" solid button beside the paper terminal card (pip/pipx tabs, `$` dim / package bold accent / copy button).
3. **Preview:** thick ink-bordered SVG scene (editor window, cursor, session arc, orb) — the stand-in for Hermes' video.
4. **Works (3 cards):** eyebrow + title, then awedot / awewarm / wehuman cards (aspect 627/547, line-art background, mono desc, paper button).
5. **Feature panel (paper):** `FEATURE / PREVIEW` corner tags, six `#N 动词` features (text ⇄ ink art frame with noise, alternating), giant WEHUMAN wordmark.
6. **Footer (100dvh, ink):** `OPEN SOURCE • FREE • MIT` eyebrow → statement title → manifesto line → GitHub CTA; ghost wordmark behind; bottom-left tools line, bottom-right seal + `MIT License · 2026`.
7. **About:** ink hero (ABOUT + display title) → paper panel (mission, 3 value cards, GitHub contact) → same giant footer.

## Motion

One small vanilla script (`src/scripts/motion.js`): terminal tabs, clipboard copy, IntersectionObserver reveals (opacity + 14px lift). All content is visible without JS (`html.js` gates the hidden initial state). `prefers-reduced-motion` disables everything. No scroll-jacking, no parallax.

## Do's and Don'ts

- **Do** keep accent scarce — one role per view (a number, a period, a highlight).
- **Do** keep body copy in uppercase mono; keep display in light serif.
- **Do** keep art as inline SVG line work; no bitmaps, no photos.
- **Do** keep the bilingual structure (`/` EN, `/zh/` ZH); all copy in `src/i18n/*.json`.
- **Don't** add frameworks or client dependencies — Astro static + one vanilla script.
- **Don't** let wordmarks shrink to fit — they bleed by design; body clips overflow-x.
- **Don't** reintroduce the previous ink-wash motion (scroll opening, water strokes, boat, mountains). That version lives in git history.
