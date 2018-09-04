<template>
  <div class="courseIntro">
    <section_swiper>
      <swiper-slide>
        <img class="swiper-slide-img" src="./images/DSC4172.jpg" alt="">
        <div class="swiper-slide-con">
          <div class="container">
            <h2>与国际接轨，联合国内外<br>艺术家研发课程</h2>
            <p>多元化教学，让学习充满趣味性</p>
          </div>
        </div>
      </swiper-slide>
    </section_swiper>

    <courseIntro_section1></courseIntro_section1>

    <courseIntro_section2></courseIntro_section2>
  </div>
</template>

<script>
  import section_swiper from '../subcomponent/section-swiper/section-swiper'
  import courseIntro_section1 from './courseIntro_section1/courseIntro_section1'
  import courseIntro_section2 from './courseIntro_section2/courseIntro_section2'
  export default {
    name: "courseIntro",
    components: {
      section_swiper,
      courseIntro_section1,
      courseIntro_section2
    }
  }
</script>

<style lang="scss" scoped>
</style>
