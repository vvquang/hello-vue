import { ADD_TODO, REMVOVE_TODO, CHECK_ITEM_TODO, CHECK_ALL_TODO, CLEAR_COMPLETED_TODO, FINISH_EDIT_TODO, FILTER_TODOS } from '../mutation-types'

const state = {
  idForTodos: 3,
  filterTodos: 'all',
  todos: [
    {
      id: 1,
      title: 'Finish vue',
      completed: false
    },
    {
      id: 2,
      title: 'Take over world',
      completed: true
    }
  ]
}

const getters = {
  remaining: state => {
    return state.todos.filter(todo => !todo.completed).length
  },

  anyRemaining: state => {
    return state.remaining !== 0
  },

  todosFiltered: state => {
    if (state.filterTodos === 'all') {
      state.todos
    } else if (state.filterTodos === 'incomplete') {
      return state.todos.filter(todo => !todo.completed)
    } else if (state.filterTodos === 'completed') {
      return state.todos.filter(todo => todo.completed)
    }

    return state.todos
  },

  showClearCompletedButton: state => {
    return state.todos.filter(todo => todo.completed).length > 0
  },

  todosIsEmpty: state => {
    return state.todos.length
  }
}

const mutations = {
  [ADD_TODO](state, payload) {
    if (payload.trim().length === 0) {
      return
    }

    state.todos.push({
      id: state.idForTodos,
      title: payload,
      completed: false,
      editing: false
    })

    state.idForTodos++
  },

  [REMVOVE_TODO](state, payload) {
    state.todos.splice(payload, 1)
  },

  [CHECK_ITEM_TODO](state, payload) {
    state.todos.map(todo => (todo.id === payload.id ? (todo.completed = payload.completed) : todo))
  },

  [CHECK_ALL_TODO](state, payload) {
    state.todos.forEach(todo => (todo.completed = payload))
  },

  [CLEAR_COMPLETED_TODO](state) {
    state.todos = state.todos.filter(todo => !todo.completed)
  },

  [FINISH_EDIT_TODO](state, payload) {
    state.todos.splice(payload.index, 1, payload.todo)
  },

  [FILTER_TODOS](state, payload) {
    state.filterTodos = payload
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
