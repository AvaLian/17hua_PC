<template>
  <div class="advantage_section1">
    <div class="section">
      <div class="container">
        <vtitle>
          <span slot="title">严选精英画师</span>
          <span slot="subtitle">来自中国美院、上海美院，真正万中选一的好老师</span>
        </vtitle>
        <img class="width100" src="./images/polygon1-2.png" alt="严选精英画师">
      </div>
    </div>

    <div class="section section-borderBottom">
      <div class="container">
        <vtitle>
          <span slot="title">资深团队，深耕教研</span>
          <span slot="subtitle">专注、创新、共享</span>
        </vtitle>
        <vteacher></vteacher>
      </div>
    </div>
  </div>
</template>

<script>
  import vtitle from "../../subcomponent/vtitle"
  import vteacher from '../../subcomponent/vteacher'
  export default {
    name: "advantage_section1",
    components: {
      vtitle,vteacher
    },
  }
</script>

<style lang="scss" scoped>

</style>
