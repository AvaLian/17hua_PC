<template>
  <div class="section">
    <div class="container section-borderBottom">
      <div class="section-left">{{data.title}}</div>
      <ul class="section-right">
        <li class="section-right-item" v-for="(d,i) in data.info_list">
          <div class="tag" :class="{'tag-solid':!i,'tag-hollow':i==data.info_list.length-1 && i>1}"><i
            class="tag-inner"></i></div>
          <div></div>
          {{d.description}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "faculty-info",
    props:["data"]
  }
</script>

<style lang="scss" scoped>

  .section {
    .container {
      display: flex;
    }
    &-left {
      width: 200px;
      font-size: $FS20;
      font-weight: 700;
    }
    &-right {
      flex: 1;
      &-item {
        display: flex;
        align-items: flex-start;
        line-height: 1.6;
        margin-bottom: 20px;
      }
    }
  }


  .boxArea {
    &-small {
      .section {
        .container {
          display: flex;
          flex-direction: column;
        }
        &-left {
          margin-bottom: 20px;
        }
      }
    }
  }


  /*圆圈*/
  .tag {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin-right: 10px;
    position: relative;
    top:8px;
    &-inner {
      width: 8px;
      height: 8px;
      display: block;
      box-sizing: border-box;
      border-radius: inherit;
      background: $themeColor;
    }
    &-solid {
      border: 1px solid $themeColor;
      .tag-inner {
        background: $themeColor;
      }
    }
    &-hollow {
      border: 1px solid $themeColor;
      .tag-inner {
        border: inherit;
        background: none;
      }
    }
  }
</style>
