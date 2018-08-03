<template>
  <div class="index">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    <div class="container">
      <!--<countup :time="100" :value="1"></countup>-->
    </div>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import countup from './ForIndex/vcountup'
  export default {
    name: "index",
    components: {
      swiper,swiperSlide, countup
    },
    data() {
      return {
        rollNumber:98,
        swiperOption: {
          autoplay:8000,
          speed:3000,
          loop:true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          // paginationType : 'custom',
          // paginationCustomRender: function (swiper, current, total) {
          //   const color="#fe405c";
          //   const activeWidth="20px";
          //   const normalWidth="10px";
          //   let paginationStyle = '';
          //   let html = '';
          //   let width = '';
          //   for (let i = 1; i <= total; i++) {
          //     i === current? width = activeWidth: width = normalWidth;
          //     paginationStyle = `border-width:1px;border-color:${color};opacity:1;margin-right:10px;width:${width};height:10px;background:${color};border-radius:10px;`
          //     html += `<span class="swiper-pagination-bullet" style=${paginationStyle}"></span>`
          //   }
          //   return html;
          // }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .swiper-container{
    width:100%;
    height:500px;
    .swiper-slide{
      width:100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: greenyellow;
    }
  }
</style>
<style lang="scss">
  .swiper-pagination-bullet{
    width:10px;
    height: 10px;
    border-radius: 10px;
    border:1px solid $themeColor;
    background: none;
    opacity: 1;
  }
  .swiper-pagination-bullet-active{
    width:20px !important;
    background: $themeColor;
  }
</style>
