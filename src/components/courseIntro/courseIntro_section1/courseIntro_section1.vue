<template>
    <div class="course-intro_section1">
      <div class="section" v-if="vts">
        <div class="container">
          <section_title>
            <span slot="title">{{vts.first_title}}</span>
            <span slot="subtitle">{{vts.second_title}}</span>
          </section_title>
          <ul class="ability">
            <li class="ability-item boxRadius" v-for="(d,i) in vts.info_list">
              <div class="ability-item-title">
                <i class="ability-item-title-icon" :style="{'background-image':'url('+d.img_url+')'}"></i>
                <span>{{d.first_title}}</span>
              </div>
              <p class="ability-item-des">{{d.second_title}}</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="section section-bgColor" v-if="proSystem">
        <div class="container">
          <section_title>
            <span slot="title">{{proSystem.first_title}}</span>
            <span slot="subtitle">{{proSystem.second_title}}</span>
          </section_title>
          <section_course :data="proSystem.info_list"></section_course>
        </div>
      </div>
    </div>
</template>

<script>
  import section_title from "../../subcomponent/section-title/section-title"
  import section_course from '../../subcomponent/section-course/section-course'
  export default {
      name: "course-intro_section1",
      components: {
        section_title,
        section_course
      },
    computed:{
      vts(){
        return this.$store.state.courseIntro.vts
      },
      proSystem(){
        return this.$store.state.courseIntro.vts
      }
    },
      data(){
        return{
          ability: [
            {
              icon: "icon-broad",
              txt: "理解艺术",
              des: "通过17画酷的课程和画师的引导，让孩子全面的理解艺术的奥义，让孩子知道什么才是艺术。"
            },
            {
              icon: "icon-face",
              txt: "分析思考",
              des: "通过理解艺术的奥义，引导思考，并提升交流能力，培养自信心。"
            },
            {
              icon: "icon-chat",
              txt: "引导讨论",
              des: "画师通过孩子提出的问题进行针对性的专业回答，并且举一反三，全面的吸收多方面的内容。"
            },
            {
              icon: "icon-apply",
              txt: "4C能力",
              des: "增强判断性思维，提升绘画创造力，提高合作能力和甲流能力。"
            },
          ]
        }
      }
    }
</script>

<style lang="scss" scoped>
  .ability {
    display: flex;
    justify-content: space-between;
    &-item {
      flex: 0 0 22%;
      padding: 2%;
      box-sizing: border-box;
      border: 1px solid $borderColor;
      &-title {
        display: flex;
        align-items: center;
        margin-bottom: 10%;
        font-size: $FS20;
        span {
          font-weight: bold;
          color: $fMColor;
        }
        &-icon {
          display: inline-block;
          width: 24px;
          height: 24px;
          margin-right: 10px;
          background-position: center;
          background-size: 100%;
          background-repeat: no-repeat;
        }
      }
      &-des {
        line-height: 1.6;
        color: $f5AColor;
      }
      &:nth-child(2) {
        box-shadow: 0 0 50px rgba(0, 0, 0, .1);
      }
      &:hover {
        box-shadow: 0 0 50px rgba(0, 0, 0, .1);
      }
    }
  }



  .boxArea {
    &-small {
      .ability {
        flex-direction: column;
        &-item{
          flex: 0 0 100%;
          margin: 5% 0;
        }
      }
    }
  }
</style>
