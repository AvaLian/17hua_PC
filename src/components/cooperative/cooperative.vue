<template>
    <div class="cooperative">

      <banner :topbanner="topbanner"></banner>



      <div class="section">
        <div class="container">
          <section_title>
            <span slot="title">合作伙伴遍布全球</span>
            <span slot="subtitle">中国、新加坡、加拿大、美国</span>
          </section_title>
          <img class="width100" src="./images/rectangle3.png" alt="合作伙伴遍布全球">
        </div>
      </div>

      <!--合作伙伴-->
      <div class="section">
        <div class="container">
          <section_title>
            <span slot="title">与合作伙伴共创未来</span>
            <span slot="subtitle">来自多领域的合作方式，建立强大企业纽带，让未来不设限！</span>
          </section_title>
          <section_coller :data="partner.info_list"></section_coller>
        </div>
      </div>
    </div>
</template>

<script>
    import banner from '../view/section-nybanner/section-nybanner'
    import section_title from "../subcomponent/section-title/section-title"
    import section_coller from '../subcomponent/section-coller/section-coller'
    export default {
      name: "cooperative",
      components:{
        banner,section_coller,section_title
      },
      computed:{
        topbanner(){
          return this.$store.state.cooperative.topbanner
        },
        partner(){
          return this.$store.state.cooperative.partner
        }
      },
      created() {
        this.$store.cache.dispatch("dataCooperative")
      },
    }
</script>

<style lang="scss" scoped>

</style>
