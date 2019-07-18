require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([10],{

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(192);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_43ab7364_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(196);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(193)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-43ab7364"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_43ab7364_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\myMsgList\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-43ab7364", Component.options)
  } else {
    hotAPI.reload("data-v-43ab7364", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 193:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_mytabbar_mytabbar__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_debug_item_debug_item__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      gant: {},
      checkedList: [],
      checked: false,
      showSelect: false,
      showcontent: false,
      crow: [{
        id: "1",
        mas: "这是一很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的消息1"
      }, { id: "2", mas: "这是消息2" }, { id: "3", mas: "这是消息3" }],
      pageName: "个人中心-系统消息列表"
    };
  },


  methods: {
    allCheck: function allCheck() {
      for (var i = 0; i < this.checkedList.length; i++) {

        if (this.checked) {
          this.checkedList[i] = false;
        } else {
          this.checkedList[i] = true;
        }
      }
      this.checked = !this.checked;
      console.log(this.checkedList);
    },
    del: function del(index) {
      this.checkedList[index] = !this.checkedList[index];
      console.log(this.checkedList[index]);
    },
    compile: function compile() {
      console.log(this.showSelect);
      this.showSelect = !this.showSelect;
    },
    content: function content(index) {
      console.log(this.showcontent);
      this.showcontent = true;
      console.log(this.gant);

      this.gant = index;
    },
    shut: function shut() {
      this.showcontent = false;
    }
  },
  mounted: function mounted() {
    this.checkedList.length = this.crow.length;
    for (var i = 0; i < this.checkedList.length; i++) {
      if (this.checkedList[i]) {
        this.checkedList[i] = !this.checkedList[i];
      } else {
        this.checkedList[i] = false;
      }
    }
  }
});

/***/ }),

/***/ 196:
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
  }), _vm._v(" "), _c('mytabbar', {
    attrs: {
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "top-box"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showSelect),
      expression: "showSelect"
    }],
    staticClass: "all-box",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.allCheck()
      }
    }
  }, [_vm._v("全选")]), _vm._v(" "), _c('div', {
    staticClass: "compile-box",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.compile()
      }
    }
  }, [_vm._v("编辑")])]), _vm._v(" "), (_vm.showcontent) ? _c('div', {
    staticClass: "content-box"
  }, [_vm._v("\n    " + _vm._s(_vm.crow[_vm.gant].mas) + "\n    "), _c('div', {
    staticClass: "close-box",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.shut()
      }
    }
  }, [_vm._v("关闭")])]) : _vm._e(), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.showcontent),
      expression: "!showcontent"
    }]
  }, _vm._l((_vm.crow), function(mass, index) {
    return _c('div', {
      key: mass.id,
      staticClass: "mas-box"
    }, [_c('div', {
      staticClass: "news",
      attrs: {
        "eventid": '4_' + index
      },
      on: {
        "click": function($event) {
          _vm.content(index)
        }
      }
    }, [_vm._v(_vm._s(mass.mas))]), _vm._v(" "), (_vm.showSelect) ? _c('input', {
      staticClass: "delete-box",
      attrs: {
        "type": "checkbox",
        "checked": _vm.checked,
        "eventid": '5_' + index
      },
      on: {
        "click": function($event) {
          _vm.del(index)
        }
      }
    }) : _vm._e()])
  })), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showSelect),
      expression: "showSelect"
    }],
    staticClass: "bottom-box"
  }, [_vm._v("删 除")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-43ab7364", esExports)
  }
}

/***/ })

},[191]);