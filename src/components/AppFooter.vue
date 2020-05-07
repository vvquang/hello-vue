<template>
  <footer class="footer">
    <div class="footer__content">
      <ul class="footer__content--items">
        <!-- <li><router-link :to="{ name: 'help' }">Help</router-link></li>
        <li><router-link :to="{ name: 'about' }">About</router-link></li> -->
        <li>
          <a :href="`/help`">Help </a>
        </li>
        <li>
          <a :href="`/about`">About</a>
        </li>
      </ul>
      <span class="footer__content--copyright">© 2020 1PAC Vietnam Co.,Ltd</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>
