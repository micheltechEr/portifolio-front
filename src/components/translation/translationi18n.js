import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './en/translation.json';
import translationPT from './pt/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  pt: {
    translation: translationPT
  }
};
const localLanguage = localStorage.getItem('site-language') || 'pt';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localLanguage,
    fallbackLng: ['en','pt'],
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
