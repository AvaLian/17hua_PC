<template>
  <!--section-title 默认字体颜色为主题色-->
  <!--section-title-1 字体颜色为白色-->
  <div class="section-title">
    <h4 class="section-title-txt" v-if="this.$slots.title">
      <slot name="title"></slot>
    </h4>
    <p v-if="this.$slots.subtitle && SCWTag<1">
      <slot name="subtitle"></slot>
    </p>
  </div>
</template>

<script>
  export default {
    name: "section-title",
    computed:{
      SCWTag() {
        return this.$store.state.SCWTag;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .section {
    &-title {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: $f5AColor;
      line-height: 1.2;
      margin-bottom: 5%;
      font-size: $FS24;
      text-align: center;
      &-txt {
        color: $themeColor;
        font-size: 48px;
        margin-bottom: 20px;
        font-family: PingFangSC-Medium;
      }
    }
    &-1 {
      .section-title {
        color: $ffColor;
        &-txt {
          color: $ffColor;
        }
      }
    }
  }

  .boxArea {
    &-small {
      .section {
        &-title {
          font-size: $FS14;
          margin-bottom: 10%;
          &-txt {
            font-size: $FS26;
            margin-bottom: 0;
          }
        }
      }
    }
  }
</style>
