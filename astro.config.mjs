// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wehuman01.github.io',
  base: '/wehuman-web',
  output: 'static',
  integrations: [sitemap()],
});
