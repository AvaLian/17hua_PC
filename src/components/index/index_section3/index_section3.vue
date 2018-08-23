<template>
  <div class="index_section3">
    <!--服务理念-->
    <div class="section section-1 satisfa">
      <div class="container">
        <vtitle>
          <span slot="title">高质量的服务理念</span>
          <span slot="subtitle">从服务效率到用户反馈，用最优质的服务让用户满意</span>
        </vtitle>
        <vdigits :num="3"></vdigits>
      </div>
    </div>

    <!--教学课程-->
    <div class="section">
      <div class="container">
        <vtitle>
          <span slot="title">绘画课程体系标准</span>
          <span slot="subtitle">专业课程体系标准</span>
        </vtitle>
        <vcourses></vcourses>
      </div>
    </div>

    <!--师资力量-->
    <div class="section section-bgColor">
      <div class="container">
        <vtitle>
          <span slot="title">严格筛选，组建强大师资</span>
          <span slot="subtitle">淘沙式筛选，严格背景调查，千万名老师中挑选一位最优质的导师</span>
        </vtitle>
        <vteacher></vteacher>
      </div>
    </div>

    <!--合作伙伴-->
    <div class="section">
      <div class="container">
        <vtitle>
          <span slot="title">与合作伙伴共创未来</span>
          <span slot="subtitle">来自多领域的合作方式，建立强大企业纽带，让未来不设限！</span>
        </vtitle>
        <vcoller></vcoller>
      </div>
    </div>

    <!--联系我们-->
    <div class="section section-1 contact">
      <div class="container">
        <vtitle>
          <span slot="title">联系我们</span>
          <span slot="subtitle">如果你有任何问题，我们将为你解答。如果你又需要任何帮助，我们将提供协助。</span>
          <span slot="subtitle1">请随时联系我们！</span>
        </vtitle>
        <vbtnInfo>联系我们</vbtnInfo>
      </div>
    </div>
  </div>
</template>

<script>
  import vtitle from "../../subcomponent/vtitle"
  import vdigits from '../../subcomponent/vdigits'
  import vteacher from '../../subcomponent/vteacher'
  import vcourses from '../../subcomponent/vcourses'
  import vbtnInfo from '../../subcomponent/vbtn-info'
  import vcoller from '../../subcomponent/vcoller'

  export default {
    name: "index_section3",
    components: {
      vtitle,vdigits, vteacher, vcourses, vbtnInfo, vcoller
    },
  }
</script>

<style lang="scss" scoped>
 .satisfa {
    background-image: url("./images/IMG_5635.jpg");
  }
  .contact {
    background-image: url("./images/DSC4172.jpg");
  }
</style>
<style>
  .vbtn-info{
    text-align: center;
  }
</style>

