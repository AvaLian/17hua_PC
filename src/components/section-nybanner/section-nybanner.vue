<template>
  <!--section-nybanner组件：-->
  <!--可选传参custom：swiper-slide是否自定义，默认false（若true还需配合传参total【swiper-slide个数】）-->
  <!--custom：默认false（规定样式并且swiper-slide只有一个，无鼠标拖动效果无滚动效果），需要传topbanner参数-->
  <!--custom：true ，需要传total参数（若为1个，无鼠标拖动无轮播效果；若大于1个有轮播效果和拖动）-->
  <div>
    <!--只有一张banner，内容为规定样式-->
    <section_swiper v-if="!custom" :swiperOption="{simulateTouch : false}" :total="1" :isBtnShow="isBtnShow" :isPaginShow="isPaginShow">
      <swiper-slide v-if="topbanner && !custom">
        <img class="swiper-slide-img" :src="topbanner.img_url" alt=""  style="height:auto;">
        <div class="swiper-slide-con">
          <div class="container">
            <h2 v-html="topbanner.first_title"></h2>
            <p>{{topbanner.second_title}}</p>
            <slot class="other" v-if="this.$slots"></slot>
          </div>
        </div>
      </swiper-slide>
    </section_swiper>

    <!--可以一张可以多张，swpier内容自定义-->
    <section_swiper v-if="this.$slots&&custom&&total" :total="total" :isBtnShow="isBtnShow" :isPaginShow="isPaginShow">
      <slot></slot>
    </section_swiper>
  </div>
</template>


<script>
  import section_swiper from '../section-swiper/section-swiper'

  export default {
    name: "section-nybanner",
    components: {
      section_swiper
    },
    props: {
      custom: {    //自定义内容,默认false
        type: Boolean,
        default: false
      },
      topbanner: Object, //规定样式数据，默认custorm为false必须传数据
      total:Number,  //swiper-slide个数（custom为true时必须传）
      isBtnShow: {
        type: Boolean,
        default: false
      },
      isPaginShow:{
        type: Boolean,
        default: true
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
      font-family: PingFangSC-Semibold,"Microsoft YaHei", sans-serif;
      font-weight: 700;
      line-height: 1.2;
    }
    p {
      font-size: $FS24;
      line-height: 1.2;
      font-family: PingFangSC-Regular,"Microsoft YaHei UI Light","Microsoft YaHei", sans-serif;
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
