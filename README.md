# wehuman-web

The bilingual website for [wehuman](https://wehuman01.github.io/wehuman-web/): calm AI tools that leave room for being human.

## What it presents

- **awedot** — remember and resume AI agent sessions.
- **awewarm** — keep supported coding-plan windows ready for a human work rhythm.
- **aweshare** — relay authorised, idle AI capability through a self-hosted hub.

The site is intentionally static and light. Astro renders complete English and Chinese HTML at build time; a small browser script only remembers language preference and adds optional, reduced-motion-aware reveals.

## Development

Requires Node.js 22 or later.

```bash
npm install
npm run dev
```

Production validation:

```bash
npm run build
```

The production build uses the GitHub project Pages base `/wehuman-web`: English is generated at `/wehuman-web/`, and Chinese at `/wehuman-web/zh/`.

## Design

The visual system combines editorial spacing with East Asian ink-wash restraint: warm rice paper, a continuous ink river, and one vermilion accent. Readability and accessibility take priority over decoration.

See [the design specification](docs/superpowers/specs/2026-08-27-wehuman-website-design.md) for the full rationale and acceptance criteria.
