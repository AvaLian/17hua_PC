import Vue from 'vue'
import Router from 'vue-router'

import NotFound from "@/components/notFound"

Vue.use(Router)

const Index = resolve => {require(['@/components/index/index'], resolve)};
const Advan = resolve => {require(['@/components/advantage/advantage'], resolve)};
const CourIntro = resolve => {require(['@/components/courseIntro/courseIntro'], resolve)};
const WOMouth = resolve => {require(['@/components/wordOfMouth/wordOfMouth'], resolve)};
const Faculty = resolve => {require(['@/components/faculty/faculty'], resolve)};
const Cooper = resolve => {require(['@/components/cooperative/cooperative'], resolve)};
const AboutUs = resolve => {require(['@/components/aboutUs/aboutUs'], resolve)};

export default new Router({
  mode:"history",
  routes: [
    {
      path: '*',
      redirect:"Index"
    },
    {
      path: '/index',
      name: 'Index',
      zwname:"首页",
      meta: { scrollToTop: true },
      component: Index,
    },{
      path: '/advan',
      name: 'Advan',
      zwname:"画酷优势",
      meta: {
        title: '画酷优势'
      },
      component: Advan
    },{
      path: '/curIntro',
      name: 'CourIntro',
      zwname:"课程介绍",
      meta: {
        title: '课程介绍'
      },
      component: CourIntro
    },{
      path: '/wOMouth',
      name: 'WOMouth',
      zwname:"学员口碑",
      meta: {
        title: '学员口碑'
      },
      component: WOMouth
    },{
      path: '/faculty',
      name: 'Faculty',
      zwname:"师资力量",
      meta: {
        title: '师资力量'
      },
      component: Faculty
    },{
      path: '/cooper',
      name: 'Cooper',
      zwname:"合作伙伴",
      meta: {
        title: '合作伙伴'
      },
      component: Cooper
    },{
      path: '/aboutUs',
      name: 'AboutUs',
      zwname:"关于我们",
      meta: {
        title: '关于我们'
      },
      component: AboutUs
    }
  ],
  // scrollBehavior (to, from, savedPosition) {
  //   if (savedPosition) {
  //     // savedPosition is only available for popstate navigations.
  //     return savedPosition
  //   } else {
  //     // explicitly control scroll position
  //     // check if any matched route config has meta that requires scrolling to top
  //     // console.log(to.matched.some(m => m.meta.scrollToTop));
  //     if (to.matched.some(m => m.meta.scrollToTop)) {
  //       return {
  //         x: 0,
  //         y: 0
  //       }
  //     }
  //   }
  // }
})
