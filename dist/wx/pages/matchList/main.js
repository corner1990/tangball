require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(151);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_609c9ef4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(166);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(152)
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

/***/ 152:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__matchListComponent__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_card__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_mytabbar_mytabbar__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_vant_dialog_dialog__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_common_debug_item_debug_item__ = __webpack_require__(4);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    card: __WEBPACK_IMPORTED_MODULE_4__components_card__["a" /* default */],
    mytabbar: __WEBPACK_IMPORTED_MODULE_5__components_mytabbar_mytabbar__["a" /* default */],
    Dialog: __WEBPACK_IMPORTED_MODULE_6__static_vant_dialog_dialog__["a" /* default */],
    matchListcomponent: __WEBPACK_IMPORTED_MODULE_2__matchListComponent__["a" /* default */],
    debug_item: __WEBPACK_IMPORTED_MODULE_7__components_common_debug_item_debug_item__["a" /* default */]
  },
  data: function data() {
    return {
      matchType: null,
      activeStep: 0,
      steps: [{
        text: "步骤一",
        desc: "描述信息"
      }, {
        text: "步骤二",
        desc: "描述信息"
      }, {
        text: "步骤三",
        desc: "描述信息"
      }, {
        text: "步骤四",
        desc: "描述信息"
      }],
      matchlist: [],
      tabList: [{ category: "近期" }, { category: "全国" }, { category: "加盟商" }, { category: "全部" }],

      value: "999" // 搜索value
    };
  },

  methods: {
    //----------- 请求接口数据的函数-------------------
    getlist: function getlist() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _ref, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_3__utils_util__["a" /* default */].post({
                  url: global.PUB.domain + "/crossList?page=tangball_match",
                  param: { findJson: { matchType: _this.matchType } }
                });

              case 2:
                _ref = _context.sent;
                data = _ref.data;

                _this.matchlist = data.list;
                localStorage.matchID = _this.matchlist.P1;
                console.log("getlist成功", _this.matchlist.P1);
                console.log("getlist成功", _this.matchlist);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    //----------- 点击标签时触发的函数，并且会默认传递event-------------------
    onClickTab: function onClickTab(event) {
      console.group("onClickTab", event.target); //这个对象包含tab的index和title
      console.log("onClickTab", event.target.index);

      //如果是近期（因为近期的index为1）
      if (event.target.index == 0) {
        console.group("如果是近期", event.target.title);
        this.matchType = null; //改变请求接口参数
        this.getlist(); //调用一次接口
      }

      if (event.target.index == 1) {
        console.group("如果是全国", event.target.title);
        this.matchType = 2; //改变请求接口参数
        this.getlist(); //调用一次接口
      }

      if (event.target.index == 2) {
        console.group("如果是加盟商", event.target.title);
        console.log("如果是加盟商2", event.target.title);
        this.matchType = 1;
        this.getlist(); //调用一次接口
      }

      if (event.target.index == 3) {
        console.group("如果是全部", event.target.title);
        console.log("如果是全部", event.target.title);
        this.matchType = 3;
        this.getlist();
      }
    },
    onShow: function onShow() {
      this.show = true;
      console.log("mpvue.data", this);
      // mpvue.setData({show: true})
    },
    onDaying: function onDaying() {
      console.log(this.matchlist);
    },


    /**
     * @desc 搜索回调
     */
    onSearch: function onSearch() {}
    /**
     * @desc 赛事切换回调
     */

  },
  created: function created() {
    console.log("赛事列表created");
  },
  mounted: function mounted() {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this2.getlist(); //页面创建成功后，调用一次请求接口，此时是加载所有数据

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(8)))

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_matchListComponent_vue__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_607d94f0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_matchListComponent_vue__ = __webpack_require__(159);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(157)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-607d94f0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_matchListComponent_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_607d94f0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_matchListComponent_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\matchList\\matchListComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] matchListComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-607d94f0", Component.options)
  } else {
    hotAPI.reload("data-v-607d94f0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 157:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {};
  },

  props: ["title", "desc", "price", "matchTime"],
  components: {},
  methods: {},
  created: function created() {}
});

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "match-box"
  }, [_c('div', {
    staticClass: "match-img-box"
  }, [_c('img', {
    attrs: {
      "src": _vm.index
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "match-img-box1"
  }, [_c('h1', [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.desc))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.matchTime))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.price))])], 1), _vm._v(" "), _c('div', {
    staticClass: "rpg11",
    slot: "footer"
  }, [_c('div', {
    staticClass: "macth-btn",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.daying
    }
  }, [_vm._v("火热报名中")]), _vm._v(" "), _c('div', {
    staticClass: "macth-btn"
  }, [_vm._v("查看详情")])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-607d94f0", esExports)
  }
}

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(51);
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

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-wrap"
  }, [_c('debug_item', {
    attrs: {
      "path": "steps",
      "text": "步骤",
      "eventid": '0',
      "mpcomid": '0'
    },
    model: {
      value: (_vm.steps),
      callback: function($$v) {
        _vm.steps = $$v
      },
      expression: "steps"
    }
  }), _vm._v(" "), _c('debug_item', {
    attrs: {
      "path": "matchlist",
      "text": "赛事列表",
      "eventid": '1',
      "mpcomid": '1'
    },
    model: {
      value: (_vm.matchlist),
      callback: function($$v) {
        _vm.matchlist = $$v
      },
      expression: "matchlist"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.value),
      expression: "value"
    }],
    attrs: {
      "type": "text",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.value)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.value = $event.target.value
      }
    }
  }), _vm._v(" "), _c('van-search', {
    attrs: {
      "placeholder": "请输入搜索关键词123",
      "use-action-slot": "",
      "bind:search": "onSearch",
      "eventid": '3',
      "mpcomid": '2'
    },
    model: {
      value: (_vm.value),
      callback: function($$v) {
        _vm.value = $$v
      },
      expression: "value"
    }
  }), _vm._v(" "), _c('div', [_c('van-tabs', {
    attrs: {
      "active": _vm.active,
      "eventid": '4',
      "mpcomid": '5'
    },
    on: {
      "change": _vm.onClickTab
    }
  }, _vm._l((_vm.tabList), function(bigItem, index) {
    return _c('van-tab', {
      key: bigItem,
      attrs: {
        "title": bigItem.category,
        "mpcomid": '4_' + index
      }
    }, _vm._l((_vm.matchlist), function(item, i) {
      return _c('matchListcomponent', {
        key: i,
        attrs: {
          "desc": item.remark,
          "title": item.matchName,
          "matchTime": item.matchTime,
          "price": '报名费' + item.registrationFee,
          "origin-price": "1000",
          "thumb-link": '/pages/matchDetail/main?id=' + item.P1,
          "mpcomid": '3_' + index + '-' + i
        }
      })
    }))
  }))], 1), _vm._v(" "), _c('mytabbar', {
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
     require("vue-hot-reload-api").rerender("data-v-609c9ef4", esExports)
  }
}

/***/ })

},[150]);