<template>
  <div id="app">
    <app-nav />
    <router-view class="page mt-12 mx-auto ml-24 mr-24"/>
  </div>
</template>
<script>
  import AppNav from './components/AppNav'
  export default {
    components: { AppNav }
  }
</script>
<style lang="sass">
  @import "./assets/scss/tailwind.scss"
</style>