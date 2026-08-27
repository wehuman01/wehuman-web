# Changelog

## 0.5.0 - 2026-08-27

### Features

- Rebuild the site around one voice: a long-document structure, a single grotesk (Archivo, with Noto Sans SC for hanzi), one signal ink (ultramarine), hairline rules instead of cards.
- New ambient background: a quiet character rain on canvas that brightens, grows, and mutates around the pointer. Static under `prefers-reduced-motion` and data-saver.
- Dark and light modes. Follows the system preference on first visit, toggle in the masthead, choice remembered in `localStorage`, and set before first paint to avoid a flash.
- Leaner copy throughout; the homepage is now an index (statement, one paragraph, three destinations) and no longer duplicates research or article content.

### Fixes

- All internal links, assets, and the sitemap build against the `/wehuman-web` GitHub Pages base via a single `url()` helper.

## 0.1.0 - 2026-08-27

### Features

- Rebuild the wehuman website as a bilingual Astro site.
- Introduce an original rice-paper and ink-wash visual system with restrained motion.
- Present awedot, awewarm, and aweshare through one human-centred product narrative.
- Add responsive layouts, language preference, semantic navigation, reduced-motion support, and static SEO metadata.

### Security

- Use Astro 7.2.8 to avoid known vulnerabilities affecting earlier Astro, esbuild, and sharp releases.
- State aweshare's plaintext trusted-hub boundary directly in both languages.

### Fixes

- Build links, assets, language redirects, and canonical URLs against the live `/wehuman-web` GitHub Pages base.
