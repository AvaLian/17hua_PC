<template>
  <div class="index_section1 section">
    <div class="container">
      <vtitle>
        <span slot="title">打造行业领先价值</span>
        <span slot="subtitle">开启创意绘画创造力、发挥绘画天性、在快乐中成长和学习</span>
      </vtitle>
      <ul class="exhibition">
        <li class="exhibition-item boxRadius" v-for="(e,i) in exhibition" :key="i">
          <img class="exhibition-item-img" :src="e.imgUrl" alt="">
          <p class="exhibition-item-txt" :style="{'background':e.bgColor}">{{e.des}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import vtitle from "../../subcomponent/vtitle"
  export default {
    name: "index_section1",
    components:{
      vtitle
    },
    data() {
      return {
        exhibition: [
          {
            imgUrl: require("./images/IMG_6309.jpg"),
            des: "开启创造力",
            bgColor: "rgba(255,128,155,.8)"
          },
          {
            imgUrl: require("./images/IMG_6219.jpg"),
            des: "提高独立思考能力",
            bgColor: "rgba(248,193,64,.8)"
          },
          {
            imgUrl: require("./images/IMG_6787.jpg"),
            des: "提升亲情纽带关系",
            bgColor: "rgba(57,205,181,.8)"
          },
          {
            imgUrl: require("./images/IMG_6750.jpg"),
            des: "发挥孩子天性",
            bgColor: "rgba(189,117,243,.8)"
          },
          {
            imgUrl: require("./images/DSC4231.jpg"),
            des: "在快乐中成长、学习",
            bgColor: "rgba(58,194,232,.8)"
          },
          {
            imgUrl: require("./images/WechatIMG35.jpg"),
            des: "收获满意答卷",
            bgColor: "rgba(255,128,155,.8)"
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  /*领先价值*/
  .index_section1 {
    .container {
      border-bottom: 1px solid $borderColor;
    }
    .exhibition {
      display: flex;
      flex-wrap: wrap;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-item {
        margin-top: 10px;
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .3s;
        &-img {
          width: 100%;
          transition: all .3s;
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
        &:hover{
          .exhibition-item-img{
            transform: scale(1.2);
          }
          transform: scale(1.01);
          box-shadow: 0 0 20px rgba(0,0,0,.3);
        }
      }
    }
  }


  .boxArea {
    &-large {
      .exhibition-item {
        flex: 0 0 32%;
      }
    }
    &-middle {
      .exhibition-item {
        flex: 0 0 49%;
      }
    }
    &-small {
      .exhibition-item {
        flex: 0 0 100%;
      }
    }
  }
</style>
