<template>
  <div class="advantage">
    <banner :topbanner="topbanner" class="topbanner">
      <section_linkus :isShow="false" v-if="SCWTag<1">立即报名</section_linkus>
    </banner>

    <section_allcon v-if="section1" :data="section1">
      <img class="width100" :src="section1.img_url" :alt="section1.first_title">
    </section_allcon>

    <section_allcon v-if="teaTeam" :data="teaTeam" class="section-borderBottom">
      <section_teacher :data="teaTeam.info_list"></section_teacher>
    </section_allcon>

    <section_allcon v-if="section3" :data="section3">
      <img class="width100" :src="section3.img_url" :alt="section3.first_title">
    </section_allcon>

    <section_allcon v-if="banner" :data="banner" class="section-1 banner"
                    :style="{'background-image':'url('+banner.img_url+')'}">
    </section_allcon>

    <section_allcon :data="{first_title:'大数据为您定制专属服务',second_title:'从服务效率到用户反馈、用最高的满意度去服务客户'}">
      <section_percent :up="false"></section_percent>
    </section_allcon>

    <section_allcon :data="{first_title:'VIP一对一创意绘画课程'}" class="section-1 experi">
      <section_linkus :isShow="false">立即报名</section_linkus>
    </section_allcon>

  </div>
</template>

<script>
  import banner from '../view/section-nybanner/section-nybanner'

  import section_allcon from "../view/section-allcon/section-allcon"
  import section_teacher from '../subcomponent/section-teacher/section-teacher'
  import section_percent from '../subcomponent/section-percent/section-percent'
  import section_linkus from '../subcomponent/section-linkus/section-linkus'
  export default {
    name: "advantage",
    components: {
      banner,
      section_allcon,
      section_percent,
      section_teacher,
      section_linkus
    },
    computed: {
      SCWTag(){
        return this.$store.state.SCWTag;
      },
      topbanner() {
        return this.$store.state.advantage.topbanner
      },
      section1() {
        return this.$store.state.advantage.section1
      },
      teaTeam() {
        return this.$store.state.advantage.teaTeam
      },
      section3() {
        return this.$store.state.advantage.section3
      },
      banner() {
        return this.$store.state.advantage.banner
      }
    },
    created() {
      this.$store.cache.dispatch("dataAdvantage")
    }
  }
</script>
<style lang="scss" scoped>
  .topbanner{
    position: relative;
  }
  .experi{
    background-image: url("./images/17rectangle.jpg");
    &-btn{
      @include vbtn($themeColor,#fff)
    }
  }
</style>
<style lang="scss">
  .topbanner{
    .section-linkus{
      margin-top: 2%;
    }
  }

  .banner {
    .section-title {
      margin-bottom: 0 !important;
    }
  }

  .advantage {
    .vdigits {
      color: $themeColor !important;
    }
  }

  .experi{
    position: relative;
    .container{
      padding: 3% 0 !important;
    }
    .section-linkus{
      text-align: center;
    }
  }
</style>
