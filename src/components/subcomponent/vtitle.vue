<template>
  <div class="section-title">
    <h4 class="section-title-txt" v-if="this.$slots.title">
      <slot name="title"></slot>
    </h4>
    <p :class="{'none':SCWTag>1}" v-if="this.$slots.subtitle">
      <slot name="subtitle"></slot>
    </p>
    <p :class="{'none':SCWTag>1}" v-if="this.$slots.subtitle1">
      <slot name="subtitle1"></slot>
    </p>
  </div>
</template>

<script>
  export default {
    name: "vtitle",
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
      &-ma0 {
        margin-bottom: 0;
      }
      &-txt {
        color: $themeColor;
        font-weight: 700;
        font-size: 40px;
        margin-bottom: 20px;
        span{
          font-weight: inherit;
        }
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
