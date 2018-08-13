<template>
  <div class="s-menu">
    <div class="container">
      <div class="s-menu-large flex-row-bc" :style="{'height':headerHeight[isScroll].LHeigth+'rem'}" v-show="reNodepoMosth(SCWidth,true)">
        <div class="logo" @click="gotoIndex">
          <img src="../../../static/images/logo.png"/>
        </div>
        <ul class="navbar">
          <li class="navbar-item" v-if="todo.zwname" v-for="(todo,index) in this.$router.options.routes">
            <router-link class="navbar-item-cn" :class="navIndex === index ? ' navbar-item-active' : ''" :to="todo.path"
                         :key="index">
              {{todo.zwname}}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="s-menu-small" :style="{'height':headerHeight[isScroll].SHeigth+'rem'}" v-show="reNodepoMosth(SCWidth,false)">
        <div class="s-menu-small-header flex-row-bc">
          <div class="logo" @click="gotoIndex">
            <img class="logo-img" src="../../../static/images/logo.png"/>
          </div>
          <img class="icon-menu" ref="iconmenu" @click="maClick=!maClick" src="//image.17hua.me/upload/image/201711/15113344010141089.png">
        </div>
        <transition name="fade">
          <ul class="navbar" v-show="maClick" :style="{'top':headerHeight[1].SHeigth+'rem'}">
          <li class="navbar-item" v-if="todo.zwname" v-for="(todo,index) in this.$router.options.routes">
            <router-link class="navbar-item-cn" :class="navIndex === index ? ' navbar-item-active' : ''" :to="todo.path"
                         :key="index">
              {{todo.zwname}}
            </router-link>
          </li>
        </ul>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "s-menu",
    data() {
      return {
        navIndex: 1,
        maClick: false
      }
    },
    props: ['SCWidth'],
    computed:{
      isScroll(){
        return this.$store.state.isScroll
      },
      headerHeight(){
        return this.$store.state.headerHeight
      }
    },
    watch: {
      $route(to, from) {
        this.$router.options.routes.map((item, index) => {
          if (item.name && item.name == to.name) this.navIndex = index
        })
      }
    },
    mounted() {
      document.addEventListener('click', (e) => {
        if (!!this.$refs.iconmenu.contains(e.target)) return
        this.maClick = false;
      })
    },
    methods: {
      reNodepoMosth(width, statue) {
        return width < 860 ? (statue ? false : true) : statue ? true : false;
      },
      gotoIndex(){
        this.$router.push({path:'/index'})
      }
    }
  }
</script>

<style lang="scss" scoped>

  /*菜单公共部分样式*/
  .navbar {
    display: flex;
    box-sizing: border-box;
    &-item{
      display: block;
      &-cn{
        display: block;
        color: $fMColor;
        &:hover{
          @extend .navbar-item-active
        }
      }
      .navbar-item-active {
        color: $themeColor;
      }
    }
  }

  .s-menu {
    background: $ffColor;
    &-large {
      .navbar {
        height: 100%;
        &-item {
          margin-right: 20px;
          &:last-child {
            margin-right: 0;
          }
          .navbar-item-cn {
            height: 100%;
            display: flex;
            padding: 0 1rem;
            justify-content: center;
            align-items: center;
          }
          .navbar-item-active {
            position: relative;
            @include border-1px(2px, $themeColor);
          }
        }
      }
    }
    &-small {
      position: fixed;
      width: 100%;
      background: $ffColor;
      top:0;
      left:0;
      z-index: 9999;
      &-header {
        height: 100%;
        padding: 0 1rem;
        @include border-1px(1px, $borderColor);
        .logo-img{
          width: 8rem;
        }
        .icon-menu{
          width: 2.4rem;
          height: 2.4rem;
        }
      }
      .navbar {
        width: 100%;
        padding: 0 1rem;
        flex-direction: column;
        position: absolute;
        z-index: 99;
        margin-top: -1px;
        background: $ffColor;
        &-item {
          height: 4rem;
          line-height: 4rem;
        }
      }
    }
  }

  .boxArea-middle{
      .s-menu-large{
        padding: 0 1rem;
      }
  }



  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.25s ease-out;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }


</style>
