import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '@/locale'

import './scss/main.scss'

import VueLodash from './lodash'

Vue.use(VueLodash)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
