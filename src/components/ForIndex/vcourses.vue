<template>
  <div class="courses box-shadow">
    <div class="courses-left" >
      <!--:style="{'top':active*(-128)+'px'}"-->
        <ul class="courses-nav" :style="{'top':-scrollHeigth+'px'}">
          <li class="courses-nav-item" @click="toggle(index)" v-for="(tab,index) in tabs" :class="{active: active == index}">
            <a class="courses-nav-item-a" href="javascript:void(0)">{{ tab.name }}</a>
          </li>
        </ul>

      <div class="icon" @click="toggle(active+1)"><i class="iconfont icon-jiantou1"></i></div>
    </div>
    <component class="courses-con" :is="currentView" :data="tabs[active]"></component>
  </div>
</template>

<script>
  import first from './first';
  import second from './second';
  import third from './third';
  import detail from './vcourses-detail';
    export default {
        name: "vcourses",
        components: {
          first,
          second,
          third,
          detail
        },
        data(){
            return{
              currentView: 'detail',
              active: 0,
              activeHeight:0,
              scrollHeigth:0,
              tasHeight:128,
              showNum:4,
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
          toggle(i) {
            this.active = i;

            if(this.active>this.tabs.length-1) {this.active=0;this.scrollHeigth=0}
            this.currentView =this.tabs[i].view;

            // 判断tabs个数
            if(this.tabs.length<=this.showNum) return false;
            // 判断当前选中（包含）tab前总高度
            this.activeHeight=(i+1)*this.tasHeight;


            console.log(this.activeHeight,(this.tasHeight*(this.showNum)));
            if(this.activeHeight>=(this.tasHeight*this.showNum)) {
              console.log(this.showNum,this.active,this.active+2-this.showNum);
              this.scrollHeigth=this.tasHeight*(this.active+2-this.showNum);
            }
            // else if(this.activeHeight<=this.tasHeight*(this.tabs.length-2)) {this.scrollHeigth=0;}


            // if(this.activeHeight>=(this.tasHeight*(this.tabs.length-1))) {
            //   console.log(this.activeHeight,this.tasHeight,this.tabs.length-this.active);
            //   this.scrollHeigth=this.tasHeight*(this.tabs.length-this.active);
            // }
            // else if(this.activeHeight<=this.tasHeight*(this.tabs.length-2)) {this.scrollHeigth=0;}
          }
        }
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/style/icon.css";
  .courses{
    display: flex;
    &-left{
      flex:0 0 200px;
      height: 550px;
      overflow: hidden;
      position: relative;
      .icon{
        width: 100%;
        color:#ffaf00;
        cursor: pointer;
        text-align: center;
        position: absolute;
        bottom: 0;
        background: #fff;
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
        height: 128px;
        line-height: 128px;
        text-align: center;
        &-a{
          width: 80%;
          display: inline-block;
          position: relative;
        }
        :after{
          content: "";
          width: 100%;
          position: absolute;
          left:0;
          bottom: 0;
          border-bottom: 1px solid $borderColor;
        }
        &.active{
          background: #ffaf00;
          :after{
            content: "";
            width: 100%;
            position: absolute;
            left:0;
            bottom: 0;
            border-bottom: 1px solid $ffColor;
          }
        }
      }
     }
    &-con{
      flex:1;
      background: #fff;
    }

  }
</style>
