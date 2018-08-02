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
    components: {vheader, vfooter}
  }
</script>

<style lang="scss" scoped>


</style>
