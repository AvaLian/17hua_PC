// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)




import "babel-polyfill"    //处理IE Promise兼容性

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.title)) {
    document.title = to.meta.title
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    // if (!auth.loggedIn()) {
    //   next({
    //     path: '/index',
    //     query: { redirect: to.fullPath }
    //   })
    // } else {
    //   next()
    // }
  } else {
    document.title = "一起画(17hua.me)"
  }
  next()// 确保一定要调用 next()
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
