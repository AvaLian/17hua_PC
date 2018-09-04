<template>
    <div class="cooperative">
      <section_swiper>
        <swiper-slide>
          <img class="swiper-slide-img" src="./images/100477778.png" alt="">
          <div class="swiper-slide-con">
            <div class="container">
              <h2>携手合作伙伴<br>共创未来</h2>
              <p>详情致电：400-128-1717</p>
            </div>
          </div>
        </swiper-slide>
      </section_swiper>

      <div class="section">
        <div class="container">
          <section_title>
            <span slot="title">合作伙伴遍布全球</span>
            <span slot="subtitle">中国、新加坡、加拿大、美国</span>
          </section_title>
          <img class="width100" src="./images/rectangle3.png" alt="合作伙伴遍布全球">
        </div>
      </div>

      <!--合作伙伴-->
      <div class="section">
        <div class="container">
          <section_title>
            <span slot="title">与合作伙伴共创未来</span>
            <span slot="subtitle">来自多领域的合作方式，建立强大企业纽带，让未来不设限！</span>
          </section_title>
          <section_coller></section_coller>
        </div>
      </div>
    </div>
</template>

<script>
    import section_swiper from '../subcomponent/section-swiper/section-swiper'
    import section_title from "../subcomponent/section-title"
    import section_coller from '../subcomponent/section-coller/section-coller'
    export default {
      name: "cooperative",
      components:{
        section_swiper,section_coller,section_title
      },
    }
</script>

<style lang="scss" scoped>

</style>
