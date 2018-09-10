<template>
  <div class="section-swiper-group" v-if="isShow">
    <swiper :options="options" ref="mySwiper">
      <slot></slot>
      <div class="swiper-button-prev swiper-button-prev" slot="button-prev" v-if="isShow"></div>
      <div class="swiper-button-next swiper-button-next" slot="button-next" v-if="isShow"></div>
      <div class="swiper-pagination" slot="pagination"></div>
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
    props: ['swiperOption', 'total'],
    data() {
      return {
        primaryOptions: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          effect: "slide",
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          pagination: '.swiper-pagination',
          paginationClickable: true,
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      },
      options() {
        return Object.assign({}, this.primaryOptions, this.swiperOption)
      },
      isShow() {
        return this.total > this.primaryOptions.slidesPerView ? true : false;
      }
    },
    methods: {}
  }
</script>

<style lang="scss">
  /*轮播图*/
  .section-swiper-group {
    position: relative;
    /*padding: 0 50px;*/
    .swiper-container {
      width: 100%;
      height: 100%;
      position: static;
      .swiper-wrapper {
        display: flex;
        .swiper-slide {
          flex: 0 0 33.3%;
          box-sizing: border-box;
        }
      }
    }
  }
  .boxArea {
    &-small {
      .section-swiper-group{
        padding: 0;
        .swiper-pagination,.swiper-button-next, .swiper-button-prev {
          display: none;
        }
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

  /*轮播图前进后退图标*/
  .swiper-button-prev {
    background-image: url("./images/swiper-button-prev.png");
  }
  .swiper-button-next {
    background-image: url("./images/swiper-button-next.png");
  }
</style>
