<template>
  <div class="courseIntro">
    <vbanner :isPage="false">
      <swiper-slide>
        <img class="swiper-slide-img" src="../../static/images/obj-img/banner.jpg" alt="">
        <div class="swiper-slide-con">
          <div class="container">
            <h2>与国际接轨，联合国内外<br>艺术家研发课程</h2>
            <p>多元化教学，让学习充满趣味性</p>
          </div>
        </div>
      </swiper-slide>
    </vbanner>

    <div class="section">
      <div class="container">
        <div class="section-title">
          <h4 class="section-title-txt">VTS视觉观察思考</h4>
          <p :class="{'none':SCWTag>1}">理解艺术、分析思考、引导讨论、4C能力</p>
        </div>
        <ul class="ability">
          <li class="ability-item" v-for="(e,i) in ability">
            <div class="ability-item-title">
              <i class="ability-item-title-icon" :style="{'background':'url('+e.icon+') center/100% no-repeat'}"></i>
              <span>{{e.txt}}</span>
            </div>
            <p class="ability-item-des">{{e.des}}</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="section" style="background: #eee;">
      <div class="container">
        <div class="section">
          <div class="section-title">
            <h4 class="section-title-txt">专业绘画课程体系</h4>
          </div>
        </div>
        <vcourses></vcourses>
      </div>
    </div>


    <div class="section">
      <div class="container">
        <div class="section-title">
          <h4 class="section-title-txt">轻松4步，开启创意世界的大门</h4>
          <p :class="{'none':SCWTag>1}">创意绘画，让你的世界更具色彩</p>
        </div>
        <ul class="step">
          <li class="step-item" v-for="(e,i) in step">
            <div class="step-item-bg" :style="{'background': e.bgColor}"></div>
            <div class="step-item-con">
              <i class="step-item-con-num">{{"0"+(i+1)}}</i>
              <span>{{e.txt}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="section" style="background: #eee;">
      <div class="container">
        <div class="section-title">
          <h4 class="section-title-txt">每一种创意绘画都有专属核心</h4>
          <p :class="{'none':SCWTag>1}">全面提升创意，你本来就是艺术家</p>
        </div>

        <div class="core">
          <div class="core-item core-img">
            <img src="../../static/images/courseIntro/IMG_6787.jpg" alt="">
          </div>
          <div class="core-item core-text core-text-1">
            <h5>创意绘画</h5>
            <p>提升孩子形和像的把控能力，融入创意的色彩，绘画不一样的作品。</p>
          </div>
          <div class="core-item core-img">
            <img src="../../static/images/courseIntro/IMG_6680.jpg" alt="">
          </div>
          <div class="core-item core-text core-text-2">
            <h5>创意甩酷</h5>
            <p>融入不同的绘画类型，让孩子懂得更多的创意模式。</p>
          </div>
          <div class="core-item core-img">
            <img src="../../static/images/courseIntro/IMG_6365.jpg" alt="">
          </div>
          <div class="core-item core-text  core-text-3">
            <h5>创意刮画</h5>
            <p>通过观察和思考，从抽象中去寻找具象化，全面提升观察能力和表达能力。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import vbanner from './subcomponent/vbroadcast'
  import vcourses from './subcomponent/vcourses'

  export default {
    name: "courseIntro",
    components: {
      vbanner, vcourses
    },
    computed: {
      SCWTag() {
        return this.$store.state.SCWTag;
      }
    },
    data() {
      return {
        bannerImg: [
          {
            imgUrl: "../../static/images/obj-img/banner.jpg"
          }
        ],
        ability: [
          {
            icon: "../../static/images/courseIntro/icon-broad.png",
            txt: "理解艺术",
            des: "通过17画酷的课程和画师的引导，让孩子全面的理解艺术的奥义，让孩子知道什么才是艺术。"
          },
          {
            icon: "../../static/images/courseIntro/icon-face.png",
            txt: "分析思考",
            des: "通过理解艺术的奥义，引导思考，并提升交流能力，培养自信心。"
          },
          {
            icon: "../../static/images/courseIntro/icon-chat.png",
            txt: "引导讨论",
            des: "画师通过孩子提出的问题进行针对性的专业回答，并且举一反三，全面的吸收多方面的内容。"
          },
          {
            icon: "../../static/images/courseIntro/icon-broad.png",
            txt: "4C能力",
            des: "增强判断性思维，提升绘画创造力，提高合作能力和甲流能力。"
          },
        ],
        step: [
          {
            txt: "在线预约",
            bgColor: "#ff5182"
          },
          {
            txt: "登记报名",
            bgColor: "#ffaf00"
          },
          {
            txt: "预约上课",
            bgColor: "#01b2e6"
          },
          {
            txt: "开启绘画",
            bgColor: "#fa5b33"
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  /*.container {*/
    /*padding: 5%;*/
  /*}*/

  .ability {
    display: flex;
    justify-content: space-between;
    &-item {
      flex: 0 0 22%;
      padding: 2%;
      border-radius: 10px;
      box-sizing: border-box;
      border: 1px solid $borderColor;
      &-title {
        display: flex;
        align-items: center;
        margin-bottom: 10%;
        font-size: $FS20;
        span {
          font-weight: bold;
          color: $fMColor;
        }
        &-icon {
          display: inline-block;
          width: 24px;
          height: 24px;
          margin-right: 10px;
        }
      }
      &-des {
        line-height: 1.6;
        color: $f5AColor;
      }
      &:nth-child(2) {
        box-shadow: 0 0 50px rgba(0, 0, 0, .1);
      }
      &:hover {
        box-shadow: 0 0 50px rgba(0, 0, 0, .1);
      }
    }
  }

  .step {
    display: flex;
    justify-content: space-between;
    &-item {
      position: relative;
      &-bg {
        width: 120px;
        height: 120px;
        border-radius: 20px;
        transform: rotate(45deg);
      }
      &-con {
        width: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        color: $ffColor;
        margin-top: -5%;
        &-num {
          font-style: normal;
          font-size: $FS30;
          font-weight: 700;
          margin-bottom: 5%;
        }
      }
      &:after {
        content: "";
        display: block;
        position: absolute;
        right: -130%;
        top: 50%;
        transform: translateY(-50%);
        width: 100px;
        height: 10px;
        border-radius: 10px;
        background: #b2e7f7;
      }
      &:last-child:after {
        display: none;
      }
    }
  }

  .core {
    display: flex;
    flex-wrap: wrap;
    border-radius: 10px;
    overflow: hidden;
    &-item {
      flex: 0 0 33.3%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-text {
      color: $ffColor;
      padding: 5%;
      box-sizing: border-box;
      position: relative;
      h5 {
        font-size: $FS24;
        margin-bottom: 10%;
        font-weight: 700;
      }
      p {
        line-height: 1.6;
      }
      $TriangleSize:20px;
      $firstbgColor:#8edbef;
      $secondbgColor:#ffaf00;
      $thirdbgColor:#01c468;
      &-1 {
        background: $firstbgColor;
        &:before {
          content: "";
          width: 0;
          height: 0;
          border-style: solid;
          border-width:$TriangleSize $TriangleSize $TriangleSize 0;
          border-color: transparent $firstbgColor transparent transparent;
          position: absolute;
          left: -$TriangleSize;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      &-2 {
        background: $secondbgColor;
        &:before {
          content: "";
          width: 0;
          height: 0;
          border-style: solid;
          border-width:$TriangleSize 0 $TriangleSize $TriangleSize;
          border-color: transparent transparent transparent $secondbgColor;
          position: absolute;
          right: -$TriangleSize;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      &-3 {
        background: $thirdbgColor;
        &:before {
          content: "";
          width: 0;
          height: 0;
          border-style: solid;
          border-width:0 $TriangleSize $TriangleSize;
          border-color: transparent transparent $thirdbgColor;
          position: absolute;
          left: 50%;
          top: -$TriangleSize;
          transform: translateX(-50%);
        }
      }
    }
  }


  .boxArea {
    &-middle {
    }
    &-small {
      .ability {
        flex-direction: column;
        &-item{
          flex: 0 0 100%;
          margin: 5% 0;
        }
      }
      .step{
        &-item{
          flex: 0 0 25%;
          &-bg{
            width: 100%;
            height: 100px;
            transform: rotate(0);
          }
          &:after{
            display: none;
          }
        }
      }
      .core{
        flex-direction: column;
        &-item{
          flex: 0 0 100%;
          &-bg{
            width: 100%;
            height: 100%;
          }
        }
        &-text{
          &:before{
            display: none;
          }
        }
      }
    }
  }
</style>
