---
name: wehuman
description: Official website for wehuman — calm AI tools that protect human attention
colors:
  paper: "#F6F1E7"
  card: "#FCF9F2"
  ink: "#37362F"
  ink-light: "#8B867B"
  ink-line: "rgba(55,54,47,0.14)"
  vermilion: "#BC3A2C"
  vermilion-dark: "#9E2F23"
typography:
  display:
    fontFamily: EB Garamond, Noto Serif SC, serif
    fontWeight: "600"
  body:
    fontFamily: EB Garamond, Noto Serif SC, serif
    fontSize: 16px
    lineHeight: 1.8
  label:
    fontFamily: JetBrains Mono, ui-monospace, monospace
    fontSize: 12px
    letterSpacing: 0.14em
rounded:
  DEFAULT: 6px
  full: 9999px
spacing:
  unit: 8px
  section: 96px
---

## Overview

wehuman is the official website for a team building calm AI tools that protect human attention ("让人类更像人类"). The visual identity is East-Asian ink-wash aesthetics meets modern editorial minimalism: vast warm rice-paper negative space, a few expressive ink strokes, and exactly one point of vermilion — warmth in emptiness.

## Colors

The palette is ink on rice paper with a single vermilion accent.

- **Paper (#F6F1E7):** Page background — warm rice-paper white. Never cold or pure white.
- **Card (#FCF9F2):** Album-leaf card background, slightly lighter than the paper.
- **Ink (#37362F):** Primary text — near-black with a warm gray cast. Never pure black.
- **Ink-light (#8B867B):** Secondary text, metadata, labels.
- **Ink-line (rgba ink 14%):** Hairline borders and dividers.
- **Vermilion (#BC3A2C / #9E2F23):** The ONLY strong color — links, CTAs, the seal, hover states, ::selection. Its scarcity is the design.

## Typography

EB Garamond + Noto Serif SC (serif) for everything user-facing — headings, body, wordmark. The site should read like a printed page. JetBrains Mono for small "colophon" labels (section eyebrows, tags, language pill): uppercase, letter-spaced. Chinese body copy uses generous line-height (1.8+).

The wordmark is `WEHUMAN` — uppercase, serif bold, wide tracking — always paired with the vermilion seal.

## Visual Elements

### Seal (印章)

A vermilion rounded square with an inner frame and a minimal "人" (human) glyph carved in paper color. Used next to the header wordmark and as the footer colophon. Also the favicon. Pure inline SVG.

### Water Strokes (水纹)

The hero closes with 2–3 horizontal dry-brush strokes of varying depth (one dashed for 飞白 texture) plus faint ripple marks — the "river". Above them hangs one small vermilion dot (the ember/sun) with a blurred red reflection touching the water. Inline SVG, no bitmaps.

### Paper Wash

Two fixed, barely-there radial washes (ink top-right at 3.5%, vermilion bottom-left at 3%) keep the paper from feeling flat. Purely decorative, no pointer events.

### Album Leaves (册页)

Project cards are album leaves on rice paper: card background, hairline border, 6px radius, generous padding. Hover deepens the border ink and lifts the card 4px with a faint ink-wash shadow — calm, no rotation, no spring.

## Layout

Single column, centered. Content max-width 840px (896px for the works grid). Section spacing 96px+. Philosophy lines are staggered with increasing left indents, like a colophon descending a scroll.

## Components

- **Header:** Sticky, paper at 82% opacity with backdrop blur, hairline bottom border. Seal + WEHUMAN wordmark left; Home / About / GitHub / language pill right. No theme toggle.
- **Hero:** Centered serif display title, subtitle, vermilion filled pill + ink outlined pill, water strokes below.
- **Philosophy:** Mono eyebrow + three staggered serif lines.
- **ProjectLeaves:** Mono eyebrow, title, subtitle, two album-leaf cards (name, tagline, description, mono tag pills, GitHub/site links), a fading "more works grinding…" line, and an "About us →" bridge link.
- **AboutPage:** Label, title, mission paragraphs, three value rows with hairline left rules, GitHub contact row.
- **Footer:** Small seal + copyright line.

## Do's and Don'ts

- **Do** keep vast negative space — when in doubt, leave it empty.
- **Do** keep vermilion to one role per view: a link, a button, the seal, the dot.
- **Do** keep all brush/seal artwork as inline SVG.
- **Do** maintain the bilingual (en default at `/`, zh at `/zh/`) structure; all copy lives in `src/i18n/*.json`.
- **Don't** use pure black or pure white, gradients, glassmorphism, sticker rotations, or saturated secondary colors.
- **Don't** add client-side JavaScript. The site is fully static with zero scripts.
