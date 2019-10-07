/* eslint-disable */
global.PUB={}

  global.PUB.domain="https://www.dmagic.cn"  
  //global.PUB.domain="http://test.dmagic.cn"  
//  global.PUB.domain="http://localhost:3000"
//global.PUB.domain="https://e6234kn.hn3.mofasuidao.cn"//魔法隧道地质
import Vue from 'vue'
import App from './App'
import './css/public.css'
//mpvue不支持全局组件注册
// import debug_item from '@/components/common/debug_item/index.js';   //导入debug_item
// Vue.use(debug_item);   //作为全局组件，必须有install
import Vuex from 'vuex'//导入vuex模块
// import lodash from "lodash";
// const lodash = require("@/utils/lodash/lodash.min.js"); 
const lodash = require("../static/lodash.min.js"); 
// let lodash={}static\lodash.min.js
// import lodash from "lodash";
// console.log("lodash111", lodash);
// console.log("lodash.get", lodash.get);
Vue.prototype.$lodash= lodash//让vue实例中可访问$lodash
Vue.use(Vuex)//应用组件
const store = new Vuex.Store({//定义Vuex的存储对象
  state: {
    debug:true,
    wxUserInfo:{},//微信用户信息
    tangballUserInfo:{}//唐球用户信息   
  },
  mutations: {//变更事件
    setDebug(state, param) {//设置debug模式
      state.debug= param;
    },setWXUserInfo(state, param) {//设置微信用户信息
      state.wxUserInfo= param;
    },setTangballUserInfo(state, param) {//设置唐球用户信息
      state.tangballUserInfo= param;
    }
  }
})
Vue.prototype.$store = store; // 让vue实例中可访问$store
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue(App)
app.$mount()
