<template>
  <div class="index">
    <section_swiper v-if="topbanner">
      <swiper-slide>
        <img class="swiper-slide-img" :src="topbanner.img_url" alt="">
        <div class="swiper-slide-con">
          <div class="container">
            <h2 v-html="topbanner.first_title"></h2>
            <p>{{topbanner.second_title}}</p>
            <el-button type="button" @click="dialogVisible = true" v-if="topbanner.mp4_url">查看视频</el-button>
          </div>
        </div>
      </swiper-slide>
    </section_swiper>

    <el-dialog v-if="topbanner" :visible.sync="dialogVisible" @open="openPlay" @close="closePlay" :append-to-body="true" :lock-scroll="false">
      <section_player :video-url="topbanner.mp4_url" :state="state"></section_player>
    </el-dialog>

    <!--领先价值-->
    <section_allcon v-if="section1" :data="section1">
      <index_selecttutor :data="section1.info_list"></index_selecttutor>
    </section_allcon>

    <!--教学理念-->
    <section_allcon v-if="section2" :data="section2">
      <index_teachidea :data="section2.info_list"></index_teachidea>
    </section_allcon>

    <!--服务理念-->
    <section_allcon v-if="banner" :data="banner" class="section-1" :style="{'background-image':'url('+banner.img_url+')'}">
      <section_percent></section_percent>
    </section_allcon>

    <!--教学课程-->
    <section_allcon v-if="proSystem" :data="proSystem">
      <section_course :data="proSystem.info_list"></section_course>
    </section_allcon>

    <!--师资力量-->
    <section_allcon v-if="teaStrength" :data="teaStrength" class="section-bgColor">
      <section_teacher></section_teacher>
    </section_allcon>

    <!--合作伙伴-->
    <section_allcon v-if="cooperative" :data="cooperative">
      <section_coller :data="cooperative.info_list"></section_coller>
    </section_allcon>

    <!--联系我们-->
    <section_allcon v-if="contact" :data="contact" class="section-1 contact" :style="{'background-image':'url('+contact.img_url+')'}">
      <vbtnInfo v-on:onShow="popupShow">联系我们</vbtnInfo>
      <vmessage :isShow="isShow" v-on:onHide="popupHide"></vmessage>
    </section_allcon>
  </div>
</template>

<script>

  import section_swiper from '../subcomponent/section-swiper/section-swiper'
  import section_player from '../subcomponent/section-player/section-player'

  import index_selecttutor from '../view/index_selecttutor/index_selecttutor'
  import index_teachidea from '../view/index_teachidea/index_teachidea'
  import section_allcon from "../view/section-allcon/section-allcon"
  import section_percent from '../subcomponent/section-percent/section-percent'
  import section_teacher from '../subcomponent/section-teacher/section-teacher'
  import section_coller from '../subcomponent/section-coller/section-coller'
  import vbtnInfo from '../subcomponent/section-aboutusbtn/section-aboutusbtn'
  import vmessage from '../subcomponent/section-aboutus/section-aboutus'

  import section_course from "../subcomponent/section-course/section-course"

  export default {
    name: "index",
    components: {
      section_swiper,
      section_player,
      index_selecttutor,
      index_teachidea,
      section_allcon,
      section_percent,
      section_teacher,
      section_coller,
      vbtnInfo,vmessage,
      section_course
    },
    computed:{
      topbanner(){
        return this.$store.state.home.topbanner
      },
      banner(){
        return this.$store.state.home.banner
      },
      section1() {
        return this.$store.state.home.selections
      },
      section2() {
        return this.$store.state.home.section2
      },
      proSystem(){
        return this.$store.state.home.proSystem
      },
      teaStrength(){
        return this.$store.state.home.teaStrength
      },
      cooperative(){
        return this.$store.state.home.cooperative
      },
      contact(){
        return this.$store.state.home.contact
      }
    },
    created() {
      this.$store.cache.dispatch("dataHome")
    },
    data() {
      return {
        dialogVisible: false,
        state: false,
        isShow:false
      }
    },
    methods: {
      closePlay() {
        this.state = true;
      },
      openPlay() {
        this.state = false;
      },
      popupShow(data){
        this.isShow=data
      },
      popupHide(data){
        this.isShow=data
      }
    },
  }
</script>

<style lang="scss">
  @import "../../assets/style/icon.css";

  .el-button {
    color: $ffColor;
    width: 140px;
    border: 3px solid $ffColor;
    border-radius: 20px;
    background: none;
  }
  .contact{
    position: relative;
  }
  .contact .section-title{
    margin-bottom: 50px;
  }
  .contact .vbtn-info{
    text-align: center;
  }
</style>



