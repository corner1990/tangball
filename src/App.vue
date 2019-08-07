<script>
/* eslint-disable*/
import util from "@/utils/util";
//函数定义：{根据微信用户id初始化用户信息和学习数据}
export default {
  methods: {
    initByUserInfo: async function(res, js_code) {
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
