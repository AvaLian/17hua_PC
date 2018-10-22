<template>
  <div class="paintmedia-index">
    <banner :topbanner="topbanner" class="topbanner"></banner>

    <section class="section">
      <div class="container">
        <div class="box boxA">
          <div class="videoA" v-for="(item,i) in videolists.info_list" :key="i" v-if="item.location=='A'">
            <section_video :data="item"></section_video>
          </div>

          <banner class="page" :custom="true" :total="pagelists.length" :isBtnShow="true" :isPaginShow="false">
            <swiper-slide class="page-item" v-for="(item,i) in pagelists" :key="i">
              <div class="page-item-img" @click="goToDetail(item.article_id)">
                <img class="width100"  style="height:auto;" :src="item.header_img" alt="item.title">
              </div>
              <div class="page-item-content">
                <h4 class="page-item-h4">{{item.title}}</h4>
                <p class="page-item-text">{{item.introduce}}</p>
                <span>{{item.create_time}}</span>
              </div>
            </swiper-slide>
          </banner>
        </div>

        <ul class="box boxB">
          <li class="video-item" v-for="(item,i) in videolists.info_list" :key="i" v-if="item.location=='B'">
            <section_video :data="item"></section_video>
          </li>
        </ul>

        <ul class="box boxC">
          <li class="video-item" v-for="(item,i) in videolists.info_list" :key="i" v-if="item.location=='C'">
            <section_video :data="item"></section_video>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  import banner from '../../../components/section-nybanner/section-nybanner'
  import section_video from '../paintmedia-video/paintmedia-video'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  export default {
    name: "paintmedia-index",
    components: {
      banner,
      swiper, swiperSlide,
      section_video
    },
    computed:{
      SCWTag(){
        return this.$store.state.SCWTag;
      },
      topbanner(){
        return this.$store.state.paintmedia.topbanner
      },
      videolists(){
        return this.$store.state.paintmedia.videolists
      },
      pagelists(){
        return this.$store.state.paintmedia.pagelists
      }
    },
    created() {
      this.$store.dispatch("dataPaintMedia")
    },
    methods: {
      goToDetail(id){
        this.$router.push({name: 'paintmediaDetail',params: {id: id}});
      }
    }
  }
</script>

<style lang="scss" scoped>

  .box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
    &:last-child{
      margin-bottom: 0;
    }
    &.boxA{
      .videoA{
        width: 53.5%;
      }
      .page{
        width: 43%;
      }
    }
    &.boxB{
      li{
        width: 49.5%;
        flex: 0 0 49.5%;
      }
    }
    &.boxC{
      li{
        width: 32.5%;
        flex: 0 0 32.5%;
      }
    }

    .page-item{
      cursor: pointer;

      background: $ffColor;
      color:$f9EColor;
      /*display: flex;*/
      /*flex-direction: column;*/
      &-content{
        padding: 14px;
        box-sizing: border-box;
      }
      &-h4{
        font-size: 36px;
        color:$fMColor;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      &-text{
        font-size: $FS18;
        margin: 20px 0;
      }
    }
  }


  .boxArea {
    &-small {
      .box{
        li,.videoA,.page{
          width: 100%;
          flex: 0 0 100%;
          margin: 10px 0;
        }
      }
    }
  }

</style>

