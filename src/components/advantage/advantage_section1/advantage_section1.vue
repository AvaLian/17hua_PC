<template>
  <div class="advantage_section1">
    <div class="section">
      <div class="container">
        <section_title>
          <span slot="title">严选精英画师</span>
          <span slot="subtitle">来自中国美院、上海美院，真正万中选一的好老师</span>
        </section_title>
        <img class="width100" src="./images/polygon1-2.png" alt="严选精英画师">
      </div>
    </div>

    <div class="section section-borderBottom teacher">
      <div class="container">
        <section_title>
          <span slot="title">资深团队，深耕教研</span>
          <span slot="subtitle">专注、创新、共享</span>
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
  }
</script>

<style>
</style>
