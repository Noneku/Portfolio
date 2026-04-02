import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslations from './translations/en.json'
import frTranslations from './translations/fr.json'

/**
 * i18n configuration for the portfolio
 * Supports English and French with localStorage persistence
 */
const resources = {
  en: { translation: enTranslations },
  fr: { translation: frTranslations },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already prevents XSS
    },
  })

/**
 * Custom hook to handle language changes
 * Persists selected language to localStorage
 */
export const changeLanguage = (lang: 'en' | 'fr'): void => {
  i18n.changeLanguage(lang)
  localStorage.setItem('language', lang)
}

export default i18n
