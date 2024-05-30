import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import laungageDetector from 'i18next-browser-languagedetector';
import uzTranslation from '../public/locales/uzbek.json'
import enTranslation from  '../public/locales/english.json'
import ruTranslation from  '../public/locales/russian.json'

i18n
.use(Backend)
// tilni aniqlab berish
.use(laungageDetector)
// bog'lash
.use(initReactI18next)
.init({
    fallbackLng :'uz',
    lng: i18n.language,
    debug:true,
    resources:{
        uz:{translation: uzTranslation},
        en:{translation: enTranslation},
        ru:{translation: ruTranslation}
    }
})

export default i18n;