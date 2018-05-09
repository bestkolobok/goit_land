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
h1{
  font-size: 2.6rem;
  color: $main-black;
}
h2{
  font-size: 1.8rem;
  color: $main-black;
}
h3{
  font-size: 1.43rem;
  color: $main-black;
}
h4{
  font-size: 1.14rem;
  color: $main-black;
}
h5{
  font-size: 1rem;
  color: $main-black;
}
p{
  font-size: 1rem;
  color: $main-black;
}
</style>
