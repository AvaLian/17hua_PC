<template>
  <div class="about-us">
    <vbanner :swiperOption="swiperOption">
      <swiper-slide>
        <smap></smap>
      </swiper-slide>
    </vbanner>

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
          <div class="contact-item-con">宁波市 高新区 秀东尚座55号 2-213</div>
        </div>
        <div class="contact-item">
          <div class="contact-item-title">
            <i class="iconfont icon-erweima"></i>
            <p>客服电话</p>
          </div>
          <div class="contact-item-con">
            <img src="./images/qrcode-wx.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import vbanner from '../subcomponent/vbroadcast/vbroadcast'
  import smap from '../subcomponent/s-map'
  export default {
    name: "about-us",
    components: {
      vbanner,
      smap
    },
    data() {
      return {
        swiperOption:{
          pagination : null,
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
    }
    &-item{
      &-title{
        flex: 1;
        text-align: center;
        padding: 1rem;
        position: relative;
        .iconfont{
          font-size: $RS30;
          line-height: 2;
        }
      }
      &-con{
        flex: 1;
        padding: 2rem;
        font-weight: 700;
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

