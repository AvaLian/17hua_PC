import Vue from "vue"
import Vuex from "vuex"
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
  tutors:{},
  courses:{},
  coller:[],
  comment:[]
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
  cTutors(state,param){
    state.tutors=param;
  },
  cCourses(state,param){
    state.courses=param;
  },
  cColler(state,param){
    state.coller=param;
  },
  cComments(state,param){
    state.comment=param;
  }
}

const actions={

  //获取大师和导师数据
  apiTutors ({state,commit}) {
    $http.get($api.teachers).then(res=>{
      var res=res.data
      commit("cTutors",res.data)
    }).catch(err=>{
      console.log("err:",err);
    })
  },

  //获取课程数据
  apiCourses ({state,commit}) {
    $http.get($api.courses).then(res=>{
      var res=res.data
      commit("cCourses",res.data)
    }).catch(err=>{
      console.log("err:",err);
    })
  },

  //获取合作伙伴数据
  apiColler ({state,commit}) {
    $http.get($api.coller).then(res=>{
      var res=res.data
      commit("cColler",res.data)
    }).catch(err=>{
      console.log("err:",err);
    })
  },


  //获取妈妈有话讲数据
  apicComments ({state,commit}) {
    $http.get($api.comments).then(res=>{
      var res=res.data
      commit("cComments",res.data)
    }).catch(err=>{
      console.log("err:",err);
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
})
export default store




