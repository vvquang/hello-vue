<template>
  <div class="header">
    <ul class="header__content">
      <li><router-link :to="{ name: 'home' }">Home</router-link></li>
      <li>
        <router-link :to="{ name: 'profile', params: { id: 123 } }"
          >Profile</router-link
        >
      </li>
      <li><router-link :to="{ name: 'about' }">About</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #cac9c9;
}

.header__content {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  max-width: 936px;
}

ul {
  list-style-type: none;
}

li {
  padding-right: 16px;
}

a,
a:hover {
  text-decoration: none;
}
</style>
