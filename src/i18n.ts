import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importação direta dos arquivos JSON de tradução
import ptTranslation from '../public/locales/languages/pt.json';
import enTranslation from '../public/locales/languages/en.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
        pt: {
            translation: ptTranslation 
        },
        en: {
            translation: enTranslation
        }
        },
        lng: 'pt', // Idioma inicial padrão
        fallbackLng: 'pt',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;