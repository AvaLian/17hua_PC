<template>
    <div class="advantage_section3">
      <div class="section section-1 xdxx">
        <div class="container">
          <vtitle class="section-title-ma0">
            <span slot="title">解锁你的创造力</span>
            <span slot="subtitle">17画酷让你脱颖而出，成为绘画天才</span>
          </vtitle>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <vtitle>
            <span slot="title">大数据为您定制专属服务</span>
            <span slot="subtitle">从服务效率到用户反馈、用最高的满意度去服务客户</span>
          </vtitle>
          <vdigits :num="3" :color="'#fe405c'" :up="false"></vdigits>
        </div>
      </div>

      <div class="section section-1 experience">
        <div class="container">
          <vtitle class="section-title-ma0">
            <span slot="title">VIP一对一创意绘画课程</span>
            <span slot="subtitle">报名体验</span>
          </vtitle>
        </div>
      </div>
    </div>
</template>

<script>
  import vtitle from "../../subcomponent/vtitle"
  import vdigits from '../../subcomponent/vdigits'
  export default {
    name: "advantage_section3",
    props:["SCWTag"],
    components: {
      vtitle,vdigits
    },
  }
</script>

<style lang="scss" scoped>
  .xdxx{
    background-image: url("./images/DSC4230.jpg");
  }
  .experience{
    background-image: url("./images/baTranig.jpg");
    &-btn{
      @include vbtn($themeColor,#fff)
    }
  }
</style>
<style lang="scss">
  .vteacher-tutor-item-con{
    border-bottom-left-radius: $boxRadius;
    border-bottom-right-radius: $boxRadius;
    border:1px solid $borderColor;
  }
</style>
