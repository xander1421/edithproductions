import i18n from 'i18next';
import Backend from 'i18next-xhr-backend'
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    detection: {
      order: ["path", "localStorage", "htmlTag", "cookie"],
      caches: ["localStorage", "cookie"], // cache user language on
    },
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;