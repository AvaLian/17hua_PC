<template>
  <div class="section-title">
    <h4 class="section-title-txt" v-if="this.$slots.title">
      <slot name="title"></slot>
    </h4>
    <p v-if="this.$slots.subtitle && SCWTag<1">
      <slot name="subtitle"></slot>
    </p>
    <p v-if="this.$slots.subtitle1 && SCWTag<1">
      <slot name="subtitle1"></slot>
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
      margin-bottom: 80px;
      font-size: $FS24;
      &-ma0 {
        margin-bottom: 0;
      }
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
          margin-bottom: 0;
          &-txt {
            font-size: $FS24;
          }
        }
      }
    }
  }
</style>
