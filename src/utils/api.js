'use strict'
// import config from "../../config/index"
function method(url,param) {
  // if(process.env.NODE_ENV === 'development')   url = url+param+"&test=http://localhost:"+config.dev.port;
  return process.env.NODE_ENV === 'development'?  url = url+param+"&test=http://localhost:8080":url= url+param+"&test=https://www.17hua.me";
  // return process.env.NODE_ENV === 'development'?  url = url+param+"&test=http://localhost:"+config.dev.port:url= url+param+"&test=https://www.17hua.me";
}

export default {
  methodurl:method,
  first_colunm:"/show?column_id=",
  artist:"/artist?artist_id="
}
