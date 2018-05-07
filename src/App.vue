<template>
  <div id="app">

    <main-page></main-page>

    <!-- <router-view/> -->
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue'


export default {
  name: 'App',
  components: { MainPage },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

<style lang="scss">
html {
    font-size: 14px;
}
h2{
  font-size: 1.8rem;
}
h4{
  font-size: 1.15rem;
}

</style>
