<template>
  <transition name="fade">
    <div class="message" v-if="flag"  ref="msg">
      <i class="iconfont icon-cuo" @click="onHide"></i>
      <img src="../../../../static/images/qrcode-wx.jpg" alt="">
      <p class="tel">联系电话:{{tel}}</p>
      <!--<slot></slot>-->
    </div>
  </transition>
</template>

<script>
  export default {
    name: "message",
    props:{
      isShow:{
        type:Boolean,
        default:false
      }
    },
    computed:{
      flag(){
        return this.isShow
      },
      tel() {
        return this.$store.state.tel;
      }
    },
    methods: {
      onHide() {
        let aa=this.flag;
        aa = false;
        this.$emit('onHide',aa)
      }
    },
    mounted() {
      document.addEventListener('click', (e) => {
        if (!!this.$refs.msg.contains(e.target)) return false;
        this.onHide();
      })
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/style/icon.css";

  .message {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    color: #fff;
    background-color: rgba(0, 0, 0, .8);
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .iconfont {
      position: absolute;
      right: 10px;
      top: 20px;
      font-size: $FS24;
      cursor: pointer;
    }
  }



  .tel{
    margin-top: 20px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */
  {
    opacity: 0
  }
</style>
