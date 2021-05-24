import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';

const en = require('./en');
const es = require('./es');

i18n
  .use(RNLanguageDetector)
  .use(initReactI18next)
  .init({
    // debug: __DEV__,
    fallbackLng: 'en',
    resources: { en, es },
    interpolation: {
      escapeValue: false,
    },
  });
