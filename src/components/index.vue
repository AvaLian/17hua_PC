<template>
  <div class="index">
    <!--轮播图-->
    <vbanner :content="bannerImg"></vbanner>

    <!--领先价值-->
    <div class="section exhibi">
      <div class="container">
        <div class="section-title">
          <h4 class="section-title-txt">打造行业领先价值</h4>
          <p :class="{'none':SCWTag>1}">开启创意绘画创造力、发挥绘画天性、在快乐中成长和学习</p>
        </div>
        <ul class="exhibition">
          <li class="exhibition-item" v-for="(e,i) in exhibition" :key="i">
            <img class="exhibition-item-img" :src="e.imgUrl" alt="">
            <p class="exhibition-item-txt" :style="{'background':e.bgColor}">{{e.des}}</p>
          </li>
        </ul>
      </div>
    </div>

    <!--教学理念-->
    <div class="section">
      <div class="container">
        <div class="section-title">
          <h4 class="section-title-txt">人性化教学理念</h4>
          <p :class="{'none':SCWTag>1}">优质的创意绘画教学、强大的师资力量、人性化的便民服务。</p>
        </div>
        <ul class="teachidea">
          <li class="teachidea-item" v-for="(e,i) in teachIdea" :key="i">
            <div class="teachidea-item-div teachidea-item-des">
              <img class="teachidea-item-des-icon" :src="e.iconUrl" alt="">
              <div class="teachidea-item-des-title" :style="{'color':e.color}">
                <h6>{{e.title}}</h6>
                <h6>{{e.subtitle}}</h6>
              </div>
              <p :class="{'none':SCWTag>1}">{{e.txt}}</p>
            </div>
            <div class="teachidea-item-div" :style="{'order':(i+1)%2?0:SCWTag>1?0:-1}">
              <img class="teachidea-item-img" :src="e.imgUrl" alt="">
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!--服务理念-->
    <div class="section section-1 satisfa"
         style="background: url('../../static/images/obj-img/IMG_5635.jpg') center/100%">
      <div class="container">
        <div class="section-title">
          <h4 class="section-title-txt">高质量的服务理念</h4>
          <p :class="{'none':SCWTag>1}">从服务效率到用户反馈，用最优质的服务让用户满意</p>
        </div>
        <vdigits :num="3"></vdigits>
      </div>
    </div>

    <!--教学课程-->
    <div class="section courses">
      <div class="container">
        <div class="section">
          <div class="section-title">
            <h4 class="section-title-txt">绘画课程体系标准</h4>
            <p :class="{'none':SCWTag>1}">专业课程体系标准</p>
          </div>
        </div>
        <vcourses></vcourses>
      </div>
    </div>

    <!--师资力量-->
    <div class="section" style="background: #f6f6f6">
      <div class="container">
        <div class="section-title">
          <h4 class="section-title-txt">严格筛选，组建强大师资</h4>
          <p :class="{'none':SCWTag>1}">淘沙式筛选，严格背景调查，千万名老师中挑选一位最优质的导师</p>
        </div>
        <vteacher></vteacher>
      </div>
    </div>

    <!--合作伙伴-->
    <div class="section coll">
      <div class="container">
        <div class="section-title">
          <h4 class="section-title-txt">与合作伙伴共创未来</h4>
          <p :class="{'none':SCWTag>1}">来自多领域的合作方式，建立强大企业纽带，让未来不设限！</p>
        </div>
        <vcoller></vcoller>
      </div>
    </div>

    <!--联系我们-->
    <div class="section section-1 contact"
         style="background: url('../../static/images/obj-img/DSC4172.jpg') center/100% no-repeat">
      <div class="container">
        <div class="section-title">
          <h4 class="section-title-txt">联系我们</h4>
          <p :class="{'none':SCWTag>1}">如果你有任何问题，我们将为你解答。如果你又需要任何帮助，我们将提供协助。</p>
          <p :class="{'none':SCWTag>1}">请随时联系我们！</p>
        </div>
        <vcontact></vcontact>
      </div>
    </div>

  </div>
</template>

