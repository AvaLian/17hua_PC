<template>
    <div class="vteacher">
      <ul class="vteacher-master">
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
        position: relative;
        &-con{
          width: 30%;
          position: absolute;
          right: 10%;
          top:50%;
          transform: translateY(-50%);
          .vteacher-item-con-name{
            font-size: 24px;
          }
          &-pro{
            color: $themeColor;
            margin: 20px 0 40px 0;
          }
          &-des{
            line-height: 1.6;
            text-align: justify;
          }
          &-btn{
            width: 100px;
            margin-top: 30px;
            color:$ffColor;
            border-radius: 4px;
            padding: 14px 20px;
            text-align: center;
            background: $themeColor;
            box-shadow: 0 0 20px $themeColor;
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
        flex:0 0 45%;
        border-radius: 10px;
        background: $ffColor;
        &-img{
          width: 100%;
          height: 580px;
          position: relative;
          img{
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
          padding: 20px;
          &-name{
            font-size: 24px;
            letter-spacing: 14px;
          }
          .vteacher-item-con-name{
            font-size: 22px;
            margin: 10px 0 20px 0;
          }
          &-btn{
            color:$themeColor;
            border-radius: 4px;
            padding: 8px 20px;
            border:1px solid $themeColor;
          }
        }
      }
    }
  }
</style>
