// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../public/locales/en/common.json';
import translationJP from '../public/locales/jp/common.json';

export const createI18nInstance = (lng: string) => {
    const instance = i18n.createInstance();
    instance
        .use(initReactI18next)
        .init({
            resources: {
                en: { translation: translationEN },
                jp: { translation: translationJP },
            },
            lng,
            fallbackLng: 'en',
            interpolation: { escapeValue: false },
        });

    return instance;
};
