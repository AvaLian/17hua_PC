<template>
  <div class="faculty_detail" >
    <div v-if="artist">
      <banner
        :topbanner="{first_title:artist.topbanner[0].title,second_title:artist.topbanner[0].description,img_url:artist.topbanner[0].img_url}">
      </banner>

      <faculty_info :data="{title:'毕业院校',info_list:artist.graduate}"></faculty_info>
      <faculty_info :data="{title:'个人作品展',info_list:artist.opus}"></faculty_info>
      <faculty_info :data="{title:'作品群展',info_list:artist.exhibition}"></faculty_info>


      <banner :custom="true" :total="artist.evaluate.length" v-if="SCWTag<1">
        <swiper-slide v-for="(d,i) in artist.evaluate" :key="i">
          <img class="swiper-slide-img" :src="require('./images/IMGP1160787.jpg')" alt="">
          <div class="swiper-slide-con">
            <div class="container">
              <i class="iconfont icon-quote"></i>
              <p class="textarea-con">{{d.description}}</p>
              <i class="iconfont icon-quote"></i>
            </div>
          </div>
        </swiper-slide>
      </banner>

      <faculty_waterfull :data="artist.product"></faculty_waterfull>
    </div>
    <div v-if="!artist" class="faculty_detail_content">暂无数据</div>
  </div>
</template>

<script>
  import banner from '../../../components/section-nybanner/section-nybanner'
  import faculty_info from '../faculty-info/faculty-info'
  import faculty_waterfull from '../faculty-waterfull/faculty-waterfull'

  export default {
    name: "faculty_detail",
    components: {
      banner,
      faculty_info,
      faculty_waterfull
    },
    computed: {
      SCWTag() {
        return this.$store.state.SCWTag;
      },
      artist() {
        return this.$store.getters.artist(this.id)
      },
    },
    data() {
      return {
        id: this.$route.params.id,
      }
    },
    created() {
      this.$store.dispatch("dataTutor", this.id);
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/style/icon.css";
  .swiper-slide {
    .swiper-slide-con {
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        .textarea {
          &-con {
            text-align: center;
            line-height: 1.6;
            font-size: 18px;
            max-width:$centerWidth;
          }
        }
        .iconfont{
          color:$f9EColor;
          font-size:$FS30;
          margin: 40px 0;
          &:first-child{
            margin-top: 0;
          }
          &:last-child{
            margin-bottom: 0;
            transform:rotate(180deg)
          }
        }
      }
    }
  }
  .faculty_detail{
    &_content{
      text-align: center;
      padding: 10%;
    }
  }
</style>
<style lang="scss">
  .faculty_detail{
    .swiper-slide {
      .swiper-slide-con {
        color: $fMColor !important;
      }
    }
  }
</style>
