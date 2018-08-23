<template>
  <div class="courseIntro">
    <vbanner :swiperOption="swiperOption">
      <swiper-slide>
        <img class="swiper-slide-img" src="./images/DSC4172.jpg" alt="">
        <div class="swiper-slide-con">
          <div class="container">
            <h2>与国际接轨，联合国内外<br>艺术家研发课程</h2>
            <p>多元化教学，让学习充满趣味性</p>
          </div>
        </div>
      </swiper-slide>
    </vbanner>

    <courseIntro_section1></courseIntro_section1>

    <courseIntro_section2></courseIntro_section2>
  </div>
</template>

<script>
  import vbanner from '../subcomponent/vbroadcast/vbroadcast'
  import courseIntro_section1 from './courseIntro_section1/courseIntro_section1'
  import courseIntro_section2 from './courseIntro_section2/courseIntro_section2'
  export default {
    name: "courseIntro",
    components: {
      vbanner,courseIntro_section1,courseIntro_section2
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
