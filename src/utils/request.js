import axios from 'axios'
import qs from 'qs'
// 时间戳
// const NewTimeStamp = new Date().getTime()
axios.defaults.timeout = 30000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.adapter = function (config) {
  return new Promise((resolve, reject) => {
    let data = config.method === 'get' ? config.params : qs.stringify(config.data)
    // wx小程序 发起请求相应 log 就可以看到熟悉的返回啦
    wx.request({
      url: config.url,
      method: config.method,
      data: data,
      success: (res) => { return resolve(res) },
      fail: (err) => { return reject(err) }
    })
  })
}
// axios 拦截器
function Instance () {
  // 请求拦截器
  axios.interceptors.request.use(function (request) {
    // request.headers.token = 'token=11124654654687';
    return request
  }, function (error) {
    return Promise.reject(error)
  })
  // 添加响应拦截器
  axios.interceptors.response.use(function (response) {
    return response
  }, function (error) {
    return Promise.reject(error)
  })
}
Instance()
/**
 * @desc get请求
 * @param { String } url 接口url
 * @param { object } params 请求参数
 * @return { Promise } 然后一个promise对象
 */
function get (url, params) {
  return axios({
    method: 'get',
    url: url,
    params: params
  })
}
/**
 * @desc post请求
 * @param { String } url 接口url
 * @param { object } params 请求参数
 * @return { Promise } 然后一个promise对象
 */
function post (url, params) {
  return axios({
    method: 'post',
    url: url,
    data: params
  })
}
export {
  get,
  post,
  axios
}
