<template>
  <div class="vbtn-info">
    <a class="button ripple" @click="onShow">
      <slot></slot>
    </a>
  </div>
</template>

<script>
  export default {
    name: "vbtn-info",
    data(){
      return{
        isShow:false
      }
    },
    methods: {
      onShow() {
        this.isShow=true;
        this.$emit('onShow',this.isShow)
      }
    }
  }
</script>

<style lang="scss" scoped>
  /*联系我们*/
  .button {
    display: inline-block;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
    border: none;
    border-radius: 6px;
    position: relative;
    padding: 20px 40px;
    font-size: $FS18;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0;
    will-change: box-shadow, transform;
    transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    color: $themeColor;
    background-color: $ffColor;
    &:active {
      box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
    }
  }
</style>
