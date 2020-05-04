<template>
  <footer class="app-footer">
    <div class="app-footer__content">
      <ul>
        <li><router-link :to="{ name: 'help' }">Help</router-link></li>
        <li><router-link :to="{ name: 'about' }">About</router-link></li>
      </ul>
      <span>© 2020 1PAC Vietnam Co.,Ltd</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>
