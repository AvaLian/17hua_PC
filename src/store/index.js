import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
  name:"一起画(17hua.me)",
  tel:"400-128-1717"
}
const store = new Vuex.Store({
  state
})
export default store




