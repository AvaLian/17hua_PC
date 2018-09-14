import config from "../../config/index"
function method(url,param) {
  if(process.env.NODE_ENV === 'development')   url = url+param+"&test=http://localhost:"+config.dev.port;
  return url
}

export default {
  methodurl:method,
  first_colunm:"/show?column_id=",
  artist:"/artist?artist_id="
}
