<template>
  <div class="section-swiper">
      <swiper :options="options" ref="mySwiper" >
        <slot></slot>
        <!--<div class="swiper-button-prev swiper-button-prev" slot="button-prev" v-if="options.prevButton"></div>-->
        <!--<div class="swiper-button-next swiper-button-next" slot="button-next" v-if="options.prevButton"></div>-->
        <!--<div class="swiper-pagination" slot="pagination"></div>-->
      </swiper>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: "section-swiper",
    components: {
      swiper, swiperSlide
    },
    props: ['swiperOption'],
    data(){
      return{
        primaryOptions:{
          // autoplay: 8000,
          // speed: 3000,
          // loop: true,
          // effect: 'fade',
          notNextTick:true,
          autoplayDisableOnInteraction: false,
          pagination : null,
          // pagination: '.swiper-pagination',
          // paginationClickable: true,

          // prevButton:null,
          // nextButton:null,
        }
      }
    },
    computed:{
      swiper() {
        return this.$refs.mySwiper.swiper;
      },
      options(){
        return Object.assign({},this.primaryOptions,this.swiperOption)
      }
    },
    methods: {

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


  .swiper-button-prev{
    background-image: url("./images/swiper-button-prev.png");
  }
  .swiper-button-next{
    background-image: url("./images/swiper-button-next.png");
  }
</style>
