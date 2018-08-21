<template>
    <div class="cooperative">
      <vbanner :isPage="false">
        <swiper-slide>
          <img class="swiper-slide-img" src="../../static/images/obj-img/banner.jpg" alt="">
          <div class="swiper-slide-con">
            <div class="container">
              <h2>携手合作伙伴<br>共创未来</h2>
              <p>详情致电：400-128-1717</p>
            </div>
          </div>
        </swiper-slide>
      </vbanner>

      <div class="section">
        <div class="container">
          <div class="section-title">
            <h4 class="section-title-txt">合作伙伴遍布全球</h4>
            <p :class="{'none':SCWTag>1}">中国、新加坡、加拿大、美国</p>
          </div>
          <img style="width: 100%" src="../../static/images/cooperative/map.png" alt="">
        </div>
      </div>

      <!--合作伙伴-->
      <div class="section">
        <div class="container">
          <div class="section-title">
            <h4 class="section-title-txt">与合作伙伴共创未来</h4>
            <p :class="{'none':SCWTag>1}">来自多领域的合作方式，建立强大企业纽带，让未来不设限！</p>
          </div>
          <vcoller></vcoller>
        </div>
      </div>
    </div>
</template>

<script>
    import vbanner from './subcomponent/vbroadcast'
    import vcoller from './subcomponent/vcoller'
    export default {
        name: "cooperative",
        components:{
          vbanner,vcoller
        },
      computed: {
        SCWTag() {
          return this.$store.state.SCWTag;
        }
      },
      data(){
          return{
            bannerImg:[
              {
                imgUrl: "../../static/images/obj-img/banner.jpg"
              }
            ]
          }
      }
    }
</script>

<style lang="scss" scoped>
  /*.container {*/
    /*padding: 5%;*/
  /*}*/
</style>
