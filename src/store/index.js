import Vue from "vue"
import Vuex from "vuex"
import router from '../router/index'

Vue.use(Vuex)


import http from '@/assets/utils/http'
import api from '@/assets/utils/api'

const $http = http;
const $api = api;
const bDaty = new Date();
const toDay = new Date(bDaty.getTime() - parseInt(6 * 30 * 24 * 60 * 60 * 1000));
const afterWeek = new Date(bDaty.getTime() + parseInt(3 * 30 * 24 * 60 * 60 * 1000));


const state = {
  screenSize: {
    w: 0,
    h: 0
  },
  SCWTag: 0,   //分辨率大小标志: 0：large;1：middle;2:small
  pageClass: ["boxArea-large", "boxArea-middle", "boxArea-small"],  //不同分辨率页面的类名（响应式布局）
  isScroll: 0, //是否滚动固定头部标志
  headerHeight: [
    {
      LHeigth: 88,
      SHeigth: 40
    },
    {
      LHeigth: 70,
      SHeigth: 40
    }
  ],//是否滚动页面对应的固定头部（高度）
  name: "一起画(17hua.me)",
  tel: "400-128-1717",
  home: {  //首页
    topbanner: null,   //首页banner
    selections: null,   //打造行业领先价值
    section2: null,   //人性化教学理念
    proSystem: null,  //产品体系
    banner: null,
    teaStrength: null,
    cooperative: null,
    contact: null
  },
  advantage: { //画酷优势
    topbanner: null,  //banner
    section1: null, //严选精英画师
    teaTeam: null,   //资深团队，深耕教研
    section3: null, //1V1绘画更有效
    banner: null //解锁你的创造力
  },
  courseIntro: {
    topbanner: null,  //banner
    vts: null,   //VTS视觉观察思考
    proSystem: null,  //画酷产品体系标准
    section5: null, //每一种创意绘画都有专属核心
  },
  activity:{
    topbanner:null,  //banner
    lists:[]    //活动列表数据
  },
  city:[],  //城市及城市代码
  wordOfMonth: {
    topbanner: null,  //banner
    section1: null,   //学员作品分享、相信榜样力量
    rating: null,  //妈妈有话说
  },
  paintmedia:{
    topbanner:null,  //banner
    videolists:[],  //视频
    pagelists:[],   //文章
  },
  paintmediadetail:[],  //文章详情页
  faculty: {
    topbanner: null,  //banner
    teaTeam: null //专注、更专业
  },
  cooperative: {
    topbanner: null,  //banner
    partner: null //专注、更专业
  },
  aboutus: {
    topbanner: null,  //banner
    partner: null, //专注、更专业
    joinus: null //信息
  },
  artists: [],   //老师详情
  date:{
    pastDate:toDay.getFullYear()+'-'+(toDay.getMonth()+1)+'-'+toDay.getDate(),
    nowDate:bDaty.getFullYear()+'-'+(bDaty.getMonth()+1)+'-'+bDaty.getDate(),
    futureDate:afterWeek.getFullYear()+'-'+(afterWeek.getMonth()+1)+'-'+afterWeek.getDate()
  }
};

const getters = {  // getters
  artist: (state) => (id) => {
    return state.artists.find(d => {
      if (d.id == id) return d
    })
  }
};

const mutations = {
  cScreenWidth(state, param) {
    state.screenSize.w = param;
  },
  cScreenHight(state, param) {
    state.screenSize.h = param;
  },
  cSCWTag(state, param) {
    state.SCWTag = param;
  },
  cisScroll(state, param) {
    state.isScroll = param;
  },
  cHome(state, param) {
    state.home.topbanner = param[0];
    state.home.selections = param[1];
    state.home.section2 = param[2];
    state.home.banner = param[3];
    state.home.proSystem = param[4];
    state.home.teaStrength = param[5];
    state.home.cooperative = param[6];
    state.home.contact = param[7];
  },
  cAdvantage(state, param) {
    state.advantage.topbanner = param[0];
    state.advantage.section1 = param[1];
    state.advantage.teaTeam = param[2];
    state.advantage.section3 = param[3];
    state.advantage.banner = param[4];
  },
  cCourseIntro(state, param) {
    state.courseIntro.topbanner = param[0];
    state.courseIntro.vts = param[1];
    state.courseIntro.proSystem = param[2];
    state.courseIntro.section5 = param[3];
  },
  cActivity(state, param) {
    state.activity.topbanner = param[0];
  },
  cActivityList(state, param){
    param.reverse().forEach((item=>{
      state.activity.lists.push(item);
    }))
  },
  cActivityListClear(state, param){
      state.activity.lists=[];
  },

  cCity(state, param){
    state.city = param;
  },
  cWordOfMonth(state, param) {
    state.wordOfMonth.topbanner = param[0];
    state.wordOfMonth.section1 = param[1];
    state.wordOfMonth.rating = param[2];
  },
  cPaintMedia(state, param) {
    state.paintmedia.topbanner = param[0];
    state.paintmedia.videolists = param[1];
  },
  cPaintMediaPageList(state, param){
    state.paintmedia.pagelists = param;
  },
  cPaintMediaPageDetail(state, param){
    state.paintmediadetail = param;
  },
  cFaculty(state, param) {
    state.faculty.topbanner = param[0];
    state.faculty.teaTeam = param[1];
  },
  cCooperative(state, param) {
    state.cooperative.topbanner = param[0];
    state.cooperative.partner = param[1];
  },
  cAboutus(state, param) {
    state.aboutus.topbanner = param[0];
    state.aboutus.partner = param[1];
    state.aboutus.joinus = param[2];
  },
  cArtists(state, param) {
    state.artists.push(param)
  }
};

