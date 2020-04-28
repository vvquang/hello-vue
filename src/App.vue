<template>
  <div id="app" class="container">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./pages/Header";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

.container {
  width: 100%;
  height: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
