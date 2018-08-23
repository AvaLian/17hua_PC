<template>
  <div class="advantage_section2 section">
      <div class="container">
        <vtitle>
          <span slot="title">一对一绘画更有效</span>
          <span slot="subtitle">人性化教学，针对不同孩子采用不同授课方式</span>
        </vtitle>
        <div class="contrast">
          <div class="contrast-item contrast-right boxRadius">
            <img class="contrast-item-img contrast-right-img boxRadius width100" src="./images/IMG_6725.jpg" alt="">
            <ul class="contrast-item-list">
              <li v-for="e in ways.right">
                <i class="iconfont icon-dui"></i>
                <span>{{e}}</span>
              </li>
            </ul>
          </div>
          <div class="contrast-txt">
            <img src="../../../../static/images/logo.png" alt="">
            <img src="./images/VS.png" alt="">
            <p class="contrast-txt-con">其他绘画机构</p>
          </div>
          <div class="contrast-item contrast-wrong boxRadius">
            <img class="contrast-item-img boxRadius width100" src="./images/500945286.jpg" alt="">
            <ul class="contrast-item-list">
              <li v-for="e in ways.wrong">
                <i class="iconfont icon-cuo"></i>
                <span>{{e}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import vtitle from "../../subcomponent/vtitle"
  export default {
    name: "advantage_section2",
    components:{
      vtitle
    },
    data() {
      return {
        ways: {
          right: ["无时不刻1对1互动", "导师人性化引导", "孩子开心、快乐学习", "提升自信心、人际交往能力", "提高观察力和主动发现问题能力", "有效提高创意思维和绘画能力"],
          wrong: ["经常走神", "人机绘画缺少交流", "无聊、枯燥", "没有人际交往能力、自信心下降", "只能学到片面，不能深刻体会", "死板教学，让孩子创意造成局限"]
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/style/icon.css";
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
      &-con {
        font-size: $FS24;
        font-weight: 700;
      }
      img:nth-child(2) {
        margin: 14% 0;
      }
    }
    &-item {
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

  .boxArea {
    &-small {
      .contrast {
        flex-direction: column;
        &-right {
          box-shadow: 0 0 50px rgba(0, 0, 0, .3);
          &-img {
            box-shadow: 0 0 25px rgba(0, 0, 0, .3);
          }
        }
        &-txt {
          margin: 10% 0;
        }
      }
    }
  }
</style>
