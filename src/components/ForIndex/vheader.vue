<template>
  <div class="vheader container">
    <div class="top">
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
    <div class="menu flex-row-bc">
      <div class="logo">
        <img src="../../../static/images/logo.png"/>
      </div>
      <ul class="navbar">
        <li class="navbar-item" v-if="todo.zwname" v-for="(todo,index) in this.$router.options.routes">
          <router-link class="navbar-item-cn" :class="navIndex === index ? ' navbar-item-active' : ''" :to="todo.path"
                       :key="index"  >
            {{todo.zwname}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vheader",
    data() {
      return {
        navIndex: 1
      }
    },
    computed:{
      tel(){
        console.log(this.$store);
        return this.$store.state.tel;
      }
    },
    methods: {
    },
    watch: {
      $route(to, from) {
        this.$router.options.routes.map((item, index) => {
          if (item.name && item.name == to.name) this.navIndex = index
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/style/icon.css";
  @import "../../assets/style/hfpublic.css";

  $topHeight: 40px;
  $navbarHeight: 88px;
  .vheader {
    display: flex;
    flex-direction: column;
    /*顶部信息*/
    .top {
      height: $topHeight;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      border-bottom: 1px solid $borderColor;
      .tel {
        color: $themeColor;
      }
    }
    /*菜单*/
    .menu {
      height: $navbarHeight;
      .navbar {
        display: flex;
        height: 100%;
        .navbar-item {
          margin-right: 20px;
          &:last-child{
            margin-right: 0;
          }
          .navbar-item-cn {
            height: 100%;
            display: flex;
            padding: 0 10px;
            justify-content: center;
            align-items: center;
            color: $fMColor;
          }
          .navbar-item-cn:hover {
            color: $themeColor;
          }
          .navbar-item-active {
            color: $themeColor;
            position: relative;
            &::after {
              content: "";
              width: 100%;
              position: absolute;
              left: 0;
              bottom: 0;
              border-bottom: 2px solid $themeColor;
            }
          }
        }

      }
    }
  }
</style>
