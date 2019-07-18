require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(188);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_42716a25_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(199);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(189)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-42716a25"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_42716a25_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\rankingList\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42716a25", Component.options)
  } else {
    hotAPI.reload("data-v-42716a25", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 189:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_mytabbar_mytabbar__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_debug_item_debug_item__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rankingListComponent__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_util__ = __webpack_require__(9);
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
    debug_item: __WEBPACK_IMPORTED_MODULE_1__components_common_debug_item_debug_item__["a" /* default */],
    rankingListcomponent: __WEBPACK_IMPORTED_MODULE_2__rankingListComponent__["a" /* default */]
  },
  data: function data() {
    return {
      pageName: "唐球达人"
    };
  }
});

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_rankingListComponent_vue__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4bb28a66_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_rankingListComponent_vue__ = __webpack_require__(198);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(192)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4bb28a66"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_rankingListComponent_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4bb28a66_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_rankingListComponent_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\rankingList\\rankingListComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] rankingListComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4bb28a66", Component.options)
  } else {
    hotAPI.reload("data-v-4bb28a66", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 192:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_common_debug_item_debug_item__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_util__ = __webpack_require__(9);




var _components$data$comp;

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

/* eslint-disable */


/* harmony default export */ __webpack_exports__["a"] = (_components$data$comp = {
  components: {
    debug_item: __WEBPACK_IMPORTED_MODULE_3__components_common_debug_item_debug_item__["a" /* default */]
  },
  data: function data() {
    return {
      cfList: {
        //默认排序参数
        sortJsonDefault: {
          "item.entries": 1
        }
      },
      matchTimeRanklist: [], //比赛次数排行列表
      achievementRanklist: [] //比赛成绩排行列表
    };
  }
}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components$data$comp, "components", {}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components$data$comp, "methods", {
  onShow: function onShow() {
    console.log("rankingList-mpvue.data", this);
    // mpvue.setData({show: true})
  },
  matchTime: function matchTime() {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
      var _ref, data;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __WEBPACK_IMPORTED_MODULE_4__utils_util__["a" /* default */].post({
                url: global.PUB.domain + "/crossList?page=tangball_member",
                param: {
                  pageSize: 50, //每页50条数据
                  sortJson: { entries: 1 }, //按参赛次数降序排序
                  selectJson: { P1: 1, entries: 1, name: 1 //指定返回哪些字段
                  } }
              });

            case 2:
              _ref = _context.sent;
              data = _ref.data;

              _this.matchTimeRanklist = data.list;
              console.log(1111);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  matchAchievement: function matchAchievement() {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
      var _ref2, data;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return __WEBPACK_IMPORTED_MODULE_4__utils_util__["a" /* default */].post({
                url: global.PUB.domain + "/crossList?page=tangball_achievement",
                param: {
                  pageSize: 50, //每页50条数据
                  sortJson: { matchScore: -1 }, //按参赛成绩杆数降序排序
                  selectJson: { P1: 1, ranking: 1, matchScore: 1, participantsName: 1 //指定返回哪些字段
                  } }
              });

            case 2:
              _ref2 = _context2.sent;
              data = _ref2.data;

              _this2.achievementRanklist = data.list;

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  }
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components$data$comp, "created", function created() {
  var _this3 = this;

  return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log("唐球达人-created");

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, _this3);
  }))();
}), _components$data$comp);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(8)))

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('debug_item', {
    attrs: {
      "path": "matchTimeRanklist",
      "text": "比赛次数排行列表",
      "eventid": '0',
      "mpcomid": '0'
    },
    model: {
      value: (_vm.matchTimeRanklist),
      callback: function($$v) {
        _vm.matchTimeRanklist = $$v
      },
      expression: "matchTimeRanklist"
    }
  }), _vm._v(" "), _c('debug_item', {
    attrs: {
      "path": "achievementRanklist",
      "text": "比赛成绩排行列表",
      "eventid": '1',
      "mpcomid": '1'
    },
    model: {
      value: (_vm.achievementRanklist),
      callback: function($$v) {
        _vm.achievementRanklist = $$v
      },
      expression: "achievementRanklist"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "button-center"
  }, [_c('van-button', {
    attrs: {
      "plain": "",
      "type": "primary",
      "size": "small",
      "eventid": '2',
      "mpcomid": '2'
    },
    on: {
      "click": _vm.matchTime
    }
  }, [_vm._v("参赛次数")]), _vm._v(" "), _c('van-button', {
    attrs: {
      "plain": "",
      "type": "primary",
      "size": "small",
      "eventid": '3',
      "mpcomid": '3'
    },
    on: {
      "click": _vm.matchAchievement
    }
  }, [_vm._v("成绩排名")]), _vm._v(" "), _c('van-button', {
    attrs: {
      "plain": "",
      "type": "primary",
      "size": "small",
      "mpcomid": '4'
    }
  }, [_vm._v("鸟王排名")]), _vm._v(" "), _c('van-button', {
    attrs: {
      "plain": "",
      "type": "primary",
      "size": "small",
      "mpcomid": '5'
    }
  }, [_vm._v("积分排名")])], 1), _vm._v(" "), _c('van-tabs', {
    attrs: {
      "active": _vm.active,
      "mpcomid": '8'
    }
  }, [_c('van-tab', {
    attrs: {
      "title": "男子",
      "mpcomid": '6'
    }
  }, [_c('div', {
    staticClass: "ranking-title"
  }, [_c('div', [_vm._v("排名")]), _vm._v(" "), _c('div', [_vm._v("男子选手")]), _vm._v(" "), _c('div', [_vm._v("参数成绩")])]), _vm._v(" "), _vm._l((_vm.achievementRanklist), function(item, index) {
    return _c('div', {
      key: item,
      staticClass: "ranking-content"
    }, [_c('div', [_c('a', [_vm._v("1")])]), _vm._v(" "), _c('div', [_c('a', [_vm._v(_vm._s(item.participantsName))])]), _vm._v(" "), _c('div', [_c('a', [_vm._v(_vm._s(item.matchScore))])])])
  }), _vm._v(" "), _c('div', {
    staticClass: "ranking-title"
  }, [_c('div', [_vm._v("排名")]), _vm._v(" "), _c('div', [_vm._v("男子选手")]), _vm._v(" "), _c('div', [_vm._v("参赛次数")])]), _vm._v(" "), _vm._l((_vm.matchTimeRanklist), function(item, index) {
    return _c('div', {
      key: item,
      staticClass: "ranking-content"
    }, [_c('div', [_c('a', [_vm._v("1")])]), _vm._v(" "), _c('div', [_c('a', [_vm._v(_vm._s(item.name))])]), _vm._v(" "), _c('div', [_c('a', [_vm._v(_vm._s(item.entries))])])])
  })], 2), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "女子",
      "mpcomid": '7'
    }
  }, [_c('div', {
    staticClass: "ranking-title"
  }, [_c('div', [_vm._v("排名")]), _vm._v(" "), _c('div', [_vm._v("女子选手")]), _vm._v(" "), _c('div', [_vm._v("参数成绩")])]), _vm._v(" "), _c('div', {
    staticClass: "ranking-title"
  }, [_c('div', [_vm._v("排名")]), _vm._v(" "), _c('div', [_vm._v("女子选手")]), _vm._v(" "), _c('div', [_vm._v("参赛次数")])])])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4bb28a66", esExports)
  }
}

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-wrap"
  }, [_c('debug_item', {
    attrs: {
      "path": "pageName",
      "text": "页面名称",
      "eventid": '0',
      "mpcomid": '0'
    },
    model: {
      value: (_vm.pageName),
      callback: function($$v) {
        _vm.pageName = $$v
      },
      expression: "pageName"
    }
  }), _vm._v(" "), _c('rankingListcomponent', {
    attrs: {
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('mytabbar', {
    attrs: {
      "mpcomid": '2'
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
     require("vue-hot-reload-api").rerender("data-v-42716a25", esExports)
  }
}

/***/ })

},[187]);