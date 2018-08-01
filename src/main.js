// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

router.beforeEach((to,form,next) =>{
  /*路由变化修改title*/
  if(to.meta.title){
    document.title=to.meta.title
  }else{
    document.title="一起画(17hua.me)"
  }
  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
