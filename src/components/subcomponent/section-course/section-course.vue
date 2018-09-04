<template>
  <div class="section-course">
    <section_swiper_group :total="items.length" :data="items">
      <swiper-slide v-for="(e,i) in items" :key="i">
        <div class="swiper-slide-container">
          <img class="width100" :src="e.imgUrl" alt="">
          <div class="swiper-slide-content">
            <h4>{{e.title}}</h4>
            <p v-if="SCWTag<1">{{e.content}}</p>
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
    computed:{
      SCWTag() {
        return this.$store.state.SCWTag;
      }
    },
    data() {
      return {
        items:[
          {
            imgUrl:require("./images/1.png"),
            title:"家庭互动",
            content:"我们不仅研发儿童和成人创意绘画课程，我们还为家庭研发亲子互动课程，致力开启绘画创造力，提高独立思考能力，提升亲情纽带关系，让创意绘画融入每个家庭"
          },
          {
            imgUrl:require("./images/2.png"),
            title:"企业团建",
            content:"我们为不同的企业提供创意绘画团建活动，致力增强企业内部凝聚力，促进部门间的协同协作能力，并且丰富企业文化。"
          },
          {
            imgUrl:require("./images/3.png"),
            title:"品牌合作",
            content:"我们与多家餐饮、酒店、书店进行战略合作，通过对方提供的共享空间开展线下创意绘画活动，从而实现互利共赢，提升品牌价值的战略目的。"
          } ,
          {
            imgUrl:require("./images/3.png"),
            title:"家庭互动",
            content:"我们不仅研发儿童和成人创意绘画课程，我们还为家庭研发亲子互动课程，致力开启绘画创造力，提高独立思考能力，提升亲情纽带关系，让创意绘画融入每个家庭"
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
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
