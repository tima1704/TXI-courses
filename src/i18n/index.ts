import i18next from "i18next";
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18next.use(I18NextHttpBackend).use(initReactI18next).init({ debug: true });

export default i18next;
