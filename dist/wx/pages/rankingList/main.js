require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(183);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_42716a25_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(194);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(184)
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

/***/ 184:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_mytabbar_mytabbar__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_common_debug_item_debug_item__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rankingListComponent__ = __webpack_require__(186);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    rankingListcomponent: __WEBPACK_IMPORTED_MODULE_4__rankingListComponent__["a" /* default */]
  },
  data: function data() {
    return {
      pageName: "唐球达人",
      ranking: "排名",
      menname: "男子名字",
      womenname: "女子名字",
      numberentries: "参赛次数",
      achievements: "参数成绩",
      integral: "积分",
      showTimelist: false, //是否显示次数列表
      showchievementlist: false, //是否显示成绩列表
      showintegrallist: false, //是否显示积分列表
      matchTimeRanklist: [], //比赛次数排行列表
      achievementRanklist: [] //比赛成绩排行列表
    };
  },

  methods: {
    onShow: function onShow() {
      console.log("rankingList-mpvue.data", this);
      // mpvue.setData({show: true})
    },
    matchTime: function matchTime() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _ref, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                /**
                 * ajax请求参赛次数排行榜
                 * 请求会员表tangball_member
                 */
                _this.showTimelist = true;
                _this.showchievementlist = false;
                _this.showintegrallist = false;
                _context.next = 5;
                return __WEBPACK_IMPORTED_MODULE_5__utils_util__["a" /* default */].post({
                  url: global.PUB.domain + "/crossList?page=tangball_member",
                  param: {
                    pageSize: 50, //每页50条数据
                    sortJson: { entries: 1, integral: 1 }, //按参赛次数降序排序
                    selectJson: { P1: 1, entries: 1, name: 1, integral: 1 //指定返回哪些字段
                    } }
                });

              case 5:
                _ref = _context.sent;
                data = _ref.data;

                _this.matchTimeRanklist = data.list;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    matchAchievement: function matchAchievement() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var _ref2, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                /**
                 * ajax请求参赛成绩排行榜
                 * 请求会员表tangball_achievement
                 */
                _this2.showchievementlist = true;
                _this2.showTimelist = false;
                _this2.showintegrallist = false;
                _context2.next = 5;
                return __WEBPACK_IMPORTED_MODULE_5__utils_util__["a" /* default */].post({
                  url: global.PUB.domain + "/crossList?page=tangball_achievement",
                  param: {
                    pageSize: 50, //每页50条数据
                    sortJson: { matchScore: -1 }, //按参赛成绩杆数降序排序
                    selectJson: { P1: 1, ranking: 1, matchScore: 1, participantsName: 1 //指定返回哪些字段
                    } }
                });

              case 5:
                _ref2 = _context2.sent;
                data = _ref2.data;

                _this2.achievementRanklist = data.list;

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    matchIntegral: function matchIntegral() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var _ref3, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                /**
                 * ajax请求参赛积分排行榜
                 * 请求会员表tangball_member
                 */
                _this3.showintegrallist = true;
                _this3.showTimelist = false;
                _this3.showchievementlist = false;
                _context3.next = 5;
                return __WEBPACK_IMPORTED_MODULE_5__utils_util__["a" /* default */].post({
                  url: global.PUB.domain + "/crossList?page=tangball_member",
                  param: {
                    pageSize: 50, //每页50条数据
                    sortJson: { entries: 1, integral: 1 }, //按参赛次数降序排序
                    selectJson: { P1: 1, entries: 1, name: 1, integral: 1 //指定返回哪些字段
                    } }
                });

              case 5:
                _ref3 = _context3.sent;
                data = _ref3.data;

                _this3.matchTimeRanklist = data.list;

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    }
  },
  created: function created() {
    var _this4 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              console.log("唐球达人-created");

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, _this4);
    }))();
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(8)))

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_rankingListComponent_vue__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4bb28a66_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_rankingListComponent_vue__ = __webpack_require__(193);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(187)
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

/***/ 187:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);

//
//
//
//
//
//
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
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({
  components: {},
  props: ["ranking", "rankingname", "rankingachievement"],
  data: function data() {
    return {
      cfList: {
        //默认排序参数
        sortJsonDefault: {
          "item.entries": 1
        }
      }
    };
  }
}, "components", {}));

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "ranking-content"
  }, [_c('div', [_c('a', [_vm._v(_vm._s(_vm.ranking))])]), _vm._v(" "), _c('div', [_c('a', [_vm._v(_vm._s(_vm.rankingname))])]), _vm._v(" "), _c('div', [_c('a', [_vm._v(_vm._s(_vm.rankingachievement))])])])])
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

