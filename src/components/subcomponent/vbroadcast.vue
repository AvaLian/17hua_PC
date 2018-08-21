<template>
  <div class="banner">

      <swiper :options="swiperOption" >
        <slot></slot>
        <!--<swiper-slide v-for="(e,i) in content" :key="i">-->
          <!--&lt;!&ndash;<img class="swiper-slide-img" :src="e.imgUrl" alt="">&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="swiper-slide-con">&ndash;&gt;-->
            <!--&lt;!&ndash;I'm Slide {{i+1}}&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->

          <!--<slot></slot>-->
        <!--</swiper-slide>-->
        <div class="swiper-pagination" slot="pagination" v-if="isPage"></div>
      </swiper>


      <!--<swiper-slide v-else>-->
        <!--<smap></smap>-->
      <!--</swiper-slide>-->


  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'


  export default {
    name: "vbroadcast",
    components: {
      swiper, swiperSlide
    },
    props: {
      swiperOption: {
        type: Object,
        default: function () {
          return {
            autoplay: 8000,
            speed: 3000,
            loop: true,
            effect: 'fade',
            autoplayDisableOnInteraction: false,
            pagination: '.swiper-pagination',
            paginationClickable: true
          }
        }
      },
      content: {
        type: Array
      },
      isPage:{
        type:Boolean,
        default:true
      }
    }
  }
</script>

<style lang="scss" scoped>
  /*轮播图*/
  .swiper-container {
    width: 100%;
    height: 100%;
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
