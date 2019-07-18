require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([13],{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_311a7da2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(141);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_debug_item_debug_item__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_matchErooll_bindPhine__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_matchErooll_personInfo__ = __webpack_require__(286);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-wrap"
  }, [_c('van-steps', {
    attrs: {
      "steps": _vm.steps,
      "active": _vm.active,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('PersonInfo', {
    attrs: {
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('van-row', {
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
  }, [_vm._v(_vm._s(_vm.btnText))])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "event-info"
  }, [_c('h3', [_vm._v("赛事名称")]), _vm._v(" "), _c('p', [_vm._v("比赛时间：2019-09-01")]), _vm._v(" "), _c('p', [_vm._v("比赛地点： 22223423424")])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-wrap"
  }, [_c('form', [_c('van-row', {
    staticClass: "button-wrap",
    attrs: {
      "mpcomid": '9'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "24",
      "mpcomid": '8'
    }
  }, [_c('van-button', {
    attrs: {
      "type": "info",
      "block": "",
      "mpcomid": '7'
    }
  }, [_vm._v("立刻报名")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('mytabbar', {
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
     require("vue-hot-reload-api").rerender("data-v-311a7da2", esExports)
  }
}

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_bindPhine_vue__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1d9b7f6c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_bindPhine_vue__ = __webpack_require__(285);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(283)
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

/***/ 283:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 284:
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

/***/ 285:
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

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_personInfo_vue__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_25983632_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_personInfo_vue__ = __webpack_require__(289);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(287)
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

/***/ 287:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 288:
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
//
//
//
//
//
//
//
//
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

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('van-cell-group', {
    attrs: {
      "mpcomid": '15'
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
  }), _vm._v(" "), _c('van-row', {
    attrs: {
      "mpcomid": '9'
    }
  }, [_c('van-col', {
    staticClass: "title",
    attrs: {
      "span": "8",
      "mpcomid": '2'
    }
  }, [_vm._v("性别")]), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "10",
      "mpcomid": '8'
    }
  }, [_c('van-radio-group', {
    attrs: {
      "value": _vm.radio,
      "mpcomid": '7'
    }
  }, [_c('van-cell', {
    attrs: {
      "title": "男",
      "value-class": "value-class",
      "clickable": "",
      "data-name": "1",
      "mpcomid": '4'
    }
  }, [_c('van-radio', {
    attrs: {
      "name": "1",
      "mpcomid": '3'
    }
  })], 1), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "nv",
      "value-class": "value-class",
      "clickable": "",
      "data-name": "2",
      "mpcomid": '6'
    }
  }, [_c('van-radio', {
    attrs: {
      "name": "2",
      "mpcomid": '5'
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.info.age,
      "label": "年龄",
      "placeholder": "请输入年龄",
      "error": "",
      "mpcomid": '10'
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.info.job,
      "label": "职业",
      "placeholder": "请输入职业",
      "error": "",
      "mpcomid": '11'
    }
  }), _vm._v(" "), _c('van-row', {
    attrs: {
      "mpcomid": '14'
    }
  }, [_c('van-col', {
    staticClass: "title",
    attrs: {
      "span": "8",
      "mpcomid": '12'
    }
  }, [_vm._v("球龄")]), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "16",
      "mpcomid": '13'
    }
  })], 1)], 1)
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

/***/ })

},[137]);