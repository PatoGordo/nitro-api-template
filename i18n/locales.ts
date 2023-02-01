import en from "./locales/en.json";
import pt from "./locales/pt.json";

import zodpt from "zod-i18n-map/locales/pt/zod.json";
import zoden from "zod-i18n-map/locales/en/zod.json";

export const locales: { [key in string]: unknown } = {
  en,
  pt,
  // This is the messages for zod i18n
  zod: {
    pt: zodpt,
    en: zoden,
  },
};
