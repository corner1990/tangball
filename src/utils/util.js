/* eslint-disable */
function formatTime(timeteamp) {
  var date = new Date(timeteamp)
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
function generateMixed(n) {
  var res = "";
  for (var i = 0; i < n; i++) {
    var id = Math.ceil(Math.random() * 35);
    res += chars[id];
  }
  return res;
}
function wxPromisify(fn) {
  return function (obj = {}) {
    return new Promise((resolve, reject) => {
      obj.success = function (res) {
        //成功
        resolve(res)
      }
      obj.fail = function (res) {
        //失败
        reject(res)
      }
      fn(obj)
    })
  }
}
/**
 * 将日期格式化成指定格式的字符串
 * @param date 要格式化的日期，不传时默认当前时间，也可以是一个时间戳
 * @param fmt 目标字符串格式，支持的字符有：y,M,d,q,w,H,h,m,S，默认：yyyy-MM-dd HH:mm:ss
 * @returns 返回格式化后的日期字符串
 */
function formatDate(date, fmt)
{
    date = date == undefined ? new Date() : date;
    date = typeof date == 'number' ? new Date(date) : date;
    fmt = fmt || 'yyyy-MM-dd HH:mm:ss';
    var obj =
    {
        'y': date.getFullYear(), // 年份，注意必须用getFullYear
        'M': date.getMonth() + 1, // 月份，注意是从0-11
        'd': date.getDate(), // 日期
        'q': Math.floor((date.getMonth() + 3) / 3), // 季度
        'w': date.getDay(), // 星期，注意是0-6
        'H': date.getHours(), // 24小时制
        'h': date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, // 12小时制
        'm': date.getMinutes(), // 分钟
        's': date.getSeconds(), // 秒
        'S': date.getMilliseconds() // 毫秒
    };
    var week = ['天', '一', '二', '三', '四', '五', '六'];
    for(var i in obj)
    {
        fmt = fmt.replace(new RegExp(i+'+', 'g'), function(m)
        {
            var val = obj[i] + '';
            if(i == 'w') return (m.length > 2 ? '星期' : '周') + week[val];
            for(var j = 0, len = val.length; j < m.length - len; j++) val = '0' + val;
            return m.length == 1 ? val : val.substring(val.length - m.length);
        });
    }
    return fmt;
}
//无论promise对象最后状态如何都会执行
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};


var parseParam = function(param, key1) { //函数：{将json转成url参数形式}-递归
  var paramStr = "";
  if (typeof(param) == "string" || typeof(param) == "number" || typeof(param) == "boolean") { //Q1：{参数类型}是字符串，数字或布尔
    paramStr += "&" + key1 + "=" + encodeURIComponent(param);
  } else { //Q2：{参数类型}是数组或对象
    for (var key in param) {
      var k = key1 == null ? key : key1 + (param instanceof Object ? "[" + key + "]" : "." + key);
      // if (param[key]) {//如果{key}存在
      paramStr += '&' + parseParam(param[key], k);
      // }

    }
  }
  return paramStr.substr(1);
};



/**
 * 微信请求get方法
 * url
 * data 以对象的格式传入
 */
function getRequest(url, data) {
  var getRequest = wxPromisify(wx.request)
  data=parseParam(data); //调用：{将json转成url参数形式},
  console.log("data###", data);
  return getRequest({
    url: url,
    method: 'GET',
    data:  data,
    header: {
      'Content-Type': 'application/json'
    }
  })
}
/**
 * 微信请求post方法封装
 * url
 * data 以对象的格式传入
 */
function postRequest(json) {
  let {url,param}=json;
  console.log("postRequest####");
  var postRequest = wxPromisify(wx.request)
  param=parseParam(param); //调用：{将json转成url参数形式},
  console.log("param###", param);
  return postRequest({
    url: url,
    method: 'POST',
    data: param,
    header: {
      "content-type": "application/x-www-form-urlencoded"
    },
  })
}
/**
 * 微信用户登录,获取code
 */
function wxLogin() {
  return wxPromisify(wx.login)
}
// 是否为空对象

function isEmptyObject(e) {
    var t;
    for (t in e)
        return !1;
    return !0

}
/**
 * 获取微信用户信息
 * 注意:须在登录之后调用
 */
function wxGetUserInfo() {
  return wxPromisify(wx.getUserInfo)
}
/**
 * 获取系统信息
 */
function wxGetSystemInfo() {
  return wxPromisify(wx.getSystemInfo)
}
// 检测授权状态
  

let deepCopy = function (obj) {//深拷贝一个Json对象的函数
  let str = JSON.stringify(obj);//json对象转字符串
  let objNew = JSON.parse(str); //字符串转json对象
  return objNew
}

let class2type = {},
  //用于记录[object class]样式  
arrObjs = "Boolean Number String Function Array Date RegExp Null Undefined".split(" ");
for (var i = 0, l = arrObjs.length; i < l; i++) {
  class2type["[object " + arrObjs[i] + "]"] = arrObjs[i].toLowerCase();
}

let type = function (obj) {
  //函数：{返回对象类型函数}
  return class2type[Object.prototype.toString.call(obj)] || "object";
};

function timeout(ms) {//使用promise封装一个延迟方法
  return new Promise((resolve) => {//resolve延迟解决后的回调函数, reject延迟异常的处理函数
      setTimeout(resolve, ms, 'done');
  });
}


export default {
  formatTime: formatTime, // 时间格式化函数
  generateMixed: generateMixed, // 获取随机数
  $get: getRequest, // get方法封装
  post: postRequest, //post方法封装
  wxPromisify: wxPromisify, //promise 方法
  wxLogin: wxLogin, // 登录用户发那个发封装
  wxGetUserInfo: wxGetUserInfo, // 获取用户信息方法封装
  formatDate:formatDate, // 格式化时间方法
  wxGetSystemInfo: wxGetSystemInfo, //获取系统信息封装
  isEmptyObject: isEmptyObject // 判断对象是否为空
  ,deepCopy,type,timeout
}