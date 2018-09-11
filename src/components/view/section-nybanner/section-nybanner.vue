<template>
  <section_swiper>
    <swiper-slide  v-if="topbanner && !custom">
      <img class="swiper-slide-img" :src="topbanner.img_url" alt="">
      <div class="swiper-slide-con">
        <div class="container">
          <h2 v-html="topbanner.first_title"></h2>
          <p>{{topbanner.second_title}}</p>
          <slot v-if="this.$slots"></slot>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide v-if="custom">
      <slot v-if="this.$slots"></slot>
    </swiper-slide>
  </section_swiper>

</template>

<script>
  import section_swiper from '../../subcomponent/section-swiper/section-swiper'
  export default {
    name: "section-nybanner",
    components: {
      section_swiper
    },
    props:{
      topbanner:Object,
      custom:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style scoped>

</style>
