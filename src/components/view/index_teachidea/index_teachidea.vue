<template>
  <ul class="teachidea">
    <li class="teachidea-item" v-for="(d,i) in data" :key="i">
      <div class="teachidea-item-div teachidea-item-des">
        <img class="teachidea-item-des-icon" :src="teachIdea[i].iconUrl" alt="">
        <div class="teachidea-item-des-title" :style="{'color':teachIdea[i].color}">
          <h6 v-html="d.first_title"></h6>
        </div>
        <p v-if="SCWTag<1">{{d.second_title}}</p>
      </div>
      <div class="teachidea-item-div" :style="{'order':(i+1)%2?0:SCWTag>1?0:-1}">
        <img class="teachidea-item-img" :src="d.img_url" alt="">
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "index_teachidea",
    props: ["data"],
    data() {
      return {
        teachIdea: [
          {
            iconUrl: require("./images/01.png"),
            color: "#ff405c"
          },
          {
            iconUrl: require("./images/02.png"),
            color: "#ffaf00"
          },
          {
            iconUrl: require("./images/03.png"),
            color: "#00b3e7"
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