const actions = {

  //获取"首页"数据
  dataHome({state, commit}) {
    $http.get(api.home).then(res => {
      commit("cHome", res.data.records)
    }).catch(err => {
      router.push({name: '404'});
      console.log("err:", err);
    })
  },

  //获取"画酷优势"数据
  dataAdvantage({state, commit}) {
    $http.get(api.advantge).then(res => {
      commit("cAdvantage", res.data.records)
    }).catch(err => {
      router.push({name: '404'});
      console.log("err:", err);
    })
  },

  //获取"课程介绍"数据
  dataCourseIntro({state, commit}) {
    $http.get(api.course).then(res => {
      commit("cCourseIntro", res.data.records)
    }).catch(err => {
      router.push({name: '404'});
      console.log("err:", err);
    })
  },

  //获取"活动"数据
  dataActivity({state, commit},param) {
    $http.get(api.activity).then(res => {
      commit("cActivity", res.data.records)
    }).catch(err => {
      router.push({name: '404'});
      console.log("err:", err);
    });

    $http.get(api.city).then(res => {
      commit("cCity", res.data.records)
    }).catch(err => {
      router.push({name: '404'});
      console.log("err:", err);
    });

    let stringUrl=api.paintlist+'&p=%2C&d=200&num=8&page_no=1&page_size=20&sort=closing_time%7C0';
    if(param.fresh)   commit("cActivityListClear");

    $http.get(stringUrl,{'city_code':param.city_code,'stext':param.stext,'start':param.nowDate,'end':param.end}).then(res => {
      commit("cActivityList", res.data.records)
    }).catch(err => {
      router.push({name: '404'});
      console.log("err:", err);
    });

    $http.get(stringUrl,{'city_code':param.city_code,'stext':param.stext,'start':param.start,'end':param.nowDate}).then(res => {
      commit("cActivityList", res.data.records)
    }).catch(err => {
      router.push({name: '404'});
      console.log("err:", err);
    })
  },

  //获取"学院口碑"数据
  dataWordOfMonth({state, commit}) {
    $http.get(api.month).then(res => {
      commit("cWordOfMonth", res.data.records)
    }).catch(err => {
      router.push({name: '404'});
      console.log("err:", err);
    })
  },

  //获取"画媒体"数据
  dataPaintMedia({state, commit}) {
    $http.get(api.paintmedia).then(res => {
      commit("cPaintMedia", res.data.records)
    }).catch(err => {
      router.push({name: '404'});
      console.log("err:", err);
    })

    $http.get(api.pagelist+"&cat_id=2&page_no=1&page_size=4").then(res => {
      // console.log("画媒体文章数据：",res);
      commit("cPaintMediaPageList", res.data.records)
    }).catch(err => {
      router.push({name: '404'});
      console.log("err:", err);
    })
  },
  //获取"文章"数据
  dataPaintMediaDetail({state, commit}, param) {
    $http.get(api.pageDetail,{'id':param}).then(res => {
      // console.log(res.data);
      commit("cPaintMediaPageDetail", res.data.record)
    }).catch(err => {
      router.push({name: '404'});
      console.log("err:", err);
    })
  },

  //获取"师资力量"数据
  dataFaculty({state, commit}) {
    $http.get(api.faculty).then(res => {
      commit("cFaculty", res.data.records)
    }).catch(err => {
      router.push({name: '404'});
      console.log("err:", err);
    })
  },



  //获取"关于我们"数据
  dataAboutus({state, commit}) {
    $http.get(api.aboutus).then(res => {
      commit("cAboutus", res.data.records)
    }).catch(err => {
      router.push({name: '404'});
      console.log("err:", err);
    })
  },

  //获取"老师详情"数据
  dataTutor({state, commit}, param) {
    $http.get(api.facultyDetail,{'artist_id':param}).then(res => {
      let data = res.data.records;
      let obj = {
        id: null,
        topbanner: [],
        graduate: [],
        opus: [],
        exhibition: [],
        evaluate: [],
        product: []
      };
      obj.id = param;
      data.map((d, i) => {
        switch (d.type) {
          case 10:
            obj.topbanner.push(d);
            break;
          case 20:
            obj.graduate.push(d);
            break;
          case 30:
            obj.opus.push(d);
            break;
          case 40:
            obj.exhibition.push(d);
            break;
          case 50:
            obj.evaluate.push(d);
            break;
          case 60:
            obj.product.push(d);
            break;
        }
      });
      commit("cArtists", obj)
    }).catch(err => {
      router.push({name: '404'});
      console.log("err:", err);
    })
  },


  //“加入我们”提交表单信息
  joinus({state, commit}, param){
    $http.get(api.joinus,param).then(res => {
     console.log("OK");
      this.$message({
        message: '提交成功，我们尽快联系你',
        type: 'success'
      });
    }).catch(err => {
      console.log("No");
      this.$message.error('网络离家出走啦');
      console.log("err:", err);
    })
  },

  qrcodeUrl(param){
    return api.qrcode+param
  }
};


const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
export default store




