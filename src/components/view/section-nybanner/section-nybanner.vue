<template>
  <div>
  <section_swiper v-if="!custom">
    <swiper-slide v-if="topbanner && !custom">
      <img class="swiper-slide-img" :src="topbanner.img_url" alt="">
      <div class="swiper-slide-con">
        <div class="container">
          <h2 v-html="topbanner.first_title"></h2>
          <p>{{topbanner.second_title}}</p>
          <slot class="other" v-if="this.$slots"></slot>
        </div>
      </div>
    </swiper-slide>
  </section_swiper>

    <section_swiper v-if="this.$slots&&custom">
        <slot></slot>
    </section_swiper>
  </div>
</template>

<script>
  import section_swiper from '../../subcomponent/section-swiper/section-swiper'

  export default {
    name: "section-nybanner",
    components: {
      section_swiper
    },
    props: {
      topbanner: Object,
      custom: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  //banner内容公共样式
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      font-size: 60px;
      font-family: PingFangSC-Semibold;
      line-height: 1.2;
    }
    p {
      font-size: $FS24;
      line-height: 1.2;
      font-family: PingFangSC-Regular;
      margin-top:2%;
    }
  }

  .boxArea {
    &-small {
      .container {
        padding: 0 2%;
        box-sizing: border-box;
        h2 {
          font-size: $FS22;
        }
        p {
          font-size: $FS12;
        }
      }
    }
  }
</style>
