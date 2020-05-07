<template>
  <div class="todo-list">
    <input ref="inputNewTodo" type="text" class="todo-input" placeholder="What needs to be done" :value="newTodo" @change="handleChangeInput" @keyup.enter="handleAddTodo" />
    <ul>
      Todo List goes here:
      <transition-group name="fade" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
        <todo-item v-for="(todo, index) in todosFiltered" :key="todo.id" :todo="todo" :index="index" :checkAll="!anyRemaining"> </todo-item>
      </transition-group>

      <div v-if="todosIsEmpty">
        <div class="extra-container">
          <div>
            <label> <input type="checkbox" :checked="!anyRemaining" @change="handleCheckAllTodos" />Check All</label>
          </div>
          <div>{{ remaining }} items left incomplete</div>
        </div>

        <div class="extra-container">
          <div>
            <button ref="btnTodoAll" :class="{ active: filterTodos === 'all' }" @click="handleFilterTodos('all')">
              All
            </button>
            <button ref="btnTodoIncomplete" :class="{ active: filterTodos === 'incomplete' }" @click="handleFilterTodos('incomplete')">
              Incomplete
            </button>
            <button ref="btnTodoCompleted" :class="{ active: filterTodos === 'completed' }" @click="handleFilterTodos('completed')">
              Completed
            </button>
          </div>
          <div>
            <transition name="face">
              <button ref="btnClearCompleted" v-if="showClearCompletedButton" @click="clearCompleted">
                Clear Completed
              </button>
            </transition>
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem'
import { mapState, mapGetters, mapMutations } from 'vuex'
import { ADD_TODO, CHECK_ALL_TODO, CLEAR_COMPLETED_TODO, FILTER_TODOS } from '@/store/mutation-types'

export default {
  name: 'toto-list',

  components: {
    TodoItem
  },

  data() {
    return {
      newTodo: ''
    }
  },

  computed: {
    ...mapState('todoList', ['todos', 'filterTodos']),

    ...mapGetters('todoList', ['remaining', 'anyRemaining', 'todosFiltered', 'showClearCompletedButton', 'todosIsEmpty'])
  },

  methods: {
    ...mapMutations('todoList', [ADD_TODO, CHECK_ALL_TODO, FILTER_TODOS, CLEAR_COMPLETED_TODO]),

    // handles
    handleChangeInput(e) {
      this.newTodo = e.target.value
    },

    handleAddTodo() {
      this[ADD_TODO](this.newTodo)

      this.newTodo = ''
    },

    handleCheckAllTodos(e) {
      this[CHECK_ALL_TODO](e.target.checked)
    },

    handleFilterTodos(filterTodos) {
      this[FILTER_TODOS](filterTodos)
    },

    clearCompleted() {
      this[CLEAR_COMPLETED_TODO]()
    }
  }
}
</script>
