import Vue from "vue"
import Vuex from "vuex"
import vuexCache from 'vuex-cache'
Vue.use(Vuex)


import http from '../utils/http'
import api from '../utils/api'
const $http = http
const $api = api

const state = {
  screenSize:{
    w:0,
    h:0
  },
  SCWTag:0,   //分辨率大小标志: 0：large;1：middle;2:small
  pageClass:["boxArea-large","boxArea-middle","boxArea-small"],  //不同分辨率页面的类名（响应式布局）
  isScroll:0, //是否滚动固定头部标志
  headerHeight:[
    {
      LHeigth: 88,
      SHeigth: 40
    },
    {
      LHeigth: 70,
      SHeigth: 40
    }
  ],//是否滚动页面对应的固定头部（高度）
  name:"一起画(17hua.me)",
  tel:"400-128-1717",
  home:{  //首页
    topbanner:null,   //首页banner
    selections: null,   //打造行业领先价值
    section2: null,   //人性化教学理念
    proSystem:null,  //产品体系
    banner: null,
    teaStrength: null,
    cooperative: null,
    contact:null
  },
  advantage:{ //画酷优势
    topbanner:null,  //banner
    section1:null, //严选精英画师
    teaTeam: null,   //资深团队，深耕教研
    section3:null, //1V1绘画更有效
    banner:null //解锁你的创造力
  },
  courseIntro:{
    topbanner:null,  //banner
    vts:null,   //VTS视觉观察思考
    proSystem:null,  //画酷产品体系标准
    section5:null, //每一种创意绘画都有专属核心
  },
  wordOfMonth:{
    topbanner:null,  //banner
    section1:null,   //学员作品分享、相信榜样力量
    rating:null,  //妈妈有话说
  },
  faculty:{
    topbanner:null,  //banner
    teaTeam:null //专注、更专业
  },
  cooperative:{
    topbanner:null,  //banner
    partner:null //专注、更专业
  },
  aboutus:{
    info:null //信息
  },
  artists:[]
}

const mutations= {
  cScreenWidth (state,param) {
    state.screenSize.w=param;
  },
  cScreenHight (state,param) {
    state.screenSize.h=param;
  },
  cSCWTag (state,param) {
    state.SCWTag=param;
  },
  cisScroll (state,param) {
    state.isScroll=param;
  },
  cHome(state,param){
    state.home.topbanner=param[0];
    state.home.selections=param[1];
    state.home.section2=param[2];
    state.home.banner=param[3];
    state.home.proSystem=param[4];
    state.home.teaStrength=param[5];
    state.home.cooperative=param[6];
    state.home.contact=param[7];
  },
  cAdvantage(state,param){
    state.advantage.topbanner=param[0];
    state.advantage.section1=param[1];
    state.advantage.teaTeam=param[2];
    state.advantage.section3=param[3];
    state.advantage.banner=param[4];
  },
  cCourseIntro(state,param){
    state.courseIntro.topbanner=param[0];
    state.courseIntro.vts=param[1];
    state.courseIntro.proSystem=param[2];
    state.courseIntro.section5=param[3];
  },
  cWordOfMonth(state,param){
    state.wordOfMonth.topbanner=param[0];
    state.wordOfMonth.section1=param[1];
    state.wordOfMonth.rating=param[2];
  },
  cFaculty(state,param){
    state.faculty.topbanner=param[0];
    state.faculty.teaTeam=param[1];
  },
  cCooperative(state,param){
    state.cooperative.topbanner=param[0];
    state.cooperative.partner=param[1];
  },
  cAboutus(state,param){
    state.cooperative.info=param[0];
  },
  cArtists(state,param){
    state.artists.push(param)
  }
}

const actions={

  //获取"首页"数据
  dataHome({state,commit}){
    $http.get("/show?column_id=1&test=http://localhost:8080").then(res=>{
      commit("cHome",res.data.records)
    }).catch(err=>{
      console.log("err:",err);
    })
  },

  //获取"画酷优势"数据
  dataAdvantage({state,commit}){
    $http.get("/show?column_id=2&test=http://localhost:8080").then(res=>{
      commit("cAdvantage",res.data.records)
    }).catch(err=>{
      console.log("err:",err);
    })
  },

  //获取"课程介绍"数据
  dataCourseIntro({state,commit}){
    $http.get("/show?column_id=3&test=http://localhost:8080").then(res=>{
      commit("cCourseIntro",res.data.records)
    }).catch(err=>{
      console.log("err:",err);
    })
  },

  //获取"学院口碑"数据
  dataWordOfMonth({state,commit}){
    $http.get("/show?column_id=4&test=http://localhost:8080").then(res=>{
      commit("cWordOfMonth",res.data.records)
    }).catch(err=>{
      console.log("err:",err);
    })
  },

  //获取"师资力量"数据
  dataFaculty({state,commit}){
    $http.get("/show?column_id=5&test=http://localhost:8080").then(res=>{
      commit("cFaculty",res.data.records)
    }).catch(err=>{
      console.log("err:",err);
    })
  },

  //获取"合作伙伴"数据
  dataCooperative({state,commit}){
    $http.get("/show?column_id=6&test=http://localhost:8080").then(res=>{
      commit("cCooperative",res.data.records)
    }).catch(err=>{
      console.log("err:",err);
    })
  },

  //获取"关于我们"数据
  dataAboutus({state,commit}){
    $http.get("/show?column_id=7&test=http://localhost:8080").then(res=>{
      commit("cAboutus",res.data.records)
    }).catch(err=>{
      console.log("err:",err);
    })
  },

  //获取"老师详情"数据
  dataTutor({state,commit},param){
    $http.get("/artist?artist_id="+param+"&test=http://localhost:8080").then(res=>{
      let data=res.data.records;
      let obj={
        id:null,
        topbanner:[],
        graduate:[],
        opus:[],
        exhibition:[],
        evaluate:[],
        product:[]
      };
      obj.id=param;
      data.map((d,i)=>{
        switch (d.type){
          case 10:
            obj.topbanner.push(d);
            break;
          case 20:
            obj.graduate.push(d);
            break;
          case 30:
            obj.opus.push(d);
            break;
          case 40:
            obj.exhibition.push(d);
            break;
          case 50:
            obj.evaluate.push(d);
            break;
          case 60:
            obj.product.push(d);
            break;
        }
      });
      commit("cArtists",obj)
    }).catch(err=>{
      console.log("err:",err);
    })
  },

}


const getters={  // getters
  artist: (state) => (id) => {
    return state.artists.find(d => {if(d.id == id) return d})
  }
}

const store = new Vuex.Store({
  plugins: [vuexCache],
  state,
  getters,
  mutations,
  actions,
})
export default store




