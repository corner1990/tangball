require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([13],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(137);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_311a7da2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(140);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(138)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-311a7da2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_311a7da2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/matchEroll/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-311a7da2", Component.options)
  } else {
    hotAPI.reload("data-v-311a7da2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 138:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_mytabbar_mytabbar__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_debug_item_debug_item__ = __webpack_require__(7);
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

/* eslint-disable */



/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    mytabbar: __WEBPACK_IMPORTED_MODULE_0__components_mytabbar_mytabbar__["a" /* default */], debug_item: __WEBPACK_IMPORTED_MODULE_1__components_common_debug_item_debug_item__["a" /* default */]
  },
  data: function data() {
    return {
      pageName: "比赛报名操作",
      imgUrls: ['https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640', 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640', 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'],
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000
    };
  },


  methods: {},
  created: function created() {}
});

/***/ }),

/***/ 140:
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
        "height": "150"
      }
    })])], 1)
  })), _vm._v(" "), _c('div', {
    staticClass: "event-info"
  }, [_c('h3', [_vm._v("赛事名称")]), _vm._v(" "), _c('p', [_vm._v("比赛时间：2019-09-01")]), _vm._v(" "), _c('p', [_vm._v("比赛地点： 22223423424")])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-wrap"
  }, [_c('form', [_c('van-row', {
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('van-col', {
    staticClass: "title",
    attrs: {
      "span": "8",
      "mpcomid": '1'
    }
  }, [_vm._v("参赛人姓名")]), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "16",
      "mpcomid": '2'
    }
  }, [_c('input', {
    attrs: {
      "placeholder": "参赛人姓名"
    }
  })])], 1), _vm._v(" "), _c('van-row', {
    attrs: {
      "mpcomid": '8'
    }
  }, [_c('van-col', {
    staticClass: "title",
    attrs: {
      "span": "8",
      "mpcomid": '4'
    }
  }, [_vm._v("手机号码")]), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "10",
      "mpcomid": '5'
    }
  }, [_c('input', {
    attrs: {
      "placeholder": "手机号码"
    }
  })]), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "6",
      "mpcomid": '7'
    }
  }, [_c('van-button', {
    attrs: {
      "plain": "",
      "type": "primary",
      "size": "small",
      "mpcomid": '6'
    }
  }, [_vm._v("获取验证码")])], 1)], 1), _vm._v(" "), _c('van-row', {
    attrs: {
      "mpcomid": '11'
    }
  }, [_c('van-col', {
    staticClass: "title",
    attrs: {
      "span": "8",
      "mpcomid": '9'
    }
  }, [_vm._v("报名费")]), _vm._v(" "), _c('van-col', {
    staticClass: "price",
    attrs: {
      "span": "16",
      "mpcomid": '10'
    }
  })], 1), _vm._v(" "), _c('van-row', {
    staticClass: "button-wrap",
    attrs: {
      "mpcomid": '14'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "24",
      "mpcomid": '13'
    }
  }, [_c('van-button', {
    attrs: {
      "type": "info",
      "block": "",
      "mpcomid": '12'
    }
  }, [_vm._v("立刻报名")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('mytabbar', {
    attrs: {
      "mpcomid": '15'
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
     require("vue-hot-reload-api").rerender("data-v-311a7da2", esExports)
  }
}

/***/ })

},[136]);