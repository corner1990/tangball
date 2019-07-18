require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([14],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(133);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e5e3ffb2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(138);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(134)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e5e3ffb2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e5e3ffb2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\matchDetail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e5e3ffb2", Component.options)
  } else {
    hotAPI.reload("data-v-e5e3ffb2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 134:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_mytabbar_mytabbar__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_common_debug_item_debug_item__ = __webpack_require__(4);
=======
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_card__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_mytabbar_mytabbar__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_common_debug_item_debug_item__ = __webpack_require__(5);
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
>>>>>>> afa2e0580181853dad98763cae87008f7f68b1ce
//
//
//
//
//
//
//
//
//
//
//
//
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
    card: __WEBPACK_IMPORTED_MODULE_2__components_card__["a" /* default */],
    mytabbar: __WEBPACK_IMPORTED_MODULE_3__components_mytabbar_mytabbar__["a" /* default */],
    debug_item: __WEBPACK_IMPORTED_MODULE_4__components_common_debug_item_debug_item__["a" /* default */],
    util: __WEBPACK_IMPORTED_MODULE_5__utils_util__["a" /* default */]
  },
  data: function data() {
    return {
      activeNames: ["1"],

      activeName: null,
      P1: 46,
      activeStep: 0,
      matchStatus: "",
      steps: [{ text: "选拔赛", desc: "", value: 11 }, { text: "晋级赛", desc: "", value: 12 }, { text: "决赛", desc: "", value: 13 }, { text: "淘汰赛", desc: "", value: 21 }, { text: "1/4决赛", desc: "", value: 22 }, { text: "决赛", desc: "", value: 23 }],
      matchlist: [],
      matchlistDoc: {},
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000,

      value: "" // 搜索value
    };
  },


  methods: {
    handleChange: function handleChange(val) {
      console.log(val);
      this.activeName = val.mp.detail;
    },
    onChange: function onChange(event) {
      console.log("event", event);
      console.log("event", event.mp.detail);
      this.activeName = event.mp.detail;
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
  created: function created() {},
  mounted: function mounted() {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var _ref, data, doc;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __WEBPACK_IMPORTED_MODULE_5__utils_util__["a" /* default */].post({
                url: global.PUB.domain + "/crossList?page=tangball_match",
                param: { findJson: { P1: _this.P1 } }
              });

            case 2:
              _ref = _context.sent;
              data = _ref.data;

              _this.matchlist = data.list[0];

              _context.next = 7;
              return __WEBPACK_IMPORTED_MODULE_5__utils_util__["a" /* default */].post({
                url: global.PUB.domain + "/crossDetail?page=tangball_match",
                param: { id: _this.P1 }
              });

            case 7:
              doc = _context.sent;

              _this.matchlistDoc = doc.data.doc;
              if (_this.matchlist.matchProgress.smallProgress) {
                _this.steps.forEach(function (item, index) {
                  if (_this.matchlist.matchProgress.smallProgress == item.value) {
                    _this.activeStep = index; //当前选中状态
                  }
                });
              }

              if (!(_this.matchlist.matchStatus == 1)) {
                _context.next = 14;
                break;
              }

              return _context.abrupt("return", _this.matchStatus = "未开始");

            case 14:
              if (!(_this.matchlist.matchStatus == 2)) {
                _context.next = 18;
                break;
              }

              return _context.abrupt("return", _this.matchStatus = "进行中");

            case 18:
              return _context.abrupt("return", _this.matchStatus = "已结束");

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(8)))

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-wrap"
  }, [_c('debug_item', {
    attrs: {
      "path": "matchlist",
      "text": "赛事列表",
      "eventid": '0',
      "mpcomid": '0'
    },
    model: {
      value: (_vm.matchlist),
      callback: function($$v) {
        _vm.matchlist = $$v
      },
      expression: "matchlist"
    }
  }), _vm._v(" "), _c('debug_item', {
    attrs: {
      "path": "matchlist",
      "text": "赛事列表详情",
      "eventid": '1',
      "mpcomid": '1'
    },
    model: {
      value: (_vm.matchlistDoc),
      callback: function($$v) {
        _vm.matchlistDoc = $$v
      },
      expression: "matchlistDoc"
    }
  }), _vm._v(" "), _c('div', {}, [_c('img', {
    attrs: {
      "src": _vm.matchlist.album
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "FS24 TAC LH36"
  }, [_vm._v(_vm._s(_vm.matchlist.matchName))]), _vm._v(" "), _c('van-cell', {
    staticClass: "browsing",
    attrs: {
      "mpcomid": '4'
    }
  }, [(_vm.matchStatus) ? _c('van-button', {
    attrs: {
      "round": "",
      "plain": "",
      "type": "primary",
      "size": "mini",
      "mpcomid": '2'
    }
  }, [_vm._v(_vm._s(_vm.matchStatus))]) : _vm._e(), _vm._v(" "), _c('van-button', {
    attrs: {
      "round": "",
      "plain": "",
      "type": "warning",
      "size": "mini",
      "mpcomid": '3'
    }
  }, [_vm._v(_vm._s(_vm.matchlist.matchName))])], 1), _vm._v(" "), _c('van-steps', {
    attrs: {
      "steps": _vm.steps,
      "active": _vm.activeStep,
      "active-color": "#f44",
      "mpcomid": '5'
    }
  }), _vm._v(" "), _c('van-cell-group', {
    attrs: {
      "title": "赛事信息",
      "mpcomid": '13'
    }
  }, [_c('van-cell', {
    attrs: {
      "title": "赛事时间",
      "title-width": "100px",
      "value": _vm.matchlist.matchTime,
      "mpcomid": '6'
    }
  }), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "距报名截止时间",
      "value": "5天6小时26分",
      "mpcomid": '7'
    }
  }), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "举办地点",
      "value": "深圳南山XXXXX",
      "mpcomid": '8'
    }
  }), _vm._v(" "), _c('van-collapse', {
    attrs: {
      "eventid": '3',
      "mpcomid": '10'
    },
    on: {
      "change": _vm.handleChange
    },
    model: {
      value: (_vm.activeName),
      callback: function($$v) {
        _vm.activeName = $$v
      },
      expression: "activeName"
    }
  }, [_c('van-collapse-item', {
    attrs: {
      "title": "举办地点",
      "name": "1",
      "mpcomid": '9'
    }
  }, [_c('div', {
    staticClass: "valueNeed"
  }, _vm._l((_vm.matchlistDoc.cityVenueList), function(item, index) {
    return _c('span', {
      key: index
    }, [_vm._v("\n            " + _vm._s(item.cityName) + "--" + _vm._s(item.venueName) + "\n            "), (_vm.isEdit) ? _c('i', {
      staticClass: "el-icon-remove-outline",
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.nationalMatchDelete(index)
        }
      }
    }) : _vm._e()], 1)
  }))])], 1), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "报名费",
      "value": _vm.matchlist.registrationFee,
      "mpcomid": '11'
    }
  }), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "已报名人数",
      "value": _vm.matchlist.registeredPersons,
      "mpcomid": '12'
    }
  })], 1), _vm._v(" "), _c('van-cell-group', {
    attrs: {
      "title": "分组2",
      "mpcomid": '15'
    }
  }, [_c('van-cell', {
    attrs: {
      "title": "单元格",
      "value": "内容",
      "mpcomid": '14'
    }
  })], 1), _vm._v(" "), _c('van-button', {
    attrs: {
      "size": "large",
      "square": "",
      "type": "primary",
      "mpcomid": '16'
    }
  }, [_vm._v("立即报名")]), _vm._v(" "), _c('mytabbar', {
    attrs: {
      "mpcomid": '17'
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
     require("vue-hot-reload-api").rerender("data-v-e5e3ffb2", esExports)
  }
}

/***/ })

},[132]);