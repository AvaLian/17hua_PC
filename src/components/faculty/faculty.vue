<template>
  <transition name="fade">
    <router-view :class="{'app-content':isScroll || SCWTag}"></router-view>
  </transition>
</template>

<script>
  export default {
    computed: {
      SCWTag() {
        return this.$store.state.SCWTag;
      },
      // pageClass() {
      //   return this.$store.state.pageClass[this.$store.state.SCWTag];
      // },
      isScroll() {
        return this.$store.state.isScroll;
      }
    }
  }
</script>


