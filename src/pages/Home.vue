<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Todo List",
    };
  },
  components: {
    TodoList,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  text-transform: uppercase;
}
</style>
