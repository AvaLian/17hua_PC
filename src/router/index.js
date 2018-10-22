import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const Index = resolve => {
  require(['@/pages/index/index'], resolve)
};
const Advan = resolve => {
  require(['@/pages/advantage/advantage'], resolve)
};
const CourIntro = resolve => {
  require(['@/pages/courseIntro/courseIntro'], resolve)
};
const Activity = resolve => {
  require(['@/pages/activity/activity'], resolve)
};
const WOMouth = resolve => {
  require(['@/pages/wordOfMouth/wordOfMouth'], resolve)
};
const PaintMedia = resolve => {
  require(['@/pages/paintmedia/paintmedia'], resolve)
};
const PaintMediaIndex = resolve => {
  require(['@/pages/paintmedia/paintmedia-index/paintmedia-index'], resolve)
};
const PaintMediaDetail = resolve => {
  require(['@/pages/paintmedia/paintmedia-detail/paintmedia-detail'], resolve)
};
const Faculty = resolve => {
  require(['@/pages/faculty/faculty'], resolve)
};
const FacultyIndex = resolve => {
  require(['@/pages/faculty/faculty_index/faculty_index'], resolve)
};
const FacultyDetail = resolve => {
  require(['@/pages/faculty/faculty_detail/faculty_detail'], resolve)
};

const AboutUs = resolve => {
  require(['@/pages/aboutUs/aboutUs'], resolve)
};
const Notfound= resolve => {
  require(['@/pages/notFound/notFound'], resolve)
};

export default new Router({
  // mode: "history",
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
      zwname: "优势",
      meta: {
        title: '优势'
      },
      component: Advan
    }, {
      path: '/curIntro',
      name: 'CourIntro',
      zwname: "课程",
      meta: {
        title: '课程'
      },
      component: CourIntro
    }, {
      path: '/activity',
      name: 'Activity',
      zwname: "活动",
      meta: {
        title: '活动'
      },
      component: Activity
    }, {
      path: '/wOMouth',
      name: 'WOMouth',
      zwname: "口碑",
      meta: {
        title: '口碑'
      },
      component: WOMouth
    }, {
      path: '/paintmedia',
      name: 'PaintMedia',
      zwname: "画媒体",
      redirect: '/paintmedia',
      component: PaintMedia,
      meta: {
        title: '画媒体'
      },
      children: [
        {
          path: '/paintmedia',
          name: 'paintmediaIndex',
          component: PaintMediaIndex,
          meta: {
            title: '画媒体'
          }
        },
        {
          path: '/paintmediaDetail/article_id=' + ':id',
          name: 'paintmediaDetail',
          component: PaintMediaDetail,
          meta: {
            title: '文章详情'
          }
        }
      ]
    }, {
      path: '/faculty',
      name: 'Faculty',
      zwname: "师资",
      redirect: '/faculty',
      component: Faculty,
      children: [
        {
          path: '/faculty',
          name: 'faculty',
          component: FacultyIndex,
          meta: {
            title: '师资'
          }
        },
        {
          path: '/facultyDetail/artist_id=' + ':id',
          name: 'FacultyDetail',
          component: FacultyDetail,
          meta: {
            title: '师资详情'
          }
        }
      ]
    },
    // }, {
    //   path: '/cooper',
    //   name: 'Cooper',
    //   zwname: "合作品牌",
    //   meta: {
    //     title: '合作品牌'
    //   },
    //   component: Cooper
    // },
      {
      path: '/aboutUs',
      name: 'AboutUs',
      zwname: "关于",
      meta: {
        title: '关于'
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
