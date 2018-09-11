<template>
  <div class="section">
    <div class="container">
      <section_title>
        <span slot="title">{{data.first_title}}</span>
        <span slot="subtitle" v-html="data.second_title"></span>
      </section_title>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import section_title from "../../subcomponent/section-title/section-title"

  export default {
    name: "section-allcon",
    props: ["data"],
    components: {
      section_title
    }
  }
</script>

<style scoped>

</style>
