<template>
  <!--section-swiper组件:-->
  <!--必要传参total：swpier-slide个数（若只有1个无鼠标拖动；若大于1个swiper轮播效果,并显示分页）-->
  <!--可选传参swiperOption：swpier轮播效果个性化设置-->
  <div class="section-swiper">
    <swiper :options="options" ref="mySwiper">
      <slot></slot>
      <div class="swiper-pagination" slot="pagination" v-if="total>1"></div>
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
    props: ['swiperOption','total'],
    data(){
      return{
        primaryOptions:{
          notNextTick:true,
          autoplayDisableOnInteraction: false,
          pagination:".swiper-pagination",
          paginationClickable:true,
          simulateTouch : false,
        }
      }
    },
    computed:{
      swiper() {
        return this.$refs.mySwiper.swiper;
      },
      options(){
        //banner>1个，实现swiper滑动，并有分页
        if(this.total>1){
          this.primaryOptions.autoplay=8000;
          this.primaryOptions.speed=3000;
          this.primaryOptions.loop=true;
          this.primaryOptions.simulateTouch=true;
        }
        return Object.assign({},this.primaryOptions,this.swiperOption)
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
        height: auto;
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
  /*swiper分页*/
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

  /*swiper前进后退*/
  .swiper-button-prev{
    background-image: url("./images/swiper-button-prev.png");
  }
  .swiper-button-next{
    background-image: url("./images/swiper-button-next.png");
  }
</style>
