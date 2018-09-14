import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const Index = resolve => {
  require(['@/components/index/index'], resolve)
};
const Advan = resolve => {
  require(['@/components/advantage/advantage'], resolve)
};
const CourIntro = resolve => {
  require(['@/components/courseIntro/courseIntro'], resolve)
};
const WOMouth = resolve => {
  require(['@/components/wordOfMouth/wordOfMouth'], resolve)
};
const Faculty = resolve => {
  require(['@/components/faculty/faculty'], resolve)
};
const FacultyIndex = resolve => {
  require(['@/components/faculty/faculty_index/faculty_index'], resolve)
};
const FacultyDetail = resolve => {
  require(['@/components/faculty/faculty_detail/faculty_detail'], resolve)
};
const Cooper = resolve => {
  require(['@/components/cooperative/cooperative'], resolve)
};
const AboutUs = resolve => {
  require(['@/components/aboutUs/aboutUs'], resolve)
};
const Notfound= resolve => {
  require(['@/components/notFound/notFound'], resolve)
};

export default new Router({
  mode: "history",
  routes: [
    {
      path: '*',
      redirect: "Index"
    },
    {
      path: '/index',
      name: 'Index',
      zwname: "首页",
      meta: {scrollToTop: true},
      component: Index,
    }, {
      path: '/advan',
      name: 'Advan',
      zwname: "画酷优势",
      meta: {
        title: '画酷优势'
      },
      component: Advan
    }, {
      path: '/curIntro',
      name: 'CourIntro',
      zwname: "课程介绍",
      meta: {
        title: '课程介绍'
      },
      component: CourIntro
    }, {
      path: '/wOMouth',
      name: 'WOMouth',
      zwname: "学员口碑",
      meta: {
        title: '学员口碑'
      },
      component: WOMouth
    }, {
      path: '/faculty',
      name: 'Faculty',
      zwname: "师资力量",
      redirect: '/faculty',
      component: Faculty,
      children: [
        {
          path: '/faculty',
          name: 'faculty',
          component: FacultyIndex,
          meta: {
            title: '师资力量'
          }
        },
        {
          path: '/facultyDetail/artist_id='+':id',
          name: 'FacultyDetail',
          component: FacultyDetail,
          meta: {
            title: '师资详情'
          }
        }
      ]
    }, {
      path: '/cooper',
      name: 'Cooper',
      zwname: "合作品牌",
      meta: {
        title: '合作品牌'
      },
      component: Cooper
    }, {
      path: '/aboutUs',
      name: 'AboutUs',
      zwname: "关于我们",
      meta: {
        title: '关于我们'
      },
      component: AboutUs
    },{
      path: '/notfound',
      name: '404',
      zwname: "",
      meta: {
        title: '404'
      },
      component: Notfound
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return {x: 0, y: 0}
    }
  }
})
