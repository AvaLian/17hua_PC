import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

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
      LHeigth: 8.8,
      SHeigth: 5
    },
    {
      LHeigth: 6,
      SHeigth: 5
    }
  ],//是否滚动页面对应的固定头部（高度）
  name:"一起画(17hua.me)",
  tel:"400-128-1717"
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
  }
}
const store = new Vuex.Store({
  state,
  mutations
})
export default store




