import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://azamat.ai',
  integrations: [],
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    routing: {
      prefixDefaultLocale: true
    }
  }
});