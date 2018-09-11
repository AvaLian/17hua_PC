<template>
  <div class="courseIntro">
    <banner :topbanner="topbanner"></banner>

    <courseIntro_section1></courseIntro_section1>

    <courseIntro_section2></courseIntro_section2>
  </div>
</template>

<script>
  import banner from '../view/section-nybanner/section-nybanner'
  import courseIntro_section1 from './courseIntro_section1/courseIntro_section1'
  import courseIntro_section2 from './courseIntro_section2/courseIntro_section2'
  export default {
    name: "courseIntro",
    components: {
      banner,
      courseIntro_section1,
      courseIntro_section2
    },
    computed:{
      topbanner(){
        return this.$store.state.courseIntro.topbanner
      }
    },
    created() {
      this.$store.cache.dispatch("dataCourseIntro")
    },
  }
</script>

<style lang="scss" scoped>
</style>
