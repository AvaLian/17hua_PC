<template>
  <div class="paintmedia-index">
    <banner :topbanner="topbanner" class="topbanner"></banner>

    <section class="section">
      <div class="container">
        <ul class="box boxA">
          <li class="video-item" v-for="(item,i) in videolists.info_list" :key="i" v-if="item.location=='A'">
            <section_video :data="item"></section_video>
          </li>
        </ul>
        <ul class="box boxB">
          <li class="video-item" v-for="(item,i) in videolists.info_list" :key="i" v-if="item.location=='B'">
            <section_video :data="item"></section_video>
          </li>
        </ul>
      </div>
    </section>


    <section class="section paintmedia-content">
      <div class="container">
        <section_swiper_group v-if="pagelists&&pagelists.length" class="pagelists" :total="pagelists.length"
                              :swiperOption="{'slidesPerView':4,'slidesPerGroup':4}">
          <swiper-slide v-for="(d,i) in pagelists" :key="i">
            <div class="swiper-slide-container" @click="goToDetail(d.article_id)">
              <img class="width100" :src="d.header_img" style="height:auto;" :alt="d.first_title">
              <div class="swiper-slide-content">
                <h4>{{d.title}}</h4>
                <p v-if="SCWTag<1">{{d.introduce}}</p>
              </div>
            </div>
          </swiper-slide>
        </section_swiper_group>
      </div>
    </section>

  </div>
</template>

<script>
  import banner from '../../../components/section-nybanner/section-nybanner'
  import section_video from '../paintmedia-video/paintmedia-video'
  import section_swiper_group from '../../../components/section-swiper/section-swiper-group'

  export default {
    name: "paintmedia-index",
    components: {
      banner,
      section_video,
      section_swiper_group
    },
    computed: {
      SCWTag() {
        return this.$store.state.SCWTag;
      },
      topbanner() {
        return this.$store.state.paintmedia.topbanner
      },
      videolists() {
        return this.$store.state.paintmedia.videolists
      },
      pagelists() {
        return this.$store.state.paintmedia.pagelists
      }
    },
    created() {
      this.$store.dispatch("dataPaintMedia")
    },
    methods: {
      goToDetail(id) {
        this.$router.push({name: 'paintmediaDetail', params: {id: id}});
      }
    }
  }
</script>

<style lang="scss" scoped>

  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
    &:last-child {
      margin-bottom: 0;
    }
    &.boxA {
      li {
        width: 32.5%;
        flex: 0 0 32.5%;
      }
    }
    &.boxB {
      li {
        width: 49.5%;
        flex: 0 0 49.5%;
      }
    }
  }

  .boxArea {
    &-small {
      .box {
        li {
          width: 100%;
          flex: 0 0 100%;
          margin: 10px 0;
        }
      }
    }
  }

  .paintmedia-content {
    .container {
      padding-top: 0;
    }
    .swiper-slide {
      transition: all .3s;
      &:hover {
        transform: scale(1.01);
        .swiper-slide-container {
          box-shadow: 0 0 20px rgba(0, 0, 0, .3);
        }
      }
    }
    .swiper-slide-container {
      border: 1px solid $borderColor;
      .swiper-slide-content {
        padding: 14px 20px;
        h4 {
          font-size: 22px;
          color: $fMColor;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        p {
          font-size: $FS18;
          color: $f9EColor;
          line-height: 1.6;
          margin: 14px 0;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
      }
    }
  }

  .boxArea {
    &-small {
      .paintmedia-content {
        .container {
          padding-left: 0;
          padding-right: 0;
        }
      }
    }
  }

</style>
<style lang="scss">
  .pagelists {
    .swiper-slide {
      padding: 0 5px;
      cursor: pointer;
    }
    .swiper-wrapper {
      display: flex;
      align-items: center;
    }
  }
</style>

