import { locales } from "./locales";

let lang: null | string = null;
const fallbackLang = "en";

export const setLang = (_lang: string) => {
  if ((Object.keys(locales).includes(_lang) && !lang) || lang !== _lang) {
    lang = _lang;
    return;
  }

  if (!lang) {
    lang = fallbackLang;
  }
};

export const getLang = () => {
  return lang;
};

// $st stands for $serverTranslation
export const $st = (string: string) => {
  const tokenize = string.split(".");

  if (!tokenize.length) {
    return locales[lang || fallbackLang];
  } else {
    const res = getDescendantProp(locales[lang || fallbackLang], string);
    const fallbackRes = getDescendantProp(locales[fallbackLang], string);

    return res || fallbackRes || string;
  }
};

// $zt stands for $zodTranslation
export const $zt = (string: string) => {
  const tokenize = string.split(".");

  if (!tokenize.length) {
    return locales.zod[lang || fallbackLang];
  } else {
    const res = getDescendantProp(locales.zod[lang || fallbackLang], string);
    const fallbackRes = getDescendantProp(locales.zod[fallbackLang], string);

    return res || fallbackRes || string;
  }
};

function getDescendantProp(obj: any, string: string) {
  try {
    return string.split(".").reduce((a, b) => a[b], obj);
  } catch (error) {
    return undefined;
  }
}
