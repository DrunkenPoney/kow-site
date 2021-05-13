import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import { loadLocaleMessages, setI18nLanguage, i18n, languages } from '@/plugins/i18n'

const routes = [{
  name: 'home',
  path: '/:lang([a-z]{2})?',
  component: Home,
}, {
  name: 'about',
  path: '/:lang([a-z]{2})?/about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '@/views/About')
}, {
  name: 'guides_officers',
  path: '/:lang([a-z]{2})?/guides/officers',
  component: () => import(/* webpackChunkName: "guides_officers" */ '@/views/guides/Officers')
}, {
  name: 'guides_easy-troop-speed-ups',
  path: '/:lang([a-z]{2})?/guides/easy-troops-speed-ups',
  component: () => import(/* webpackChunkName: "guides_easy-troop-speed-ups" */ '@/views/guides/EasyTroopSpeedUps')
}, {
  name: 'guides_march-speed',
  path: '/:lang([a-z]{2})?/guides/march-speed',
  component: () => import(/* webpackChunkName: "guides_march-speed" */ '@/views/guides/MarchSpeed')
}, {
  name: 'guides_win-poker',
  path: '/:lang([a-z]{2})?/guides/win-poker',
  component: () => import(/* webpackChunkName: "guides_win-poker" */ '@/views/guides/WinPoker')
}, {
  name: 'guides_hq-requirements',
  path: '/:lang([a-z]{2})?/guides/hq-requirements',
  component: () => import(/* webpackChunkName: "guides_hq-requirements" */ '@/views/guides/HQRequirements')
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// navigation guards
router.beforeEach(async (to, from, next) => {
  const lang = to.params.lang
  console.log(lang, i18n.locale)
  
  // use current locale if lang is not a supported language
  if (!(lang in languages)) {
    return next(`/${i18n.locale}`)
  }
  
  // load locale messages
  if (!i18n.global.availableLocales.includes(lang)) {
    await loadLocaleMessages(i18n, lang)
  }
  
  // set i18n language
  setI18nLanguage(i18n, lang)
  
  return next()
})()

export default router
