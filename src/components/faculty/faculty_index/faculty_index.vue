<template>
  <div class="faculty_index">
    <vbanner :swiperOption="swiperOption">
      <swiper-slide>
        <img class="swiper-slide-img" src="./images/rectangle3.png" alt="">
        <div class="swiper-slide-con">
          <div class="container">
            <h2>精英师资力量<br>定制专属名师来辅导</h2>
            <p>用实力打造最强团队力量</p>
          </div>
        </div>
      </swiper-slide>
    </vbanner>

    <div class="section section-bgColor">
      <div class="container">
        <vtitle>
          <span slot="title">精英画师三大标准</span>
          <span slot="subtitle">专业、经验、严格</span>
        </vtitle>
        <ul class="standard">
          <li class="standard-item" >
            <img class="width100" src="./images/icon1.png" alt="">
          </li>
          <li class="standard-item" >
            <img class="width100" src="./images/icon2.png" alt="">
          </li>
          <li class="standard-item" >
            <img class="width100" src="./images/icon3.png" alt="">
          </li>
        </ul>
        <!--<ul class="standard">-->
          <!--<li class="standard-item" v-for="(e,i) in standard" :key="i" >-->
            <!--<img :src="" alt="">-->
            <!--&lt;!&ndash;<div class="standard-item-bg" :style="{'background':e.bgColor}"></div>&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="standard-item-con">&ndash;&gt;-->
              <!--&lt;!&ndash;<i class="standard-item-con-icon" :class="e.icon"></i>&ndash;&gt;-->
              <!--&lt;!&ndash;<span>{{e.txt}}</span>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--</li>-->
        <!--</ul>-->
      </div>
    </div>

    <div class="section section-borderBottom">
      <div class="container">
        <vtitle>
          <span slot="title">资深团队，深耕教研</span>
          <span slot="subtitle">专注、创新、共享</span>
        </vtitle>
        <vteacher :data="tutors"></vteacher>
      </div>
    </div>
  </div>
</template>

<script>
  import vbanner from '../../subcomponent/vbroadcast/vbroadcast'
  import vteacher from '../../subcomponent/vteacher'
  import vtitle from "../../subcomponent/vtitle"
    export default {
        name: "faculty_index",
    components: {
      vbanner,vteacher,vtitle
    },
    computed: {
      tutors(){
        return this.$store.state.tutors;
      }
    },
    data() {
      return {
        swiperOption:{
          pagination : null
        },
        standard:[
          {
            icon:"icon-school",
            txt:"专业美院毕业",
            bgColor:"#4fc8ff"
          },
          {
            icon:"icon-hot",
            txt:"2年以上工作经验",
            bgColor:"#add597"
          },
          {
            icon:"icon-mirror",
            txt:"500:1严格筛选",
            bgColor:"#ffc13c"
          }
        ]

      }
    }
  }
</script>

<style lang="scss" scoped>
  .standard{
    display: flex;
    justify-content: space-between;
    color:$ffColor;
    &-item{
      position: relative;
      &-bg{
        width: 140px;
        height: 140px;
        border-radius: 20px;
        border:6px solid $ffColor;
        transform: rotate(45deg);
        box-sizing: border-box;
      }
      &-con{
        width: 100%;
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center ;
        margin-top: -10%;
        &-icon{
          width: 44px;
          height: 44px;
          display: inline-block;
          margin-bottom: 10%;
          background-position: center;
          background-size: 100%;
          background-repeat: no-repeat;
          &.icon-hot{
            background-image: url("./images/icon-hot.png");
          }
          &.icon-mirror{
            background-image: url("./images/icon-mirror.png");
          }
          &.icon-school{
            background-image: url("./images/icon-school.png");
          }
        }
      }
    }
  }


  .boxArea {
    &-small {
      .standard{
        &-item{
          flex: 0 0 32%;
          &-bg{
            width: 100%;
            transform: rotate(0);
            border:3px solid $ffColor;
          }
          &-con{
            box-sizing: border-box;
            padding: 0 5%;
            text-align: center;
          }
        }
      }
    }
  }

</style>

<style lang="scss">
  .vteacher-tutor-item{
    border:1px solid  $borderColor
  }
</style>
