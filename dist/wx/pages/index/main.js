require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-wrap"
  }, [_c('swiper', {
    attrs: {
      "indicator-dots": _vm.indicatorDots,
      "autoplay": _vm.autoplay,
      "interval": _vm.interval,
      "duration": _vm.duration
    }
  }, _vm._l((_vm.imgUrls), function(item, index) {
    return _c('block', {
      key: item
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0_' + index
      }
    }, [_c('image', {
      staticClass: "slide-image",
      attrs: {
        "src": item,
        "width": "355",
        "height": "150"
      }
    })])], 1)
  })), _vm._v(" "), _c('van-search', {
    attrs: {
      "value": _vm.value,
      "placeholder": "请输入搜索关键词",
      "use-action-slot": "",
      "bind:search": "onSearch",
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('h3', [_vm._v("赛事")]), _vm._v(" "), _c('van-tabs', {
    attrs: {
      "active": _vm.active,
      "bind:change": "onChange",
      "mpcomid": '10'
    }
  }, [_c('van-tab', {
    attrs: {
      "title": "近期",
      "mpcomid": '3'
    }
  }, [_c('van-card', {
    attrs: {
      "tag": "111",
      "desc": "描述信息",
      "title": "商品标题",
      "thumb": "111",
      "mpcomid": '2'
    }
  })], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "全国",
      "mpcomid": '5'
    }
  }, [_c('van-card', {
    attrs: {
      "tag": "222",
      "desc": "描述信息",
      "title": "商品标题",
      "thumb": "111",
      "mpcomid": '4'
    }
  })], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "加盟商",
      "mpcomid": '7'
    }
  }, [_c('van-card', {
    attrs: {
      "tag": "333",
      "desc": "描述信息",
      "title": "商品标题",
      "thumb": "111",
      "mpcomid": '6'
    }
  })], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "全部",
      "mpcomid": '9'
    }
  }, [_c('van-card', {
    attrs: {
      "tag": "444",
      "desc": "描述信息",
      "title": "商品标题",
      "thumb": "111",
      "mpcomid": '8'
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('h3', [_vm._v("唐球达人")]), _vm._v(" "), _c('div', [_c('van-panel', {
    attrs: {
      "title": "标题",
      "desc": "描述信息",
      "status": "状态",
      "mpcomid": '11'
    }
  }, [_c('view', [_vm._v("内容")])])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('h3', [_vm._v("互动节目")]), _vm._v(" "), _c('div', [_c('van-panel', {
    attrs: {
      "title": "标题",
      "desc": "描述信息",
      "status": "状态",
      "mpcomid": '12'
    }
  }, [_c('view', [_vm._v("内容")])])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('h3', [_vm._v("唐球学院")]), _vm._v(" "), _c('div', [_c('van-panel', {
    attrs: {
      "title": "标题",
      "desc": "描述信息",
      "status": "状态",
      "mpcomid": '13'
    }
  }, [_c('view', [_vm._v("内容")])])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('h3', [_vm._v("最新动态")]), _vm._v(" "), _c('div', [_c('van-panel', {
    attrs: {
      "title": "标题",
      "desc": "描述信息",
      "status": "状态",
      "mpcomid": '14'
    }
  }, [_c('view', [_vm._v("内容")])])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('h3', [_vm._v("连锁加盟")]), _vm._v(" "), _c('div', [_c('van-panel', {
    attrs: {
      "title": "标题",
      "desc": "描述信息",
      "status": "状态",
      "mpcomid": '15'
    }
  }, [_c('view', [_vm._v("内容")])])], 1)], 1), _vm._v(" "), _c('a', {
    staticClass: "counter",
    attrs: {
      "href": "/pages/counter/main"
    }
  }, [_vm._v("去往Vuex示例页面")]), _vm._v(" "), _vm._m(0)], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "all"
  }, [_c('div', {
    staticClass: "left"
  }), _vm._v(" "), _c('div', {
    staticClass: "right"
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b93b2d1c", esExports)
  }
}

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(67);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_b93b2d1c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(131);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(68)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b93b2d1c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_b93b2d1c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b93b2d1c", Component.options)
  } else {
    hotAPI.reload("data-v-b93b2d1c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 68:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_request__ = __webpack_require__(73);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      },
      radio: 1,
      imgUrls: ['https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640', 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640', 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'],
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      active: 1,
      value: '' // 搜索value
    };
  },


  components: {
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */]
  },

  methods: {
    bindViewTap: function bindViewTap() {
      var url = '../logs/main';
      if (global.mpvuePlatform === 'wx') {
        global.mpvue.switchTab({ url: url });
      } else {
        global.mpvue.navigateTo({ url: url });
      }
    },
    clickHandle: function clickHandle(ev) {
      console.log('clickHandle:', ev);
      // throw {message: 'custom test'}
    },
    onShow: function onShow() {
      this.show = true;
      console.log('mpvue.data', this);
      // mpvue.setData({show: true})
    },

    /**
     * @desc 搜索回调
     */
    onSearch: function onSearch() {},

    /**
     * @desc 赛事切换回调
     */
    onChange: function onChange() {}
  },

  created: function created() {
    console.log('12312');
    // let app = getApp()
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* get */])('http://localhost:4001/api/users').then(function (res) {
      console.log('res', res);
    });
  }
});

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return get; });
/* unused harmony export post */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_qs__);
/* unused harmony reexport axios */




// 时间戳
// const NewTimeStamp = new Date().getTime()

__WEBPACK_IMPORTED_MODULE_1_axios___default.a.defaults.timeout = 30000;
__WEBPACK_IMPORTED_MODULE_1_axios___default.a.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
__WEBPACK_IMPORTED_MODULE_1_axios___default.a.defaults.adapter = function (config) {
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    // console.log(config,'adapter')
    var data = config.method === 'get' ? config.params : __WEBPACK_IMPORTED_MODULE_2_qs___default.a.stringify(config.data);
    // wx小程序 发起请求相应 log 就可以看到熟悉的返回啦
    wx.request({
      url: config.url,
      method: config.method,
      data: data,
      success: function success(res) {
        return resolve(res);
      },
      fail: function fail(err) {
        return reject(err);
      }
    });
  });
};

// axios 拦截器
function Instance() {
  // 请求拦截器
  __WEBPACK_IMPORTED_MODULE_1_axios___default.a.interceptors.request.use(function (request) {
    // request.headers.token = 'token=11124654654687';
    // console.log(request) // 请求成功
    return request;
  }, function (error) {
    // console.log(error); // 请求失败
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(error);
  });

  // 添加响应拦截器
  __WEBPACK_IMPORTED_MODULE_1_axios___default.a.interceptors.response.use(function (response) {
    console.log(response.data.data); // 响应成功
    return response;
  }, function (error) {
    // console.log(error); // 响应失败
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(error);
  });
}

Instance();

/**
 * @desc get请求
 * @param { String } url 接口url
 * @param { object } params 请求参数
 * @return { Promise } 然后一个promise对象
 */
function get(url, params) {
  return __WEBPACK_IMPORTED_MODULE_1_axios___default()({
    method: 'get',
    url: url,
    params: params
  });
}
/**
 * @desc post请求
 * @param { String } url 接口url
 * @param { object } params 请求参数
 * @return { Promise } 然后一个promise对象
 */
function post(url, params) {
  return __WEBPACK_IMPORTED_MODULE_1_axios___default()({
    method: 'post',
    url: url,
    data: params
  });
}


/***/ })

},[66]);