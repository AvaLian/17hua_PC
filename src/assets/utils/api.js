'use strict'
// import config from "../../config/index"

const colunmbaseurl="website/show?column_id=";
const artist="website/artist?";
const paintlist="event/search?";
const pagelist="article/index?";
const pageDetail="article/show?";
const joinus="user/joinus?";
const city="config/supportCity?";
const qrcode="//wx.17hua.me/#/dt?actinfo";
const home=1;
const advantge=2;
const course=3;
const activity=4;
const month=5;
const paintmedia=6;
const faculty=7;
const aboutus=8;

// function suffix(url){
//   return process.env.NODE_ENV === 'development'? url+="&test=http%3a%2f%2flocalhost%3a8080":url+="&test=https%3a%2f%2fwww.17hua.me";
// }

function suffix(url){
  return url+="&test="+document.location.protocol+'//' + window.location.host;
}

export default {
  // methodurl:method,
  // suffix:suffix,
  home:suffix(colunmbaseurl+home),
  advantge:suffix(colunmbaseurl+advantge),
  course:suffix(colunmbaseurl+course),
  activity:suffix(colunmbaseurl+activity),
  month:suffix(colunmbaseurl+month),
  paintmedia:suffix(colunmbaseurl+paintmedia),
  faculty:suffix(colunmbaseurl+faculty),
  facultyDetail:suffix(artist),
  aboutus:suffix(colunmbaseurl+aboutus),

  paintlist:suffix(paintlist),   //活动列表
  pagelist:suffix(pagelist),   //文章列表
  pageDetail:suffix(pageDetail),  //文章详情页
  joinus:suffix(joinus),
  city:suffix(city),
  qrcode:suffix(qrcode)
}

