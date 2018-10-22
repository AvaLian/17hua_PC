<template>
  <!--
  section：默认样式
  section-1：有图片背景
  section-bgColor：有背景颜色
  section-borderBottom：下划线
  -->
  <div class="section">
    <div class="container">
      <section_title :flag="flag">
        <span slot="title">{{data.first_title}}</span>
        <span slot="subtitle" v-html="data.second_title" ></span>
      </section_title>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import section_title from "../section-title/section-title"

  export default {
    name: "section-allcon",
    props: ["data","flag"],
    components: {
      section_title
    }
  }
</script>

<style lang="scss" scoped>

</style>
