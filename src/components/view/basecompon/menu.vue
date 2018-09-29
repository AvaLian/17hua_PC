<template>
  <div class="s-menu">
    <div class="container">
      <div class="s-menu-large flex-row-bc" :style="{'height':headerHeight[isScroll].LHeigth+'px'}"  v-show="reNodepoMosth(SCWidth,true)">
        <div class="logo" @click="gotoIndex">
          <img class="logo-img" src="../../../../static/images/logo.png" />
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
      <!--:style="{'height':headerHeight[isScroll].SHeigth+'px'}"-->
      <div class="s-menu-small"  v-show="reNodepoMosth(SCWidth,false)">
        <div class="s-menu-small-header flex-row-bc">
          <div class="logo" @click="gotoIndex">
            <img class="logo-img" src="../../../../static/images/logo.png"/>
          </div>
          <img class="icon-menu" ref="iconmenu" @click="maClick=!maClick" src="//image.17hua.me/upload/image/201711/15113344010141089.png">
        </div>
        <transition name="fade">
          <ul class="navbar" v-show="maClick">
          <li class="navbar-item" v-if="todo.zwname&&index>1" v-for="(todo,index) in this.$router.options.routes">
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
    watch: {
      $route(to, from) {
        this.$router.options.routes.map((item, index) => {
          if(!item.children){
            if (item.name && item.name == to.name) this.navIndex = index;
            return false
          }
          item.children.map((item2)=>{
            if (item2.name && item2.name == to.name) this.navIndex = index;
          })

        })
      }
    },
    mounted() {
      document.addEventListener('click', (e) => {
        if (!!this.$refs.iconmenu.contains(e.target)) return false;
        this.maClick = false;
      })
    },
    computed:{
      isScroll(){
        return this.$store.state.isScroll
      },
      headerHeight(){
        return this.$store.state.headerHeight
      }
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
  .logo{
    cursor: pointer;
  }
  /*菜单公共部分样式*/
  .navbar {
    display: flex;
    box-sizing: border-box;
    &-item{
      display: block;
      &-cn{
        display: block;
        color: $fMColor;
        font-size: $FS18;
        &:hover{
          @extend .navbar-item-active
        }
      }
      .navbar-item-active {
        color: $themeColor;
        font-family: "PingFangSC-Semibold","Microsoft YaHei", sans-serif;

      }
    }
  }

  .s-menu {
     background: $ffColor;
     &-large {
       .navbar {
         height: 100%;
         &-item {
           margin-right: 50px;
           &:last-child {
             margin-right: 0;
           }
           .navbar-item-cn {
             height: 100%;
             display: flex;
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
       left:0;
       top:0;
       z-index: 9999;
       &-header {
         height: 100%;
         padding: 12px 2%;
         @include border-1px(1px, $borderColor);
         .logo-img{
           width: 50%;
         }
         .icon-menu{
           width: 26px;
           height: 26px;
         }
       }
       .navbar {
         width: 100%;
         flex-direction: column;
         position: absolute;
         z-index: 99;
         margin-top: -1px;
         background: $ffColor;
         padding: 10px 0;
         &-item {
           padding: 16px 2%;
         }
       }
     }
   }

   .boxArea-middle{
       .s-menu-large{
         padding: 0 2%;
         .logo{
           width:20%;
           img{
             width: 100%;
             height: auto;
           }
         }
      }
  }



  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.25s ease-out;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }


</style>
