<template>
  <div class="advantage">

    <vbanner :swiperOption="swiperOption">
      <swiper-slide>
        <img class="swiper-slide-img" src="./images/IMG_2030.jpg" alt="">
        <div class="swiper-slide-con">
          <div class="container">
            <h2>成就绘画天才</h2>
            <p>专业绘画授课技巧，解锁你的创造力</p>
            <vbutton>立即报名</vbutton>
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
  import vbutton from '../subcomponent/s-btn'

  import advantage_section1 from './advantage_section1/advantage_section1'
  import advantage_section2 from './advantage_section2/advantage_section2'
  import advantage_section3 from './advantage_section3/advantage_section3'
  export default {
    name: "advantage",
    components: {
      advantage_section1, advantage_section2, advantage_section3,
      vbanner,vbutton
    },
    data() {
      return {
        swiperOption:{
          pagination : null
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
