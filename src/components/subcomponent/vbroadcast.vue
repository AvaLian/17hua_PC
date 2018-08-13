<template>
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="(e,i) in content" :key="i">
      <img class="swiper-slide-img" :src="e.imgUrl" alt="">
      <div class="swiper-slide-con">
        I'm Slide {{i+1}}
      </div>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: "vbroadcast",
    components: {
      swiper, swiperSlide,
    },
    props: {
      swiperOption: {
        type: Object,
        default: function () {
          return {
            autoplay:8000,
            speed:3000,
            loop:true,
            effect:'fade',
            autoplayDisableOnInteraction : false,
            pagination : '.swiper-pagination',
            paginationClickable :true
          }
        }
      },
      content: {
        type: Array
      }
    }
  }
</script>

<style lang="scss" scoped>
  /*轮播图*/
  .swiper-container {
    width: 100%;
    .swiper-slide {
      position: relative;
      .swiper-slide-img {
        width: 100%;
      }
      .swiper-slide-con {
        position: absolute;
        left: 50%;
        top: 50%;
        transition: translate(-50%, -50%);
      }
    }
  }
</style>
<style lang="scss">
  /*轮播图锚点*/
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    border: 1px solid $themeColor;
    background: none;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    width: 20px !important;
    background: $themeColor;
  }
</style>
