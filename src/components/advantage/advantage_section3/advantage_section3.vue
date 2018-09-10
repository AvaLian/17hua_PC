<template>
    <div class="advantage_section3">
      <div class="section section-1 xdxx">
        <div class="container">
          <section_title class="section-title-ma0">
            <span slot="title">解锁你的创造力</span>
            <span slot="subtitle">17画酷让你脱颖而出，成为绘画天才</span>
          </section_title>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <section_title>
            <span slot="title">大数据为您定制专属服务</span>
            <span slot="subtitle">从服务效率到用户反馈、用最高的满意度去服务客户</span>
          </section_title>
          <section_percent :up="false"></section_percent>
        </div>
      </div>

      <div class="section section-1 experience">
        <div class="container">
          <section_title class="section-title-ma0">
            <span slot="title">VIP一对一创意绘画课程</span>
            <span slot="subtitle">报名体验</span>
          </section_title>
        </div>
      </div>
    </div>
</template>

<script>
  import section_title from "../../subcomponent/section-title/section-title"
  import section_percent from '../../subcomponent/section-percent/section-percent'
  export default {
    name: "advantage_section3",
    props:["SCWTag"],
    components: {
      section_title,section_percent
    },
  }
</script>

<style lang="scss" scoped>
  .xdxx{
    background-image: url("./images/rectangle15.png");
  }
  .experience{
    background-image: url("./images/17rectangle.jpg");
    &-btn{
      @include vbtn($themeColor,#fff)
    }
  }
</style>
<style lang="scss" scoped>
  .vteacher-tutor-item-con{
    border-bottom-left-radius: $boxRadius;
    border-bottom-right-radius: $boxRadius;
    border:1px solid $borderColor;
  }
  .vdigits {
    color: $themeColor !important;
  }
</style>
