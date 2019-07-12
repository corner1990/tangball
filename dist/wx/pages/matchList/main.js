require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-wrap"
  }, [_c('van-search', {
    attrs: {
      "value": _vm.value,
      "placeholder": "请输入搜索关键词12345",
      "use-action-slot": "",
      "bind:search": "onSearch",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('van-tabs', {
    attrs: {
      "active": _vm.active,
      "bind:change": "onChange",
      "mpcomid": '11'
    }
  }, [_c('van-tab', {
    attrs: {
      "title": "近期",
      "mpcomid": '4'
    }
  }, _vm._l((_vm.matchlist), function(item, i) {
    return _c('van-card', {
      key: i,
      attrs: {
        "tag": item.tag,
        "desc": item.desc,
        "title": item.title,
        "thumb": item.thumb,
        "price": '报名费' + item.price,
        "origin-price": "1000",
        "thumb-link": '/pages/matchDetail/main?id=' + item.id,
        "mpcomid": '3_' + i
      }
    }, [_c('view', {
      slot: "footer"
    }, [_c('van-button', {
      staticClass: "MR10",
      attrs: {
        "size": "mini",
        "mpcomid": '1_' + i
      }
    }, [_vm._v("去报名")]), _vm._v(" "), _c('van-button', {
      attrs: {
        "size": "mini",
        "mpcomid": '2_' + i
      }
    }, [_vm._v("查看详情")])], 1)])
  })), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "全国",
      "mpcomid": '6'
    }
  }, [_c('van-card', {
    attrs: {
      "tag": "222",
      "desc": "描述信息",
      "title": "商品标题",
      "thumb": "111",
      "mpcomid": '5'
    }
  })], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "加盟商",
      "mpcomid": '8'
    }
  }, [_c('van-card', {
    attrs: {
      "tag": "333",
      "desc": "描述信息",
      "title": "商品标题",
      "thumb": "111",
      "mpcomid": '7'
    }
  })], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "全部",
      "mpcomid": '10'
    }
  }, [_c('van-card', {
    attrs: {
      "tag": "444",
      "desc": "描述信息",
      "title": "商品标题",
      "thumb": "111",
      "mpcomid": '9'
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('van-steps', {
    attrs: {
      "steps": _vm.steps,
      "active": _vm.activeStep,
      "direction": "vertical",
      "active-color": "#f44",
      "mpcomid": '12'
    }
  }), _vm._v(" "), _c('UserOperList', {
    attrs: {
      "mpcomid": '13'
    }
  }), _vm._v(" "), _c('mytabbar', {
    attrs: {
      "mpcomid": '14'
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

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(79);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_609c9ef4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(126);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(80)
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

/***/ 80:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_usercenter_userCard__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_card__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_mytabbar_mytabbar__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_vant_dialog_dialog__ = __webpack_require__(86);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    card: __WEBPACK_IMPORTED_MODULE_1__components_card__["a" /* default */], UserOperList: __WEBPACK_IMPORTED_MODULE_0__components_usercenter_userCard__["a" /* default */], mytabbar: __WEBPACK_IMPORTED_MODULE_2__components_mytabbar_mytabbar__["a" /* default */], Dialog: __WEBPACK_IMPORTED_MODULE_3__static_vant_dialog_dialog__["a" /* default */]
  },
  data: function data() {
    return {
      activeStep: 0,
      steps: [{
        text: '步骤一',
        desc: '描述信息'
      }, {
        text: '步骤二',
        desc: '描述信息'
      }, {
        text: '步骤三',
        desc: '描述信息'
      }, {
        text: '步骤四',
        desc: '描述信息'
      }],
      matchlist: [{
        'id': 1,
        'title': '首届唐球锦标赛1',
        'desc': '这是首届唐球锦标赛',
        'tag': '可报名',
        'thumb': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=358607504,2119176225&fm=26&gp=0.jpg',
        'price': 500,
        'thumbLink': "pages/matchDetail/main"
      }, {
        'id': 2,
        'title': '首届唐球锦标赛2',
        'desc': '这是首届唐球锦标赛',
        'tag': '可报名',
        'thumb': 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3468639195,1703499497&fm=26&gp=0.jpg'

      }],
      list: [{
        'text': '首页',
        'pagePath': '../index/main',
        'iconPath': 'home-o'
      }, {
        'text': '唐球馆',
        'pagePath': '../tanghome/main',
        'iconPath': 'fire-o'
      }, {
        'text': '活动',
        'pagePath': '../event/main',
        'iconPath': 'medel-o'
      }, {
        'text': '个人中心',
        'pagePath': '../usercenter/main',
        'iconPath': 'friends-o'
      }],
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      active: 0,
      value: '' // 搜索value
    };
  },


  methods: {
    onShow: function onShow() {
      this.show = true;
      console.log('mpvue.data', this);
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
  created: function created() {

    // alert("created");//
    __WEBPACK_IMPORTED_MODULE_3__static_vant_dialog_dialog__["a" /* default */].alert({
      title: '标题',
      message: '弹窗内容'
    }).then(function () {
      // on close
    });
  }
});

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_mytabbar_vue__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4b531066_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_mytabbar_vue__ = __webpack_require__(85);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(83)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_mytabbar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4b531066_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_mytabbar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\mytabbar\\mytabbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mytabbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b531066", Component.options)
  } else {
    hotAPI.reload("data-v-4b531066", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 83:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 84:
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

/* eslint-disable */
/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['text'],
  data: function data() {
    return {
      list: [{
        'text': '首页1',
        'pagePath': '../index/main',
        'iconPath': 'home-o'
      }, {
        'text': '唐球馆',
        'pagePath': '../tanghome/main',
        'iconPath': 'fire-o'
      }, {
        'text': '活动',
        'pagePath': '../event/main',
        'iconPath': 'medel-o'
      }, {
        'text': '个人中心',
        'pagePath': '../usercenter/main',
        'iconPath': 'friends-o'
      }],
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      active1111: 0,
      value: '' // 搜索value
    };
  }
});

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {}, [_vm._v("自定义导航11111")]), _vm._v(" "), _c('van-tabbar', {
    attrs: {
      "active": _vm.active1111,
      "mpcomid": '1'
    }
  }, _vm._l((_vm.list), function(item, key) {
    return _c('van-tabbar-item', {
      key: key,
      attrs: {
        "icon": item.iconPath,
        "eventid": '0_' + key,
        "mpcomid": '0_' + key
      },
      on: {
        "click": function($event) {
          _vm.tabChange(item.pagePath)
        }
      }
    }, [_vm._v(_vm._s(item.text))])
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4b531066", esExports)
  }
}

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(120);
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

/***/ })

},[78]);