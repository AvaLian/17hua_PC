<template>
  <div class="about-us">
    <banner :custom="true" :total="1"><section_map></section_map></banner>

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
            <p>二维码</p>
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
  import banner from '../view/section-nybanner/section-nybanner'
  import section_map from '../subcomponent/section-map/section-map'
  export default {
    name: "about-us",
    components: {
      banner,
      section_map
    },
    computed:{
      info(){
        return this.$store.state.aboutus.info
      }
    },
    created() {
      this.$store.cache.dispatch("dataAboutus")
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
      font-size:$FS24;
      &-title{
        text-align: center;
        padding: 20px 0;
        position: relative;
        .iconfont{
          display: block;
          font-size: 54px;
          margin-bottom: 20px;
        }
      }
      &-con{
        text-align: center;
        margin-top: 30px;
        line-height: 1.2;
        font-family: PingFangSC-Semibold;
        flex: 1;
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
              width: 30px;
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
          font-size: $FS16;
          display: flex;
          align-items: center;
          &-title {
            position: relative;
            padding-right: 5%;
            &:after {
              content: "";
              width:1px;
              height: 50%;
              position: absolute;
              top:50%;
              transform: translateY(-50%);
              right:0;
              border-bottom: none;
              border-right: 1px solid $borderColor;
            }
          }
          &-con{
            font-size: $FS20;
          }
        }
      }
    }
  }
</style>

