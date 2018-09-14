<template>
  <div class="section-course" v-if="data">
    <section_swiper_group :total="data.length">
      <swiper-slide v-for="(d,i) in data" :key="i">
        <div class="swiper-slide-container">
          <img class="width100" :src="d.img_url" alt="">
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
  .section-swiper-group {
    padding:0 50px 20px;
  }
  .section-course{
    .swiper-slide{
      padding: 1%;
      &-container{
        position: relative;
      }
      &-content{
        padding: 0 14%;
        position: absolute;
        top:50%;
        color:$ffColor;
        h4{
          font-size: $FS24;
          text-align: center;
          margin-bottom: 20px;
        }
        p{
          text-align: justify;
          font-family: PingFangSC-Light;
          line-height: 1.2;
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
            top:0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            margin-top: -20px;
            h4{
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
</style>
