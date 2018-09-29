<template>
  <div class="index">

    <banner v-if="topbanner" :custom="true" :total="topbanner.info_list.length"
            class="topbanner">
      <swiper-slide v-for="(data,i) in topbanner.info_list" :key="i">
        <img class="swiper-slide-img" :src="data.img_url" alt="" style="height:auto;">
        <div class="swiper-slide-con">
          <div class="container">
            <h2 v-if="!data.first_title" v-html="topbanner.first_title"></h2>
            <h2 v-if="data.first_title" v-html="data.first_title"></h2>
            <p v-if="!data.second_title">{{topbanner.second_title}}</p>
            <p v-if="data.second_title">{{data.second_title}}</p>
            <el-button type="button" @click="dialogVisible = true" v-if="topbanner&&topbanner.mp4_url&&SCWTag<1">查看视频</el-button>
          </div>
        </div>
      </swiper-slide>
    </banner>

    <el-dialog v-if="topbanner&&topbanner.mp4_url&&SCWTag<1" :visible.sync="dialogVisible" @open="openPlay" @close="closePlay"
               :append-to-body="true" :lock-scroll="false">
      <section_player :video-url="topbanner.mp4_url" :state="state"></section_player>
    </el-dialog>

    <!--领先价值-->
    <section_allcon v-if="section1" :data="section1" class="section-borderBottom">
      <index_selecttutor :data="section1.info_list"></index_selecttutor>
    </section_allcon>

    <!--教学理念-->
    <section_allcon v-if="section2" :data="section2">
      <index_teachidea :data="section2.info_list"></index_teachidea>
    </section_allcon>

    <!--服务理念-->
    <section_allcon v-if="banner" :data="banner" class="section-1"
                    :style="{'background-image':'url('+banner.img_url+')'}">
      <section_percent></section_percent>
    </section_allcon>

    <!--教学课程-->
    <section_allcon v-if="proSystem" :data="proSystem" class="fullwidth">
      <section_course :data="proSystem.info_list"></section_course>
    </section_allcon>

    <!--师资力量-->
    <section_allcon v-if="teaStrength" :data="teaStrength" class="section-bgColor">
      <section_teacher :data="teaStrength.info_list"></section_teacher>
    </section_allcon>

    <!--合作伙伴-->
    <section_allcon v-if="cooperative" :data="cooperative">
      <section_coller :data="cooperative.info_list"></section_coller>
    </section_allcon>

    <!--联系我们-->
    <section_allcon v-if="contact" :data="contact" class="section-1 contact"
                    :style="{'background-image':'url('+contact.img_url+')'}">
      <section_linkus :isShow="false">联系我们</section_linkus>
    </section_allcon>
  </div>
</template>

<script>

  import banner from '../view/section-nybanner/section-nybanner'
  import section_player from '../subcomponent/section-player/section-player'

  import section_allcon from "../view/section-allcon/section-allcon"

  import index_selecttutor from '../view/index-selecttutor/index-selecttutor'
  import index_teachidea from '../view/index-teachidea/index-teachidea'
  import section_course from "../subcomponent/section-course/section-course"
  import section_percent from '../subcomponent/section-percent/section-percent'
  import section_teacher from '../subcomponent/section-teacher/section-teacher'
  import section_coller from '../subcomponent/section-coller/section-coller'
  import section_linkus from '../subcomponent/section-linkus/section-linkus'

  export default {
    name: "index",
    components: {
      banner,
      section_player,
      section_allcon,
      index_selecttutor,
      index_teachidea,
      section_course,
      section_percent,
      section_teacher,
      section_coller,
      section_linkus,
    },
    computed: {
      topbanner() {
        return this.$store.state.home.topbanner
      },
      banner() {
        return this.$store.state.home.banner
      },
      SCWTag(){
        return this.$store.state.SCWTag;
      },
      section1() {
        return this.$store.state.home.selections
      },
      section2() {
        return this.$store.state.home.section2
      },
      proSystem() {
        return this.$store.state.home.proSystem
      },
      teaStrength() {
        return this.$store.state.home.teaStrength
      },
      cooperative() {
        return this.$store.state.home.cooperative
      },
      contact() {
        return this.$store.state.home.contact
      }
    },
    created() {
      // this.$store.cache.dispatch("dataHome")
      this.$store.dispatch("dataHome");
    },
    data() {
      return {
        dialogVisible: false,
        state: false,
      }
    },
    methods: {
      closePlay() {
        this.state = true;
      },
      openPlay() {
        this.state = false;
      },
    },
  }
</script>

<style lang="scss">
  @import "../../assets/style/icon.css";

  .el-button {
    color: $ffColor !important;
    width: 140px;
    border: 3px solid $ffColor !important;
    border-radius: 20px !important;
    background: none !important;
    margin-top: 20px !important;
    &:focus, &:hover {
      color: $themeColor !important;
      border-color: $themeColor !important;
      background-color: #fcf0f2 !important;
    }
  }

  .contact {
    position: relative;
    .section-linkus {
      text-align: center;
    }
  }

  //banner内容公共样式
  .topbanner {
    .container {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h2 {
        font-size: 60px;
        font-family: PingFangSC-Semibold, "Microsoft YaHei", sans-serif;
        font-weight: 700;
        line-height: 1.2;
      }
      p {
        font-size: $FS24;
        line-height: 1.2;
        font-family: PingFangSC-Regular, "Microsoft YaHei UI Light", "Microsoft YaHei", sans-serif;
        margin-top: 2%;
      }
    }
  }

  .boxArea {
    &-small {
      .topbanner {
        .container {
          padding: 0 2%;
          box-sizing: border-box;
          h2 {
            font-size: $FS22;
          }
          p {
            font-size: $FS12;
          }
        }
      }
    }
  }

</style>



