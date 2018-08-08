<template>
    <div class="vcourses-detail" :style="{'background':'url('+data.imgUrl+')'}">
      <div class="vcourses-detail-top">
        <p class="vcourses-detail-name">{{data.name}}</p>
        <p class="vcourses-detail-des">{{data.des}}
        <div class="vcourses-detail-btn">在线预约</div>
      </div>
      <p class="vcourses-detail-bottom">{{data.con}}</p>
    </div>
</template>

<script>
    export default {
        name: "vcourses-detail",
        props:['data']
    }
</script>

<style lang="scss" scoped>
  .vcourses-detail{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 100px;
    box-sizing: border-box;
    color:$ffColor;
    &-top{
      padding:0  200px 40px 0;
      @include border-1px(1px,$ffColor);
    }
    &-name{
      font-size:28px;
    }
    &-des{
      font-size: 20px;
      line-height: 1.6;
      margin: 20px 0 40px 0;
    }
    &-btn{
      width: 100px;
      border-radius: 4px;
      text-align: center;
      padding: 14px 20px;
      background: $orange;
    }
    &-bottom{
      padding: 20px 0;
    }
  }
</style>
