import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import todoList from './modules/todo-list'

Vue.use(Vuex)

const debug = process.env.NODE_ENV === 'development'

export default new Vuex.Store({
  modules: {
    todoList
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
