<template>
    <div class="s-btn">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "s-btn"
    }
</script>

<style lang="scss" scoped>
  .s-btn{
    width: 100px;
    font-size: $FS18;
    text-align: center;
    padding: 14px 30px;
    border-radius: 4px;
    cursor: pointer;
    color:$themeColor;
    background: $ffColor;
  }
</style>
