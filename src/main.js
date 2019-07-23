/* eslint-disable */
global.PUB={}
global.PUB.domain="http://120.76.160.41:3000"

import Vue from 'vue'
import App from './App'
import './css/public.css'
//mpvue不支持全局组件注册

// import debug_item from '@/components/common/debug_item/index.js';   //导入debug_item
// Vue.use(debug_item);   //作为全局组件，必须有install






console.log("################");


import Vuex from 'vuex'//导入vuex模块


console.log("global.PUB.mix", global.PUB.mix);


Vue.use(Vuex)//应用组件

const store = new Vuex.Store({//定义Vuex的存储对象
  state: {
    debug:true,
   
  },
 
  mutations: {//变更事件
    setDebug(state, param) {//设置debug模式
      state.debug= param;
      
    }
  }
})
Vue.prototype.$store = store//让vue实例中可访问$store






Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
