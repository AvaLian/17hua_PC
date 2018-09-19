<template>
  <div class="wordOfMouth">
    <banner :topbanner="topbanner"></banner>

    <section_allcon v-if="section1" :data="section1">
      <img class="width100" :src="section1.img_url" :alt="section1.first_title">
    </section_allcon>

    <section_allcon v-if="rating && SCWTag<1" :data="rating" class="fullwidth">
      <section_swiper_group class="comment" :total="rating.info_list.length">
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
    </section_allcon>


  </div>
</template>

<script>
  import banner from '../view/section-nybanner/section-nybanner'
  import section_allcon from '../view/section-allcon/section-allcon'
  import section_swiper_group from '../subcomponent/section-swiper/section-swiper-group'

  export default {
    name: "word-of-mouth",
    components: {
      banner,
      section_allcon,
      section_swiper_group,
    },
    computed: {
      SCWTag() {
        return this.$store.state.SCWTag;
      },
      topbanner() {
        return this.$store.state.wordOfMonth.topbanner
      },
      section1() {
        return this.$store.state.wordOfMonth.section1
      },
      rating() {
        return this.$store.state.wordOfMonth.rating
      }
    },
    created() {
      this.$store.dispatch("dataWordOfMonth")
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/style/icon.css";

  .comment {
    box-sizing: border-box;
    display: flex;
    &-item {
      padding: 3.4%;
      box-sizing: border-box;
      &-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: all 0.3s;
        &:hover {
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
        color: $f9EColor;
        .iconfont {
          font-size: $FS24;
          color: #d2d2d2;
          &:last-child{
            transform: rotate(180deg);
          }
        }
        p {
          line-height: 1.6;
          margin: 10% 0;
          height:150px;
          overflow:hidden;
          text-overflow:ellipsis;
          display:-webkit-box;
          -webkit-box-orient:vertical;
          -webkit-line-clamp:6;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        &:after {
          content: "";
          width: 0;
          height: 0;
          border-width: 10px 10px 0;
          border-style: solid;
          border-color: #fff transparent transparent; /*灰 透明 透明 */
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      &-avatar {
        width: 68px;
        margin-top: 10%;
      }
    }
  }
</style>

