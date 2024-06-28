import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationGR from "./gr-GR.json"
import translationEN from "./en-US.json"

// Initialize i18next
i18n
  .use(initReactI18next) // Bind react-i18next to i18next
  .init({
    resources: {
      GR: {
        translation: translationGR, // Greek translation
      },
      EN: {
        translation: translationEN, // English translation
      },
    },
    lng: 'GR', // Default language
    fallbackLng: 'EN', // Fallback language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;