import i18n from 'i18next';

export const changeLanguage = (language) => {
  i18n.changeLanguage(language);
  document.querySelector('html').setAttribute('lang',language)
};
