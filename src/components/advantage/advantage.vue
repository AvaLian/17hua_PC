<template>
  <div class="advantage">

    <vbanner :swiperOption="swiperOption">
      <swiper-slide>
        <img class="swiper-slide-img" src="./images/IMG_2030.jpg" alt="">
        <div class="swiper-slide-con">
          <div class="container">
            <h2>成就绘画天才</h2>
            <p>专业绘画授课技巧，解锁你的创造力</p>
            <vbutton>立即报名</vbutton>
          </div>
        </div>
      </swiper-slide>
    </vbanner>

    <div class="section">
      <div class="container">
        <div class="section-title">
          <h4 class="section-title-txt">严选精英画师</h4>
          <p :class="{'none':SCWTag>1}">来自中国美院、上海美院，真正万中选一的好老师</p>
        </div>
        <img style="width: 100%" src="./images/selectPro.jpg" alt="">
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

    <div class="section">
      <div class="container">
        <div class="section-title">
          <h4 class="section-title-txt">一对一绘画更有效</h4>
          <p :class="{'none':SCWTag>1}">人性化教学，针对不同孩子采用不同授课方式</p>
        </div>
        <div class="contrast">
          <div class="contrast-item contrast-right">
            <img class="contrast-item-img contrast-right-img" src="./images/IMG_6725.jpg" alt="">
            <ul class="contrast-item-list">
              <li v-for="e in ways.right">
                <i class="iconfont icon-dui"></i>
                <span>{{e}}</span>
              </li>
            </ul>
          </div>
          <div class="contrast-txt">
            <img src="../../../static/images/logo.png" alt="">
            <img src="./images/VS.png" alt="">
            <p class="contrast-txt-con">其他绘画机构</p>
          </div>
          <div class="contrast-item contrast-wrong">
            <img class="contrast-item-img" src="images/500945286.jpg" alt="">
            <ul class="contrast-item-list">
              <li v-for="e in ways.wrong">
                <i class="iconfont icon-cuo"></i>
                <span>{{e}}
              </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section section-1 xdxx">
      <div class="container">
        <div class="section-title section-title-ma0">
          <h4 class="section-title-txt">解锁你的创造力</h4>
          <p>17画酷让你脱颖而出，成为绘画天才</p>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <div class="section-title">
          <h4 class="section-title-txt">大数据为您定制专属服务</h4>
          <p :class="{'none':SCWTag>1}">从服务效率到用户反馈、用最高的满意度去服务客户</p>
        </div>
        <vdigits :num="3" :color="'#fe405c'" :up="false"></vdigits>
      </div>
    </div>


    <div class="section section-1 experience">
      <div class="container">
        <div class="section-title section-title-ma0">
          <h4 class="section-title-txt">VIP一对一创意绘画课程</h4>
          <div class="experience-btn">报名体验</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import vbanner from '../subcomponent/vbroadcast/vbroadcast'
  import vteacher from '../subcomponent/vteacher'
  import vdigits from '../subcomponent/vdigits'
  import vbutton from '../subcomponent/s-btn'

  export default {
    name: "advantage",
    components: {
      vbanner, vteacher,vdigits,vbutton
    },
    data() {
      return {
        swiperOption:{
          pagination : null
        },
        ways: {
          right: ["无时不刻1对1互动", "导师人性化引导", "孩子开心、快乐学习", "提升自信心、人际交往能力", "提高观察力和主动发现问题能力", "有效提高创意思维和绘画能力"],
          wrong: ["经常走神", "人机绘画缺少交流", "无聊、枯燥", "没有人际交往能力、自信心下降", "只能学到片面，不能深刻体会", "死板教学，让孩子创意造成局限"]
        }
      }
    },
    computed: {
      SCWTag() {
        return this.$store.state.SCWTag;
      },
      tutors() {
        return this.$store.state.tutors;
      }
    },

  }
</script>

<style lang="scss" scoped>
  @import "../../assets/style/icon.css";
  .xdxx{
    background: url("./images/DSC4230.jpg") center/100%;
  }
  .experience{
    background: url("./images/baTranig.jpg") center/100%;
  }
  /*一对一绘画更有效*/
  .contrast {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    &-txt {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: $f9EColor;
      &-con{
        font-size: $FS24;
        font-weight: 700;
      }
      img:nth-child(2){
        margin: 14% 0;
      }
    }
    &-item {
      border-radius: 8px;
      &-img {
        width: 100%;
        border-radius: 8px;
      }
      &-list {
        padding: 5%;
        line-height: 1.6;
      }
      .iconfont {
        font-size: $FS24;
        margin-right: 4px;
      }
    }
    &-right {
      box-shadow: 0 0 100px rgba(0, 0, 0, .3);
      &-img {
        box-shadow: 0 0 50px rgba(0, 0, 0, .3);
      }
      .iconfont {
        color: $themeColor;
      }
    }
    &-wrong {
      color: $f9EColor;
      border: 1px solid $borderColor;
    }
  }
  .boxArea{
    &-small{
      .contrast{
        flex-direction: column;
        &-right {
          box-shadow: 0 0 50px rgba(0, 0, 0, .3);
          &-img {
            box-shadow: 0 0 25px rgba(0, 0, 0, .3);
          }
        }
        &-txt{
          margin: 10% 0;
        }
      }
    }
  }


  .experience{
    &-btn{
      @include vbtn($themeColor,#fff)
    }
  }



</style>
