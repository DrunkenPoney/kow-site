import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [ {
  path: '/',
  name: 'home',
  component: Home
}, {
  path: '/about',
  name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '@/views/About')
}, {
  path: '/guides/officers',
  name: 'Officers Guide',
  component: () => import(/* webpackChunkName: "guides-officers" */ '@/views/guides/Officers')
}, {
  path: '/guides/easy-troops-speed-ups',
  name: 'Easy Troop Speed Ups',
  component: () => import(/* webpackChunkName: "guides-easy-troop-speed-ups" */ '@/views/guides/EasyTroopSpeedUps')
}, {
  path: '/guides/march-speed',
  name: 'March Speed',
  component: () => import(/* webpackChunkName: "guides-march-speed" */ '@/views/guides/MarchSpeed')
}, {
  path: '/guides/win-poker',
  name: 'Win Poker',
  component: () => import(/* webpackChunkName: "guides-win-poker" */ '@/views/guides/WinPoker')
}, {
  path: '/guides/hq-requirements',
  name: 'HQ Requirements',
  component: () => import(/* webpackChunkName: "guides-hq-requirements" */ '@/views/guides/HQRequirements')
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
