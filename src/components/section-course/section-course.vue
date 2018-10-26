<template>
  <div class="section-course" v-if="data">
    <section_swiper_group :total="data.length" >
      <swiper-slide v-for="(d,i) in data" :key="i">
        <div class="swiper-slide-container">
          <img class="width100" :src="d.img_url" style="height:auto;"  :alt="d.first_title">
          <div class="swiper-slide-content">
            <h4>{{d.first_title}}</h4>
            <p v-if="SCWTag<1">{{d.second_title}}</p>
          </div>
        </div>
      </swiper-slide>
    </section_swiper_group>
  </div>
</template>

<script>
  import section_swiper_group from '../section-swiper/section-swiper-group'

  export default {
    name: "section-course",
    components: {
      section_swiper_group
    },
    props:["data"],
    computed:{
      SCWTag() {
        return this.$store.state.SCWTag;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .section-course{
    .swiper-slide{
      padding: 1%;
      box-sizing: border-box;
      transition: all .3s;
      &:hover{
        transform: scale(1.01);
        .swiper-slide-container .width100{
          box-shadow: 0 0 20px rgba(0, 0, 0, .3);
        }
      }
      &-container{
        position: relative;
      }
      &-content{
        padding: 0 14%;
        position: absolute;
        top:50%;
        color:$fMColor;
        h4{
          color:$themeColor;
          font-size: $FS28;
          text-align: center;
          margin: 20px 0;
          font-weight: 700;
        }
        p{
          text-align: justify;
          font-family: PingFangSC-Light,"Microsoft YaHei", sans-serif;
          line-height: 1.6;
        }
      }
    }
  }

  .boxArea {
    &-small {
      .section-course{
        .swiper-slide{
          &-content{
            padding: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            top:0;
            margin-top: -40px;
            h4{
              font-size: $FS18;
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
</style>
