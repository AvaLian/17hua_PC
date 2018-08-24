<template>
  <div class="vcourses-detail" v-if="data" :style="{'background':'url('+data.imgUrl+')'}" style="position: relative">
    <div class="vcourses-detail-top">
      <p class="vcourses-detail-name">{{data.name}}</p>
      <p class="vcourses-detail-des">{{data.des}}</p>
      <vbtnInfo v-on:onShow="popupShow">在线预约</vbtnInfo>
    </div>
    <p class="vcourses-detail-bottom">{{data.con}}</p>
    <vmessage :isShow="isShow" v-on:onHide="popupHide"></vmessage>
  </div>
</template>

<script>
  import vbtnInfo from "./vbuttons/vbtn-info"
  import vmessage from './vpopup/message/message'

  export default {
    name: "s-dcourse",
    props: ['data'],
    components: {
      vbtnInfo, vmessage
    },
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      popupShow(data) {
        this.isShow = data
      },
      popupHide(data) {
        this.isShow = data
      }
    }
  }
</script>

<style lang="scss" scoped>
  .vcourses-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10%;
    box-sizing: border-box;
    color: $ffColor;
    &-top {
      padding: 5% 0;
      @include border-1px(1px, $ffColor);
    }
    &-name {
      font-size: $FS28;
    }
    &-des {
      font-size: $FS20;
      line-height: 1.6;
      margin: 2% 0 3% 0;
    }
    &-bottom {
      padding: 5% 0;
      line-height: 1.6;
    }
  }

  .boxArea {
    &-small {
      .vcourses-detail {
        padding: 0 10px;
      }
      .vcourses-detail-des {
        font-size: $FS16;
      }
    }
  }
</style>
<style lang="scss">
  .vcourses-detail .button{
    background: $orange !important;
    color:$ffColor !important;
  }
</style>
