<template>
  <div class="index_section2 section">
    <div class="container">
      <vtitle>
        <span slot="title">人性化服务理念</span>
        <span slot="subtitle">优质的创意绘画教学、强大的师资力量、人性化的便民服务</span>
      </vtitle>
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
</template>

<script>
  import vtitle from "../../subcomponent/section-title"
  export default {
    name: "index_section2",
    components:{
      vtitle
    },
    computed:{
      SCWTag(){
        return this.$store.state.SCWTag;
      }
    },
    data() {
      return {
        teachIdea: [
          {
            iconUrl: require("./images/01.png"),
            color: "#ff405c",
            title: "优质绘画教学",
            subtitle: "账务绘画核心，解锁创造力",
            txt: "多种绘画教育方式，针对不同性格人群。专属定制创意绘画计划，帮助孩子打开创意世界的大门，解锁创造力。",
            imgUrl: require("./images/04.png")
          },
          {
            iconUrl: require("./images/02.png"),
            color: "#ffaf00",
            title: "国内外艺术家、教育家全力打造",
            subtitle: "获得多方位名师指导",
            txt: "17画酷拥有顶尖的师资力量，汇聚来自加拿大、美国、中国等艺术家和教育家，全力打造创意绘画课程。",
            imgUrl: require("./images/05.png")
          },
          {
            iconUrl: require("./images/03.png"),
            color: "#00b3e7",
            title: "服务便民，时间自由",
            subtitle: "无须出门就能享受绘画乐趣",
            txt: "自由选择上课时间和地点，用户可选择上门绘画教学，让孩子在家就能体验人性化的名师绘画教学。",
            imgUrl: require("./images/06.png")
          }
        ],
      }
    }
  }
</script>

<style lang="scss" scoped>
  /*教学理念*/
  .teachidea {
    &-item {
      display: flex;
      flex-wrap: wrap;
      color: $f5AColor;
      line-height: 1.2;
      align-items: center;
      justify-content: space-between;
      font-size: $FS24;
      &-div {
        box-sizing: border-box;
      }
      &-des {
        &-icon {
          width: 64px;
          height: 64px;
        }
        &-title {
          margin: 30px 0;
          font-size: 36px;
          font-family: PingFangSC-Light;
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

  .boxArea {
    &-large {
      .teachidea-item-div {
        flex: 0 0 50%;
      }
      .teachidea-item-des {
        flex: 0 0 40%;
      }
    }
    &-middle {
      .teachidea-item-div {
        flex: 0 50%;
      }
      .teachidea-item-des {
        flex: 0 0 44%;
      }

    }
    &-small {
      .teachidea-item-div {
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
</style>
