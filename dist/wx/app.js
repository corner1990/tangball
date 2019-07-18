require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([10],{

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_public_css__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_public_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__css_public_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_common_debug_item_index_js__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex__ = __webpack_require__(50);
/* eslint-disable */
global.PUB = {};
global.PUB.domain = "http://120.76.160.41:3000";





 //导入debug_item
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3__components_common_debug_item_index_js__["a" /* default */]); //作为全局组件，必须有install


 //导入vuex模块
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_vuex__["a" /* default */]); //应用组件

var store = new __WEBPACK_IMPORTED_MODULE_4_vuex__["a" /* default */].Store({ //定义Vuex的存储对象
  state: {
    debug: true

  },

  mutations: {
    //变更事件
    setDebug: function setDebug(state, param) {
      //设置debug模式
      state.debug = param;
    }
  }
});
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = store; //让vue实例中可访问$store


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(8)))

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(65);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(64)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-635d9cba", Component.options)
  } else {
    hotAPI.reload("data-v-635d9cba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 64:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);


/* eslint-disable*/
/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */
    wx.hideTabBar({
      complete: function complete() {
        console.log('关闭tabbar');
      }
    });
    var logs = void 0;
    if (global.mpvuePlatform === 'swan') {
      logs = global.mpvue.getStorageSync({ key: 'logs' }).data || [];
      logs.unshift(Date.now());
      global.mpvue.setStorageSync({
        key: 'logs',
        data: logs
      });
    } else {
      logs = global.mpvue.getStorageSync('logs') || [];
      logs.unshift(Date.now());
      global.mpvue.setStorageSync('logs', logs);
    }

    wx.login({
      success: function success(res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://e6234kn.hn3.mofasuidao.cn/paicheng/getOpenId',
            method: 'post',
            data: {
              code: res.code
            },
            success: function success(res) {
              var statusCode = res.statusCode,
                  data = res.data;

              if (statusCode === 200) {
                wx.setStorage({
                  key: 'ids',
                  data: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(data)
                });
              }
            }
          });
        } else {
          console.log('登录失败！' + res.errMsg);
        }
      }
    });
  },
  log: function log() {
    console.log('log at:' + Date.now());
  },
  onShow: function onShow() {
    wx.hideTabBar();
  }
});

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__debug_item_vue__ = __webpack_require__(4);
/* eslint-disable */

/* harmony default export */ __webpack_exports__["a"] = ({
    install: function install(Vue) {
        Vue.component('debug_item', __WEBPACK_IMPORTED_MODULE_0__debug_item_vue__["a" /* default */]); //控制组件标签
    }
});

/***/ })

},[62]);