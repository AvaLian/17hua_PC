<template>
  <div class="vheader" :class="{'isFixed':searchBarFixed}">
      <div class="top" v-show="screenWidth>860">
        <div class="container">
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
      </div>
      <smenu :SCWidth="screenWidth"  id="vheader"></smenu>
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
    data(){
      return{
        searchBarFixed:false,
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods:{
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        var offsetTop = document.querySelector('#vheader').offsetTop;
        if(scrollTop > offsetTop){
          this.searchBarFixed = true
          this.$store.commit('cisScroll', 1);
        }else {
          this.searchBarFixed = false;
          this.$store.commit('cisScroll', 0);
        }
      }
    }

  }
</script>

<style lang="scss" scoped>
  @import "../../assets/style/icon.css";
  @import "../../assets/style/hfpublic.css";

  $topHeight: 40px;   //顶部高度


  .vheader {
    /*顶部信息*/
    .top {
      .container{
        height: $topHeight;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        @include border-1px(1px,$borderColor);
      }
      .tel {
        color: $themeColor;
      }
    }
  }



  .boxArea{
    &-large,&-middle{
      .isFixed{
        width: 100%;
        position:fixed;
        top:-$topHeight;
        left:0;
        z-index:999;
        border-bottom: 1px solid #eee;
        box-shadow:  0  1px  10px rgba(0,0,0,.1);
      }
    }
  }




</style>
