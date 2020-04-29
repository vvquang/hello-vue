<template>
  <div class="todo-item">
    <div class="todo-item-content">
      <input
        type="checkbox"
        v-model="completed"
        class="todo-item-checkbox"
        @change="handleDoneEdit"
      />
      <div>{{ index + 1 }}.</div>
      <div
        v-if="!editing"
        @dblclick="handleEditTodo"
        class="todo-item-label"
        :class="{ completed: completed }"
      >
        {{ title }}
      </div>
      <input
        v-else
        class="todo-item-edit"
        type="text"
        v-model="title"
        @blur="handleDoneEdit"
        @keyup.enter="handleDoneEdit"
        @keyup.esc="handleCancelEdit"
        v-focus
      />
    </div>
    <div class="remove-item" @click="handleRemoveTodo(index)">
      &times;
    </div>
  </div>
</template>

<script>
export default {
  name: "todo-item",

  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    checkAll: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      id: this.todo.id,
      title: this.todo.title,
      completed: this.todo.completed,
      editing: this.todo.editing,
      beforeEditCache: "",
    };
  },

  watch: {
    checkAll() {
      this.completed = this.checkAll ? true : this.todo.completed;
    },
  },

  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      },
    },
  },

  methods: {
    handleRemoveTodo(index) {
      this.$emit("removedTodo", index);
    },

    handleEditTodo() {
      this.beforeEditCache = this.title;
      this.editing = true;
    },

    handleDoneEdit() {
      if (this.title.trim() == "") {
        this.title = this.beforeEditCache;
      }
      this.editing = false;

      this.$emit("finishedEdit", {
        index: this.index,
        todo: {
          id: this.id,
          title: this.title,
          completed: this.completed,
          editing: this.editing,
        },
      });
    },

    handleCancelEdit() {
      this.title = this.beforeEditCache;
      this.editing = false;
    },
  },
};
</script>

<style scoped></style>
