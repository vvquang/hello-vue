<template>
  <div class="home-page">
    <h1>Todo List</h1>
    <TodoList />
  </div>
</template>

<script>
const TodoList = () => import('@/components/TodoList')

export default {
  name: 'HomePage',

  components: {
    TodoList
  }
}
</script>
