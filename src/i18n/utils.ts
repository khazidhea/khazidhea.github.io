import { en, ru } from './translations';

export const languages = {
  en,
  ru
};

export type Language = keyof typeof languages;

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return 'en'; // Default language
}

export function useTranslations(lang: Language) {
  return function t(key: string): string {
    // Split the key by dots to navigate nested objects
    return key.split('.').reduce((obj, k) =>
      obj && obj[k] !== undefined ? obj[k] : key,
      languages[lang] as any
    );
  }
}

export function translatePath(newLang: Language, currentPath: string): string {
  const pathSegments = currentPath.split('/').filter(Boolean);
  const currentLang = pathSegments[0] in languages ? pathSegments[0] : '';

  if (currentLang) {
    // Replace language code in path
    return `/${newLang}/${pathSegments.slice(1).join('/')}`;
  } else {
    // Add language code to path
    return `/${newLang}/${pathSegments.join('/')}`;
  }
}