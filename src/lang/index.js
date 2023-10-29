import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

function loadLocaleMessages() {
  const locales = import.meta.glob(`./locales/*.json`, {
    as: "raw",
    eager: true,
  });
  const messages = {};
  Object.keys(locales).forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = JSON.parse(locales[key]);
    }
  });
  return messages;
}

const LANGUAGE_CODES = {
  VI: 1,
  EN: 2,
  FR: 3,
};

const LANGUAGE_CODES_NAME = {
  VI: "VI",
  EN: "EN",
  FR: "FR",
};

export const getCurrentLanguage = () => {
  let currentLanguage = window.localStorage.getItem("lang");
  if (
    !currentLanguage ||
    currentLanguage !== "en" ||
    currentLanguage !== "fr"
  ) {
    currentLanguage = "vi";
  }

  return currentLanguage.toLowerCase();
};

let locale = navigator.language;
const i18n = new VueI18n({
  locale: window.localStorage.lang
    ? window.localStorage.lang
    : locale || LANGUAGE_CODES_NAME?.VI?.toLowerCase(),
  messages: loadLocaleMessages(),
  fallbackLocale: LANGUAGE_CODES_NAME?.VI?.toLowerCase(),
  silentFallbackWarn: true,
  globalInjection: true,
});

export { LANGUAGE_CODES, LANGUAGE_CODES_NAME };
export default i18n;
