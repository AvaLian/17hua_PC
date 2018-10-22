<template>
  <div class="panitmedia-detail section section-bgColor" v-if="data">
    <div class="container">
      <img class="width100" :src="data.header_img" :alt="data.title">
      <h1 class="title">{{data.title}}</h1>
      <div class="wrap">
        <p class="time">{{data.author}}{{data.create_time}}</p>
        <p>
          <i class="iconfont iconfont1 icon-qqkongjian" @click="openChildWindow(st1)"></i>
          <i class="iconfont iconfont2 icon-renrenwang" @click="openChildWindow(st3)"></i>
          <i class="iconfont iconfont3 icon-weibo1" @click="openChildWindow(st2)"></i>
        </p>
      </div>

      <div class="content" v-html="data.content"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "paintmedia-detail",
    computed: {
      SCWTag() {
        return this.$store.state.SCWTag;
      },
      data() {
        return this.$store.state.paintmediadetail;
      }
    },
    created() {
      this.$store.dispatch("dataPaintMediaDetail", this.id)
    },
    data() {
      return {
        id: this.$route.params.id,
        st1:'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http%3A%2F%2Fwww.17hua.me%2fpd%3fbloInfo%3d'+this.$route.query.bloInfo+'&title=一起画|Blog Time&pics=http%3a%2f%2fimage.17hua.me%2fupload%2fimage%2f201709%2fr1dzh2nsh9c8t6txxtqyiujy7mke1ust.png&summary=零基础创意绘画体验with一起画&desc=边吃边喝边画画，人人都是艺术家',
        st2:'http://service.weibo.com/share/share.php?appkey=583395093&title=%E9%9B%B6%E5%9F%BA%E7%A1%80%E5%88%9B%E6%84%8F%E7%BB%98%E7%94%BB%E4%BD%93%E9%AA%8Cwit%E4%B8%80%E8%B5%B7%E7%94%BB&url=http%3A%2F%2Fwww.17hua.me%2fpd%3fbloInfo%3d'+this.$route.query.bloInfo+'&source=bshare&retcode=0&ralateUid=#_loginLayer_1505282975501',
        st3:'http://widget.renren.com/dialog/share?resourceUrl=http%3A%2F%2F17hua.me%2fpd%3fbloInfo%3d'+this.$route.query.bloInfo+'&srcUrl=http%3A%2F%2F17hua.me&title=一起画&images=http%3a%2f%2fimage.17hua.me%2fupload%2fimage%2f201709%2fr1dzh2nsh9c8t6txxtqyiujy7mke1ust.png&description=零基础创意绘画体验with一起画|Blog Time'
      }
    },
    methods:{
      openChildWindow(url){
        window.open(url,'name1')
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/style/icon.css";
  $color1:#eecf3d;
  $color2:#1361a7;
  $color3:#df4d69;
  .panitmedia-detail {
    .container {
      padding: 0 20px;
      background: $ffColor;
    }
    .title{
      font-size: $FS20;
      color:$fMColor;
      padding: 40px 0;
      border-bottom: 1px dashed $borderColor;
    }
    .wrap{
      padding: 20px 0;
      display: flex;
      justify-content: space-between;
      .time{
        font-size: $FS16;
        color:$fTColor
      }
      .iconfont{
        font-size: $FS30;
        margin-right: 4px;
        cursor: pointer;
        border-radius: 50%;
        &:last-child{
          margin-right: 0;
        }
        &:hover{
          box-shadow: 0 0 20px rgba(0,0,0,.2);
        }
        &1{
          color:$color1;
        }
        &2{
          color:$color2;
        }
        &3{
          color:$color3;
        }
      }
    }
    .content{
      color:$fSColor;

    }
  }


  .boxArea {
    &-small {
      .wrap{
        flex-direction: column;
        .time{
          margin-bottom: 20px;
        }
      }
    }
  }
</style>
<style lang="scss">
  .boxArea {
    &-small {
      .content img{
        width: 100%;
      }
    }
  }
</style>
