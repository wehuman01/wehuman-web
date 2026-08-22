<div align="center">
  <h1>wehuman-web</h1>
  <p><strong>wehuman 官网 — AI 时代，更像人地工作。</strong></p>
  <p>Ink-wash themed static site built with Astro. Bilingual (EN / 中文).</p>
</div>

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
npm run preview  # preview the build
```

## Structure

- `src/pages/` — `/`, `/about` (EN) and `/zh/`, `/zh/about` (中文)
- `src/components/` — Header, Hero, Philosophy, ProjectLeaves, AboutPage, Footer, Seal, BrushStrokes
- `src/i18n/` — all site copy (`en.json` / `zh.json`)
- `DESIGN.md` — ink-wash design system (colors, typography, elements)

## Deploy

Push to `main` — GitHub Actions builds and deploys to GitHub Pages
(repo: `wehuman01/wehuman-web`). Custom domain: `www.wehuman.top` (`public/CNAME`).
