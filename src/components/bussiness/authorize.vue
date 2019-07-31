<template>
  <div class="demo-box">
    <!-- <van-button type="primary" size="small" @click="ajaxVenueList" class="MR10">获取场馆列表</van-button> -->
    <van-button type="primary" size="large" open-type="getUserInfo" @getuserinfo="bindGetUserInfo" @click="getUserInfo1">获取权限</van-button>
  </div>
</template>
<script>
/* eslint-disable */

import mytabbar from "@/components/mytabbar/mytabbar";
import debug_item from "@/components/common/debug_item/debug_item";
import util from "@/utils/util";
/****************************将微信的一些异步接口转成promise，支持同步的写法-START****************************/
let wxLogin = util.wxPromisify(wx.login);
let wxGetSetting = util.wxPromisify(wx.getSetting);
let wxGetUserInfo = util.wxPromisify(wx.getUserInfo);
/****************************将微信的一些异步接口转成promise，支持同步的写法-END****************************/
export default {
  components: {
    mytabbar,
    debug_item,
    util
  },
  data() {
    return {
      name: "demo名称" //手机号码
    };
  },

  methods: {
    async getSetting() {
      let resSetting = await wxGetSetting();
      if (resSetting.authSetting["scope.userInfo"]) {
        let resUserInfo = await wxGetUserInfo();
        console.log(resUserInfo.userInfo);
        //用户已经授权过
        console.log("用户已经授权过,跳转到首页");
        // util.gotoPage("/pages/index/main")
         wx.switchTab({
          url: "/pages/index/main"
         });
      } else {
        console.log("用户还未授权过");
      }
    },
    getUserInfo1() {
      console.log("click事件首先触发");
      // 判断小程序的API，回调，参数，组件等是否在当前版本可用。  为false 提醒用户升级微信版本
      // console.log(wx.canIUse('button.open-type.getUserInfo'))
      if (wx.canIUse("button.open-type.getUserInfo")) {
        // 用户版本可用
      } else {
        console.log("请升级微信版本");
      }
    },
    bindGetUserInfo(e) {
      // console.log(e.mp.detail.rawData)
      if (e.mp.detail.rawData) {
        //用户按了允许授权按钮
        console.log("用户按了允许授权按钮");
        this.getSetting();
      } else {
        //用户按了拒绝按钮
        console.log("用户按了拒绝按钮");
      }
    }
  },
  async created() {},
  async mounted() {
    // 一进来看看用户是否授权过
    this.getSetting();
    console.log("aaaaaaa");
  }
};
</script>

<style scoped>
</style>
