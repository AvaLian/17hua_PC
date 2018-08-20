<template>
  <div class="advantage">

    <vbanner :content="bannerImg"></vbanner>

    <div class="section">
      <div class="container">
        <div class="section-title">
          <h4 class="section-title-txt">严选精英画师</h4>
          <p :class="{'none':SCWTag>1}">来自中国美院、上海美院，真正万中选一的好老师</p>
        </div>
        <img style="width: 100%" src="../../static/images/advantage/selectPro.jpg" alt="">
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
            <div class="contrast-item-img contrast-right-img">
              <img src="../../static/images/advantage/IMG_6725.png" alt="">
            </div>

            <ul class="contrast-item-list">
              <li v-for="e in ways.right">
                <i class="iconfont icon-dui"></i>
                <span>{{e}}</span>
              </li>
            </ul>
          </div>
          <div class="contrast-txt">
            <img src="../../static/images/logo.png" alt="">
            <p>VS</p>
            <p>其他绘画机构</p>
          </div>
          <div class="contrast-item contrast-wrong">
            <div class="contrast-item-img">
              <img src="../../static/images/advantage/500945286.png" alt="">
            </div>
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

  </div>
</template>

<script>
  import vbanner from './subcomponent/vbroadcast'
  import vteacher from './subcomponent/vteacher'

  export default {
    name: "advantage",
    components: {
      vbanner,vteacher
    },
    data(){
      return{
        bannerImg: [
          {
            imgUrl: "../../static/images/obj-img/banner.jpg"
          }
        ],
        ways:{
          right:["无时不刻1对1互动","导师人性化引导","孩子开心、快乐学习","提升自信心、人际交往能力","提高观察力和主动发现问题能力","有效提高创意思维和绘画能力"],
          wrong:["经常走神","人机绘画缺少交流","无聊、枯燥","没有人际交往能力、自信心下降","只能学到片面，不能深刻体会","死板教学，让孩子创意造成局限"]
        }
      }
    },
    computed:{
      SCWTag() {
        return this.$store.state.SCWTag;
      },
      tutors(){
        return this.$store.state.tutors;
      }
    },

  }
</script>

<style lang="scss" scoped>
  @import "../assets/style/icon.css";
  .container {
    padding: 5%;
  }

  .contrast{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    &-item{
      border: 1px solid $borderColor;
      &-img{
        border-radius: 8px;
        overflow: hidden;
      }
      border-radius: 8px;
      &-list{
        padding: 5%;
        line-height:2;
      }
      .iconfont{
        font-size: 20px;
        margin-right: 4px;
      }
    }
    &-txt{
      text-align: center;
    }
    &-right{
      box-shadow: 0 0 30px rgba(0,0,0,.3);
      &-img{
        box-shadow: 0 0 30px rgba(0,0,0,.3);
      }
      .iconfont{
        color:$themeColor;
      }
    }
    &-wrong{
      color:$f9EColor
    }
  }
</style>
