/* eslint-disable */
// const lodash = require("./lodash");
const lodash = require("../../static/lodash.min.js");
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
/**
    * @name 将微信的一些异步方法转化为promise对象的函数
    * @desc 带success，fail回调函数
    * @param fn
    */
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
// var wxPromisify=(api) => {
//   return (options, ...params) => {
//     return new Promise((resolve, reject) => {
//       api(Object.assign({}, options, { success: resolve, fail: reject }), ...params);
//     });
//   }
// }
/**
 * 将日期格式化成指定格式的字符串
 * @param date 要格式化的日期，不传时默认当前时间，也可以是一个时间戳
 * @param fmt 目标字符串格式，支持的字符有：y,M,d,q,w,H,h,m,S，默认：yyyy-MM-dd HH:mm:ss
 * @returns 返回格式化后的日期字符串
 */
function formatDate(date, fmt) {
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
  for (var i in obj) {
    fmt = fmt.replace(new RegExp(i + '+', 'g'), function (m) {
      var val = obj[i] + '';
      if (i == 'w') return (m.length > 2 ? '星期' : '周') + week[val];
      for (var j = 0, len = val.length; j < m.length - len; j++) val = '0' + val;
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
var parseParam = function (param, key1) { //函数：{将json转成url参数形式}-递归
  var paramStr = "";
  if (typeof (param) == "string" || typeof (param) == "number" || typeof (param) == "boolean") { //Q1：{参数类型}是字符串，数字或布尔
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
// function getRequest(url, data) {
//   var getRequest = wxPromisify(wx.request)
//   data = parseParam(data); //调用：{将json转成url参数形式},
//   return getRequest({
//     url: url,
//     method: 'GET',
//     data: data,
//     header: {
//       'Content-Type': 'application/json'
//     }
//   })
// }
/**
 * 微信请求get方法封装
 * url
 * data 以对象的格式传入
 */
function get(json) {
  let { url, param } = json;
  var postRequest = wxPromisify(wx.request)
  // param = parseParam(param); //调用：{将json转成url参数形式},
  var strParam = JSON.stringify(param);//变量定义：{Json对象转换Json字符串函数}
  return postRequest({
    url: url,
    method: 'get',
    data: strParam,
  })
}
/**
 * 微信请求post方法封装
 * url
 * data 以对象的格式传入
 */
function post(json) {
  let { url, param } = json;
  var postRequest = wxPromisify(wx.request)
  // param = parseParam(param); //调用：{将json转成url参数形式},
  var strParam = JSON.stringify(param);//变量定义：{Json对象转换Json字符串函数}
  return postRequest({
    url: url,
    method: 'POST',
    data: strParam,
    // header: {
    //   "content-type": "application/x-www-form-urlencoded"
    // },
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
function getQuery() {
  /* 获取当前路由栈数组 */
  const pages = getCurrentPages()
  const currentPage = pages[pages.length - 1]
  const options = currentPage.options
  return options
}
//ajax获取单条数据详情的函数
async function ajaxGetDoc(_json) {
  let { page, id } = _json;
  let { data } = await post({
    url: `${global.PUB.domain}/crossDetail?page=${page}`,
    param: {
      id: id, //数据id
    }
  });
  return data.Doc
}
//ajax获取数据列表的函数
async function ajaxGetList(_json) {
  let { page, findJson, selectJson, sortJson, pageIndex, pageSize } = _json;
  let { data } = await post({
    url: `${global.PUB.domain}/crossList?page=${page}`,
    param: {
      findJson, selectJson, sortJson, pageIndex, pageSize
    }
  });
  return data.list
}
//ajax获取数据列表的函数
async function ajaxGetListPopulate(_json) {
  let { populate } = _json;
  let listData;//变量：{最终需要返回的列表}
  {
    //第一次ajax请求数据
    let { page, findJson, selectJson, sortJson, pageIndex, pageSize } = _json;
    let { data } = await post({
      url: `${global.PUB.domain}/crossList?page=${page}`,
      param: {
        findJson, selectJson, sortJson, pageIndex, pageSize
      }
    });
    listData = data.list;
  }
  /**
   * 根据填充配置进行一次ajax请求关联数据并进行拼装的函数
   *
   */
  let funPopulate = async function (populateConfig) {
    let { page, populateColumn, idColumn, idKeyColumn } = populateConfig;
    let arrId = [];
    listData.forEach(itemEach => {//循环：{原数据数组}
      if (itemEach[idColumn]) {//如果{000}000
        arrId.push(itemEach[idColumn])
      }
    })
    //变量：{填充查询条件}
    let findJson = {
      [idKeyColumn]: {
        "$in": arrId
      }
    }
    let { data } = await post({
      url: `${global.PUB.domain}/crossList?page=${page}`,
      param: {
        findJson, pageSize: 999
      }
    });
    var dict = lodash.keyBy(data.list, idKeyColumn)
    listData.forEach(itemEach => {//循环：{原数据数组}
      let key = itemEach[idColumn];//字典key值
      itemEach[populateColumn] = dict[key]
    })
  }
  /**
   * 循环填充配置数组，请求关联数据，并进行拼装
   *
   */
  if (populate) {//如果{填充配置数组}存在.
    // populate.forEach(async populateCFEach => {//循环异步操作：{填充配置数组}
    //   await funPopulate(populateCFEach);//调用：{根据填充配置进行一次ajax请求关联数据的函数}
    // })
    for await (const populateCFEach of populate) {
      await funPopulate(populateCFEach);//调用：{根据填充配置进行一次ajax请求关联数据的函数}
    }
  }
  return listData
}
/**ajax填充数据列表的某个字段函数
 * 可用于动态数据字典
 */
async function ajaxPopulate(populateConfig) {
  let { listData, page, populateColumn, idColumn, idKeyColumn } = populateConfig;
  let arrId = [];
  listData.forEach(itemEach => {//循环：{原数据数组}
    if (itemEach[idColumn]) {//如果{000}000
      arrId.push(itemEach[idColumn])
    }
  })
  //变量：{填充查询条件}
  let findJson = {
    [idKeyColumn]: {
      "$in": arrId
    }
  }
  let { data } = await post({
    url: `${global.PUB.domain}/crossList?page=${page}`,
    param: {
      findJson, pageSize: 999
    }
  });
  var dict = lodash.keyBy(data.list, idKeyColumn)
  listData.forEach(itemEach => {//循环：{原数据数组}
    let key = itemEach[idColumn];//字典key值
    itemEach[populateColumn] = dict[key]
  })
  return deepCopy(listData);
  //return listData
}
//ajax删除一条数据的函数
async function ajaxDelete(_json) {
  let { page, findJson } = _json;
  let { data } = await post({
    url: `${global.PUB.domain}/crossDelete?page=${page}`,
    param: {
      findJson
    }
  });
  return data
}
//ajax修改数据的函数
async function ajaxModify(_json) {
  let { page, findJson, modifyJson, } = _json;
  let { data } = await post({
    url: `${global.PUB.domain}/crossModify?page=${page}`,
    param: {
      findJson, modifyJson
    }
  });
  return data
}
//ajax新增数据的函数
async function ajaxAdd(_json) {
  let { page, data } = _json;
  return await post({
    url: `${global.PUB.domain}/crossAdd?page=${page}`,
    param: {
      data
    }
  });
}
//函数定义：{模态弹窗的函数}-封装成promise
let showModal = function (param) {
  var promise = new Promise((resolve, reject) => {
    param = param || {};
    wx.showModal({
      title: param.title || "",
      content: param.content || "",
      success: async res => {
        resolve(res);
      }
    })
  });
  return promise;
};
let gotoPage = function (url) {
  wx.navigateTo({ url });
};
let getMyWXSetting = async function (url) {

  let resSetting = await wxGetSetting();

  if (resSetting.authSetting["scope.userInfo"]) {
    if (url) {
      //如果有地址是从赛事详情进来的
      wx.flagJumped = true;
      if (wx.authorizeJump) {
        // 获取权限后才需要调转到赛事详情
        wx.redirectTo({
          url: `${url}`
        });
      }
    } else {
      // 否则获取权限之后跳转到首页
      wx.switchTab({
        url: "/pages/usercenter/main"
      });
    }
  } else {
    return "noAuth"
  }
};
/**
     * @name 登录并ajax初始化用户信息的函数
     * @desc
     * @param vm：vue实例，传递给ajaxMyWXUserInfo方法需要对vuex进行操作
     */
let loginAndInitUser = async function (vm, wxLoginAsync) {
  let resLogin = await wxLogin(); //微信会员登录结果
  let js_code = resLogin.code; //当前用户的微信code
  if (js_code) {
    //Q1：{当前用户的微信code}存在
    try {
      let resUserInfo = await wxGetUserInfo(); //微信会员登录
      await util.ajaxMyWXUserInfo(resUserInfo, js_code, vm); //调用：{ajax获取当前微信用户详细信息}
    } catch (err) {
    }
  } else {
    //Q2：{当前用户的微信code}不存在
    // console.warn("登录失败！" + res.errMsg);
  }
};
/**
    * @name ajax获取当前微信用户详细信息
    * @desc 包括头像，openid等
    * @param resUserInfo：用户的基础信息, js_code
    * @param js_code：微信用户code
    * @param vm：vue实例，需要对vuex进行操作
    */
let ajaxMyWXUserInfo = async function (resUserInfo, js_code, vm) {
  wx.showLoading({
    title: "请求中"
    // mask: true,
  });
  var iv = encodeURIComponent(resUserInfo.iv);
  var encryptedData = encodeURIComponent(resUserInfo.encryptedData);
 
  try {
    /**
     * ajax请求微信用户信息
     */
    let { data } = await util.post({
      url: global.PUB.domain + "/tangball/getWXUser",
      param: {
        js_code,
        iv,
        encryptedData
      }
    });

    wx.setStorage({
      //存储ids到storeage
      key: "ids",
      data: JSON.stringify(data.data1)
    });

    wx.hideLoading();
    //强行修改openid，用于测试，注意不要乱开启
    // data.data2.openId="ocnBO5WjcRaZMXU05i_9T-J94Gy0"

    vm.$store.commit("setWXUserInfo", data.data2);//vuex保存微信会员信息
    let openid = vm.$lodash.get(data, `data2.openId`);
    let wxNickName = vm.$lodash.get(data, `data2.nickName`);
    {
      /**
          * ajax获取唐球用户信息，如果不存在会自动注册
          */
      let { data } = await util.post({
        url: global.PUB.domain + "/tangball/getTangballUser",
        param: {
          openid, wxNickName
        }
      });
      vm.$store.commit("setTangballUserInfo", data);
      wx.setStorage({
        key: "tangballUserInfo",
        data: JSON.stringify(data)
      })
    }
  } catch (err) {
    wx.showLoading({
      title: "请求openId失败"
    });
  }
};
/**
    * 判断用户是否登录的方法
    */
let isLogin = async function (vm, url) {
  let result = await getMyWXSetting(url);
  //如果未授权，先return,等待用户主动授权
  if (result == "noAuth") {
    // gotoPage("/pages/authorize/main"); //跳转到授权页面
    return false;
  }
  await loginAndInitUser(vm);
  return true
}


Date.prototype.format = function () {
  var s = '';
  var mouth = (this.getMonth() + 1) >= 10 ? (this.getMonth() + 1) : ('0' + (this.getMonth() + 1));
  var day = this.getDate() >= 10 ? this.getDate() : ('0' + this.getDate());
  s += this.getFullYear() + '-'; // 获取年份。
  s += mouth + "-"; // 获取月份。
  s += day; // 获取日。
  return (s); // 返回日期。
};

//从时间段获取所有日期的函数
function getDatefromDuration(begin, end) {
  var arr = [];
  var ab = begin.split("-");
  var ae = end.split("-");
  var db = new Date();
  db.setUTCFullYear(ab[0], ab[1] - 1, ab[2]);
  var de = new Date();
  de.setUTCFullYear(ae[0], ae[1] - 1, ae[2]);
  var unixDb = db.getTime() - 24 * 60 * 60 * 1000;
  var unixDe = de.getTime() - 24 * 60 * 60 * 1000;
  for (var k = unixDb; k <= unixDe;) {
    k = k + 24 * 60 * 60 * 1000;
    arr.push((new Date(parseInt(k))).format());
  }
  return arr;
}





let util = {
  getDatefromDuration,
  isLogin,//是否登录函数
  formatTime: formatTime, // 时间格式化函数
  generateMixed: generateMixed, // 获取随机数
  get: get, // get方法封装
  post: post, //post方法封装
  wxPromisify: wxPromisify, //promise 方法
  wxLogin: wxLogin, // 登录用户发那个发封装
  wxGetUserInfo: wxGetUserInfo, // 获取用户信息方法封装
  formatDate: formatDate, // 格式化时间方法
  wxGetSystemInfo: wxGetSystemInfo, //获取系统信息封装
  isEmptyObject: isEmptyObject // 判断对象是否为空
  , deepCopy, type, timeout, getQuery, ajaxGetDoc, ajaxGetList, ajaxGetListPopulate, ajaxPopulate,
  ajaxAdd, ajaxModify, ajaxDelete, showModal, gotoPage, ajaxMyWXUserInfo, getMyWXSetting, loginAndInitUser
}
/****************************将微信的一些异步接口转成promise，支持同步的写法-START****************************/
//这几个方法就是要这样重写，特别奇怪
wxLogin = util.wxPromisify(wx.login);
let wxGetSetting = util.wxPromisify(wx.getSetting);
wxGetUserInfo = util.wxPromisify(wx.getUserInfo);
/****************************将微信的一些异步接口转成promise，支持同步的写法-END****************************/
export default util
