<template>
    <div class="cooperative">
      <vbanner :swiperOption="swiperOption">
        <swiper-slide>
          <img class="swiper-slide-img" src="./images/100477778.jpg" alt="">
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
          <vtitle>
            <span slot="title">合作伙伴遍布全球</span>
            <span slot="subtitle">中国、新加坡、加拿大、美国</span>
          </vtitle>
          <img class="width100" src="./images/map.png" alt="合作伙伴遍布全球">
        </div>
      </div>

      <!--合作伙伴-->
      <div class="section">
        <div class="container">
          <vtitle>
            <span slot="title">与合作伙伴共创未来</span>
            <span slot="subtitle">来自多领域的合作方式，建立强大企业纽带，让未来不设限！</span>
          </vtitle>
          <vcoller></vcoller>
        </div>
      </div>
    </div>
</template>

<script>
    import vbanner from '../subcomponent/vbroadcast/vbroadcast'
    import vtitle from "../subcomponent/vtitle"
    import vcoller from '../subcomponent/vcoller'
    export default {
      name: "cooperative",
      components:{
        vbanner,vcoller,vtitle
      },
      data(){
          return{
            swiperOption:{
              pagination : null
            }
          }
      }
    }
</script>

<style lang="scss" scoped>

</style>
