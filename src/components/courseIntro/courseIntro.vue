<template>
  <div class="courseIntro">
    <banner :topbanner="topbanner"></banner>

    <section_allcon v-if="vts" :data="vts">
      <section_vts :data="vts.info_list"></section_vts>
    </section_allcon>

    <section_allcon v-if="proSystem" :data="proSystem" class="section-bgColor fullwidth">
      <section_course :data="proSystem.info_list"></section_course>
    </section_allcon>

    <section_allcon :data="{first_title:'轻松4步，开启创意世界的大门',second_title:'创意绘画，让你的世界更具色彩'}">
      <img class="width100" src="./images/rectangle10.png" alt="轻松4步，开启创意世界的大门">
    </section_allcon>

    <section_allcon v-if="section5" :data="section5" class="section-bgColor">
      <img class="width100 boxRadius" :src="section5.img_url" :alt="section5.first_title">
    </section_allcon>
  </div>
</template>

<script>
  import banner from '../view/section-nybanner/section-nybanner'
  import section_allcon from '../view/section-allcon/section-allcon'
  import section_vts from '../view/advantage-vts/advantage-vts'
  import section_course from '../subcomponent/section-course/section-course'

  export default {
    name: "courseIntro",
    components: {
      banner,
      section_allcon,
      section_vts,
      section_course,
    },
    computed:{
      topbanner(){
        return this.$store.state.courseIntro.topbanner
      },
      vts(){
        return this.$store.state.courseIntro.vts
      },
      proSystem(){
        return this.$store.state.courseIntro.proSystem
      },
      section5(){
        return this.$store.state.courseIntro.section5
      }
    },
    created() {
      this.$store.cache.dispatch("dataCourseIntro")
    },
  }
</script>

<style lang="scss" scoped>
</style>
