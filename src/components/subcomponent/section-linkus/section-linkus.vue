<template>
  <div class="section-linkus">
    <a class="button ripple" @click="onShow"><slot></slot></a>
    <transition name="fade">
      <div class="message" ref="msg" v-if="flag">
        <i class="iconfont icon-cuo" @click="onHide"></i>
        <img src="../../../../static/images/qrcode-wx.jpg" alt="">
        <p class="tel">联系电话：{{tel}}</p>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "section-linkus",
    props:['isShow'],
    computed:{
      tel() {
        return this.$store.state.tel;
      }
    },
    data () {
      return{
        flag: this.isShow
      };
    },
    methods:{
      onShow(){
        this.flag=!this.flag;
      },
      onHide(){
        this.flag=!this.flag;
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
    color: $ffColor;
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
      font-size: 36px;
      cursor: pointer;
    }
    .tel{
      margin-top: 2%;
    }
  }




  /* .fade-leave-active in below version 2.1.8 */
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to
  {
    opacity: 0
  }

  .button {
    display: inline-block;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
    border: none;
    border-radius: 6px;
    position: relative;
    padding: 20px 40px;
    font-size: $FS18;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0;
    will-change: box-shadow, transform;
    transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    color: $themeColor;
    background-color: $ffColor;
    &:active {
      box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
    }
  }
</style>
