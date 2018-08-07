<template>
  <div class="index">

    <!--轮播图-->
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(e,i) in bannerImg" :key="i" :style="{'background':'url('+e.imgUrl+') center/100% no-repeat'}">I'm Slide {{i+1}}</swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

    <!--领先价值-->
    <div class="section exhibi">
      <div class="container">
      <div class="section-title">
        <h4 class="section-title-txt">打造行业领先价值</h4>
        <p>开启创意绘画创造力、发挥绘画天性、在快乐中成长和学习</p>
      </div>
      <ul class="exhibition">
        <li class="exhibition-item" v-for="(e,i) in exhibition" :key="i">
          <img :src="e.imgUrl" alt="">
          <p class="exhibition-item-txt" :style="{'background':e.bgColor}">{{e.des}}</p>
        </li>
      </ul>
      </div>
    </div>

    <!--教学理念-->
    <div class="section">
      <div class="container">
        <div class="section-title">
          <h4 class="section-title-txt">人性化教学理念</h4>
          <p>优质的创意绘画教学、强大的师资力量、人性化的便民服务</p>
        </div>
        <ul class="teachidea">
          <li class="teachidea-item" v-for="(e,i) in teachIdea" :key="i" >
            <div class="teachidea-item-des" :class="{'marginLeft50':(i+1)%2}">
              <img class="teachidea-item-des-icon" :src="e.iconUrl" alt="">
              <div class="teachidea-item-des-title" :style="{'color':e.color}">
                <h6>{{e.title}}</h6>
                <h6>{{e.subtitle}}</h6>
              </div>
              <p>{{e.txt}}</p>
            </div>
            <div class="teachidea-item-img" :style="{'order':(i+1)%2?0:-1}" :class="{'marginLeft50':(i)%2}">
              <img :src="e.imgUrl" alt="">
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!--服务理念-->
    <div class="section section-1 satisfa" style="background: url('//image.17hua.me/upload/image/201709/1506601704878228.png')">
      <div class="container">
        <div class="section-title">
          <h4 class="section-title-txt">高质量的服务理念</h4>
          <p>从服务效率到用户反馈，用最优质的服务让用户满意</p>
        </div>
        <div class="satisfa-digit">
          <digit :num="87" :des="0"></digit>
          <digit :num="98" :des="1"></digit>
          <digit :num="96" :des="2"></digit>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
      <div class="section">
        <div class="section-title">
          <h4 class="section-title-txt">绘画课程体系标准</h4>
          <p>专业课程体系标准</p>
        </div>
      </div>
        <img src="../../static/images/obj-img/courses.jpg" alt="" style="width: 100%">
    </div>
    </div>

    <div class="section" style="background: #f6f6f6">
      <div class="container">
        <div class="section-title">
          <h4 class="section-title-txt">严格筛选，组建强大师资</h4>
          <p>淘沙式筛选，严格背景调查，千万名老师中挑选一位最优质的导师</p>
        </div>
        <!--<img src="../../static/images/obj-img/teacher.jpg" alt="" style="width: 100%">-->
        <div class="teachers">
          师资力量
        </div>
      </div>
    </div>

    <!--合作伙伴-->
    <div class="section coll">
      <div class="container">
        <div class="section-title">
          <h4 class="section-title-txt">与合作伙伴共创未来</h4>
          <p>来自多领域的合作方式，建立强大企业纽带，让未来不设限！</p>
        </div>
        <ul class="coller">
          <li v-for="e in coll">
            <a href="#"><img :src="e.imgUrl" alt=""></a>
          </li>
        </ul>
      </div>
    </div>

    <!--联系我们-->
    <div class="section section-1 contact" style="background: url('//image.17hua.me/upload/image/201709/1506601704878228.png')">
      <div class="container">
        <div class="section-title">
          <h4 class="section-title-txt">联系我们</h4>
          <p>如果你有任何问题，我们将为你解答。如果你又需要任何帮助，我们将提供协助。</p>
          <p>请随时联系我们！</p>
        </div>

        <div class="contact-btn">联系我们</div>
      </div>
    </div>

  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import countup from './ForIndex/vcountup'
  import digit from './ForIndex/digit'
  export default {
    name: "index",
    components: {
      swiper,swiperSlide, countup,digit
    },
    data() {
      return {
        rollNumber:98,
        bannerImg:[
          {
            imgUrl:"../../static/images/obj-img/banner.jpg"
          },
          {
            imgUrl:"../../static/images/obj-img/banner.jpg"
          },
          {
            imgUrl:"../../static/images/obj-img/banner.jpg"
          }
        ],
        swiperOption: {
          autoplay:8000,
          speed:3000,
          loop:true,
          effect:'fade',
          autoplayDisableOnInteraction : false,
          pagination : '.swiper-pagination',
          paginationClickable :true
        },
        exhibition:[
          {
            imgUrl:"//image.17hua.me/upload/image/201711/1510724651425663.png",
            des:"开启创造力",
            bgColor:"rgba(255,128,155,.8)"
          },
          {
            imgUrl:"//image.17hua.me/upload/image/201711/1510724651425663.png",
            des:"提高独立思考能力",
            bgColor:"rgba(248,193,64,.8)"
          },
          {
            imgUrl:"//image.17hua.me/upload/image/201711/1510724651425663.png",
            des:"提升亲情纽带关系",
            bgColor:"rgba(57,205,181,.8)"
          },
          {
            imgUrl:"//image.17hua.me/upload/image/201711/1510724651425663.png",
            des:"发挥孩子天性",
            bgColor:"rgba(189,117,243,.8)"
          },
          {
            imgUrl:"//image.17hua.me/upload/image/201711/1510724651425663.png",
            des:"在快乐中成长、学习",
            bgColor:"rgba(58,194,232,.8)"
          },
          {
            imgUrl:"//image.17hua.me/upload/image/201711/1510724651425663.png",
            des:"收获满意答卷",
            bgColor:"rgba(255,128,155,.8)"
          },
        ],
        teachIdea:[
          {
            iconUrl:"../../static/images/obj-img/rx-brush.png",
            color:"#fe425b",
            title:"优质绘画教学",
            subtitle:"账务绘画核心，解锁创造力",
            txt:"多种绘画教育方式，针对不同性格人群。专属定制创意绘画计划，帮助孩子打开创意世界的大门，解锁创造力。",
            imgUrl:"../../static/images/obj-img/rx-brush-img.jpg"
          },
          {
            iconUrl:"../../static/images/obj-img/rx-board.png",
            color:"#feae01",
            title:"国内外艺术家、教育家全力打造",
            subtitle:"获得多方位名师指导",
            txt:"17画酷拥有顶尖的师资力量，汇聚来自加拿大、美国、中国等艺术家和教育家，全力打造创意绘画课程。",
            imgUrl:"../../static/images/obj-img/rx-board-img.jpg"
          },
          {
            iconUrl:"../../static/images/obj-img/rx-brow.png",
            color:"#00b3e6",
            title:"服务便民，时间自由",
            subtitle:"无须出门就能享受绘画乐趣",
            txt:"自由选择上课时间和地点，用户可选择上门绘画教学，让孩子在家就能体验人性化的名师绘画教学。",
            imgUrl:"../../static/images/obj-img/rx-brow-img.jpg"
          }
        ],
        coll:[
          {
            imgUrl:"../../static/images/obj-img/coll1.jpg"
          },
          {
            imgUrl:"../../static/images/obj-img/coll2.jpg"
          },
          {
            imgUrl:"../../static/images/obj-img/coll3.jpg"
          },
          {
            imgUrl:"../../static/images/obj-img/coll4.jpg"
          },
          {
            imgUrl:"../../static/images/obj-img/coll5.jpg"
          },
          {
            imgUrl:"../../static/images/obj-img/coll6.jpg"
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container{
    padding: 40px 0;
  }

  /*轮播图*/
  .swiper-container{
    width:100%;
    height:500px;
    .swiper-slide{
      width:100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  /*领先价值*/
  .exhibi{
    .container{
      border-bottom:1px solid $borderColor;
    }
    &tion{
    display:flex;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-item{
      width:300px;
      height: 240px;
      margin-top: 10px;
      border-radius: 10px;
      overflow: hidden;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      &-txt{
        width:100%;
        height: 48px;
        line-height: 48px;
        text-align: center;
        color:#fff;
        font-size:20px;
        position: absolute;
        left:0;
        bottom: 0;
      }
    }
  }
  }

  /*教学理念*/
  .teachidea{
    &-item{
      display: flex;
      color:$f5AColor;
      line-height: 1.2;
      align-items:center;
      &-des{
        &-icon{
          width: 42px;
        }
        &-title{
          margin: 10px 0;
          font-size:20px;
        }
      }
      &:after{
        content: "";
        display: none;
        visibility: hidden;
        clear: both;
        height: 0;
      }
      div{
        flex:1;
      }
      .marginLeft50{
        margin-right: 50px;
      }
    }
  }

  /*服务理念*/
  .satisfa{
    &-digit{
      display: flex;
      justify-content: space-between;
    }
  }

  /*合作伙伴*/
  .coll{
    &er{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      img{
        max-width:300px ;
      }
    }
  }

  /*联系我们*/
  .contact{
    &-btn{
      width: 100px;
      margin: 0 auto;
      text-align: center;
      padding:14px 20px;
      color:$themeColor;
      border-radius: 4px;
      background: $ffColor;
      cursor: pointer;
    }
  }

</style>
<style lang="scss">
  /*轮播图锚点*/
  .swiper-pagination-bullet{
    width:10px;
    height: 10px;
    border-radius: 10px;
    border:1px solid $themeColor;
    background: none;
    opacity: 1;
  }
  .swiper-pagination-bullet-active{
    width:20px !important;
    background: $themeColor;
  }
</style>
