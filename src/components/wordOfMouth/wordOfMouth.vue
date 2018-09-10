<template>
  <div class="wordOfMouth">
    <section_swiper>
      <swiper-slide>
        <img class="swiper-slide-img" src="./images/rectangle3.png" alt="">
        <div class="swiper-slide-con">
          <div class="container">
            <h2>你们的进步<br>就是我们最大的收获</h2>
            <p>17画酷用真诚服务每一个人</p>
          </div>
        </div>
      </swiper-slide>
    </section_swiper>

    <div class="section">
      <div class="container">
        <section_title>
          <span slot="title">学员作品分享、相信榜样的力量</span>
          <span slot="subtitle">优秀的培育成果，汇聚每一份精彩</span>
        </section_title>
        <img class="width100" src="./images/rectangle13.png" alt="学员作品分享、相信榜样的力量">
      </div>
    </div>
    <div class="section">
      <div class="container">
        <section_title>
          <span slot="title">妈妈有话说</span>
          <span slot="subtitle">聚集每个感动，你们的评价是我们最大的收获</span>
        </section_title>
        <section_swiper_group :swiperOption="swiperOption" class="comment" :total="comment.length">
          <swiper-slide class="comment-item" v-for="(e,i) in comment" :key="i">
            <div class="comment-item-inner">
              <div class="comment-item-content boxRadius">
                <i class="iconfont icon-quote"></i>
                <p>{{e.content}}</p>
                <i class="iconfont icon-quote"></i>
              </div>
              <img class="comment-item-avatar" :src="e.avatarUrl" alt="">
            </div>
          </swiper-slide>
        </section_swiper_group>
      </div>
    </div>

  </div>
</template>

<script>
  import section_swiper from '../subcomponent/section-swiper/section-swiper'
  import section_swiper_group from '../subcomponent/section-swiper/section-swiper-group'
  import section_title from "../subcomponent/section-title/section-title"

  export default {
    name: "word-of-mouth",
    components: {
      section_swiper,section_swiper_group,section_title
    },
    computed: {
      comment(){
        return this.$store.state.comment
      }
    },
    created(){
      this.$store.dispatch("apicComments")
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

