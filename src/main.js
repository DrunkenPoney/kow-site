import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { installPlugins } from './plugins'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'flag-icon-css/css/flag-icon.css'
// import 'flag-icon-css/flags/4x3/'

import './assets/scss/main.scss'

const app = createApp(App)
app.use(router)
app.use({
  install() {
  
  }
})
installPlugins(app)
app.mount('#app')
