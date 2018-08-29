<template>
  <div class="faculty_detail">

    <vbanner :swiperOption="swiperOption">
      <swiper-slide>
        <img class="swiper-slide-img" src="../../../../static/images/teachers/teacher-img.jpg" alt="">
        <div class="swiper-slide-con">
          <div class="container">
            <h2>王燮达</h2>
            <p>慢慢学，好好画。</p>
          </div>
        </div>
      </swiper-slide>
    </vbanner>

    <div class="section">
      <div class="container section-borderBottom">
        <div class="section-left">毕业院校</div>
        <ul class="section-right">
          <li class="section-right-item" v-for="(e,i) in data.college">
            <div class="tag" :class="{'tag-solid':!i,'tag-hollow':i==data.college.length-1 && i>1}"><i
              class="tag-inner"></i></div>
            <div></div>
            {{e}}
          </li>
        </ul>
      </div>
    </div>

    <div class="section ">
      <div class="container section-borderBottom">
        <div class="section-left">个人作品展</div>
        <ul class="section-right">
          <li class="section-right-item" v-for="(e,i) in data.individual">
            <div class="tag" :class="{'tag-solid':!i,'tag-hollow':i==data.individual.length-1 && i>1}"><i
              class="tag-inner"></i></div>
            <div></div>
            {{e}}
          </li>
        </ul>
      </div>
    </div>

    <div class="section ">
      <div class="container section-borderBottom">
        <div class="section-left">作品群展</div>
        <ul class="section-right">
          <li class="section-right-item" v-for="(e,i) in data.exhibition">
            <div class="tag" :class="{'tag-solid':!i,'tag-hollow':i==data.exhibition.length-1 && i>1}"><i
              class="tag-inner"></i></div>
            <div></div>
            {{e}}
          </li>
        </ul>
      </div>
    </div>


    <vbanner class="textarea" :swiperOption="swiperOption1" v-if="SCWTag<1">
      <swiper-slide v-for="(e,i) in data.intro" :key="i">
        <img class="swiper-slide-img" src="./images/IMGP1160787.jpg" alt="">
        <div class="swiper-slide-con">
          <div class="container">
            <i class="iconfont icon-quote"></i>
            <p class="textarea-con">
              {{e}}</p>
            <i class="iconfont icon-quote"></i>
          </div>
        </div>
      </swiper-slide>
    </vbanner>

      <div class="waterfall-wrapper"  style="height:800px; margin: 5% 0;">
        <vue-waterfall-easy ref="waterfall" :imgsArr="imgsArr" :maxCols="5"  @scrollReachBottom="getData"  @click="clickFn"></vue-waterfall-easy>
      </div>

  </div>
</template>

