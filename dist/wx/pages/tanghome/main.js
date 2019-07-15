require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([7],{

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(196);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5fed356c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(201);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(197)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5fed356c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\tanghome\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5fed356c", Component.options)
  } else {
    hotAPI.reload("data-v-5fed356c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 197:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_mytabbar_mytabbar__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_request__ = __webpack_require__(45);


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
    mytabbar: __WEBPACK_IMPORTED_MODULE_2__components_mytabbar_mytabbar__["a" /* default */]
  },
  data: {
    active: 1,
    imgUrls: ['https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640', 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640', 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000

  },
  methods: {
    /**
     * @desc tab切换回调
     */
    tabChange: function tabChange(url) {
      console.log(url);
      wx.switchTab({
        url: url
      });
    },

    /**
     * @desc 发起支付
     */
    sendPay: function sendPay() {
      console.log('发起支付');
      var self = this;
      wx.getStorage({
        key: 'ids',
        success: function success(res) {
          var ids = JSON.parse(res.data);
          self.pay(ids.openid);
        }
      });
    },
    pay: function pay(openId) {
      var data = {
        "total_fee": 0.01,
        openId: openId,
        "goodsNameAll": "abc"
      };
      var self = this;
      wx.request({
        url: 'https://e6234kn.hn3.mofasuidao.cn/paicheng/getCode',
        data: data,
        method: 'post',
        success: function success(res) {
          var statusCode = res.statusCode,
              data = res.data;

          if (statusCode === 200) {
            var chrildData = data.data;

            self.funlyPay(JSON.parse(chrildData));
          }
        }
      });
    },
    funlyPay: function funlyPay(data) {
      var msg = data.msg,
          status = data.status,
          timeStamp = data.timestamp,
          args = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(data, ['msg', 'status', 'timestamp']);

      if (status == 100) {
        wx.requestPayment(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, args, {
          signType: 'MD5',
          timeStamp: timeStamp,
          success: function success(res) {
            console.log('ok', res);
          },
          fail: function fail(err) {
            console.log('err', err);
          }
        }));
      }
      console.log('data', data);
    }
  },

  onShow: function onShow() {
    // `this` 指向 vm 实例
    // console.log('234')
  }
});

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('swiper', {
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
  })), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('h3', [_vm._v("合作场馆")]), _vm._v(" "), _c('div', [_c('van-panel', {
    attrs: {
      "title": "标题",
      "desc": "描述信息",
      "status": "状态",
      "mpcomid": '1'
    }
  })], 1)], 1), _vm._v(" "), _c('van-button', {
    attrs: {
      "type": "danger",
      "eventid": '0',
      "mpcomid": '2'
    },
    on: {
      "click": _vm.sendPay
    }
  }, [_vm._v("支付")]), _vm._v(" "), _c('mytabbar', {
    attrs: {
      "mpcomid": '3'
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
     require("vue-hot-reload-api").rerender("data-v-5fed356c", esExports)
  }
}

/***/ })

},[195]);