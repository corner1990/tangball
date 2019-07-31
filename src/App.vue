<script>
/* eslint-disable*/

import util from "@/utils/util";
//函数定义：{根据微信用户id初始化用户信息和学习数据}

/****************************将微信的一些异步接口转成promise，支持同步的写法-START****************************/
let wxLogin = util.wxPromisify(wx.login);
let wxGetUserInfo = util.wxPromisify(wx.getUserInfo);
/****************************将微信的一些异步接口转成promise，支持同步的写法-END****************************/

// var initByUserInfo =

export default {
  methods: {
    initByUserInfo: async function(res, js_code) {
      console.log("initByUserInfo####");
      wx.showLoading({
        title: "请求openId"
        // mask: true,
      });

      var iv = encodeURIComponent(res.iv);
      var encryptedData = encodeURIComponent(res.encryptedData);
      console.log("js_code", js_code);
      console.log("iv", iv);
      console.log("encryptedData", encryptedData);

      try {
        /**
         * ajax请求微信用户信息
         */
        let { data } = await util.post({
          url: global.PUB.domain + "/tangball/getWXUser",
          param: {
            js_code,
            iv,
            encryptedData
          }
        });

        console.log("data######", data);

        wx.setStorage({
          //存储ids到storeage
          key: "ids",
          data: JSON.stringify(data.data1)
        });
        wx.hideLoading();

        //来自vuex的当前行数据
        // this.$store.state.listState[this.cf.listIndex].row;

        console.log("this.$store.commit");
        this.$store.commit("setUserInfo", data.data2);
      } catch (err) {
        wx.showLoading({
          title: "请求openId失败"
        });
      }
    }
  },
  async created() {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */
    /****************************日志存储-START****************************/
    let logs;
    if (mpvuePlatform === "swan") {
      logs = mpvue.getStorageSync({ key: "logs" }).data || [];
      logs.unshift(Date.now());
      mpvue.setStorageSync({
        //日志
        key: "logs",
        data: logs
      });
    } else {
      logs = mpvue.getStorageSync("logs") || [];
      logs.unshift(Date.now());
      mpvue.setStorageSync("logs", logs);
    }
    /****************************日志存储-END****************************/

    /****************************微信会员登录和信息存储-START****************************/
    //let res = await util.wxLogin();//这一句不行，很奇怪
    let resLogin = await wxLogin(); //微信会员登录
    console.log("resLogin", resLogin);
    let js_code = resLogin.code; //当前用户的微信code

    if (js_code) {
      //Q1：{当前用户的微信code}存在
      let resUserInfo = await wxGetUserInfo(); //微信会员登录
      console.log("getUserInfo成功");
      await this.initByUserInfo(resUserInfo, js_code); //调用：{根据用户信息初始化dmagic用户信息和学习数据}
    } else {
      //Q2：{当前用户的微信code}不存在
      console.log("登录失败！" + res.errMsg);
    }
    /****************************微信会员登录和信息存储-END****************************/
  },
  log() {
    console.log(`log at:${Date.now()}`);
  },
  onShow() {
    wx.hideTabBar();
  }
};
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
