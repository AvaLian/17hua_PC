<template>
  <div id="app" :class="pageClass">
    <vheader></vheader>
    <transition name="fade">
      <router-view :class="{'app-content':isScroll || SCWTag}"></router-view>
    </transition>
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
        smallSCWidth:600,
        middleSCWidth:1200,
        screenWidth: document.body.clientWidth,
        screenHight: document.documentElement.clientHeight,
      }
    },
    created(){
      this.$store.commit('cScreenWidth', this.screenWidth);
      this.$store.commit('cScreenHight', this.screenHight);
      this.fw(this.screenWidth);
    },
    watch: {
      screenWidth (val) {
        if (!this.timer) {
          this.screenWidth = val;
          this.$store.commit('cScreenWidth', this.screenWidth);
          this.fw(this.screenWidth);
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
          this.fw(this.screenWidth);
        })()
      }
    },
    methods:{
      fw(width){
        if(width<this.smallSCWidth){
          this.$store.commit('cSCWTag', 2);
        }else if(width<=this.middleSCWidth){
          this.$store.commit('cSCWTag', 1);
        }else{
          this.$store.commit('cSCWTag', 0);
        }
      }
    },
    computed:{
      SCWTag(){
        return this.$store.state.SCWTag;
      },
      pageClass(){
        return this.$store.state.pageClass[this.$store.state.SCWTag];
      },
      isScroll(){
        return this.$store.state.isScroll;
      }
    }
  }
</script>

<style lang="scss" scoped>

  .boxArea{
    &-large{
      .app-content{
        padding-top:6rem;
      }
    }
    &-middle,&-small{
      .app-content{
        padding-top:5rem;
      }
    }
  }


</style>
