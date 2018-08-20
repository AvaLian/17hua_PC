<template>

    <div class="vcourses-detail" v-if="data" :style="{'background':'url('+data.imgUrl+')'}" >
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
        name: "s-dcourse",
        props:['data']
    }
</script>

<style lang="scss" scoped>
  .vcourses-detail{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10%;
    box-sizing: border-box;
    color:$ffColor;
    &-top{
      padding: 5% 0;
      @include border-1px(1px,$ffColor);
    }
    &-name{
      font-size:$FS28;
    }
    &-des{
      font-size: $FS20;
      line-height: 1.6;
      margin: 2% 0 3% 0;
    }
    &-btn{
     @include vbtn($ffColor,$orange)
    }
    &-bottom{
      padding: 5% 0;
      line-height: 1.6;
    }
  }

  .boxArea{
    &-small {
      .vcourses-detail{
        padding: 0 10px;
      }
      .vcourses-detail-des{
        font-size: $FS16;
      }
    }
  }
</style>
