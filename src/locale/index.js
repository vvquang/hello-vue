import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './en.js'
import vi from './vi.js'
import ja from './ja.js'

Vue.use(VueI18n)

// const locale = window.initialStates().user.language || ''

export default new VueI18n({
  // locale: locale,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: en,
    vi: vi,
    ja: ja
  }
})
