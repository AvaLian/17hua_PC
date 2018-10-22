<template>

  <div class="item__content" v-if="item">
    <div class="lists-item-img">
      <img class="width100" style="height:auto;" :src="item.event_img" :alt="item.event_name">
    </div>

    <div class="lists-item-content">
      <div class="lists-item-content-word">
        <h4>{{item.event_name}}</h4>
        <p class="lists-item-content-word-detail">查看详情<i class="iconfont icon-jiantou1"></i></p>

        <div class="lists-item-content-hover" v-if="item.event_status!='FINISH'">
          <div class="lists-item-content-hover-content">
            <vue-qr class="vue-qr" :text="textA" :size="160"  :dotScale="1" logoSrc="//image.17hua.me/upload/image/201709/1505371271440500.png" :logoCornerRadius="1"></vue-qr>
            <div>
              <p>微信扫一扫</p>
              <p>即可进行购买</p>
              <br>
              <p style="font-weight: 700;">客服热线</p>
              <p class="color">{{tel}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="finish" v-if="item.event_status=='FINISH'">
      <p>已结束</p>
    </div>
  </div>
</template>

<script>
  import VueQr from 'vue-qr'
    export default {
        name: "activity-item",
      components: {
        VueQr
      },
      props:["item"],
      computed:{
        tel() {
          return this.$store.state.tel;
        },
      },
      data(){
        return {
          textA: document.location.protocol + '//wx.17hua.me/#/dt?actinfo=' + this.item.id
        }
      }
    }
</script>

<style lang="scss" scoped>

  .item__content {
    margin: 20px 0.5%;
    box-sizing: border-box;
    border-radius: $boxRadius;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 30px rgba(0,0,0,.3);
      .lists-item-content-hover {
        display: block;
      }
      .finish{
        background: rgba(0, 0, 0, .3);
      }
    }
    .finish {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, .2);
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        width: 120px;
        height: 120px;
        background: $ffColor;
        border-radius: 50%;
        text-align: center;
        line-height: 120px;
        font-size: 24px;
      }
    }
  }
  .lists-item-img{
    width: 100%;
  }
  .lists-item-content {
    text-align: center;
    font-size: $FS16;
    color: $f9EColor;
    padding: 0 10%;
    background: $ffColor;
    &-word {
      position: relative;
      h4 {
        padding: 40px 0;
        font-size: 24px;
        color: $fMColor;
        border-bottom: 1px solid $borderColor;
      }
      &-detail {
        padding: 24px 0;
      }
    }
    &-hover {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      background: $ffColor;
      display: none;
      &-content {
        width: 100%;
        height: 100%;
        display: flex;
        color: $fMColor;
        justify-content: center;
        align-items: center;
        div {
          text-align: left;
          p {
            line-height: 1.2;
            &.color {
              color: $themeColor;
              font-weight: 700;
            }
          }
        }
      }
    }
  }

  .boxArea{
    .item {
      padding: 0;
    }
    .lists-item-content {
      padding: 0 1%;
    }
  }

</style>
<style lang="scss">
  .lists-item-content-hover-content{
    img{
      width: 100%;
      height: 100%;
      margin-top: 20px;
    }
  }
</style>
