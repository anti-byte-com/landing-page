import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importa os arquivos JSON de tradução como outros dados do projeto
import ptBR from '../locales/pt-BR/translation.json';
import enUS from '../locales/en-US/translation.json';

// Cria o formato esperado pelo i18next
const resources = {
  'pt-BR': {
    translation: ptBR,
  },
  'en-US': {
    translation: enUS,
  },
};

export async function loadLocale(locale: string): Promise<object> {
  // Retorna a tradução solicitada ou o fallback (en-US)
  return resources[locale] || resources['en-US'];
}

let initialized = false;

export async function initI18n() {
  if (initialized) return;
  
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'en-US',
      resources,
      detection: {
        order: ['localStorage', 'navigator', 'html'],
        caches: ['localStorage'],
        lookupLocalStorage: 'i18nextLng',
        lookupCookie: 'i18nextLng',
      },
      react: {
        useSuspense: false,
      },
      interpolation: {
        escapeValue: false,
      },
      returnNull: false,
      returnEmptyString: false,
      saveMissing: false,
      initPromise: i18n.init(),
    });
  
  initialized = true;
  return i18n;
}

export default i18n;

