<template>
  <div class="index_section3">
    <!--服务理念-->
    <div class="section section-1 satisfa">
      <div class="container">
        <section_title>
          <span slot="title">高质量的服务理念</span>
          <span slot="subtitle">从服务效率到用户反馈，用最优质的服务让用户满意</span>
        </section_title>
        <section_percent></section_percent>
      </div>
    </div>

    <!--教学课程-->
    <div class="section">
      <div class="container">
        <section_title>
          <span slot="title">画酷产品体系标准</span>
          <span slot="subtitle">专业课程体系标准</span>
        </section_title>
        <section_course></section_course>
      </div>
    </div>

    <!--师资力量-->
    <div class="section section-bgColor">
      <div class="container">
        <section_title>
          <span slot="title">严格筛选，组建强大师资</span>
          <span slot="subtitle">淘沙式筛选，严格背景调查，千万名老师中挑选一位最优质的导师</span>
        </section_title>
        <section_teacher></section_teacher>
      </div>
    </div>

    <!--合作伙伴-->
    <div class="section">
      <div class="container">
        <section_title>
          <span slot="title">与合作伙伴共创未来</span>
          <span slot="subtitle">来自多领域的合作方式，建立强大企业纽带，让未来不设限！</span>
        </section_title>
        <section_coller></section_coller>
      </div>
    </div>

    <!--联系我们-->
    <div class="section section-1 contact" style="position: relative">
      <div class="container">
        <section_title>
          <span slot="title">联系我们</span>
          <span slot="subtitle">如果你有任何问题，我们将为你解答。如果你又需要任何帮助，我们将提供协助。</span>
          <span slot="subtitle1">请随时联系我们！</span>
        </section_title>
        <vbtnInfo v-on:onShow="popupShow">联系我们</vbtnInfo>
        <vmessage :isShow="isShow" v-on:onHide="popupHide"></vmessage>
      </div>
    </div>
  </div>
</template>

<script>
  import section_title from "../../subcomponent/section-title/section-title"
  import section_percent from '../../subcomponent/section-percent/section-percent'
  import section_teacher from '../../subcomponent/section-teacher/section-teacher'

  import section_coller from '../../subcomponent/section-coller/section-coller'
  import vbtnInfo from '../../subcomponent/section-aboutusbtn/section-aboutusbtn'
  import vmessage from '../../subcomponent/section-aboutus/section-aboutus'


  import section_course from "../../subcomponent/section-course/section-course"

  export default {
    name: "index_section3",
    components: {
      section_title,
      section_percent,
      section_teacher,
      section_coller,
      vbtnInfo,vmessage,
      section_course
    },
    data(){
      return{
        isShow:false
      }
    },
    methods:{
      popupShow(data){
        this.isShow=data
      },
      popupHide(data){
        this.isShow=data
      }
    }
  }
</script>

<style lang="scss" scoped>
 .satisfa {
    background-image: url("./images/07.png");
  }
  .contact {
    background-image: url("./images/12.png");
  }
</style>
<style>
  .contact .section-title{
    margin-bottom: 50px;
  }
  .contact .vbtn-info{
    text-align: center;
  }
</style>


