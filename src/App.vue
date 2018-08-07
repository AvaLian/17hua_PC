<template>
  <div id="app">
    <vheader></vheader>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <vfooter></vfooter>
  </div>
</template>

<script>
  import vheader from "./components/ForIndex/vheader"
  import vfooter from "./components/ForIndex/vfooter"

  export default {
    name: 'App',
    components: {vheader, vfooter},
    screenWidth: document.body.clientWidth,
    screenHight: document.documentElement.clientHeight
  }
</script>

<style lang="scss" scoped>


</style>
