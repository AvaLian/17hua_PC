<template>
    <div class="vteacher">
      <ul class="vteacher-master">
        <!--:style="{'background':e.bgColor}"-->
        <!--:style="{'background':'url('+e.imgUrl+')'}"-->
        <li class="vteacher-master-item" v-for="e in data" :key="e.id" v-if="e.level" :style="{'background':e.bgColor}">
          <div class="vteacher-master-item-img"><img :src="e.imgUrl" alt=""></div>
          <div class="vteacher-master-item-con">
            <p class="vteacher-item-con-name">{{e.name}}</p>
            <p class="vteacher-master-item-con-pro">艺术大师</p>
            <div class="vteacher-master-item-con-des">{{e.brief}}</div>
            <div class="vteacher-master-item-con-btn">查看详情</div>
          </div>
        </li>
      </ul>

      <ul class="vteacher-tutor">
        <li class="vteacher-tutor-item"  v-for="e in data" :key="e.id" v-if="!e.level" >
          <div class="vteacher-tutor-item-img" :style="{'background':e.bgColor}">
            <img :src="e.imgUrl" alt="">
          </div>
          <div class="vteacher-tutor-item-con">
            <p class="vteacher-tutor-item-con-name">{{e.enname}}</p>
            <p class="vteacher-item-con-name">{{e.name}}导师</p>
            <span class="vteacher-tutor-item-con-btn">查看详情</span>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "vteacher",
        props:{
            data:{
              type:Array
            }
        }
    }
</script>

<style lang="scss" scoped>
  .vteacher{
    color:$fMColor;
    &-item-con-name{
      font-weight: 700;
    }
    &-master{
      &-item{
        border-radius: 4px;
        box-shadow: 0 0 20px rgba(0,0,0,.2);
        overflow: hidden;
        display: flex;
        &-img{
          flex: 0 0 60%;
          overflow: hidden;
        }
        &-con{
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          /*padding: 10%;*/
          box-sizing: border-box;
          .vteacher-item-con-name{
            font-size: $RS24;
          }
          &-pro{
            color: $themeColor;
            margin: 8% 0 10% 0;
            font-size: $RS18;
          }
          &-des{
            line-height: 1.6;
            text-align: justify;
          }
          &-btn{
            margin-top: 3rem;
            @include vbtn-shaow($ffColor,$themeColor,(0 0 20px $themeColor))
          }
        }
      }
    }
    &-tutor{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 100px;
      &-item{
        flex:0 0 46%;
        border-radius: 4px;
        background: $ffColor;
        &-img{
          width: 100%;
          height: 34rem;
          position: relative;
          img{
            height: 110%;
            position: absolute;
            left:50%;
            transform: translateX(-50%);
            bottom:0;
          }
        }
        &-con{
         display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          &-name{
            font-size: 24px;
            letter-spacing: 14px;
          }
          .vteacher-item-con-name{
            font-size: $RS22;
            margin: 1rem 0 2rem 0;
          }
          &-btn{
            color:$themeColor;
            border-radius: 4px;
            padding: .8rem 2rem;
            border:1px solid $themeColor;
          }
        }
      }
    }
  }


  .boxArea{
    &-middle{
      /*.vteacher-master-item-con{*/
        /*padding: 5%;*/
      /*}*/
    }
    &-small{

      .vteacher-tutor-item{
        flex: 0 0 100%;
        &:not(:first-child){
          margin-top: 4rem;
        }
      }
      /*.vteacher-tutor-item-img{*/
        /*height: 20rem;*/
      /*}*/
    }
  }
</style>