/***/ 194:
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
  }), _vm._v(" "), _c('debug_item', {
    attrs: {
      "path": "matchTimeRanklist",
      "text": "比赛次数排行列表",
      "eventid": '1',
      "mpcomid": '1'
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
      "eventid": '2',
      "mpcomid": '2'
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
      "eventid": '3',
      "mpcomid": '3'
    },
    on: {
      "click": _vm.matchTime
    }
  }, [_vm._v("参赛次数")]), _vm._v(" "), _c('van-button', {
    attrs: {
      "plain": "",
      "type": "primary",
      "size": "small",
      "eventid": '4',
      "mpcomid": '4'
    },
    on: {
      "click": _vm.matchAchievement
    }
  }, [_vm._v("成绩排名")]), _vm._v(" "), _c('van-button', {
    attrs: {
      "plain": "",
      "type": "primary",
      "size": "small",
      "mpcomid": '5'
    }
  }, [_vm._v("鸟王排名")]), _vm._v(" "), _c('van-button', {
    attrs: {
      "plain": "",
      "type": "primary",
      "size": "small",
      "eventid": '5',
      "mpcomid": '6'
    },
    on: {
      "click": _vm.matchIntegral
    }
  }, [_vm._v("积分排名")])], 1), _vm._v(" "), _c('van-tabs', {
    attrs: {
      "active": _vm.active,
      "mpcomid": '15'
    }
  }, [_c('van-tab', {
    attrs: {
      "title": "男子",
      "mpcomid": '10'
    }
  }, [(_vm.showchievementlist) ? _c('div', [_c('div', {
    staticClass: "ranking-title"
  }, [_c('div', [_vm._v(_vm._s(_vm.ranking))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.menname))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.achievements))])]), _vm._v(" "), _vm._l((_vm.achievementRanklist), function(item, index) {
    return _c('rankingListcomponent', {
      key: item,
      attrs: {
        "ranking": 1,
        "rankingname": item.participantsName,
        "rankingachievement": item.matchScore,
        "mpcomid": '7_' + index
      }
    })
  })], 2) : _vm._e(), _vm._v(" "), (_vm.showTimelist) ? _c('div', [_c('div', {
    staticClass: "ranking-title"
  }, [_c('div', [_vm._v(_vm._s(_vm.ranking))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.menname))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.numberentries))])]), _vm._v(" "), _vm._l((_vm.matchTimeRanklist), function(item, index) {
    return _c('rankingListcomponent', {
      key: item,
      attrs: {
        "ranking": 1,
        "rankingname": item.name,
        "rankingachievement": item.entries,
        "mpcomid": '8_' + index
      }
    })
  })], 2) : _vm._e(), _vm._v(" "), (_vm.showintegrallist) ? _c('div', [_c('div', {
    staticClass: "ranking-title"
  }, [_c('div', [_vm._v(_vm._s(_vm.ranking))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.menname))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.integral))])]), _vm._v(" "), _vm._l((_vm.achievementRanklist), function(item, index) {
    return _c('rankingListcomponent', {
      key: item,
      attrs: {
        "ranking": 1,
        "rankingname": item.participantsName,
        "rankingachievement": item.integral,
        "mpcomid": '9_' + index
      }
    })
  })], 2) : _vm._e()]), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "女子",
      "mpcomid": '14'
    }
  }, [(_vm.showchievementlist) ? _c('div', [_c('div', {
    staticClass: "ranking-title"
  }, [_c('div', [_vm._v(_vm._s(_vm.ranking))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.womenname))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.achievements))])]), _vm._v(" "), _vm._l((_vm.achievementRanklist), function(item, index) {
    return _c('rankingListcomponent', {
      key: item,
      attrs: {
        "ranking": 1,
        "rankingname": item.participantsName,
        "rankingachievement": item.matchScore,
        "mpcomid": '11_' + index
      }
    })
  })], 2) : _vm._e(), _vm._v(" "), (_vm.showTimelist) ? _c('div', [_c('div', {
    staticClass: "ranking-title"
  }, [_c('div', [_vm._v(_vm._s(_vm.ranking))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.womenname))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.numberentries))])]), _vm._v(" "), _vm._l((_vm.matchTimeRanklist), function(item, index) {
    return _c('rankingListcomponent', {
      key: item,
      attrs: {
        "ranking": 1,
        "rankingname": item.name,
        "rankingachievement": item.entries,
        "mpcomid": '12_' + index
      }
    })
  })], 2) : _vm._e(), _vm._v(" "), (_vm.showintegrallist) ? _c('div', [_c('div', {
    staticClass: "ranking-title"
  }, [_c('div', [_vm._v(_vm._s(_vm.ranking))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.womenname))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.integral))])]), _vm._v(" "), _vm._l((_vm.achievementRanklist), function(item, index) {
    return _c('rankingListcomponent', {
      key: item,
      attrs: {
        "ranking": 1,
        "rankingname": item.participantsName,
        "rankingachievement": item.integral,
        "mpcomid": '13_' + index
      }
    })
  })], 2) : _vm._e()])], 1), _vm._v(" "), _c('mytabbar', {
    attrs: {
      "mpcomid": '16'
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

},[182]);