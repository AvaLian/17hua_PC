<template>
  <div id="app">
    <vheader></vheader>
    <!--<transition name="fade">-->
      <!--<router-view></router-view>-->
    <!--</transition>-->
    <vfooter></vfooter>
  </div>
</template>

<script>
  import vheader from "./components/subcomponent/vheader"
  import vfooter from "./components/subcomponent/vfooter"

  export default {
    name: 'App',
    components: {vheader, vfooter},
    data(){
      return{
        screenWidth: document.body.clientWidth,
        screenHight: document.documentElement.clientHeight,
      }
    },
    created(){
      this.$store.commit('cScreenWidth', this.screenWidth);
      this.$store.commit('cScreenHight', this.screenHight);
    },
    watch: {
      screenWidth (val) {
        if (!this.timer) {
          this.screenWidth = val;
          this.$store.commit('cScreenWidth', this.screenWidth);
          this.timer = true;
          let that = this;
          setTimeout(function() {
            that.timer = false
          }, 400)
        }
      },
      screenHight(val) {
        if (!this.timerr) {
          this.screenHight = val;
          this.$store.commit('cScreenHight', this.screenHight);
          this.timerr = true;
          let that = this;
          setTimeout(function() {
            that.timerr = false;
          }, 400)
        }
      }
    },
    mounted(){
      const that = this
      window.onresize = () => {
        return (() => {
          that.screenWidth = window.screenWidth = document.body.clientWidth;
          that.screenHight = window.screenHight = document.documentElement.clientHeight+60;
          this.$store.commit('cScreenWidth', this.screenWidth);
          this.$store.commit('cScreenHight', this.screenHight);
        })()
      }
    }
  }
</script>

<style lang="scss" scoped>


</style>
