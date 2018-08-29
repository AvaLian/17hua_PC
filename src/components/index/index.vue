<template>
  <div class="index">
    <vbanner>
      <swiper-slide>
        <video-player  class="video-player"   ref="videoPlayer"
                       :options="playerOptions"
                       :playsinline="true"
                       customEventName="customstatechangedeventname"
                       @play="onPlayerPlay($event)"
                       @pause="onPlayerPause($event)"
                       @ended="onPlayerEnded($event)"
                       @waiting="onPlayerWaiting($event)"
                       @playing="onPlayerPlaying($event)"
                       @timeupdate="onPlayerTimeupdate($event)"
                       @statechanged="playerStateChanged($event)"
                       @ready="playerReadied">
        </video-player>
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-slide-img" src="../../../static/images/obj-img/banner.jpg" alt="">
        <div class="swiper-slide-con">
          <div class="container">
            <h2>你们的进步<br>就是我们最大的收获</h2>
            <p>17画酷用真诚服务每一个人</p>
          </div>
        </div>
      </swiper-slide>
    </vbanner>



    <!--领先价值-->
    <index_section_1></index_section_1>

    <!--教学理念-->
    <index_section_2></index_section_2>


    <index_section_3></index_section_3>


  </div>
</template>

<script>

  import vbanner from '../subcomponent/vbroadcast/vbroadcast'
  import vbutton from '../subcomponent/s-btn'
  import index_section_1 from './index_section1/index_section1'
  import index_section_2 from './index_section2/index_section2'
  import index_section_3 from './index_section3/index_section3'

  export default {
    name: "index",
    components: {
      vbanner, vbutton,
      index_section_1, index_section_2, index_section_3
    },
    computed: {
      SCWTag() {
        return this.$store.state.SCWTag;
      },
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    created() {
      // this.$http.get(this.$api.right).then(res=>{
      //   console.log("请求导师数据",res);
      // }).catch(err=>{
      //   console.log("err:",err);
      // })
    },
    data(){
      return{
        playerOptions: {
          muted: false, // 默认情况下将会消除任何音频。
          language: 'zh-CN',
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "//image.17hua.me/upload/video/201709/1506411772545584.mp4"
          }],
          poster: "../../../static/images/obj-img/banner.jpg",
          notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: true  //全屏按钮
          }
        }
      }
    },
    methods:{
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      // ...player event

      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },

      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      }
    }

  }
</script>

<style lang="scss" scoped>
  .video-js .vjs-big-play-button{
    margin:0 auto;

  }

</style>
<!--<style>-->
  <!--.vjs_video_3-dimensions.vjs-fluid {-->
    <!--padding-top: 0 !important;-->
  <!--}-->
<!--</style>-->


