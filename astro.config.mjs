import { defineConfig } from 'astro/config';

export default defineConfig({
  // site: 'https://azamat.ai',
  site: 'https://khazidhea.github.io',
  base: '/',
  integrations: [],
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    routing: {
      prefixDefaultLocale: true
    }
  },
  build: {
    assetsPrefix: '/',
  }
});