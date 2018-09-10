<template>
  <div class="index">
    <section_swiper>
      <swiper-slide>
        <img class="swiper-slide-img" src="../../../static/images/obj-img/banner01.png" alt="">
        <div class="swiper-slide-con">
          <div class="container">
            <h2>想画画<br>就到17画酷</h2>
            <p>从小白到绘画天才</p>
            <el-button type="button" @click="dialogVisible = true">查看视频</el-button>
          </div>
        </div>
      </swiper-slide>
    </section_swiper>

    <el-dialog :visible.sync="dialogVisible" @open="openPlay" @close="closePlay" :append-to-body="true" :lock-scroll="false">
      <section_player :video-url="videoUrl" :state="state"></section_player>
    </el-dialog>

    <!--领先价值-->
    <index_section_1></index_section_1>

    <!--教学理念-->
    <index_section_2></index_section_2>

    <index_section_3></index_section_3>
  </div>
</template>

<script>

  import section_swiper from '../subcomponent/section-swiper/section-swiper'
  import section_player from '../subcomponent/section-player/section-player'
  import index_section_1 from './index_section1/index_section1'
  import index_section_2 from './index_section2/index_section2'
  import index_section_3 from './index_section3/index_section3'

  export default {
    name: "index",
    components: {
      section_swiper, section_player,
      index_section_1, index_section_2, index_section_3,
    },
    created() {
      // this.$http.get(this.$api.right).then(res=>{
      //   console.log("请求导师数据",res);
      // }).catch(err=>{
      //   console.log("err:",err);
      // })
    },
    data() {
      return {
        dialogVisible: false,
        videoUrl: "//image.17hua.me/upload/video/201709/1506411772545584.mp4",
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
    color: $ffColor;
    width: 140px;
    border: 3px solid $ffColor;
    border-radius: 20px;
    background: none;
  }
</style>



