<template>
  <div class="video-item" @click="dialogVisible = true">
    <div class="video-item-img">
      <img class="width100" :src="data.img_url" alt="item.first_title">
    </div>
    <p class="video-item-text">{{data.first_title}}</p>

    <el-button class="video-item-icon" icon="el-icon-caret-right"
               v-if="data.mp4_url"></el-button>
    <el-dialog :visible.sync="dialogVisible" @open="openPlay" @close="closePlay"
               :append-to-body="true" :lock-scroll="false" v-if="data.mp4_url" :fullscreen="SCWTag>1">
      <section_player :video-url="data.mp4_url" :state="state"></section_player>
    </el-dialog>
  </div>
</template>

<script>
  import section_player from '../../../components/section-player/section-player'

  export default {
    name: "paintmedia-video",
    props: ['data'],
    components: {
      section_player
    },
    computed: {
      SCWTag(){
        return this.$store.state.SCWTag;
      },
    },
    data() {
      return {
        dialogVisible: false,
        state: false,
      }
    },
    methods: {
      closePlay() {
        this.state = true;
      },
      openPlay() {
        this.state = false;
      },
    }
  }
</script>

<style lang="scss" scoped>
  .video-item {
    position: relative;
    color: $ffColor;
    cursor: pointer;
    &:hover {
      .video-item-icon {
        display: block;
      }
    }
    &-text {
      width: 100%;
      font-size: 36px;
      position: absolute;
      left: 0;
      bottom: 0;
      padding: 40px 20px;
      box-sizing: border-box;
    }
    &-icon {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: rgba(0, 0, 0, .8);
      display: none;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
<style lang="scss">
  .video-item {
    &:hover{
      .el-button{
      border-radius: 50% !important;
      background-color: rgba(0, 0, 0, .8) !important;
      }
    }
    .el-button, .el-button:active {
      color: $ffColor !important;
      border: none !important;
      border-radius: 50% !important;
    }
    .el-button:focus, .el-button:hover{
      border-radius: 50% !important;
      background-color: rgba(0, 0, 0, .8) !important;
    }
    .el-icon-caret-right {
      font-size: 68px;
    }
  }

  .el-dialog__wrapper{
    z-index: 9999 !important;
  }
</style>
