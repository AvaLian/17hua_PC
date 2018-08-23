<template>
    <div class="vbtn-info">
      <p class="vbtn-info-con" @click="dosongthing"><slot></slot></p>
    </div>
</template>

<script>
    export default {
      name: "vbtn-info",
      methods:{
        dosongthing(){
          console.log(11111111111111111)
        }
      }
    }
</script>

<style lang="scss" scoped>
  /*联系我们*/
  .vbtn-info{
      &-con{
        margin: 0 auto;
        display: inline-block;
        padding: 20px 36px;
        font-size: $FS18;
        color:$themeColor;
        border-radius: 6px;
        background: $ffColor;
        cursor: pointer;
    }
  }
</style>
