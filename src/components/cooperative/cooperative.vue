<template>
    <div class="cooperative">
      <banner :topbanner="topbanner"></banner>

      <section_allcon :data="{first_title:'合作伙伴遍布全球',second_title:'中国、新加坡、加拿大、美国'}">
        <img class="width100" src="./images/rectangle3.png" alt="合作伙伴遍布全球">
      </section_allcon>

      <section_allcon v-if="partner" :data="partner" class="section-bgColor">
        <section_coller :data="partner.info_list"></section_coller>
      </section_allcon>
    </div>
</template>

<script>
    import banner from '../view/section-nybanner/section-nybanner'
    import section_coller from '../subcomponent/section-coller/section-coller'
    import section_allcon from '../view/section-allcon/section-allcon'
    export default {
      name: "cooperative",
      components:{
        banner,
        section_allcon,
        section_coller,
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
