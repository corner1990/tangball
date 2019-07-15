require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(216);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a988065e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(219);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(217)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a988065e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a988065e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\venueDetail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a988065e", Component.options)
  } else {
    hotAPI.reload("data-v-a988065e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 217:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_mytabbar_mytabbar__ = __webpack_require__(2);
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
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */],
    mytabbar: __WEBPACK_IMPORTED_MODULE_1__components_mytabbar_mytabbar__["a" /* default */]

  },
  data: function data() {
    return {
      activeStep: 0,
      active: 0,
      imgUrls: ["https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640", "https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640", "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640"],

      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000,

      value: "" // 搜索value
    };
  },


  methods: {
    onChange: function onChange(event) {
      wx.showToast({
        title: "\u5207\u6362\u5230\u6807\u7B7E " + (event.detail.index + 1),
        icon: "none"
      });
    },
    onShow: function onShow() {
      this.show = true;
      console.log("mpvue.data", this);
      // mpvue.setData({show: true})
    },

    /**
     * @desc 搜索回调
     */
    onSearch: function onSearch() {},

    /**
     * @desc 赛事切换回调
     */
    tabChange: function tabChange(url) {
      console.log(url);
      wx.switchTab({
        url: url
      });
    }
  },
  created: function created() {}
});

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-wrap"
  }, [_c('div', {
    staticClass: "FS24 TAC LH36"
  }, [_vm._v("深圳XXX场馆")]), _vm._v(" "), _c('swiper', {
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
        "width": "350",
        "height": "150"
      }
    })])], 1)
  })), _vm._v(" "), _c('div', [_c('van-tabs', {
    attrs: {
      "active": _vm.active,
      "bind:change": "onChange",
      "mpcomid": '5'
    }
  }, [_c('van-tab', {
    attrs: {
      "title": "场馆介绍",
      "mpcomid": '2'
    }
  }, [_c('van-panel', {
    attrs: {
      "title": "深圳XXX场馆",
      "desc": "描述信息",
      "status": "营业中",
      "mpcomid": '1'
    }
  }, [_c('view', [_vm._v("内容")])])], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "xxx",
      "mpcomid": '3'
    }
  }, [_vm._v("内容 2")]), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "地理位置",
      "mpcomid": '4'
    }
  })], 1)], 1), _vm._v(" "), _c('mytabbar', {
    attrs: {
      "mpcomid": '6'
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
     require("vue-hot-reload-api").rerender("data-v-a988065e", esExports)
  }
}

/***/ })

},[215]);