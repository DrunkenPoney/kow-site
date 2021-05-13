// noinspection NpmUsedModulesInstalled
import languages from '@/locales/languages'
import { createI18n } from 'vue-i18n'
import { nextTick, readonly } from 'vue'
import en from '@/locales/en.json'

// noinspection JSUnresolvedVariable
export const SUPPORTED_LOCALES = __WEBPACK_SUPPORTED_LOCALES__

export const i18n = setI18nLanguage(createI18n({
  locale: 'en',
  messages: { en }
}), 'en')

export function setI18nLanguage(i18n, locale) {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  } else {
    i18n.global.locale.value = locale
  }
  
  /**
   * NOTE:
   * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
   * The following is an example for axios.
   *
   * axios.defaults.headers.common['Accept-Language'] = locale
   */
  document.querySelector('html').setAttribute('lang', locale)
  
  return i18n
}

export async function loadLocaleMessages(i18n, locale) {
  // load locale messages with dynamic import
  const messages = await import(
    /* webpackChunkName: "locale-[request]" */ `@/locales/${locale}.json`)
  
  // set locale and locale message
  i18n.global.setLocaleMessage(locale, messages.default)
  
  return nextTick()
}

export { languages }

export default (app) => {
  app.use(i18n)
  app.config.globalProperties.$languages = readonly(languages)
}