<template>
  <div class="index">
    <vbanner>
      <swiper-slide>
        <img class="swiper-slide-img" src="../../../static/images/obj-img/banner.jpg" alt="">
        <div class="swiper-slide-con">
          <div class="container">
            <h2>想画画<br>就到17画酷</h2>
            <p>从小白到绘画小天才</p>
            <vbutton>
              查看视频
            </vbutton>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-slide-img" src="../../../static/images/obj-img/banner.jpg" alt="">
        <div class="swiper-slide-con">
          <div class="container">
            <h2>你们的进步<br>就是我们最大的收获</h2>
            <p>17画酷用真诚服务每一个人</p>
          </div>
        </div>
      </swiper-slide>
    </vbanner>

    <!--领先价值-->
    <index_section_1></index_section_1>

    <!--教学理念-->
    <index_section_2></index_section_2>


    <index_section_3></index_section_3>


  </div>
</template>

<script>

  import vbanner from '../subcomponent/vbroadcast/vbroadcast'
  import vbutton from '../subcomponent/s-btn'
  import index_section_1 from './index_section1/index_section1'
  import index_section_2 from './index_section2/index_section2'
  import index_section_3 from './index_section3/index_section3'

  export default {
    name: "index",
    components: {
      vbanner, vbutton,
      index_section_1, index_section_2, index_section_3
    },
    computed: {
      SCWTag() {
        return this.$store.state.SCWTag;
      }
    },
    created() {
      // this.$http.get(this.$api.right).then(res=>{
      //   console.log("请求导师数据",res);
      // }).catch(err=>{
      //   console.log("err:",err);
      // })
    }

  }
</script>

<style lang="scss" scoped>

</style>


