<template>
  <div class="vteacher">
    <ul class="vteacher-master" v-if="tutors.master">
      <li class="vteacher-master-item" v-for="(e,i) in tutors.master" :key="e.id" :style="{'background':bgColor.m[i]}">
        <div class="vteacher-master-item-img">
          <img :src="e.imgUrl" alt="">
        </div>
        <div class="vteacher-master-item-con">
          <p class="vteacher-item-con-name">{{e.name}}</p>
          <p class="vteacher-master-item-con-pro">艺术大师</p>
          <div class="vteacher-master-item-con-des">{{e.brief}}</div>
          <div class="vteacher-master-item-con-btn">查看详情</div>
        </div>
      </li>
    </ul>

    <ul class="vteacher-tutor" v-if="tutors.tutor">
      <li class="vteacher-tutor-item" v-for="(e,i) in tutors.tutor" :key="e.id">
        <div class="vteacher-tutor-item-img" :style="{'background':bgColor.t[i]}">
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
    data() {
      return {
        bgColor: {
          m: ["linear-gradient(#f4f2f3, #d6d6d6)"],
          t: ["linear-gradient(#95e8cc,#42b2b3)", "linear-gradient(#91dae0,#4070bc)"]
        }
      }
    },
    computed:{
      tutors(){
        return this.$store.state.tutors
      }
    },
    created(){
      this.$store.dispatch('apiTutors')
    }
  }
</script>

<style lang="scss" scoped>
  .vteacher {
    color: $fMColor;
    &-item-con-name {
      font-weight: 700;
    }
    &-master {
      &-item {
        border-radius: 4px;
        box-shadow: 0 0 100px rgba(0, 0, 0, .2);
        overflow: hidden;
        display: flex;
        &-img {
          flex: 0 0 60%;
          margin-right: 20px;
          overflow: hidden;
          img {
            height: 100%;
          }
        }
        &-con {
          flex: 0 0 30%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-sizing: border-box;
          .vteacher-item-con-name {
            font-size: $FS24;
          }
          &-pro {
            color: $themeColor;
            margin: 8% 0 10% 0;
            font-size: $FS18;
          }
          &-des {
            line-height: 1.6;
            text-align: justify;
          }
          &-btn {
            margin-top: 10%;
            @include vbtn-shaow($ffColor, $themeColor, (0 0 20px $themeColor))
          }
        }
      }
    }
    &-tutor {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 100px;
      &-item {
        flex: 0 0 46%;
        border-radius: 4px;
        background: $ffColor;
        &-img {
          width: 100%;
          height: 340px;
          position: relative;
          img {
            height: 110%;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 0;
          }
        }
        &-con {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4%;
          &-name {
            font-size: 24px;
            letter-spacing: 14px;
          }
          .vteacher-item-con-name {
            font-size: 22px;
            margin: 3% 0 5% 0;
          }
          &-btn {
            color: $themeColor;
            border-radius: 4px;
            padding: 10px 20px;
            border: 1px solid $themeColor;
          }
        }
      }
    }
  }

  .boxArea {
    &-small {
      .vteacher-tutor-item {
        flex: 0 0 100%;
        &:not(:first-child) {
          margin-top: 60px;
        }
      }
      .vteacher-master-item {
        flex-direction: column;
        box-shadow: 0 0 50px rgba(0, 0, 0, .2);
        &-img{
          margin-right: 0;
          img{
            width: 100%;
          }
        }
        &-con {
          padding: 10%;
          &-pro {
            color: $themeColor;
            margin: 5% 0 6% 0;
            font-size: $FS18;
          }
        }
      }
    }
  }
</style>
