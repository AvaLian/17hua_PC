<template>
  <div class="vfooter container">
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
  </div>
</template>

<script>
  export default {
    name: "vfooter"
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/style/icon.css";
  @import "../../assets/style/hfpublic.css";

  $navbarHeight: 110px;
  $copyrightHeight: 124px;
  .vfooter {
    .ftnav {
      border-bottom: 1px solid $borderColor;
      /*菜单*/
      .navbar {
        display: flex;
        height: $navbarHeight;
        .navbar-item {
          display: flex;
          height: 100%;
          margin-right: 40px;
          .navbar-item-cn {
            display: flex;
            align-items: center;
            height: 100%;
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
      height: $copyrightHeight;
      .logo {
        display: flex;
        align-items: center;
        .txt {
          margin-left: 20px;
          &-c{
            line-height: 24px;
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
</style>
