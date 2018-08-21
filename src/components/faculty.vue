<template>
    <div class="faculty">
      <vbanner :isPage="false">
        <swiper-slide>
          <img class="swiper-slide-img" src="../../static/images/obj-img/banner.jpg" alt="">
          <div class="swiper-slide-con">
            <div class="container">
              <h2>精英师资力量<br>定制专属名师来辅导</h2>
              <p>用实力打造最强团队力量</p>
            </div>
          </div>
        </swiper-slide>
      </vbanner>


      <div class="section" style="background: #eee">
        <div class="container">
          <div class="section-title">
            <h4 class="section-title-txt">精英画师三大标准</h4>
            <p :class="{'none':SCWTag>1}">专业、经验、严格</p>
          </div>
          <ul class="standard">
            <li class="standard-item" v-for="(e,i) in standard" :key="i" >
              <div class="standard-item-bg" :style="{'background':e.bgColor}"></div>
              <div class="standard-item-con">
                <i class="standard-item-con-icon" :style="{'background':'url('+e.icon+') center/100%' }"></i>
                <span>{{e.txt}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>


      <div class="section" style="border-bottom: 1px solid #eee;">
        <div class="container">
          <div class="section-title">
            <h4 class="section-title-txt">资深团队，深耕教研</h4>
            <p :class="{'none':SCWTag>1}">专注、创新、共享</p>
          </div>
          <vteacher :data="tutors"></vteacher>
        </div>
      </div>
    </div>
</template>

<script>
  import vbanner from './subcomponent/vbroadcast'
  import vteacher from './subcomponent/vteacher'
    export default {
        name: "faculty",
        components: {
          vbanner,vteacher
        },
        computed: {
          SCWTag() {
            return this.$store.state.SCWTag;
          },
          tutors(){
            return this.$store.state.tutors;
          }
        },
        data() {
          return {
            bannerImg: [
              {
                imgUrl: "../../static/images/obj-img/banner.jpg"
              }
            ],
            standard:[
              {
                icon:"../../static/images/faculty/icon-school.png",
                txt:"专业美院毕业",
                bgColor:"#4fc8ff"
              },
              {
                icon:"../../static/images/faculty/icon-hot.png",
                txt:"2年以上工作经验",
                bgColor:"#add597"
              },
              {
                icon:"../../static/images/faculty/icon-mirror.png",
                txt:"500:1严格筛选",
                bgColor:"#ffc13c"
              }
            ]

          }
        }
    }
</script>

<style lang="scss" scoped>
  /*.container {*/
    /*padding: 5%;*/
  /*}*/
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
