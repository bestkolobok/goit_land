<template>
  <div id="app">
    <header></header>
    <main-page></main-page>

    <!-- <router-view/> -->
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: { MainPage, Header },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

<style lang="scss">

</style>
