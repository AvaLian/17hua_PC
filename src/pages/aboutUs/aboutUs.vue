<template>
  <div class="about-us">
    <banner :topbanner="topbanner" class="topbanner"></banner>

    <section_allcon :data="{first_title:'画酷简介',second_title:''}" class="about_info">
      <p>
        一起画项目创意的灵感来源于一次短暂的旅行：加拿大惠斯勒小镇。创始人遇见了一位著名女艺术家，与她一起完成了一副人生第一幅作品。在那次体验之后，开启了另一扇大门，把绘画作品简单化、标准化，让99%的零基础绘画人群开启自己的艺术之旅。建立起简单、创新、共享的理念。
        <br/><br/>
        经过长达几个月的研究和探索，2017年6月，一起画（17画）www.17hua.me 悄悄的来到上海。从一个人的梦想到9个人的新创团队，打造全新的科技+创造力+绘画平台。
        <br/><br/>
        一起画联合加拿大、美国等北美地区超过20位艺术、教育家们，开发全系列的绘画课程。打造2小时1幅画的体验活动（2小时完成一幅独一无二、属于自己的作品）。
        <br/><br/>
        一起画承载2亿人的艺术使命。我们希望能帮助2亿中国人，关注、发现自己，去体验、遇见自己的特长。在同事之间、朋友之间、亲子之间建立起紧密的联系。通过一种新的社交方式，边吃、边喝、边画，让绘画艺术伴随着我们的工作、生活、家庭。
        <br/><br/>
        共享与公益是我们所有员工的方向：我们使用共享／闲置的空间并在空间内打造高品质的艺术生活。在梦想与发展的道路上，我们自己就是所有用户最好的榜样。我们鼓励用户参与捐赠自己的作品去帮助自闭症儿童中心的小朋友发现更多的颜色，让创作走向未来。
      </p>
    </section_allcon>

    <section_allcon :data="{first_title:'画酷理念',second_title:'一起画酷致力成为全球最具创意和喜爱的\n'+
'        <br/><br/>\n'+
'        “拥有标准化运营+艺术衍生品产业链+服务科技型公司”\n'+
'        <br/><br/>\n'+
'        引领创意美好生活\n'+
'        <br/><br/>\n'+
'        塑造美好心灵'}" :flag="true">
    </section_allcon>


    <section_allcon v-if="partner" :data="partner">
      <section_coller :data="partner.info_list"></section_coller>
    </section_allcon>

    <section_allcon  v-if="joinus&&SCWTag<1" :data="{first_title:'',second_title:''}" :style="{'background-image':'url('+joinus.img_url+')'}" class="joinus">
      <section_allcon v-if="joinus" :data="joinus" style="background: #fff;position: relative;">
        <section_linkus :isShow="false" :custom="true">申请加入
        <div slot="content" id="joinus_box">
          <div>
            <label for="j_name"><span>*</span>姓名：</label>
            <input v-model="j_name" id="j_name" maxlength="20" placeholder="">
          </div>
          <div>
            <label for="j_phone"><span>*</span>电话：</label>
            <input v-model="j_phone" id="j_phone" maxlength="11" placeholder="">
          </div>
          <div>
            <label for="j_email"><span>*</span>邮箱：</label>
            <input v-model="j_email" id="j_email" maxlength="30" placeholder="">
          </div>

          <div>
            <label for="j_position"><span>*</span>职位：</label>
            <input v-model="j_position" id="j_position" maxlength="10" placeholder="">
          </div>

          <div class="flex100">
            <label for="j_description"><span>*</span>自我描述：</label>
            <textarea v-model="j_description" id="j_description" maxlength="120" placeholder=""></textarea>
          </div>
          <div>
            <label></label>
            <p class="button ripple" @click="joinUsDP">提交</p>
          </div>
        </div>
        </section_linkus>
      </section_allcon>
    </section_allcon>

  </div>
</template>

<script>
  import banner from '../../components/section-nybanner/section-nybanner'
  import section_allcon from "../../components/section-allcon/section-allcon"
  import section_coller from '../../components/section-coller/section-coller'
  import section_linkus from '../../components/section-linkus/section-linkus'
  import api from '../../assets/utils/api'
  export default {
    name: "about-us",
    components: {
      banner,
      section_allcon,
      section_coller,
      section_linkus
    },
    computed:{
      SCWTag(){
        return this.$store.state.SCWTag;
      },
      topbanner(){
        return this.$store.state.aboutus.topbanner
      },
      partner(){
        return this.$store.state.aboutus.partner
      },
      joinus(){
        return this.$store.state.aboutus.joinus
      }
    },
    created() {
      this.$store.dispatch("dataAboutus")
    },
    data () {
      return{
        j_name: '',
        j_phone: '',
        j_email: '',
        j_position: '',
        j_description: ''
      };
    },
    methods:{
      joinUsDP(){
        let w = {
          name: this.j_name,
          phone: this.j_phone,
          email: this.j_email,
          position: this.j_position,
          description: this.j_description
        };
        let regM=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        let regP=/^1[3456789]\d{9}$/;

        if(w.name==''||w.phone.length==0||w.email==0||w.position==''||w.description.length==0){
          this.$message({
            message: '请填写完整信息',
            type: 'warning'
          });
          return false
        }
        if(!regM.test(this.j_email)){
          this.$message({
            message: '请输入有效的邮箱',
            type: 'warning'
          });
          return false
        }
        if(!regP.test(this.j_phone)){
          this.$message({
            message: '请输入有效的手机号码',
            type: 'warning'
          });
          return false
        }

        this.$http.get(api.joinus,w).then(res => {
          this.$message({
            message: '提交成功，我们尽快联系你',
            type: 'success'
          });
          this.j_name='';
          this.j_phone='';
          this.j_email='';
          this.j_position='';
          this.j_description='';
        }).catch(err => {
          this.$message.error('网络离家出走啦');
          console.log("err:", err);
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/style/icon.css";
  .about_info{
    p{
      line-height: 1.2;
      text-align: justify;
    }
  }


  #joinus_box {
    width: 60%;
    margin: 0 auto;
    height: 100%;
    padding:10px 20px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    div{
      width: 50%;
      flex: 0 0 50%;
      display: flex;
      align-items: center;
      &.flex100{
        width: 100%;
        flex: 0 0 100%;
      }
    }
    label {
      width: 110px;
      flex: 0 0 110px;
      font-size: 18px;
      text-align: right;
      color: $ffColor;
      span{
        color:$themeColor;
        margin-right: 2px;
        position: relative;
        top:3px;
        font-weight: 700;
      }
    }
     input, textarea{
      width: 100%;
      outline: none;
      padding: 0 10px;
      font-size: $FS16;
      color: $fTColor;
      border: 0;
      border-radius: 2px;
    }
    input{
      height: 30px;
      line-height: 30px;
    }
    textarea {
      height: 120px;
      line-height: 30px;
      font-family: "Microsoft YaHei", sans-serif;
    }
    .button{
      width: 100%;
      height: 40px;
      line-height: 40px;
      border-radius: 2px;
      cursor: pointer;
    }
  }

</style>
<style lang="scss">
  .joinus{
    .section-linkus{
      text-align: center;
    }
    .button{
      background: $themeColor !important;
      color:$ffColor !important;
    }
  }
</style>

