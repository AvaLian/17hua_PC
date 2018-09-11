<template>
  <div class="wordOfMouth">
    <banner :topbanner="topbanner"></banner>

    <div class="section" v-if="section1">
      <div class="container">
        <section_title>
          <span slot="title">{{section1.first_title}}</span>
          <span slot="subtitle">{{section1.second_title}}</span>
        </section_title>
        <img class="width100" :src="section1.img_url" alt="学员作品分享、相信榜样的力量">
      </div>
    </div>

    <div class="section" v-if="rating">
      <div class="container">
        <section_title>
          <span slot="title">{{rating.first_title}}</span>
          <span slot="subtitle">{{rating.second_title}}</span>
        </section_title>
        <section_swiper_group :swiperOption="swiperOption" class="comment" :total="rating.info_list.length">
          <swiper-slide class="comment-item" v-for="(d,i) in rating.info_list" :key="i">
            <div class="comment-item-inner">
              <div class="comment-item-content boxRadius">
                <i class="iconfont icon-quote"></i>
                <p>{{d.second_title}}</p>
                <i class="iconfont icon-quote"></i>
              </div>
              <img class="comment-item-avatar" :src="d.img_url" alt="">
            </div>
          </swiper-slide>
        </section_swiper_group>
      </div>
    </div>

  </div>
</template>

<script>
  import banner from '../view/section-nybanner/section-nybanner'
  import section_swiper_group from '../subcomponent/section-swiper/section-swiper-group'
  import section_title from "../subcomponent/section-title/section-title"

  export default {
    name: "word-of-mouth",
    components: {
      banner,
      section_swiper_group,
      section_title
    },
    computed: {
      topbanner(){
        return this.$store.state.wordOfMonth.topbanner
      },
      section1(){
        return this.$store.state.wordOfMonth.section1
      },
      rating(){
        return this.$store.state.wordOfMonth.rating
      }
    },
    created(){
      this.$store.cache.dispatch("dataWordOfMonth")
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/style/icon.css";
  .comment{
    box-sizing: border-box;
    display: flex;
    &-item{
      padding: 3.4%;
      box-sizing: border-box;
      &-inner{
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: all 0.3s;
        &:hover{
          transform: scale(1.01);
        }
      }
      &-content {
        padding: 10% 5%;
        box-shadow: 0 0 30px rgba(0, 0, 0, .1);
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        color:$f9EColor;
        .iconfont{
          font-size: $FS24;
          color:#d2d2d2;
        }
        p{
          line-height: 1.6;
          margin: 10% 0;
        }
        &:after{
          content: "";
          width:0;
          height:0;
          border-width:10px 10px 0;
          border-style:solid;
          border-color:#fff transparent transparent;/*灰 透明 透明 */
          position:absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      &-avatar{
        width: 68px;
        margin-top: 10%;
      }
    }
  }
</style>
<style lang="scss">

</style>

