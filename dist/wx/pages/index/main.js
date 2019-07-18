require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([15],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(119);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_13520ffa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(125);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(120)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-13520ffa"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_13520ffa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-13520ffa", Component.options)
  } else {
    hotAPI.reload("data-v-13520ffa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 120:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_mytabbar_mytabbar__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_card__ = __webpack_require__(21);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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




// import { get } from '@/utils/request'
/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    card: __WEBPACK_IMPORTED_MODULE_1__components_card__["a" /* default */], mytabbar: __WEBPACK_IMPORTED_MODULE_0__components_mytabbar_mytabbar__["a" /* default */]
  },
  data: function data() {
    return {
      arrLink: [{ "title": "赛事列表", "url": "/pages/matchList/main" }, { "title": "赛事详情", "url": "/pages/matchDetail/main" }, { "title": "赛事报名", "url": "/pages/matchEroll/main" }, { "title": "场馆列表", "url": "/pages/venueList/main" }, { "title": "场馆详情", "url": "/pages/venueDetail/main" }, { "title": "唐球达人", "url": "/pages/rankingList/main" }, { "title": "个人中心-赛事报名列表", "url": "/pages/myEroll/main" }, { "title": "个人中心-赛事报名详情", "url": "/pages/myErollDetail/main" }, { "title": "个人中心-系统消息列表", "url": "/pages/myMsgList/main" }],
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      },

      radio: 1,
      imgUrls: ['https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640', 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640', 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'],
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000,

      value: '' // 搜索value
    };
  },


  methods: {
    bindViewTap: function bindViewTap() {
      var url = '../logs/main';
      if (global.mpvuePlatform === 'wx') {
        global.mpvue.switchTab({ url: url });
      } else {
        global.mpvue.navigateTo({ url: url });
      }
    },
    clickHandle: function clickHandle(ev) {
      console.log('clickHandle:', ev);
      // throw {message: 'custom test'}
    },
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
    console.log('12312');
    // let app = getApp()
    // get('http://localhost:4001/api/users').then(res => {
    //   console.log('res', res)
    // })
    wx.hideTabBar({
      complete: function complete() {
        console.log('关闭tabbar');
      }
    });
  }
});

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-wrap"
  }, [_vm._l((_vm.arrLink), function(item, i) {
    return _c('van-cell', {
      key: i,
      attrs: {
        "is-link": "",
        "title": item.title,
        "link-type": "navigateTo",
        "url": item.url,
        "mpcomid": '0_' + i
      }
    })
  }), _vm._v(" "), _c('swiper', {
    attrs: {
      "indicator-dots": _vm.indicatorDots,
      "autoplay": _vm.autoplay,
      "interval": _vm.interval,
      "duration": _vm.duration
    }
  }, _vm._l((_vm.imgUrls), function(item, index) {
    return _c('block', {
      key: item
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '1_' + index
      }
    }, [_c('image', {
      staticClass: "slide-image",
      attrs: {
        "src": item,
        "height": "150"
      }
    })])], 1)
  })), _vm._v(" "), _c('van-search', {
    attrs: {
      "value": _vm.value,
      "placeholder": "请输入搜索关键词",
      "use-action-slot": "",
      "bind:search": "onSearch",
      "mpcomid": '2'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('h3', [_vm._v("赛事")]), _vm._v(" "), _c('van-tabs', {
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
  }, [_c('van-card', {
    attrs: {
      "desc": "描述信息",
      "title": "商品标题",
      "mpcomid": '3'
    }
  })], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "全国",
      "mpcomid": '6'
    }
  }, [_c('van-card', {
    attrs: {
      "tag": "222",
      "desc": "描述信息",
      "title": "商品标题",
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
  })], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('h3', [_vm._v("唐球达人")]), _vm._v(" "), _c('div', [_c('van-panel', {
    attrs: {
      "title": "标题",
      "desc": "描述信息",
      "status": "状态",
      "mpcomid": '12'
    }
  }, [_c('view', [_vm._v("内容")])])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('h3', [_vm._v("互动节目")]), _vm._v(" "), _c('div', [_c('van-panel', {
    attrs: {
      "title": "标题",
      "desc": "描述信息",
      "status": "状态",
      "mpcomid": '13'
    }
  }, [_c('view', [_vm._v("内容")])])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('h3', [_vm._v("唐球学院")]), _vm._v(" "), _c('div', [_c('van-panel', {
    attrs: {
      "title": "标题",
      "desc": "描述信息",
      "status": "状态",
      "mpcomid": '14'
    }
  }, [_c('view', [_vm._v("内容")])])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('h3', [_vm._v("最新动态")]), _vm._v(" "), _c('div', [_c('van-panel', {
    attrs: {
      "title": "标题",
      "desc": "描述信息",
      "status": "状态",
      "mpcomid": '15'
    }
  }, [_c('view', [_vm._v("内容")])])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('h3', [_vm._v("连锁加盟")]), _vm._v(" "), _c('div', [_c('van-panel', {
    attrs: {
      "title": "标题",
      "desc": "描述信息",
      "status": "状态",
      "mpcomid": '16'
    }
  }, [_c('view', [_vm._v("内容")])])], 1)], 1), _vm._v(" "), _c('a', {
    staticClass: "counter",
    attrs: {
      "href": "/pages/counter/main"
    }
  }, [_vm._v("去往Vuex示例页面")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('mytabbar', {
    attrs: {
      "mpcomid": '17'
    }
  })], 2)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "all"
  }, [_c('div', {
    staticClass: "left"
  }), _vm._v(" "), _c('div', {
    staticClass: "right"
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-13520ffa", esExports)
  }
}

/***/ })

},[118]);