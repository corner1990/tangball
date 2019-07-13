require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([9],{

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(180);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_43ab7364_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(183);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(181)
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
Component.options.__file = "src/pages/myMsgList/index.vue"
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

/***/ 181:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_mytabbar_mytabbar__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
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
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */], mytabbar: __WEBPACK_IMPORTED_MODULE_1__components_mytabbar_mytabbar__["a" /* default */]
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
        'title': '首届唐球锦标赛1',
        'desc': '这是首届唐球锦标赛',
        'tag': '可报名',
        'thumb': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=358607504,2119176225&fm=26&gp=0.jpg',
        'price': 500
      }, {
        'title': '首届唐球锦标赛2',
        'desc': '这是首届唐球锦标赛',
        'tag': '可报名',
        'thumb': 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3468639195,1703499497&fm=26&gp=0.jpg',
        'aaaa': '1111'
      }],

      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000,

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
  created: function created() {}
});

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-wrap"
  }, [_c('div', {
    staticClass: "FS24 TAC LH36"
  }, [_vm._v("XXX首届唐球赛12345")]), _vm._v(" "), _c('van-steps', {
    attrs: {
      "steps": _vm.steps,
      "active": _vm.activeStep,
      "active-color": "#f44",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('van-cell-group', {
    attrs: {
      "title": "赛事信息",
      "mpcomid": '6'
    }
  }, [_c('van-cell', {
    attrs: {
      "title": "赛事时间",
      "title-width": "100px",
      "value": "2019.07.30-2019.08.09",
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "距报名截止时间",
      "value": "5天6小时26分",
      "mpcomid": '2'
    }
  }), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "举办地点",
      "value": "深圳南山XXXXX",
      "mpcomid": '3'
    }
  }), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "报名费",
      "value": "200元",
      "mpcomid": '4'
    }
  }), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "已报名人数",
      "value": "567人",
      "mpcomid": '5'
    }
  })], 1), _vm._v(" "), _c('van-cell-group', {
    attrs: {
      "title": "分组2",
      "mpcomid": '8'
    }
  }, [_c('van-cell', {
    attrs: {
      "title": "单元格",
      "value": "内容",
      "mpcomid": '7'
    }
  })], 1), _vm._v(" "), _c('van-button', {
    attrs: {
      "size": "large",
      "square": "",
      "type": "primary",
      "mpcomid": '9'
    }
  }, [_vm._v("立即报名")]), _vm._v(" "), _c('mytabbar', {
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
     require("vue-hot-reload-api").rerender("data-v-43ab7364", esExports)
  }
}

/***/ })

},[179]);