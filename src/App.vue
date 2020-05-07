<template>
  <div id="app" class="container">
    <AppHeader />
    <main class="container__content">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
// const AppHeader = () => import('./components/AppHeader')
// const AppFooter = () => import('./components/AppFooter')

export default {
  name: 'App',
  components: {
    AppHeader: () => import('./components/AppHeader'),
    AppFooter: () => import('./components/AppFooter')
  }
}
</script>
