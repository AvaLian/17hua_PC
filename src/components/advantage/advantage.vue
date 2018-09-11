<template>
  <div class="advantage">
    <banner :topbanner="topbanner">
      <vbtnInfo v-on:onShow="popupShow">立即报名</vbtnInfo>
      <vmessage :isShow="isShow" v-on:onHide="popupHide"></vmessage>
    </banner>

    <advantage_section1></advantage_section1>

    <advantage_section2></advantage_section2>

    <advantage_section3></advantage_section3>

  </div>
</template>

<script>
  import banner from '../view/section-nybanner/section-nybanner'


  import advantage_section1 from './advantage_section1/advantage_section1'
  import advantage_section2 from './advantage_section2/advantage_section2'
  import advantage_section3 from './advantage_section3/advantage_section3'
  import vbtnInfo from '../subcomponent/section-aboutusbtn/section-aboutusbtn'
  import vmessage from '../subcomponent/section-aboutus/section-aboutus'

  export default {
    name: "advantage",
    components: {
      advantage_section1, advantage_section2, advantage_section3,
      banner,vbtnInfo,vmessage
    },
    computed:{
      topbanner(){
        return this.$store.state.advantage.topbanner
      }
    },
    data() {
      return {
        isShow:false
      }
    },
    created() {
      this.$store.cache.dispatch("dataAdvantage")
    },
    methods:{
      popupShow(data){
        this.isShow=data
      },
      popupHide(data){
        this.isShow=data
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
