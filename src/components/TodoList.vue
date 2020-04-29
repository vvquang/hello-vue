<template>
  <div class="todo-list">
    <input
      type="text"
      class="todo-input"
      placeholder="What needs to be done"
      v-model="newTodo"
      @keyup.enter="handleAddTodo"
    />
    <ul>
      Todo List goes here:
      <transition-group
        name="fade"
        enter-active-class="animated fadeInUp"
        leave-active-class="animated fadeOutDown"
      >
        <li
          v-for="(todo, index) in todosFiltered"
          :key="todo.id"
          class="todo-item"
        >
          <div class="todo-item-content">
            <input
              type="checkbox"
              v-model="todo.completed"
              class="todo-item-checkbox"
            />
            <div>{{ index }}.</div>
            <div
              v-if="!todo.editing"
              @dblclick="handleEditTodo(todo)"
              class="todo-item-label"
              :class="{ completed: todo.completed }"
            >
              {{ todo.title }}
            </div>
            <input
              v-else
              class="todo-item-edit"
              type="text"
              v-model="todo.title"
              @blur="handleDoneEdit(todo)"
              @keyup.enter="handleDoneEdit(todo)"
              @keyup.esc="handleCancelEdit(todo)"
              v-focus
            />
          </div>
          <div class="remove-item" @click="handleRemoveTodo(index)">
            &times;
          </div>
        </li>
      </transition-group>

      <div class="extra-container">
        <div>
          <label>
            <input
              type="checkbox"
              :checked="!anyRemaining"
              @change="handleCheckAllTodos"
            />Check All</label
          >
        </div>
        <div>{{ remaining }} items left</div>
      </div>

      <div class="extra-container">
        <div>
          <button :class="{ active: filter === 'all' }" @click="filter = 'all'">
            All
          </button>
          <button
            :class="{ active: filter === 'active' }"
            @click="filter = 'active'"
          >
            Active
          </button>
          <button
            :class="{ active: filter === 'completed' }"
            @click="filter = 'completed'"
          >
            Completed
          </button>
        </div>
        <div>
          <transition name="face">
            <button v-if="showClearCompletedButton" @click="clearCompleted">
              Clear Completed
            </button>
          </transition>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "toto-list",
  data() {
    return {
      newTodo: "",
      idForTodos: 3,
      beforeEditCache: "",
      filter: "all",
      todos: [
        {
          id: 1,
          title: "Finish vue",
          completed: false,
          editing: false,
        },
        {
          id: 2,
          title: "Take over world",
          completed: true,
          editing: false,
        },
      ],
    };
  },
  computed: {
    remaining() {
      return this.todos.filter((todo) => !todo.completed).length;
    },
    anyRemaining() {
      return this.remaining !== 0;
    },
    todosFiltered() {
      if (this.filter === "all") {
        this.todos;
      } else if (this.filter === "active") {
        return this.todos.filter((todo) => !todo.completed);
      } else if (this.filter === "completed") {
        return this.todos.filter((todo) => todo.completed);
      }

      return this.todos;
    },
    showClearCompletedButton() {
      return this.todos.filter((todo) => todo.completed).length > 0;
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
    handleAddTodo() {
      if (this.newTodo.trim().length === 0) {
        return;
      }

      this.todos.push({
        id: this.idForTodos,
        title: this.newTodo,
        completed: false,
        editing: false,
      });

      this.newTodo = "";
      this.idForTodos++;
    },
    handleEditTodo(todo) {
      this.beforeEditCache = todo.title;
      todo.editing = true;
    },
    handleDoneEdit(todo) {
      if (todo.title.trim() === "") {
        todo.title = this.beforeEditCache;
      }
      todo.editing = false;
    },
    handleCancelEdit(todo) {
      todo.title = this.beforeEditCache;
      todo.editing = false;
    },
    handleRemoveTodo(index) {
      // this.todos.filter((item) => item.id !== index + 1);
      this.todos.splice(index, 1);
    },
    handleCheckAllTodos() {
      this.todos.forEach((todo) => (todo.completed = event.target.checked));
    },
    clearCompleted() {
      this.todos = this.todos.filter((todo) => !todo.completed);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");

.todo-list {
  width: 100%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
}

.todo-input {
  width: 100%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;

  &:focus {
    outline: 0;
  }
}

.todo-item {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px dashed rgb(33, 252, 161);
  animation-duration: 0.3s;
}

.todo-item-content {
  display: flex;
  align-items: center;
}

.todo-item-checkbox {
  margin-right: 24px;
}

.remove-item {
  cursor: pointer;
  margin-left: 14px;
  &:hover {
    color: black;
  }
}

.todo-item-label {
  padding: 10px;
  border: 1px solid white;
  // margin-left: 0px;
}

.todo-item-edit {
  font-size: 24px;
  color: #2c3e50;
  margin-left: 12px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;

  &:focus {
    outline: none;
  }
}

.completed {
  text-decoration: line-through;
  color: gray;
}

.extra-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  border-top: 1px solid lightgray;
  padding-top: 14px;
  margin-bottom: 14px;
}

button {
  font-size: 14px;
  background-color: white;
  appearance: none;

  &:hover {
    background: lightgreen;
  }

  &:focus {
    outline: none;
  }
}

.active {
  background: lightgreen;
}

// CSS Transitions
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
