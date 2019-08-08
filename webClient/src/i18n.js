import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

let BASE_URL = '';
let PUBLIC_URL = '/ZLUX/plugins/com.rs.newton.experience/web';

if (process.env.NODE_ENV === 'production') {
  BASE_URL = PUBLIC_URL || '';
}

const xhrOptions = {
  loadPath: `${BASE_URL}/assets/i18n/locales/{{lng}}/{{ns}}.json`,
  crossDomain: false
};

i18n
// load translation using xhr -> see /public/locales
// learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,
    backend: xhrOptions,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    ns: ['translation', 'common', 'devops', 'admin'],
    defaultNS: 'translation',
    fallbackNS: 'translation',
    load: 'languageOnly'
  });

export default i18n;
