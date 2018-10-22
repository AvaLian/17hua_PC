'use strict'

import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = "https://api.17hua.me/yqhbsp/"   //全局配置头部
axios.defaults.timeout = 10000   //全局配置头部
axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
};



//发送请求request拦截
axios.interceptors.request.use(config => {
  // loading
  return config
}, error => {
  return Promise.reject(error)
})

//响应request拦截
axios.interceptors.response.use(response => {
  // console.log("响应:",response);
  return response
}, error => {
  return Promise.resolve(error.response)
})

//请求后状态码checkStatus验证
function checkStatus (response) {
  // console.log("验证状态码：",response.status)
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}


//处理请求出错
function checkCode (res) {
  // console.log("处理请求出错：",res.data ,res.data.success)
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    console.log(res.msg)
  }

  //这里处理服务器后端报的错误
  // if (res.data && (!res.data.success)) {
  //   alert(res.data.error_msg)
  // }

  return res
}

export default {
  post (url, data) {
    return axios({
      method: 'post',
      url,
      data: qs.stringify(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  get (url, params) {
    return axios({
      method: 'get',
      url,
      params, // get 请求时带的参数
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  delete(url, params) {
    return axios({
      method: 'delete',
      url: url,
      params
    })
  },

  put(url, data) {
    return axios({
      method: 'put',
      url: url,
      data: qs.stringify(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  }
}