<script>
  import vbanner from '../../subcomponent/vbroadcast/vbroadcast'
  import vueWaterfallEasy from 'vue-waterfall-easy'
  export default {
    name: "faculty_detail",
    components: {
      vbanner,vueWaterfallEasy
    },
    computed: {
      SCWTag(){
        return this.$store.state.SCWTag;
      }
    },
    data() {
      return {
        imgsArr:[
          {
            src:"http://img.htmleaf.com/1412/201412061559-1.jpg",
            href:"#"
          },
          {
            src:"http://img.htmleaf.com/1412/201412061559-2.jpg",
            href:"#"
          },
          {
            src:"http://img.htmleaf.com/1412/201412061559-3.jpg",
            href:"#"
          },
          {
            src:"http://img.htmleaf.com/1412/201412061559-4.jpg",
            href:"#"
          },
          {
            src:"http://img.htmleaf.com/1412/201412061559-6.jpg",
            href:"#"
          },
          {
            src:"http://img.htmleaf.com/1412/201412061559-7.jpg",
            href:"#"
          },
          {
            src:"http://img.htmleaf.com/1412/201412061559-8.jpg",
            href:"#"
          },
          {
            src:"http://img.htmleaf.com/1412/201412061559-9.jpg",
            href:"#"
          },{
            src:"http://img.htmleaf.com/1412/201412061559-1.jpg",
            href:"#"
          },
          {
            src:"http://img.htmleaf.com/1412/201412061559-2.jpg",
            href:"#"
          },
          {
            src:"http://img.htmleaf.com/1412/201412061559-3.jpg",
            href:"#"
          },
          {
            src:"http://img.htmleaf.com/1412/201412061559-4.jpg",
            href:"#"
          },
          {
            src:"http://img.htmleaf.com/1412/201412061559-6.jpg",
            href:"#"
          },
          {
            src:"http://img.htmleaf.com/1412/201412061559-7.jpg",
            href:"#"
          },
          {
            src:"http://img.htmleaf.com/1412/201412061559-8.jpg",
            href:"#"
          },
          {
            src:"http://img.htmleaf.com/1412/201412061559-9.jpg",
            href:"#"
          }
        ],
        swiperOption: {
          pagination: null
        },
        swiperOption1:{
        },
        data: {
          id: 1,
          name: "王燮达",
          college: ["1968 年 剩余中国辽宁省", "1996 年 毕业于中国美术学院雕塑系"],
          individual: [
            "2014 年 王燮达 博罗那上海当代艺术展 JAMES COHAN画廊，上海",
            "2013 年 王燮达：主谓宾，JAMES COHAN 画廊，纽约",
            "2011 年 子曰·王燮达作品展，JAMES COHAN 画廊，上海",
            "2010 年 王燮达作品展，古巴国家美术博物馆，哈瓦那，古巴",
            "2010 年 王燮达作品展，西班牙瓦伦西亚现代艺术博物馆 IVAM，瓦伦西亚，西班牙 2009 年 子曰·王燮达作品展，张江当代艺术馆，上海",
            "2008 年 子曰·王燮达雕塑作品展，上海雕塑艺术中心，上海 2007 年子曰·王燮达雕塑作品展，元典画廊，上海"
          ],
          exhibition: [
            "1989 年 民族杯全国书法展，山东博物馆",
            "1999 年 青年美术大展，刘海粟美术馆，上海",
            "2005 年 上海首届国际城市雕塑双年展，明圆艺术中心，上海",
            "2007 年 名家推荐-上海优秀青年雕塑家作品展，徐汇美术馆，上海",
            "2008 年 旁观-当代水墨展，土山湾美术馆，上海",
            "2008 年 中国雕塑大展上海展，长风生态园，上海距离-玖+壹当代艺术展，外滩艺术馆，上海",
            "2009 年 上海艺术博览会国际当代艺术展，上海展览中心复兴画廊，上海<br>青年艺术家联展，M艺术空间，上海",
            "2010 年 抽象之道——2010 海平线绘画雕塑联展，上海油画雕塑院美术馆<br>“色相怒放”2010中韩当代艺术交流展，韩国ZAHA美术馆，首尔，韩国<br>“艺术在旅程”，圣玛利亚诺维拉广场、密涅瓦大酒店及佛罗伦萨各大国立博物馆等，佛罗伦萨，意大利",
            "2011 年上海艺术博览会国际当代展，上海展览中心 JAMES COHAN 画廊，上海<br>世界的尽头双年展，乌斯还亚，阿根廷",
            "2012 年 上海国际城市雕塑邀请展，大宁绿地，上海<br>台北国际艺术博览会，JAMES COHAN 画廊，台北<br>上海艺术博览会国际当代展，上海展览中心 JAMES COHAN画廊，上海<br>上海艺术博览会国际当代水墨特别展，上海博览中心，上海<br>HONG KONG CONTEMPORARY 2012(香港当代 2012)，JAMES COHAN画廊，香港<br>春季艺术家联展 JAMES COHAN 画廊，上海",
            "2013 年 ART021，上海外滩美术馆<br>自然痕迹-当代艺术家在约翰·谬尔的足迹上，圣安德鲁斯博物馆<br>爱丁堡雕塑中心，英国<br>巴塞尔香港艺术博览会，香港<br>美国芝加哥艺术博览会，芝加哥，美国",
            "2014年回望海平线-第十五届海平线绘画-雕塑特别展，中华艺术馆，上海<br>追梦时空-2014 上海雕塑艺术邀请展，上海城市雕塑艺术中心，上海<br>艺术亚洲，龙美术馆(西岸馆)，上海",
            "2015 年“时空书写”抽象艺术在中国，上海当代艺术博物馆，上海第四节阿根廷“最后的世界”双年展，阿根廷",
            "2017 年 沉浸的灵光，上海BA艺术中心，上海"
          ],
          intro: [
            "谢大的雕塑由细长的元素组成的，像树枝一样有着不同的粗细，简单来说就是由金属作为媒介的线条绘画。作品蕴有一种不同寻常之感，作品表面散发出一种自发性，存在一种动作感。似乎是要强调这些雕塑的组合特征，这些完成于2004到2007的青铜雕塑被安排在一个U型的，几乎齐腰的白色的底座上。这些雕塑有着条状的和结块的肌理，以及一种亚光感；哪些闪亮的表面表现出被手触摸过很多次的痕迹，虽然这些雕塑的铜面像原始的物件，但是整体上的反应出一种抽象的快捷的现代感。虽然，这些作品由没有生命力的材料完成，但散发出一种意外的活力。原因很多是来自于这些雕塑的姿态，就像一个在不断的改变动作的打太极的人。于是，这些雕塑好像拥有一种动中有静和谐。在某种程度上，这些雕塑像一些触目的姿态，每一个表现出一种不同的性格特点。有些雕塑的细的腿深深扎根在铜的平板上，然而有些刺过白色底座的雕塑，像一个路易斯·布尔乔亚的蜘蛛。尽管燮达的作品是一种精准的抽象表达，他的雕塑唤起丰富联想。哪些圆形的突出部分可以理解成人的头部，而其他的一些部位却像鸟，树，武器以及史前的工具，燮达作品中也让人联想到建筑的元素，比如说拱廊，隐形的门户，或者领向无人之境的楼梯",
            "2222222222222222222222222222说就是由金属作为媒介的线条绘画。作品蕴有一种不同寻常之感，作品表面散发出一种自发性，存在一种动作感。似乎是要强调这些雕塑的组合特征，这些完成于2004到2007的青铜雕塑被安排在一个U型的，几乎齐腰的白色的底座上。这些雕塑有着条状的和结块的肌理，以及一种亚光感；哪些闪亮的表面表现出被手触摸过很多次的痕迹，虽然这些雕塑的铜面像原始的物件，但是整体上的反应出一种抽象的快捷的现代感。虽然，这些作品由没有生命力的材料完成，但散发出一种意外的活力。原因很多是来自于这些雕塑的姿态，就像一个在不断的改变动作的打太极的人。于是，这些雕塑好像拥有一种动中有静和谐。在某种程度上，这些雕塑像一些触目的姿态，每一个表现出一种不同的性格特点。有些雕塑的细的腿深深扎根在铜的平板上，然而有些刺过白色底座的雕塑，像一个路易斯·布尔乔亚的蜘蛛。尽管燮达的作品是一种精准的抽象表达，他的雕塑唤起丰富联想。哪些圆形的突出部分可以理解成人的头部，而其他的一些部位却像鸟，树，武器以及史前的工具，燮达作品中也让人联想到建筑的元素，比如说拱廊，隐形的门户，或者领向无人之境的楼梯",
            "333333333333333同的粗细，简单来说就是由金属作为媒介的线条绘画。作品蕴有一种不同寻常之感，作品表面散发出一种自发性，存在一种动作感。似乎是要强调这些雕塑的组合特征，这些完成于2004到2007的青铜雕塑被安排在一个U型的，几乎齐腰的白色的底座上。这些雕塑有着条状的和结块的肌理，以及一种亚光感；哪些闪亮的表面表现出被手触摸过很多次的痕迹，虽然这些雕塑的铜面像原始的物件，但是整体上的反应出一种抽象的快捷的现代感。虽然，这些作品由没有生命力的材料完成，但散发出一种意外的活力。原因很多是来自于这些雕塑的姿态，就像一个在不断的改变动作的打太极的人。于是，这些雕塑好像拥有一种动中有静和谐。在某种程度上，这些雕塑像一些触目的姿态，每一个表现出一种不同的性格特点。有些雕塑的细的腿深深扎根在铜的平板上，然而有些刺过白色底座的雕塑，像一个路易斯·布尔乔亚的蜘蛛。尽管燮达的作品是一种精准的抽象表达，他的雕塑唤起丰富联想。哪些圆形的突出部分可以理解成人的头部，而其他的一些部位却像鸟，树，武器以及史前的工具，燮达作品中也让人联想到建筑的元素，比如说拱廊，隐形的门户，或者领向无人之境的楼梯"
          ],
          imgs: []
        }
      }
    },
    methods:{
      getData() {
        this.$refs.waterfall.waterfallOver()
      },
      clickFn(event, { index, value }) {
        // 阻止a标签跳转
        event.preventDefault()
        // 只有当点击到图片时才进行操作
        if (event.target.tagName.toLowerCase() == 'img') {
          console.log('img clicked',index, value)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/style/icon.css";
  .swiper-slide .swiper-slide-con {
    color: $fMColor;
  }

  .section {
    .container {
      display: flex;
    }
    &-left {
      width: 200px;
      font-size: $FS20;
      font-weight: 700;
    }
    &-right {
      flex: 1;
      &-item {
        display: flex;
        align-items: flex-start;
        line-height: 1.6;
        margin-bottom: 20px;
      }
    }
  }


  .textarea{
    .swiper-slide-con{
      .container{
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    &-con{
      line-height: 2;
      font-size: 12px !important;
    }
  }
  .tag {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin-right: 10px;
    position: relative;
    top:8px;
    &-inner {
      width: 8px;
      height: 8px;
      display: block;
      box-sizing: border-box;
      border-radius: inherit;
      background: $themeColor;
    }
    &-solid {
      border: 1px solid $themeColor;
      .tag-inner {
        background: $themeColor;
      }
    }
    &-hollow {
      border: 1px solid $themeColor;
      .tag-inner {
        border: inherit;
        background: none;
      }
    }
  }

  .boxArea {
    &-small {
      .section {
        .container {
          display: flex;
          flex-direction: column;
        }
        &-left {
          margin-bottom: 20px;
        }
      }
    }
  }


</style>
<style>

  html,
  body,
  #app{
    height: 100%;
  }
  .vue-waterfall-easy-container .vue-waterfall-easy-scroll{
    overflow-y: auto !important;
  }
</style>
