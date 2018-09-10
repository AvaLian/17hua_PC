<template>
  <div class="advantage">

    <section_swiper>
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
    </section_swiper>


    <advantage_section1></advantage_section1>

    <advantage_section2></advantage_section2>

    <advantage_section3></advantage_section3>

  </div>
</template>

<script>
  import section_swiper from '../subcomponent/section-swiper/section-swiper'


  import advantage_section1 from './advantage_section1/advantage_section1'
  import advantage_section2 from './advantage_section2/advantage_section2'
  import advantage_section3 from './advantage_section3/advantage_section3'
  import vbtnInfo from '../subcomponent/section-aboutusbtn/section-aboutusbtn'
  import vmessage from '../subcomponent/section-aboutus/section-aboutus'

  export default {
    name: "advantage",
    components: {
      advantage_section1, advantage_section2, advantage_section3,
      section_swiper,vbtnInfo,vmessage
    },
    data() {
      return {
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
