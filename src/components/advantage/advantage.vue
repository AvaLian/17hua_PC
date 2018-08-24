<template>
  <div class="advantage">

    <vbanner :swiperOption="swiperOption">
      <swiper-slide>
        <img class="swiper-slide-img" src="./images/IMG_2030.jpg" alt="">
        <div class="swiper-slide-con">
          <div class="container">
            <h2>成就绘画天才</h2>
            <p>专业绘画授课技巧，解锁你的创造力</p>
            <vbtnInfo v-on:onShow="popupShow">立即报名</vbtnInfo>
            <vmessage :isShow="isShow" v-on:onHide="popupHide"></vmessage>
          </div>
        </div>
      </swiper-slide>
    </vbanner>


    <advantage_section1></advantage_section1>

    <advantage_section2></advantage_section2>

    <advantage_section3></advantage_section3>

  </div>
</template>

<script>
  import vbanner from '../subcomponent/vbroadcast/vbroadcast'


  import advantage_section1 from './advantage_section1/advantage_section1'
  import advantage_section2 from './advantage_section2/advantage_section2'
  import advantage_section3 from './advantage_section3/advantage_section3'
  import vbtnInfo from '../subcomponent/vbuttons/vbtn-info'
  import vmessage from '../subcomponent/vpopup/message/message'

  export default {
    name: "advantage",
    components: {
      advantage_section1, advantage_section2, advantage_section3,
      vbanner,vbtnInfo,vmessage
    },
    data() {
      return {
        swiperOption:{
          pagination : null
        },
        isShow:false
      }
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
