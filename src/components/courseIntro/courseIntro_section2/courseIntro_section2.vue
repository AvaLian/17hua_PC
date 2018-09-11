<template>
    <div class="course-intro_section2">
      <div class="section">
        <div class="container">
          <section_title>
            <span slot="title">轻松4步，开启创意世界的大门</span>
            <span slot="subtitle">创意绘画，让你的世界更具色彩</span>
          </section_title>
          <img class="width100" src="./images/rectangle10.png" alt="">
          <!--<ul class="step">-->
            <!--<li class="step-item" v-for="(e,i) in step">-->
              <!--<div class="step-item-bg" :style="{'background': e.bgColor}"></div>-->
              <!--<div class="step-item-con">-->
                <!--<i class="step-item-con-num">{{"0"+(i+1)}}</i>-->
                <!--<span>{{e.txt}}</span>-->
              <!--</div>-->
            <!--</li>-->
          <!--</ul>-->
        </div>
      </div>

      <div class="section section-bgColor" v-if="section5">
        <div class="container">
          <section_title>
            <span slot="title">{{section5.first_title}}</span>
            <span slot="subtitle">{{section5.second_title}}</span>
          </section_title>
          <img class="width100 boxRadius" :src="section5.img_url" :alt="section5.first_title">
        </div>
      </div>
    </div>
</template>

<script>
    import section_title from "../../subcomponent/section-title/section-title"
    export default {
      name: "course-intro_section2",
      components:{
        section_title
      },
      computed:{
        section5(){
          return this.$store.state.courseIntro.section5
        }
      }
    }
</script>

<style lang="scss" scoped>
  .step {
    display: flex;
    justify-content: space-between;
    &-item {
      position: relative;
      &-bg {
        width: 120px;
        height: 120px;
        border-radius: 20px;
        transform: rotate(45deg);
      }
      &-con {
        width: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        color: $ffColor;
        margin-top: -5%;
        &-num {
          font-style: normal;
          font-size: $FS30;
          font-weight: 700;
          margin-bottom: 5%;
        }
      }
      &:after {
        content: "";
        display: block;
        position: absolute;
        right: -130%;
        top: 50%;
        transform: translateY(-50%);
        width: 100px;
        height: 10px;
        border-radius: 10px;
        background: #b2e7f7;
      }
      &:last-child:after {
        display: none;
      }
    }
  }
  .boxArea {
    &-small {
      .step{
        &-item{
          flex: 0 0 25%;
          &-bg{
            width: 100%;
            height: 100px;
            transform: rotate(0);
          }
          &:after{
            display: none;
          }
        }
      }
    }
  }
</style>
