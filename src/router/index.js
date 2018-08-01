import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Index from "@/components/index"
import Advan from "@/components/advantage"
import CourIntro from "@/components/courseIntro"
import WOMouth from "@/components/wordOfMouth"
import Faculty from "@/components/faculty"
import Cooper from "@/components/cooperative"
import AboutUs from "@/components/aboutUs"

Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '*',
      component: Index,
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },{
      path: '/advan',
      name: 'Advan',
      meta: {
        title: '画酷优势'
      },
      component: Advan
    },{
      path: '/curIntro',
      name: 'CourIntro',
      meta: {
        title: '课程介绍'
      },
      component: CourIntro
    },{
      path: '/wOMouth',
      name: 'WOMouth',
      meta: {
        title: '学员口碑'
      },
      component: WOMouth
    },{
      path: '/faculty',
      name: 'Faculty',
      meta: {
        title: '师资力量'
      },
      component: Faculty
    },{
      path: '/cooper',
      name: 'Cooper',
      meta: {
        title: '合作伙伴'
      },
      component: Cooper
    },{
      path: '/aboutUs',
      name: 'AboutUs',
      meta: {
        title: '关于我们'
      },
      component: AboutUs
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]

})
