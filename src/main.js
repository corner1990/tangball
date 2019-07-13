/* eslint-disable */
import Vue from 'vue'
import App from './App'
import './css/public.css'

global.PUB={}
global.PUB.domain="http://120.76.160.41:3000"

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
