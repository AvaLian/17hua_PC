<template>
  <div class="vheader container">
    <div class="top" v-show="screenWidth>860">
      <div class="tel">
        <i class="iconfont icon-dianhua"></i>
        <span>{{tel}}</span>
      </div>
      <div class="third-app">
        <div class="third-app-item">
          <i class="iconfont icon-weibo"></i>
          <div class="qrcode">
            <img src="../../../static/images/qrcode-wx.jpg" alt="">
          </div>
        </div>
        <div class="third-app-item">
          <i class="iconfont icon-weixin"></i>
          <div class="qrcode">
            <img src="../../../static/images/qrcode-wx.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
    <smenu :SCWidth="screenWidth"></smenu>
  </div>
</template>

<script>
  import smenu from './s-menu'
  export default {
    name: "vheader",
    components:{smenu},
    computed:{
      tel(){
        return this.$store.state.tel;
      },
      screenWidth(){
        return this.$store.state.screenSize.w;
      }
    },

  }
</script>

<style lang="scss" scoped>
  @import "../../assets/style/icon.css";
  @import "../../assets/style/hfpublic.css";

  $topHeight: 40px;   //顶部高度


  .vheader {
    display: flex;
    flex-direction: column;
    /*顶部信息*/
    .top {
      height: $topHeight;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      @include border-1px(1px,$borderColor);
      .tel {
        color: $themeColor;
      }
    }
  }
</style>
