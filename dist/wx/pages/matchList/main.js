require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_609c9ef4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(168);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(101)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-609c9ef4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_609c9ef4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\matchList\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-609c9ef4", Component.options)
  } else {
    hotAPI.reload("data-v-609c9ef4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 101:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_request__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_card__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_mytabbar_mytabbar__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_vant_dialog_dialog__ = __webpack_require__(161);


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

/* eslint-disable */




/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    card: __WEBPACK_IMPORTED_MODULE_3__components_card__["a" /* default */], mytabbar: __WEBPACK_IMPORTED_MODULE_4__components_mytabbar_mytabbar__["a" /* default */], Dialog: __WEBPACK_IMPORTED_MODULE_5__static_vant_dialog_dialog__["a" /* default */]
  },
  data: function data() {
    return {
      activeStep: 0,
      steps: [{
        text: '步骤一',
        desc: '描述信息'
      }, {
        text: '步骤二',
        desc: '描述信息'
      }, {
        text: '步骤三',
        desc: '描述信息'
      }, {
        text: '步骤四',
        desc: '描述信息'
      }],
      matchlist: [
        // {
        //   'id': 1,
        //   'title': '首届唐球锦标赛1',
        //   'desc': '这是首届唐球锦标赛',
        //   'tag': '可报名',
        //   'thumb': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=358607504,2119176225&fm=26&gp=0.jpg',
        //   'price': 500,
        //   'thumbLink': "pages/matchDetail/main",
        // },

      ],

      value: '' // 搜索value
    };
  },

  methods: {
    onShow: function onShow() {
      this.show = true;
      console.log('mpvue.data', this);
      // mpvue.setData({show: true})
    },

    /**
     * @desc 搜索回调
     */
    onSearch: function onSearch() {}
  },
  created: function created() {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var _ref, data;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(__WEBPACK_IMPORTED_MODULE_2__utils_request__["a" /* post */])(global.PUB.domain + '/crossList?page=tangball_match');

            case 2:
              _ref = _context.sent;
              data = _ref.data;

              _this.matchlist = data.list;

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(14)))

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export get */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return post; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs__ = __webpack_require__(158);
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


/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);


var queue = [];
function getContext() {
    var pages = getCurrentPages();
    return pages[pages.length - 1];
}
var Dialog = function Dialog(options) {
    options = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, Dialog.currentOptions, options);
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        var context = options.context || getContext();
        var dialog = context.selectComponent(options.selector);
        delete options.selector;
        if (dialog) {
            dialog.set(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({ onCancel: reject, onConfirm: resolve }, options));
            queue.push(dialog);
        } else {
            console.warn('未找到 van-dialog 节点，请确认 selector 及 context 是否正确');
        }
    });
};
Dialog.defaultOptions = {
    show: true,
    title: '',
    message: '',
    zIndex: 100,
    overlay: true,
    className: '',
    asyncClose: false,
    messageAlign: '',
    transition: 'scale',
    selector: '#van-dialog',
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    showConfirmButton: true,
    showCancelButton: false,
    closeOnClickOverlay: false,
    confirmButtonOpenType: ''
};
Dialog.alert = Dialog;
Dialog.confirm = function (options) {
    return Dialog(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({ showCancelButton: true }, options));
};
Dialog.close = function () {
    queue.forEach(function (dialog) {
        dialog.close();
    });
    queue = [];
};
Dialog.stopLoading = function () {
    queue.forEach(function (dialog) {
        dialog.stopLoading();
    });
};
Dialog.setDefaultOptions = function (options) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(Dialog.currentOptions, options);
};
Dialog.resetDefaultOptions = function () {
    Dialog.currentOptions = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, Dialog.defaultOptions);
};
Dialog.resetDefaultOptions();
/* harmony default export */ __webpack_exports__["a"] = (Dialog);

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-wrap"
  }, [_c('van-search', {
    attrs: {
      "value": _vm.value,
      "placeholder": "请输入搜索关键词",
      "use-action-slot": "",
      "bind:search": "onSearch",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', [_c('van-tabs', {
    attrs: {
      "active": _vm.active,
      "bind:change": "onChange",
      "mpcomid": '8'
    }
  }, [_c('van-tab', {
    attrs: {
      "title": "近期",
      "mpcomid": '4'
    }
  }, _vm._l((_vm.matchlist), function(item, i) {
    return _c('van-card', {
      key: i,
      attrs: {
        "tag": item.tag,
        "desc": item.remark,
        "title": item.matchName,
        "thumb": item.thumb,
        "price": '报名费' + item.registrationFee,
        "origin-price": "1000",
        "thumb-link": '/pages/matchDetail/main?id=' + item.P1,
        "mpcomid": '3_' + i
      }
    }, [_c('view', {
      slot: "footer"
    }, [_c('van-button', {
      staticClass: "MR10",
      attrs: {
        "size": "mini",
        "mpcomid": '1_' + i
      }
    }, [_vm._v("去报名")]), _vm._v(" "), _c('van-button', {
      attrs: {
        "size": "mini",
        "mpcomid": '2_' + i
      }
    }, [_vm._v("查看详情")])], 1)])
  })), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "全国",
      "mpcomid": '5'
    }
  }, [_vm._v("全国")]), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "加盟商",
      "mpcomid": '6'
    }
  }, [_vm._v("加盟商")]), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "全部",
      "mpcomid": '7'
    }
  }, [_vm._v("全部")])], 1)], 1), _vm._v(" "), _c('mytabbar', {
    attrs: {
      "mpcomid": '9'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-609c9ef4", esExports)
  }
}

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(100);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ })

},[99]);