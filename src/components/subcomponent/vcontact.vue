<template>
    <div class="vcontact">
      <div class="vcontact-btn">联系我们</div>
    </div>
</template>

<script>
    export default {
        name: "vcontact"
    }
</script>

<style lang="scss" scoped>
  /*联系我们*/
  .vcontact{
    &-btn{
      margin: 0 auto;
      @include vbtn($themeColor,$ffColor);
    }
  }
</style>
