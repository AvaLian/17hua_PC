<template>
  <div class="about-us">
    <section_swiper>
      <swiper-slide>
        <section_map></section_map>
      </swiper-slide>
    </section_swiper>

    <div class="section section-borderBottom contact">
      <div class="container">
        <div class="contact-item">
          <div class="contact-item-title">
            <i class="iconfont icon-dianhua1"></i>
            <p>客服电话</p>
          </div>
          <div class="contact-item-con">400-128-1717</div>
        </div>
        <div class="contact-item">
          <div class="contact-item-title">
            <i class="iconfont icon-dingwei"></i>
            <p>企业地址</p>
          </div>
          <div class="contact-item-con">上海市 长宁区 1436号 <br/>倍格老船坞</div>
        </div>
        <div class="contact-item">
          <div class="contact-item-title">
            <i class="iconfont icon-erweima"></i>
            <p>客服电话</p>
          </div>
          <div class="contact-item-con">
            <img src="../../../static/images/qrcode-wx.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import section_swiper from '../subcomponent/section-swiper/section-swiper'
  import section_map from '../subcomponent/section-map/section-map'
  export default {
    name: "about-us",
    components: {
      section_swiper,
      section_map
    },
    data() {
      return {
        swiperOption:{
          loop:false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/style/icon.css";
  .contact{
    .container{
      display: flex;
      justify-content: space-between;
      padding: 100px 0 80px;
    }
    &-item{
      &-title{
        /*flex: 1;*/
        text-align: center;
        padding: 20px 0;
        position: relative;
        .iconfont{
          display: block;
          font-size: $RS30;
          margin-bottom: 20px;
        }
      }
      &-con{
        text-align: center;
        margin-top: 30px;
        line-height: 1.2;
        font-family: PingFangSC-Semibold;
        /*flex: 1;*/
        /*padding: 2rem;*/
        /*font-weight: 700;*/
      }
    }
  }


  .boxArea{
    &-large,&-middle{
      .contact {
        &-item {
          &-title {
            &:after {
              content: "";
              position: absolute;
              bottom: 0px;
              width: 2rem;
              left: 50%;
              transform: translateX(-50%);
              border-bottom: 1px solid $borderColor;
            }
          }
        }
      }
    }
    &-small{
      .contact {
        .container {
          flex-direction: column;
        }
        &-item {
          display: flex;
          align-items: center;
          &-title {
            position: relative;
            &:after {
              content: "";
              width: 0.5rem;
              height: 4rem;
              position: absolute;
              top:50%;
              transform: translateY(-50%);
              right:0;
              border-bottom: none;
              border-right: 1px solid $borderColor;
            }
          }
        }
      }
    }
  }
</style>

