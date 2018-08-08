import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
  screenSize:{
    w:0,
    h:0
  },
  name:"一起画(17hua.me)",
  tel:"400-128-1717"
}
const mutations= {
  cScreenWidth (state,s) {
    state.screenSize.w=s;
  },
  cScreenHight (state,s) {
    state.screenSize.h=s;
  }
}
const store = new Vuex.Store({
  state,
  mutations
})
export default store




