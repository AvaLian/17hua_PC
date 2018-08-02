<template>
  <div class="vheader container">
    <div class="top">
      <div class="tel">400-128-1717</div>
      <div>
        <i class="iconfont icon-weibo"></i>
      </div>
      <div>
        <i class="iconfont icon-weibo"></i>
      </div>
    </div>
    <div class="menu flex-row-bc">
      <div class="logo">
        <img src="../../../static/images/logo.png" />
      </div>
      <ul class="navbar">
        <li class="navbar-item" v-if="todo.zwname" v-for="(todo,index) in this.$router.options.routes">
          <router-link class="navbar-item-cn" :class="navIndex === index ? ' navbar-item-active' : ''"  :to="todo.path" :key="index">
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
    data(){
      return{
        navIndex:1
      }
    },
    methods:{
      // fn_changeMenu(){
      //   this.navIndex=index;
      // }
    },
    watch:{
      $route(to,from){
        this.$router.options.routes.map((item,index)=>{
          if(item.name&&item.name==to.name) this.navIndex=index
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/style/icon.css";
  $navbarHeight:88px;
  .vheader{
    display: flex;
    flex-direction: column;
    background:#f0f0f0;
    /*顶部信息*/
    .top{
      display: flex;
      align-items: center;
      justify-content: flex-end;
      border-bottom:1px solid $borderColor;
      .tel{
        color:$themeColor;
      }
    }
    /*菜单*/
    .menu{
      height: $navbarHeight;
      .navbar{
        display: flex;
        height: 100%;
        .navbar-item{
          .navbar-item-cn{
            height: 100%;
            display: flex;
            margin: 0 20px;
            justify-content: center;
            align-items: center;
            color:$fMColor;
          }
          .navbar-item-cn:hover{
            color: $themeColor;
          }
          .navbar-item-active{
            color: $themeColor;
            position: relative;
            &::after{
              content: "";
              position: absolute;
              width:100%;
              bottom:0;
              border-bottom: 2px solid $themeColor;
            }

          }
        }

      }
    }
  }
</style>
