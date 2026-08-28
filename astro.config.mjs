// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.wehuman.top',
  base: '/',
  output: 'static',
  integrations: [sitemap()],
});
