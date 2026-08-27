# Design — wehuman

A locked design system for this site. Every page redesign reads this file before
emitting code. Do not regenerate per page — extend or amend this file when the
system needs to grow.

## Genre

editorial — 水墨纸本 (modern Chinese ink on warm paper). Content-led, hairline-ruled,
asymmetric. Never card-based, never gradient-filled, never centred-everything.

## Macrostructure family

- Marketing page (home): **Statement + Index** — left-biased statement hero over a
  low ink-wash landscape with a floating vermilion sun (independent element, lives
  in the right whitespace, never overlaps text), followed by a vertical ruled
  index of destinations (number · title · note · arrow), then a single-line footer.
- Content pages (research, articles): **Ruled Archive** — asymmetric two-column
  page-intro (display heading left, lead right, full-width brush rule beneath),
  then full-width ruled rows with ordinal numbers.
- Philosophy: **Manifesto prose** — page-intro, large-serif prose column with a
  vermilion drop cap, un-numbered contrast couplets on rules, closing seal stamp.

## Theme

| Token | Value | Note |
| --- | --- | --- |
| `--paper` | `#f2eee5` · oklch(94% 0.013 92) | warm paper |
| `--paper-light` | `#f8f5ee` · oklch(96% 0.011 95) | wash / hover ground |
| `--ink` | `#1d1e1a` · oklch(21% 0.008 120) | text, strokes |
| `--ink-soft` | `#66635c` · oklch(48% 0.014 95) | secondary text |
| `--line` | `rgba(29,30,26,.16)` | hairline rules |
| `--vermilion` | `#a33b2e` · oklch(47% 0.118 32) | the only accent, < 5% per viewport |

One vermilion focus per viewport. Ink carries everything else.

## Typography

- Display: Newsreader (EN) / Noto Serif SC (ZH), weight 400–500, roman only — italic is banned on headings globally; ZH headings get `:lang(zh-CN)` serif swap and looser line-height (1.16).
- Body: Avenir Next / PingFang SC stack.
- Eyebrows: `.72rem`, `.16em` tracking, uppercase, vermilion — one per page, stacked above its heading. Never tag-left / heading-right.
- Hero headline: left-biased, `clamp(3.2rem, 6vw, 6rem)`, tracking `-.04em`. Statement copy is the brand line (66 chars EN / 20 chars ZH); do not inflate past the cap for length.
- Ordinal numbers: small vermilion serif, only where the list is genuinely a sequence (home index, research rows). Philosophy couplets carry no numbers.

## Spacing

Fluid page gutters `--page-x: clamp(1.25rem, 5vw, 5rem)`; content `82rem`; reading measure `46rem`. Section rhythm varies by role (hero tall, index rows ~11rem, article rows dense) — never uniform padding everywhere.

## Motion

Editorial is motion-default-off; this project opts in (user ask: 灵动). Budget: **max 3 animation primitives per page.**

- Easings: `--ease-out: cubic-bezier(0.16,1,0.3,1)`, `--ease-in: cubic-bezier(0.7,0,0.84,0)`, `--ease-in-out: cubic-bezier(0.65,0,0.35,1)`. Browser-default `ease` is banned.
- Durations: `--dur-micro: 120ms`, `--dur-short: 240ms`, `--dur-long: 520ms`.
- Primitive 1 — **Load orchestration (home only)**: CSS keyframe entrance, eyebrow → headline → lead → sun rises → ink band fades, stagger ≤ 90ms/step, total ≤ 700ms, one-shot. Pure CSS, no JS dependency.
- Primitive 2 — **Pointer drift (home only)**: ink band and sun translate ≤ 18px toward/away from a fine pointer, lerped in rAF (factor ~0.06), paused when hero off-screen. Disabled on coarse pointers and under `prefers-reduced-motion`.
- Primitive 3 — **Row wash**: index/list rows on `:hover` / `:focus-visible` get a paper-light bleed (`::before` scaleX from left, transform-only) plus a single arrow nudge. Two properties, one gesture.
- Scroll reveals elsewhere: one fade-up family (`translateY(14px)`, 520ms, `--ease-out`, IntersectionObserver, fire once) with a `scaleX` rule-draw variant; total stagger capped ~500ms.
- Reduced motion: everything collapses to ≤ 150ms opacity crossfade; drift disabled; reveals render final state.

## Microinteractions stance

- Links are typographic: drawn underline (scaleX, origin left) + arrow nudge; never pill buttons, never gradients.
- Keyboard parity for every hover affordance (`:focus-visible` shares the wash).
- Focus ring: 2px vermilion, offset 5px, appears instantly, never animated.
- Touch targets ≥ 44px. No cursor followers, no custom cursors, no parallax-on-scroll, no autonomous infinite loops, no bounce/overshoot.

## CTA voice

No buttons on this site — the CTA is the index row itself. Rows read: number · serif title · one-line note · `→`. Hover = ink wash + arrow. External project links repeat the underline + arrow language at small caps scale.

## Per-page allowances

- Home: enrichment = Tier-B hand-built SVG ink landscape (feTurbulence-displaced wash + stroke) + pure-CSS vermilion sun. Pointer drift allowed.
- Inner pages: typography and rules only; no landscape, no drift.
- Philosophy: closing seal stamp (`scale 1.25 → 1`, rotate settle, 420ms, once).

## What pages MUST share

Wordmark (`we` ink + `human` vermilion), paper/ink/vermilion tokens, the serif/sans pairing, hairline rule language, underline-draw link voice, the reveal family, header and footer.

## What pages MAY differ on

Row composition within the Ruled Archive family, hero presence (inner pages have none), which of the three motion primitives a page spends its budget on.

## Exports

### tokens.css

The canonical tokens live at the top of `src/styles/global.css` (`:root` block) —
same names as this table, plus the motion tokens above. `global.css` is the
single source of truth for values; this file is the contract.