<script>

  import vbanner from './subcomponent/vbroadcast'
  import vdigits from './subcomponent/vdigits'
  import vteacher from './subcomponent/vteacher'
  import vcourses from './subcomponent/vcourses'
  import vcontact from './subcomponent/vcontact'
  import vcoller from './subcomponent/vcoller'


  export default {
    name: "index",
    components: {
      vbanner, vdigits, vteacher, vcourses, vcontact,vcoller
    },
    computed: {
      screenWidth() {
        return this.$store.state.screenSize.w;
      },
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
          },
          {
            imgUrl: "../../static/images/obj-img/banner.jpg"
          },
          {
            imgUrl: "../../static/images/obj-img/banner.jpg"
          }
        ],
        exhibition: [
          {
            imgUrl: "../../static/images/obj-img/IMG_6309.jpg",
            des: "开启创造力",
            bgColor: "rgba(255,128,155,.8)"
          },
          {
            imgUrl: "../../static/images/obj-img/IMG_6219.jpg",
            des: "提高独立思考能力",
            bgColor: "rgba(248,193,64,.8)"
          },
          {
            imgUrl: "../../static/images/obj-img/IMG_6787.jpg",
            des: "提升亲情纽带关系",
            bgColor: "rgba(57,205,181,.8)"
          },
          {
            imgUrl: "../../static/images/obj-img/IMG_6750.jpg",
            des: "发挥孩子天性",
            bgColor: "rgba(189,117,243,.8)"
          },
          {
            imgUrl: "../../static/images/obj-img/DSC4231.jpg",
            des: "在快乐中成长、学习",
            bgColor: "rgba(58,194,232,.8)"
          },
          {
            imgUrl: "../../static/images/obj-img/WechatIMG35.jpg",
            des: "收获满意答卷",
            bgColor: "rgba(255,128,155,.8)"
          },
        ],
        teachIdea: [
          {
            iconUrl: "../../static/images/obj-img/rx-brush.png",
            color: "#fe425b",
            title: "优质绘画教学",
            subtitle: "账务绘画核心，解锁创造力",
            txt: "多种绘画教育方式，针对不同性格人群。专属定制创意绘画计划，帮助孩子打开创意世界的大门，解锁创造力。",
            imgUrl: "../../static/images/obj-img/rx-brush-img.jpg"
          },
          {
            iconUrl: "../../static/images/obj-img/rx-board.png",
            color: "#feae01",
            title: "国内外艺术家、教育家全力打造",
            subtitle: "获得多方位名师指导",
            txt: "17画酷拥有顶尖的师资力量，汇聚来自加拿大、美国、中国等艺术家和教育家，全力打造创意绘画课程。",
            imgUrl: "../../static/images/obj-img/rx-board-img.jpg"
          },
          {
            iconUrl: "../../static/images/obj-img/rx-brow.png",
            color: "#00b3e6",
            title: "服务便民，时间自由",
            subtitle: "无须出门就能享受绘画乐趣",
            txt: "自由选择上课时间和地点，用户可选择上门绘画教学，让孩子在家就能体验人性化的名师绘画教学。",
            imgUrl: "../../static/images/obj-img/rx-brow-img.jpg"
          }
        ],

      }
    },
    created() {

      // this.$http.get(this.$api.right).then(res=>{
      //   console.log("请求导师数据",res);
      // }).catch(err=>{
      //   console.log("err:",err);
      // })
    }

  }
</script>

<style lang="scss" scoped>
  .container {
    padding: 5%;
  }

  .boxArea {
    &-large {
      .exhibition-item, .coller-item {
        flex: 0 0 32%;
      }
      .teachidea-item-div {
        flex: 0 0 50%;
      }
      .teachidea-item-des {
        flex: 0 0 40%;
      }
    }
    &-middle {
      .exhibition-item {
        flex: 0 0 49%;
      }
      .coller-item, .teachidea-item-div {
        flex: 0 50%;
      }
      .teachidea-item-des {
        flex: 0 0 44%;
      }

    }
    &-small {
      .exhibition-item, .coller-item, .teachidea-item-div {
        flex: 0 0 100%;
      }
      .teachidea-item-des {
        display: flex;
        align-items: center;
        justify-content: center;
        &-icon {
          width: 44px;
          height: 44px;
          margin-right: 10px;
        }
        &-title {
          font-size: $FS20;
        }
      }
    }
  }

  /*领先价值*/
  .exhibi {
    .container {
      border-bottom: 1px solid $borderColor;
    }
    &tion {
      display: flex;
      flex-wrap: wrap;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-item {
        margin-top: 10px;
        border-radius: 10px;
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        &-img {
          width: 100%;
        }
        &-txt {
          width: 100%;
          height: 20%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: $FS18;
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }
    }
  }

  /*教学理念*/
  .teachidea {
    &-item {
      display: flex;
      flex-wrap: wrap;
      color: $f5AColor;
      line-height: 1.2;
      align-items: center;
      justify-content: space-between;
      font-size: $FS20;
      &-div {
        box-sizing: border-box;
      }
      &-des {
        &-icon {
          width: 64px;
          height: 64px;
        }
        &-title {
          margin: 20px 0;
          font-size: $FS24;
        }
      }
      &-img {
        width: 100%;
      }
      &:after {
        content: "";
        display: none;
        visibility: hidden;
        clear: both;
        height: 0;
      }
    }
  }


</style>

