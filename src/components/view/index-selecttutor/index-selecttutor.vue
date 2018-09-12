<template>
  <ul class="exhibition">
    <li class="exhibition-item boxRadius" v-for="(d,i) in data" :key="i">
      <img class="exhibition-item-img" :src="d.img_url">
      <p class="exhibition-item-txt" :style="{'background':bgColor[i%5]}">{{d.first_title}}</p>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "index_selecttutor",
    props: ["data"],
    data() {
      return {
        bgColor: ["rgba(255,128,155,.8)", "rgba(248,193,64,.8)", "rgba(57,205,181,.8)", "rgba(189,117,243,.8)", "rgba(58,194,232,.8)", "rgba(255,128,155,.8)"],
      }
    }
  }
</script>

<style lang="scss" scoped>
  /*领先价值*/
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
        height: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $ffColor;
        font-size: 36px;
        position: absolute;
        left: 0;
        bottom: 0;
      }
      &:hover {
        .exhibition-item-img {
          transform: scale(1.2);
        }
        transform: scale(1.01);
        box-shadow: 0 0 20px rgba(0, 0, 0, .3);
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
        &:first-child{
          margin-top:0;
        }
        &-txt {
          font-size: $FS20;
        }
      }
    }
  }
</style>
