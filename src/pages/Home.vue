<template>
  <div class="home-page">
    <h1>{{ msg }}</h1>
    <TodoList />
  </div>
</template>

<script>
// import TodoList from '@/components/TodoList'
const TodoList = () => import('@/components/TodoList')

export default {
  name: 'HomePage',
  data() {
    return {
      msg: 'Todo List'
    }
  },
  components: {
    TodoList
  }
}
</script>
