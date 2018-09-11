<template>
  <div class="advantage_section1">
    <div class="section">
      <div class="container">
        <section_title>
          <span slot="title">{{section1.first_title}}</span>
          <span slot="subtitle">{{section1.second_title}}</span>
        </section_title>
        <img class="width100" :src="section1.img_url" alt="严选精英画师">
      </div>
    </div>

    <div class="section section-borderBottom">
      <div class="container">
        <section_title>
          <span slot="title">{{teaTeam.first_title}}</span>
          <span slot="subtitle">{{teaTeam.second_title}}</span>
        </section_title>
        <section_teacher></section_teacher>
      </div>
    </div>
  </div>
</template>

<script>
  import section_title from "../../subcomponent/section-title/section-title"
  import section_teacher from '../../subcomponent/section-teacher/section-teacher'
  export default {
    name: "advantage_section1",
    components: {
      section_title,
      section_teacher
    },
    computed:{
      section1(){
        return this.$store.state.advantage.section1
      },
      teaTeam(){
        return this.$store.state.advantage.teaTeam
      }
    },
  }
</script>

<style>
</style>
