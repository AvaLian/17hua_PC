<template>
  <div class="vfooter container">

    <div class="vfooter-large" v-show="reNodepoMosth(SCWidth,true)">
      <div class="ftnav flex-row-bc">
        <ul class="navbar">
          <li class="navbar-item" v-if="todo.zwname&&index>1" v-for="(todo,index) in this.$router.options.routes">
            <router-link class="navbar-item-cn" :to="todo.path" :key="index">
              {{todo.zwname}}
            </router-link>
          </li>
        </ul>
        <div>客服热线：400-128-1717</div>
      </div>
      <div class="copyright flex-row-bc">
        <div class="logo">
          <img src="../../../static/images/logo.png" alt="">
          <div class="txt">
            <p class="txt-c txt-ch">一袋信息科技有限公司所有</p>
            <p class="txt-c txt-cr"> Copyright © 2017 一袋信息科技，沪ICP备17027245号-1</p>
          </div>
        </div>
        <div class="follow">
          <span>FOLLOW US</span>
          <div class="third-app">
            <div class="third-app-item">
              <i class="iconfont icon-weibo"></i>
              <div class="qrcode">
                <img src="./images/qrcode-wx.jpg" alt="">
              </div>
            </div>
            <div class="third-app-item">
              <i class="iconfont icon-weixin"></i>
              <div class="qrcode">
                <img src="./images/qrcode-wx.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="vfooter-small" v-show="reNodepoMosth(SCWidth,false)">
      <div class="copyright">
        <img class="logo-img" src="./images/qrcode-wx.jpg" alt="">
        <div class="txt">
          <p class="txt-c txt-ch">一袋信息科技有限公司所有</p>
          <p class="txt-c txt-cr"> Copyright © 2017 一袋信息科技，沪ICP备17027245号-1</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "vfooter",
    computed:{
      SCWidth(){
        return this.$store.state.screenSize.w;
      }
    },
    methods:{
      reNodepoMosth(width, statue) {
        return width < 860 ? (statue ? false : true) : statue ? true : false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/style/icon.css";
  @import "hfpublic.css";

  .vfooter {
    &-large{
      .ftnav {
        @include border-1px(1px,$borderColor);
        /*菜单*/
        .navbar {
          display: flex;
          padding:40px 0;
          .navbar-item {
            display: flex;
            height: 100%;
            margin-right: 30px;
            .navbar-item-cn {
              display: flex;
              align-items: center;
              color: $f5AColor;
              &:hover {
                color: $themeColor;
              }
            }
          }
        }
      }
      /*版权*/
      .copyright {
        padding:50px 0;
        .logo {
          display: flex;
          align-items: center;
          .txt {
            margin-left:$FS20;
            &-c{
              line-height: $FS24;
            }
            &-ch {
              color: $f5AColor;
            }
            &-cr {
              color: $f9EColor;
            }
          }
        }
        .follow {
          display: flex;
          align-items: center;
        }
      }
    }
    &-small{
      padding: 2% 0;
      font-size:$FS12;
      color:$f9EColor;
      text-align: center;
      background: #f9f9f9;
      .logo-img{
        width:20%;
      }
      .txt-ch{
        font-size: $FS14;
        color:$f5AColor;
        margin: 4% 0 2% 0;
      }
    }
  }
</style>
