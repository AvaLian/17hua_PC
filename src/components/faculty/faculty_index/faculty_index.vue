<template>
  <div class="faculty_index">
    <banner :topbanner="topbanner"></banner>

    <section_allcon :data="{first_title:'精英画师三大标准',second_title:'专业、经验、严格'}" class="section-bgColor">
      <ul class="standard">
        <li class="standard-item" >
          <img class="width100" src="./images/icon1.png" alt="">
        </li>
        <li class="standard-item" >
          <img class="width100" src="./images/icon2.png" alt="">
        </li>
        <li class="standard-item" >
          <img class="width100" src="./images/icon3.png" alt="">
        </li>
      </ul>
    </section_allcon>

    <section_allcon v-if="teaTeam" :data="teaTeam" class="section-borderBottom">
      <section_teacher :data="teaTeam.info_list"></section_teacher>
    </section_allcon>
  </div>
</template>

<script>
  import banner from '../../view/section-nybanner/section-nybanner'
  import section_teacher from '../../subcomponent/section-teacher/section-teacher'
  import section_title from "../../subcomponent/section-title/section-title"
  import section_allcon from '../../view/section-allcon/section-allcon'
  export default {
    name: "faculty_index",
    components: {
      banner,
      section_allcon,
      section_teacher,
      section_title
    },
    computed:{
      topbanner(){
        return this.$store.state.faculty.topbanner
      },
      teaTeam(){
        return this.$store.state.faculty.teaTeam
      }
    },
    created() {
      // this.$store.cache.dispatch("dataFaculty")
      this.$store.dispatch("dataFaculty")
    }
  }
</script>

<style lang="scss" scoped>
  .standard{
    display: flex;
    justify-content: space-between;
    color:$ffColor;
    &-item{
      position: relative;
      &-bg{
        width: 140px;
        height: 140px;
        border-radius: 20px;
        border:6px solid $ffColor;
        transform: rotate(45deg);
        box-sizing: border-box;
      }
      &-con{
        width: 100%;
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center ;
        margin-top: -10%;
        &-icon{
          width: 44px;
          height: 44px;
          display: inline-block;
          margin-bottom: 10%;
          background-position: center;
          background-size: 100%;
          background-repeat: no-repeat;
        }
      }
    }
  }


  .boxArea {
    &-small {
      .standard{
        &-item{
          flex: 0 0 32%;
          &-bg{
            width: 100%;
            transform: rotate(0);
            border:3px solid $ffColor;
          }
          &-con{
            box-sizing: border-box;
            padding: 0 5%;
            text-align: center;
          }
        }
      }
    }
  }

</style>

<style lang="scss">
  .vteacher-tutor-item{
    border:1px solid  $borderColor
  }
</style>
