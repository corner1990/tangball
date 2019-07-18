require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(234);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a988065e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(241);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(235)
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

/***/ 235:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_mytabbar_mytabbar__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_common_debug_item_debug_item__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_map_Map__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_util__ = __webpack_require__(9);


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
    mytabbar: __WEBPACK_IMPORTED_MODULE_2__components_mytabbar_mytabbar__["a" /* default */],
    debug_item: __WEBPACK_IMPORTED_MODULE_3__components_common_debug_item_debug_item__["a" /* default */],
    Map: __WEBPACK_IMPORTED_MODULE_4__components_map_Map__["a" /* default */]
  },
  data: function data() {
    return {
      venueDoc: null,
      pageName: "场馆详情",
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
    },

    /**
    * ajax获取当前场馆数据函数
      */
    getDoc: function getDoc() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _ref, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("getDoc");
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_5__utils_util__["a" /* default */].post({
                  url: global.PUB.domain + "/crossDetail?page=tangball_venue",
                  param: {
                    id: 20 //每场馆id
                  }
                });

              case 3:
                _ref = _context.sent;
                data = _ref.data;

                _this.venueDoc = data.Doc;
                console.log("getDoc-2");

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  },
  created: function created() {},
  mounted: function mounted() {
    console.log("mounted123");
    this.getDoc(); //调用：{ajax获取当前场馆数据函数}
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(8)))

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Map_vue__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_27844fe7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_Map_vue__ = __webpack_require__(240);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(238)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-27844fe7"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Map_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_27844fe7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_Map_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\map\\Map.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Map.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-27844fe7", Component.options)
  } else {
    hotAPI.reload("data-v-27844fe7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 238:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_mytabbar_mytabbar__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_debug_item_debug_item__ = __webpack_require__(4);
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
    mytabbar: __WEBPACK_IMPORTED_MODULE_0__components_mytabbar_mytabbar__["a" /* default */],
    debug_item: __WEBPACK_IMPORTED_MODULE_1__components_common_debug_item_debug_item__["a" /* default */]
  },
  data: function data() {
    return {
      latitude: 23.099994,
      longitude: 113.32452,
      markers: [{
        id: 1,
        latitude: 23.099994,
        longitude: 113.32452,
        name: "T.I.T 创意园",
        iconPath: "/static/images/location.png"
      }],
      covers: [{
        latitude: 23.099994,
        longitude: 113.32452,
        iconPath: "/static/images/location.png"
      }, {
        latitude: 23.099994,
        longitude: 113.30452,
        iconPath: "/static/images/location.png"
      }]
    };
  },


  method: {
    onReady: function onReady(e) {
      this.mapCtx = wx.createMapContext("myMap");
    },
    getCenterLocation: function getCenterLocation() {
      this.mapCtx.getCenterLocation({
        success: function success(res) {
          console.log(res.longitude);
          console.log(res.latitude);
        }
      });
    },
    moveToLocation: function moveToLocation() {
      this.mapCtx.moveToLocation();
    },
    translateMarker: function translateMarker() {
      this.mapCtx.translateMarker({
        markerId: 1,
        autoRotate: true,
        duration: 1000,
        destination: {
          latitude: 23.10229,
          longitude: 113.3345211
        },
        animationEnd: function animationEnd() {
          console.log("animation end");
        }
      });
    },
    includePoints: function includePoints() {
      this.mapCtx.includePoints({
        padding: [10],
        points: [{
          latitude: 23.10229,
          longitude: 113.3345211
        }, {
          latitude: 23.00229,
          longitude: 113.3345211
        }]
      });
    }
  },
  created: function created() {}
});

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-wrap"
  }, [_c('div', {
    staticClass: "page-body"
  }, [_c('div', {
    staticClass: "page-section page-section-gap"
  }, [_c('map', {
    staticStyle: {
      "width": "100%",
      "height": "300px"
    },
    attrs: {
      "id": "myMap",
      "latitude": _vm.latitude,
      "longitude": _vm.longitude,
      "markers": _vm.markers,
      "covers": _vm.covers
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "btn-area"
  }, [_c('button', {
    staticClass: "page-body-button",
    attrs: {
      "bindtap": "getCenterLocation",
      "type": "primary"
    }
  }, [_vm._v("获取位置")]), _vm._v(" "), _c('button', {
    staticClass: "page-body-button",
    attrs: {
      "bindtap": "moveToLocation",
      "type": "primary"
    }
  }, [_vm._v("移动位置")]), _vm._v(" "), _c('button', {
    staticClass: "page-body-button",
    attrs: {
      "bindtap": "translateMarker",
      "type": "primary"
    }
  }, [_vm._v("移动标注")]), _vm._v(" "), _c('button', {
    staticClass: "page-body-button",
    attrs: {
      "bindtap": "includePoints",
      "type": "primary"
    }
  }, [_vm._v("缩放视野展示所有经纬度")])], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-27844fe7", esExports)
  }
}

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-wrap"
  }, [_c('debug_item', {
    attrs: {
      "path": "pageName",
      "text": "场馆数据",
      "eventid": '0',
      "mpcomid": '0'
    },
    model: {
      value: (_vm.venueDoc),
      callback: function($$v) {
        _vm.venueDoc = $$v
      },
      expression: "venueDoc"
    }
  }), _vm._v(" "), _c('div', {
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
        "mpcomid": '1_' + index
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
      "mpcomid": '7'
    }
  }, [_c('van-tab', {
    attrs: {
      "title": "场馆介绍1",
      "mpcomid": '4'
    }
  }, [_c('van-panel', {
    attrs: {
      "title": "深圳XXX场馆",
      "desc": "描述信息",
      "status": "营业中",
      "mpcomid": '3'
    }
  }, [_c('view', [_c('Map', {
    attrs: {
      "mpcomid": '2'
    }
  })], 1)])], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "xxx",
      "mpcomid": '5'
    }
  }, [_vm._v("内容 2")]), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "地理位置",
      "mpcomid": '6'
    }
  })], 1)], 1), _vm._v(" "), _c('mytabbar', {
    attrs: {
      "mpcomid": '8'
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

},[233]);