// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 개인 도메인을 붙이면 이 주소만 바꾸면 됩니다.
  site: 'https://novoodi.github.io',
  integrations: [sitemap()],
});
