require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([3],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(138);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_311a7da2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(149);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(139)
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
Component.options.__file = "src\\pages\\matchEroll\\index.vue"
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

/***/ 139:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_mytabbar_mytabbar__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_debug_item_debug_item__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_matchErooll_bindPhine__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_matchErooll_personInfo__ = __webpack_require__(145);
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    debug_item: __WEBPACK_IMPORTED_MODULE_1__components_common_debug_item_debug_item__["a" /* default */],
    BingPhone: __WEBPACK_IMPORTED_MODULE_2__components_matchErooll_bindPhine__["a" /* default */],
    PersonInfo: __WEBPACK_IMPORTED_MODULE_3__components_matchErooll_personInfo__["a" /* default */]
  },
  data: function data() {
    return {
      pageName: "比赛报名",
      btnText: '下一步',
      steps: [{
        text: '绑定手机'
      }, {
        text: '基本信息'
      }, {
        text: '确认信息'
      }, {
        text: '完成缴费'
      }],
      active: 0
    };
  },


  methods: {
    nextStep: function nextStep() {
      if (this.active >= 3) {
        return false;
      }
      this.active = this.active + 1;
    },
    prevStep: function prevStep() {
      if (this.active <= 0) {
        return false;
      }
      this.active = this.active - 1;
    }
  },
  created: function created() {}
});

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_bindPhine_vue__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1d9b7f6c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_bindPhine_vue__ = __webpack_require__(144);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(142)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_bindPhine_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1d9b7f6c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_bindPhine_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\matchErooll\\bindPhine.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] bindPhine.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d9b7f6c", Component.options)
  } else {
    hotAPI.reload("data-v-1d9b7f6c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 142:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 143:
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
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      sms: '',
      phone: ''
    };
  }
});

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "bind-phone"
  }, [_c('van-field', {
    attrs: {
      "value": _vm.phone,
      "label": "手机号",
      "placeholder": "请输入手机号",
      "border": "false",
      "required": "",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('van-cell-group', {
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('van-field', {
    attrs: {
      "value": _vm.sms,
      "center": "",
      "clearable": "",
      "label": "短信验证码",
      "placeholder": "请输入短信验证码",
      "required": "",
      "use-button-slot": "",
      "mpcomid": '2'
    }
  }, [_c('van-button', {
    attrs: {
      "size": "small",
      "type": "info",
      "mpcomid": '1'
    },
    slot: "button"
  }, [_vm._v("发送验证码")])], 1)], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1d9b7f6c", esExports)
  }
}

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_personInfo_vue__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_25983632_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_personInfo_vue__ = __webpack_require__(148);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(146)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_personInfo_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_25983632_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_personInfo_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\matchErooll\\personInfo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] personInfo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-25983632", Component.options)
  } else {
    hotAPI.reload("data-v-25983632", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 146:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 147:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      info: {
        name: '高富帅',
        phone: '15176522133',
        age: 12,
        job: ''
      },
      radio: '1'
    };
  }
});

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('van-cell-group', {
    staticClass: "personInfo",
    attrs: {
      "mpcomid": '8'
    }
  }, [_c('van-field', {
    attrs: {
      "value": _vm.info.name,
      "type": "text",
      "label": "参赛人姓名",
      "placeholder": "请输入参赛人姓名",
      "required": "",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.info.phone,
      "label": "联系电话",
      "placeholder": "请输入手机号",
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "flex line"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("性别")]), _vm._v(" "), _c('van-radio-group', {
    staticClass: "flex",
    attrs: {
      "value": _vm.radio,
      "mpcomid": '4'
    }
  }, [_c('van-radio', {
    attrs: {
      "name": "1",
      "mpcomid": '2'
    }
  }, [_vm._v("男")]), _vm._v("\n       \n      "), _c('van-radio', {
    attrs: {
      "name": "2",
      "mpcomid": '3'
    }
  }, [_vm._v("女")])], 1)], 1), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.info.age,
      "label": "年龄",
      "placeholder": "请输入年龄",
      "mpcomid": '5'
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.info.job,
      "label": "职业",
      "placeholder": "请输入职业",
      "mpcomid": '6'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "flex line"
  }, [_c('title', {
    staticClass: "title",
    attrs: {
      "mpcomid": '7'
    }
  }, [_vm._v("球龄")]), _vm._v(" "), _c('div', [_vm._v("球龄")])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-25983632", esExports)
  }
}

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-wrap"
  }, [_c('van-steps', {
    attrs: {
      "steps": _vm.steps,
      "active": _vm.active,
      "active-color": "#1989fa",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('PersonInfo', {
    attrs: {
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "btn-wrap"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '6'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "11",
      "mpcomid": '3'
    }
  }, [_c('van-button', {
    attrs: {
      "type": "info",
      "plain": "",
      "disabled": (_vm.active > 0),
      "block": "",
      "eventid": '0',
      "mpcomid": '2'
    },
    on: {
      "click": _vm.prevStep
    }
  }, [_vm._v("上一步")])], 1), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "11",
      "offset": "2",
      "mpcomid": '5'
    }
  }, [_c('van-button', {
    attrs: {
      "type": "info",
      "block": "",
      "eventid": '1',
      "mpcomid": '4'
    },
    on: {
      "click": _vm.nextStep
    }
  }, [_vm._v(_vm._s(_vm.btnText))])], 1)], 1)], 1), _vm._v(" "), _c('mytabbar', {
    attrs: {
      "mpcomid": '7'
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

},[137]);