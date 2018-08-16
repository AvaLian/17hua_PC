<template>
  <div class="advantage">

    <vbanner :content="bannerImg"></vbanner>
    <div class="section">
      <div class="container">
        <div class="section-title">
          <h4 class="section-title-txt">严选精英画师</h4>
          <p :class="{'none':SCWTag>1}">来自中国美院、上海美院，真正万中选一的好老师</p>
        </div>
        <img src="../../static/images/advantage/selectPro.jpg" alt="">
      </div>
    </div>

    <div class="section">
      <div class="container">
        <div class="section-title">
          <h4 class="section-title-txt">资深团队，深耕教研</h4>
          <p :class="{'none':SCWTag>1}">专注、创新、共享</p>
        </div>
        <vteacher :data="teachers"></vteacher>
      </div>
    </div>

  </div>
</template>

<script>
  import vbanner from './subcomponent/vbroadcast'
  import vteacher from './subcomponent/vteacher'

  export default {
    name: "advantage",
    components: {
      vbanner,vteacher
    },
    data(){
      return{
        bannerImg: [
          {
            imgUrl: "../../static/images/obj-img/banner.jpg"
          }
        ],
        teachers: [
          {
            level: 1,
            imgUrl: "../../static/images/teachers/teacher1.jpg",
            id: 1,
            name: "王燮达",
            brief: "1996年毕业于中国美术学院雕塑专业。中国雕塑学会会员、中国工艺美术学会雕塑专业委员会会员、全国城市雕塑创作设计资格证书持有者。他的作品充满既轻盈又高古，既灵动又深邃，既纯净又博大的各种形式趣味",
            bgColor: "linear-gradient(#f4f2f3, #d6d6d6)"
          },
          {
            level: 0,
            imgUrl: "../../static/images/teachers/teacher2.png",
            id: 2,
            name: "管岑",
            enname: "Cara",
            bgColor: "linear-gradient(#95e8cc,#42b2b3)"
          },
          {
            level: 0,
            imgUrl: "../../static/images/teachers/teacher3.png",
            id: 3,
            name: "柳慧",
            enname: "Jessie",
            bgColor: "linear-gradient(#91dae0,#4070bc)"
          }
        ]
      }
    },
    computed:{
      SCWTag() {
        return this.$store.state.SCWTag;
      }
    }
  }
</script>

<style scoped>

</style>
