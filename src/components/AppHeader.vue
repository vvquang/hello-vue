<template>
  <header class="header">
    <ul class="header__content">
      <li><router-link :to="{ name: 'home' }">Home</router-link></li>
      <li>
        <router-link :to="{ name: 'profile', params: { id: 123 } }">Profile</router-link>
      </li>
      <li><router-link :to="{ name: 'about' }">About</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
