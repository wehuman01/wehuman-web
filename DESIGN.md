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

wehuman is the official website for a team building calm AI tools that protect human attention ("让人类更像人类"). The visual identity is East-Asian ink-wash aesthetics meets modern editorial minimalism: warm rice-paper ground, a few expressive ink strokes, and exactly one strong color — vermilion, warmth in emptiness. The page structure (hero badge + install command + product cards + numbered features + closing) is modeled on agent-product landing pages such as hermes-agent.nousresearch.com, translated into the ink-wash language.

## Colors

The palette is ink on rice paper with a single vermilion accent.

- **Paper (#F6F1E7):** Page background — warm rice-paper white. Never cold or pure white.
- **Card (#FCF9F2):** Album-leaf card background, slightly lighter than the paper.
- **Ink (#37362F):** Primary text — near-black with a warm gray cast. Never pure black.
- **Ink-light (#8B867B):** Secondary text, metadata, labels.
- **Ink-line (rgba ink 14%):** Hairline borders and dividers.
- **Vermilion (#BC3A2C / #9E2F23):** The ONLY strong color — links, CTAs, the seal, hover states, ::selection. Its scarcity is the design.

## Typography

**Three layers, like a painting and its colophons:**

- **「画」Brush layer:** Ma Shan Zheng (马善政毛笔楷书, OFL) for all large characters — hero title, section titles, tool names, feature key characters, philosophy keywords, About title. Its Latin glyphs are written by the same brush, so EN and ZH share one hand. Display lines are centered; key characters inside sentences are set at 1.55em to punctuate the line.
- **「跋」Colophon layer:** EB Garamond + Noto Serif SC for body copy, metadata, links — the printed small text beside the painting. Never pure black; faded ink tones (0.6–0.85 alpha).
- **「印」Seal layer:** the vermilion seal, JetBrains Mono for eyebrows/labels/badges and the ink terminal, and one vermilion pill button as the "pressed seal" CTA.

Chinese body copy uses generous line-height (1.8+). The wordmark remains `WEHUMAN` in the header/footer (unchanged).

## Visual Elements

### Seal (印章)

A vermilion rounded square with an inner frame and a minimal "人" (human) glyph carved in paper color. Used next to the header wordmark and as the footer colophon. Also the favicon. Pure inline SVG.

### Water Strokes (水纹)

The hero closes with 2–3 horizontal dry-brush strokes of varying depth (one dashed for 飞白 texture) plus faint ripple marks — the "river". Above them hangs one small vermilion dot (the ember/sun) with a blurred red reflection touching the water. A tiny 乌篷船 (black-awning boat) rests between strokes. Inline SVG, no bitmaps.

### Paper Wash

Two fixed, barely-there radial washes (ink top-right at 3.5%, vermilion bottom-left at 3%) keep the paper from feeling flat. Purely decorative, no pointer events.

### Album Leaves (册页)

Project cards are album leaves: card background, hairline ink border, 10px radius, a faint lift on hover — the only place where boxes exist. Each leaf carries a small inline-SVG "picture" (a hand-drawn stroke sketch of the tool), the brush-script name, colophon-size description, meta line, and vermilion links. One leaf per tool, two per row on desktop.

### Ink Mountains (远山)

Two or three layered low rolling hill silhouettes in fading ink opacities (0.03–0.08), with soft paper-colored mist bands blurring their feet — Jiangnan in the rain, suggested not depicted. Placed at the homepage's foot; drifts with a gentle scroll parallax. `InkMountains.astro`, inline SVG.

### Boat (舟)

On the hero water rests one tiny 乌篷船 (black-awning boat) stroke sketch between two brush strokes — the only living presence in the emptiness. It drifts ±14px over 44s.

## Motion (动效)

The homepage behaves like a handscroll. All effects are CSS animations over inline SVG, gated to run only under `html.js` (+ `fonts-ready` for writing), and fully disabled by `prefers-reduced-motion` — content never depends on them. **Restraint rule: the page is 95% still.**

- **Scroll Opening (展卷):** On first visit per session, a rice-paper overlay with silk-mount borders is rolled away left-to-right by a wooden roller with vermilion end caps (~1.5s, once via sessionStorage). `ScrollOpening.astro`.
- **Ink Soak (落笔洇墨):** Hero blocks (badge → title → description → CTAs → terminal) rise one by one as a blur of pale ink that dries into focus (opacity + blur + lift). Starts only after webfonts are ready.
- **Water entrance (水纹出场):** after the hero blocks, the vermilion dot lifts into place, the dry-brush strokes draw themselves (`pathLength` dash), then the reflection and ripples bleed in — then everything settles into slow life.
- **Roll-up fade (收卷):** Scrolled-past sections (works, features, closing) fade toward 0.18 opacity as they leave the viewport (`data-scroll-fade` + `ink-motion.js`) — the scroll reads as one continuous unrolling, not per-section entrances.
- **Slow life (慢动):** water strokes breathe (26s), the boat drifts ±14px (44s), mountain mist slides ±22px (46–60s), mountains parallax slightly. Almost imperceptible; the paper is alive.
- **Ink-wash hover (墨晕):** album leaves darken their border and lift 3px; `.ink-link` cinnabar links grow an underline from the left like ink spreading, and press down like stamping.
- **Timing:** one `--ink-t` base delay (1.5s after the opening, 0.15s when skipped) sequences the hero; vermilion stays one point per view throughout.

## Layout

**A structured handscroll, read like a hanging scroll (立轴正面观).** Content is centered with generous breathing room (sections ≤64rem, vertical rhythm ≥5.5rem). The hero stacks: badge pill → large brush title ending in a vermilion dot → one-line description → seal-pill + ghost CTAs → ink terminal (`pip install awewarm`, copyable) → water strokes along the bottom. Works shows the two tool album leaves side by side. Features is a six-cell album grid (hairline rules, brush key character + vermilion number per cell). The closing holds the philosophy declaration (key words in vermilion brush script), the license badges, and the About link. Ink mountains press the page's foot before the footer.

## Components

- **Header:** Sticky, paper at 82% opacity with backdrop blur, hairline bottom border. Seal + WEHUMAN wordmark left; Home / Works / About / GitHub / language pill right.
- **Hero (引首):** Badge pill, centered brush title + vermilion dot, description, CTA pair, ink terminal with copy button, water strokes at the bottom (`Hero.astro`).
- **Works (作品):** `#works` anchor. Eyebrow + section title + subtitle, two album-leaf tool cards (SVG stroke art, brush name, tagline, description, meta, vermilion site link + GitHub + install hint), "more works grinding" line (`Works.astro`).
- **Features (特性):** Six-cell hairline grid, each cell a vermilion `#no`, a brush key character (收/复/温/静/简/人 · Keep/Restore/Warm/Quiet/Minimal/Human), a name and one line of description (`Features.astro`).
- **Philosophy (跋尾):** Centered declaration — three sentences with key words (人/专注/时间 · people/focus/time) in large vermilion brush script — license badges, About link (`Philosophy.astro`).
- **AboutPage:** Label + large brush title, mission paragraphs, three value rows with hairline left rules, GitHub contact row.
- **Footer:** Small seal + colophon line + works/about/GitHub links.
- **ScrollOpening / InkMountains / BrushStrokes:** Homepage motion & scenery components (see Motion above).

## Do's and Don'ts

- **Do** keep vast negative space — when in doubt, leave it empty.
- **Do** keep vermilion to one role per view: a link, a button, the seal, the dot.
- **Do** keep all brush/seal artwork as inline SVG.
- **Do** maintain the bilingual (en default at `/`, zh at `/zh/`) structure; all copy lives in `src/i18n/*.json`.
- **Do** keep motion gated (`html.js` + `prefers-reduced-motion` fallback) so content is always visible without it.
- **Don't** use pure black or pure white, gradients, glassmorphism, sticker rotations, or saturated secondary colors.
- **Don't** add frameworks or client dependencies — motion is one small vanilla script (`src/scripts/ink-motion.js`: fonts-ready flag, scroll-fade, mountain parallax) plus a tiny clipboard handler for the install terminal. The site stays otherwise fully static.
