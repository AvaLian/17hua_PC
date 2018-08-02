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
        <div>FOLLOW US</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "vfooter"
    }
</script>

<style lang="scss" scoped>
  $navbarHeight:110px;
  $copyrightHeight:124px;
  .vfooter{
    background: #f9f9f9;
    .ftnav{
      border-bottom: 1px solid $borderColor;
      /*菜单*/
      .navbar{
        display: flex;
        height:$navbarHeight ;
        .navbar-item{
          display: flex;
          height: 100%;
          margin-right: 40px;
          .navbar-item-cn{
            display: flex;
            align-items: center;
            height: 100%;
            color:#5a5a5a;
            &:hover{
              color:$themeColor;
            }
          }
        }

      }
    }
    /*版权*/
    .copyright{
      height: $copyrightHeight;
      .logo{
        display: flex;
        align-items: center;
        .txt{
          &-ch{
            color:#5a5a5a;
          }
          &-cr{
            color:#9e9e9e;
          }
        }
      }
    }
  }
</style>
