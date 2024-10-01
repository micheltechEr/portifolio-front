import i18n from 'i18next';

export const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
  localStorage.setItem('site-language', lng);
};

