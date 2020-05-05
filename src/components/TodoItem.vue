<template>
  <div class="todo-item">
    <div class="todo-item-content">
      <input type="checkbox" :checked="todo.completed" class="todo-item-checkbox" @change="handleCompleteItem" />
      <div>{{ index + 1 }}.</div>
      <div v-if="!editing" @dblclick="handleEditTodo" class="todo-item-label" :class="{ completed: todo.completed }">
        {{ todo.title }}
      </div>
      <input v-else class="todo-item-edit" type="text" :value="todo.title" @blur="handleDoneEdit" @keyup.enter="handleDoneEdit" @keyup.esc="handleCancelEdit" v-focus />
    </div>
    <div class="remove-item" @click="handleRemoveTodo(index)">
      &times;
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { REMVOVE_TODO, CHECK_ITEM_TODO, FINISH_EDIT_TODO } from '@/store/mutation-types'

export default {
  name: 'todo-item',

  props: {
    todo: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    checkAll: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      id: this.todo.id,
      editing: this.todo.editing,
      beforeEditCache: ''
    }
  },

  directives: {
    focus: {
      inserted: function(el) {
        el.focus()
      }
    }
  },

  methods: {
    ...mapMutations('todoList', [REMVOVE_TODO, CHECK_ITEM_TODO, FINISH_EDIT_TODO]),

    handleRemoveTodo(index) {
      this[REMVOVE_TODO](index)
    },

    handleEditTodo() {
      this.beforeEditCache = this.title
      this.editing = true
    },

    handleCompleteItem(e) {
      this[CHECK_ITEM_TODO]({
        id: this.todo.id,
        completed: e.target.checked
      })
    },

    handleDoneEdit(e) {
      this.editing = false

      this[FINISH_EDIT_TODO]({
        index: this.index,
        todo: {
          id: this.todo.id,
          title: e.target.value,
          completed: this.todo.completed
        }
      })
    },

    handleCancelEdit() {
      this.title = this.beforeEditCache
      this.editing = false
    }
  }
}
</script>
