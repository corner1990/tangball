require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

<<<<<<< HEAD
/***/ 150:
=======
/***/ 152:
>>>>>>> afa2e0580181853dad98763cae87008f7f68b1ce
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(151);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(153);
>>>>>>> afa2e0580181853dad98763cae87008f7f68b1ce



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

<<<<<<< HEAD
/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(153);
=======
/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(155);
>>>>>>> afa2e0580181853dad98763cae87008f7f68b1ce
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_609c9ef4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(166);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
<<<<<<< HEAD
  __webpack_require__(152)
=======
  __webpack_require__(154)
>>>>>>> afa2e0580181853dad98763cae87008f7f68b1ce
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

<<<<<<< HEAD
/***/ 152:
=======
/***/ 154:
>>>>>>> afa2e0580181853dad98763cae87008f7f68b1ce
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

<<<<<<< HEAD
/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(18);
=======
/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(15);
>>>>>>> afa2e0580181853dad98763cae87008f7f68b1ce
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__matchListComponent__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_card__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_mytabbar_mytabbar__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_vant_dialog_dialog__ = __webpack_require__(160);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_common_debug_item_debug_item__ = __webpack_require__(4);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_common_debug_item_debug_item__ = __webpack_require__(5);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    matchListcomponent: __WEBPACK_IMPORTED_MODULE_2__matchListComponent__["a" /* default */], debug_item: __WEBPACK_IMPORTED_MODULE_7__components_common_debug_item_debug_item__["a" /* default */]
  },
  data: function data() {
    return {
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

      value: '999' // 搜索value
    };
  },

  methods: {
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
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var _ref, data;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:

              console.log("赛事列表mounted");
              // //ajax请求接口数据
              // let { data } = await post(global.PUB.domain + '/crossList?page=tangball_match',{findJson:{ "matchType": 2 }});
              // this.matchlist = data.list;


              /**
               * ajax请求参赛次数排行榜
               * 请求会员表tangball_member
               */
              _context.next = 3;
              return __WEBPACK_IMPORTED_MODULE_3__utils_util__["a" /* default */].post({
                url: global.PUB.domain + '/crossList?page=tangball_match',
                param: { findJson: { "matchType": 1 } }
              });

            case 3:
              _ref = _context.sent;
              data = _ref.data;

              _this.matchlist = data.list;

            case 6:
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
  methods: {
    dayin: function dayin() {
      console.log("cf", cf.matchlist);
    }
  },
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
      "src": _vm.item.thumb
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "match-img-box1"
  }, [_c('h1', [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.desc))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.matchTime))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.item.endTime))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.price))])], 1), _vm._v(" "), _c('div', {
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
  }, [_vm._v("去报名")]), _vm._v(" "), _c('div', {
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
      "bind:change": "onChange",
      "mpcomid": '9'
    }
  }, [_c('van-tab', {
    attrs: {
      "title": "近期",
      "mpcomid": '4'
    }
  }, _vm._l((_vm.matchlist), function(item, i) {
    return _c('matchListcomponent', {
      key: i,
      attrs: {
        "desc": item.remark,
        "title": item.matchName,
        "matchTime": item.matchTime,
        "thumb": item.thumb,
        "price": '报名费' + item.registrationFee,
        "origin-price": "1000",
        "thumb-link": '/pages/matchDetail/main?id=' + item.P1,
        "mpcomid": '3_' + i
      }
    })
  })), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "全国",
      "mpcomid": '6'
    }
  }, _vm._l((_vm.matchlist), function(item, i) {
    return _c('matchListcomponent', {
      key: i,
      attrs: {
        "desc": item.remark,
        "title": item.matchName,
        "matchTime": item.matchTime,
        "thumb": item.thumb,
        "price": '报名费' + item.registrationFee,
        "origin-price": "1000",
        "thumb-link": '/pages/matchDetail/main?id=' + item.P1,
        "mpcomid": '5_' + i
      }
    })
  })), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "加盟商",
      "mpcomid": '7'
    }
  }, [_vm._v("加盟商")]), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "全部",
      "mpcomid": '8'
    }
  }, [_vm._v("全部")])], 1)], 1), _vm._v(" "), _c('mytabbar', {
    attrs: {
      "mpcomid": '10'
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

<<<<<<< HEAD
},[150]);
=======
},[152]);
>>>>>>> afa2e0580181853dad98763cae87008f7f68b1ce
