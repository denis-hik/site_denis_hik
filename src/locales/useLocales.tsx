import {useMemo} from "react";
import {RootState} from "../store";
import {useSelector} from "react-redux";
import {ISettingsSliceState} from "../modal/context/reducer/settingsSlice";
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import appEn from './langs/appEn.json';
import appRu from './langs/appRu.json';
import {localStorageGetItem} from "../modal/functions/storage-available";

const lng = localStorageGetItem('i18nextLng', "en");

i18n
    .use(LanguageDetector)
    .init({
        resources: {
            en: { app: appEn },
            ru: { app: appRu },
        },
        lng,
        fallbackLng: 'en',
        debug: false,
        ns: ['app'],
        defaultNS: 'app',
        interpolation: {
            escapeValue: false,
        },
    });
export function useTranslate(baseTranslate?: string) {
    const lang = useSelector((state:RootState):ISettingsSliceState["lang"] => state.settings.lang)
    return useMemo(() => {
        i18n.changeLanguage(lang);
        return (t:string,k?:any):string => i18n.t(baseTranslate ?`${baseTranslate}${t}` : t ,k) as string
    },[i18n, lang])
}