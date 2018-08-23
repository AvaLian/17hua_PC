<template>
    <div class="advantage_section3">
      <div class="section section-1 xdxx">
        <div class="container">
          <div class="section-title section-title-ma0">
            <h4 class="section-title-txt">解锁你的创造力</h4>
            <p>17画酷让你脱颖而出，成为绘画天才</p>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <div class="section-title">
            <h4 class="section-title-txt">大数据为您定制专属服务</h4>
            <p :class="{'none':SCWTag>1}">从服务效率到用户反馈、用最高的满意度去服务客户</p>
          </div>
          <vdigits :num="3" :color="'#fe405c'" :up="false"></vdigits>
        </div>
      </div>

      <div class="section section-1 experience">
        <div class="container">
          <div class="section-title section-title-ma0">
            <h4 class="section-title-txt">VIP一对一创意绘画课程</h4>
            <div class="experience-btn">报名体验</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import vdigits from '../../subcomponent/vdigits'
  export default {
    name: "advantage_section3",
    props:["SCWTag"],
    components: {
        vdigits
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
    border:1px solid $borderColor;
  }
</style>
