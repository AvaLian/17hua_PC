<template>
  <div class="courses box-shadow">
    <div class="courses-left" >

        <ul class="courses-nav transition" :style="{'top':-actCurView.scrollHeigth+'px'}">
          <li class="courses-nav-item transition" @click="toggle(i)" v-for="(tab,i) in tabs" :class="{active: actCurView.active == i}">
            <a class="courses-nav-item-a" href="javascript:void(0)">{{ tab.name }}</a>
          </li>
        </ul>

      <div class="courses-left-arrow" @click="toggle(actCurView.active+1)"><i class="iconfont icon-jiantou1"></i></div>
    </div>

    <!--<component class="courses-con" :is="actCurView.view" :data="tabs[actCurView.active]" style="overflow: hidden;"></component>-->
    <component class="courses-con" is="detail" :data="tabs[actCurView.active]" style="overflow: hidden;"></component>

  </div>
</template>

<script>

  import detail from './s-dcourse';

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
                tasHeight:90, //每个块的高度
                showNum:4,// 一屏显示几个块
              },
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
        },
        computed:{
          tabs(){
            return this.$store.state.courses
          }
        },
        created(){
          this.$store.dispatch('apiCourses')
        }
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/style/icon.css";
  $tasHeight:90px; //与移动距离相关
  .transition{
    transition: all .4s; //切换过滤效果
  }
  .courses{
    display: flex;
    &-left{
      flex:0 0 14%;
      height: $tasHeight*4+40px;
      overflow: hidden;
      position: relative;
      &-arrow{
        width: 100%;
        color:$orange;
        cursor: pointer;
        height: 40px;
        position: absolute;
        bottom: 0;
        background: $ffColor;
        display: flex;
        align-items: center;
        justify-content: center;
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
          margin: 0 auto;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color:$fMColor;
          font-size: $FS16;
          display: inline-block;
          position: relative;
          @include border-1px(1px,$borderColor);
        }
        &.active{
          background: $orange;
          .courses-nav-item-a {
            color: $ffColor;
            @include border-1px(1px,$ffColor);
          }
        }
      }
     }
    &-con{
      flex:1;
      background: $ffColor;
    }
  }

  .boxArea{
    &-small {
      .courses-left {
        flex: 0 0 30%;
      }
    }
  }




</style>
