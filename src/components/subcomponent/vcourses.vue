<template>
  <div class="courses box-shadow">
    <div class="courses-left" >
      <!--:style="{'top':active*(-128)+'px'}"-->
      <transition name="fade">
        <ul class="courses-nav transition" :style="{'top':-actCurView.scrollHeigth+'px'}">
          <li class="courses-nav-item transition" @click="toggle(i)" v-for="(tab,i) in tabs" :class="{active: actCurView.active == i}">
            <a class="courses-nav-item-a" href="javascript:void(0)">{{ tab.name }}</a>
          </li>
        </ul>
      </transition>
      <div class="icon" @click="toggle(actCurView.active+1)"><i class="iconfont icon-jiantou1"></i></div>
    </div>
    <component class="courses-con" :is="actCurView.view" :data="tabs[actCurView.active]"></component>
  </div>
</template>

<script>

  import detail from './vcourses-detail';
    export default {
        name: "vcourses",
        components: {
          detail
        },
        data(){
            return{
              actCurView:{
                view:"detail",  //激活块的组件
                active:0,  //激活块的index
                scrollHeigth:0, //激活块移动的距离
                tasHeight:128, //每个块的高度
                showNum:4,// 一屏显示几个块
              },
              tabs: [
                {
                  name: 'VIP一对一',
                  view: 'detail',
                  imgUrl:"//image.17hua.me/upload/image/201709/1506601704878228.png",
                  des:"定制专属的绘画服务，让孩子更专注于创意绘画能够让孩子树立独立性、树立自律性，让孩子主动的爱上创意绘画，针对问题提出解决，VIP创意绘画一对一让孩子更加的专注和专业。",
                  con:"课程内容：基础入门、刮画、甩酷、创意绘画"
                },
                {
                  name: '暑期大师班',
                  view: 'detail',
                  imgUrl:"//image.17hua.me/upload/image/201709/1506601704878228.png",
                  des:"定制专属的绘画服务，让孩子更专注于创意绘画能够让孩子树立独立性、树立自律性，让孩子主动的爱上创意绘画，针对问题提出解决，VIP创意绘画一对一让孩子更加的专注和专业。",
                  con:"课程内容：基础入门、刮画、甩酷、创意绘画"
                },
                {
                  name: '普通班',
                  view: 'detail',
                  imgUrl:"//image.17hua.me/upload/image/201709/1506601704878228.png",
                  des:"定制专属的绘画服务，让孩子更专注于创意绘画能够让孩子树立独立性、树立自律性，让孩子主动的爱上创意绘画，针对问题提出解决，VIP创意绘画一对一让孩子更加的专注和专业。",
                  con:"课程内容：基础入门、刮画、甩酷、创意绘画"
                },
                {
                  name: '精品小班',
                  view: 'detail',
                  imgUrl:"//image.17hua.me/upload/image/201709/1506601704878228.png",
                  des:"定制专属的绘画服务，让孩子更专注于创意绘画能够让孩子树立独立性、树立自律性，让孩子主动的爱上创意绘画，针对问题提出解决，VIP创意绘画一对一让孩子更加的专注和专业。",
                  con:"课程内容：基础入门、刮画、甩酷、创意绘画"
                },
                {
                  name: 'hhhhhh',
                  view: 'detail',
                  imgUrl:"//image.17hua.me/upload/image/201709/1506601704878228.png",
                  des:"定制专属的绘画服务，让孩子更专注于创意绘画能够让孩子树立独立性、树立自律性，让孩子主动的爱上创意绘画，针对问题提出解决，VIP创意绘画一对一让孩子更加的专注和专业。",
                  con:"课程内容：基础入门、刮画、甩酷、创意绘画"
                },
                {
                  name: 'aaaa',
                  view: 'detail',
                  imgUrl:"//image.17hua.me/upload/image/201709/1506601704878228.png",
                  des:"定制专属的绘画服务，让孩子更专注于创意绘画能够让孩子树立独立性、树立自律性，让孩子主动的爱上创意绘画，针对问题提出解决，VIP创意绘画一对一让孩子更加的专注和专业。",
                  con:"课程内容：基础入门、刮画、甩酷、创意绘画"
                },
              ],
            }
        },
        methods: {
          toggle(i) { // tabs切换
            this.actCurView.active = i;

            if(this.actCurView.active>this.tabs.length-1) {  //判断index的值是否大于tabs总长度
              this.actCurView.active=0;
              this.actCurView.scrollHeigth=0;
            }
            this.actCurView.view =this.tabs[this.actCurView.active].view;

            // 判断tabs个数
            if(this.tabs.length<=this.actCurView.showNum) return false;

            if(this.actCurView.active<this.actCurView.showNum-1) { //当前激活块小于（显示个数-1）
              this.actCurView.scrollHeigth=0;
            }else if( this.actCurView.active<this.tabs.length-1) {  //当前激活块大于等于显示个数且小于（总长度-1）
              this.actCurView.scrollHeigth=this.actCurView.tasHeight*(this.actCurView.active+2-this.actCurView.showNum);
            }else if(this.actCurView.active==this.tabs.length-1){   //最后一个
              this.actCurView.scrollHeigth=this.actCurView.tasHeight*(this.tabs.length-this.actCurView.showNum);
            }
          }
        }
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/style/icon.css";
  $tasHeight:128px; //与移动距离相关
  .transition{
    transition: all .4s; //切换过滤效果
  }
  .courses{
    display: flex;
    &-left{
      flex:0 0 200px;
      height: 550px;
      overflow: hidden;
      position: relative;
      .icon{
        width: 100%;
        color:$orange;
        cursor: pointer;
        text-align: center;
        position: absolute;
        bottom: 0;
        background: $ffColor;
        .iconfont{
          font-size: 48px;
        }
      }
    }
    &-nav{
      display: flex;
      flex-direction: column;
      width: 100%;
      position: absolute;
      left:0;
      &-item{
        height: $tasHeight;
        line-height: $tasHeight;
        text-align: center;
        &-a{
          width: 80%;
          color:$fMColor;
          font-size: 20px;
          display: inline-block;
          position: relative;
        }
        :after{
          content: "";
          width: 100%;
          position: absolute;
          left:0;
          bottom: 0;
          @include border-1px(1px,$borderColor);
        }
        &.active{
          @include border-1px(1px,$ffColor);
          background: $orange;
          .courses-nav-item-a {
            color: $ffColor;
          }
        }
      }
     }
    &-con{
      flex:1;
      background: $ffColor;
    }

  }
</style>
