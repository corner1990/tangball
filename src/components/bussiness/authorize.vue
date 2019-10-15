<template>
  <div class="PL20 PR20">
    <!-- <van-button type="primary" size="small" @click="ajaxVenueList" class="MR10">获取场馆列表</van-button> -->
    <van-button
      type="primary"
      size="large"
      open-type="getUserInfo"
      @getuserinfo="bindGetUserInfo"
      @click="getUserInfo1"
    >获取权限</van-button>
    <!--绑定手机号弹窗-->
    <van-dialog :show="getPhoneNumberShow" title="提示" use-slot :show-confirm-button="false">
      <p class="getNumberTip">为了方便您查询比赛成绩，唐球邀请您绑定手机号！</p>
      <div class="button-box">
        <van-button
          class="phone-button"
          type="primary"
          size="small"
          @click="closePhoneDialog"
          block
        >取消</van-button>
        <!--获取手机号按钮-open-type="getPhoneNumber"-->
        <van-button
          class="phone-button"
          type="primary"
          size="small"
          open-type="getPhoneNumber"
          @getphonenumber="getPhoneNumber"
          block
        >确定</van-button>
      </div>
    </van-dialog>
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
      getPhoneNumberShow: false,
      name: "demo名称", //手机号码
      JumpId: null //当是详情页跳转的时候需要缓存当前的赛事id
    };
  },
  methods: {
    async closePhoneDialog() {
      this.getPhoneNumberShow = false;
      if (this.JumpId) {
        // 如果是从赛事进来的，那么获取权限之后，需要跳转回当前的赛事

        let url = `/pages/matchDetail/main?id=${this.JumpId}`; //拼接当前的赛事id
        wx.authorizeJump = true; //获取权限时候可以跳转
        await util.getMyWXSetting(url);
      } else {
        await util.getMyWXSetting(); //跳转至首页
      }
    },
    //函数：{判断是当前唐球用户是否有手机号的函数}
    async existPhone() {
      //这个一定要放前面，确保ids和"tangballUserInfo"先加载下来
      await util.loginAndInitUser(this); //函数：{登录并ajax初始化用户信息的函数}

      console.log("method:existPhone-判断是当前唐球用户是否有手机号的函数");
      wx.hideTabBar({
        complete() {}
      });

      //从Storage中获取tangballUserInfo
      let tangballUserInfo = wx.getStorageSync("tangballUserInfo")||{};
      console.log("tangballUserInfo:", tangballUserInfo);

      let { phone } = JSON.parse(tangballUserInfo);
      console.log("phone:", phone);

      if (!phone) {
        this.updataGetPhoneNumberShow(true);
      } else {
        if (this.JumpId) {
          // 如果是从赛事进来的，那么获取权限之后，需要跳转回当前的赛事
          let url = `/pages/matchDetail/main?id=${this.JumpId}`; //拼接当前的赛事id
          wx.authorizeJump = true; //获取权限时候可以跳转
          await util.getMyWXSetting(url);
        } else {
          await util.getMyWXSetting(); //跳转至首页
        }
      }
    },
    /**
     * @desc 获取手机号回调函数
     */
    async getPhoneNumber(e) {
      console.log("method:getPhoneNumber");
      console.log("e.target:", e.target);
      let { errMsg } = e.target;

      if (errMsg.indexOf("ok") < 0) {
        //Q1：{000}000
        this.getPhoneNumberShow = false;

        return setTimeout(() => {
          //？？？这里延迟1秒
          this.getPhoneNumberShow = true;
        }, 1000);
      } else {
        if (this.JumpId) {
          // 如果是从赛事进来的，那么获取权限之后，需要跳转回当前的赛事

          let url = `/pages/matchDetail/main?id=${this.JumpId}`; //拼接当前的赛事id
          wx.authorizeJump = true; //获取权限时候可以跳转
          await util.getMyWXSetting(url);
        } else {
          await util.getMyWXSetting(); //？？跳转至首页
        }
      }
      this.updataPhone(e.target); //调用：{获取手机号用户点击同意时回调函数}
    },
    /**
     * @desc 获取手机号时用户点击同意时回调函数
     */
    updataPhone(data) {
      console.log("method:updataPhone-获取手机号时用户点击同意时回调函数-");
      let { encryptedData, iv } = data;
      let self = this;

      let ids = wx.getStorageSync("ids");
      console.log("ids:", ids);
      //注意，这个时间点可能ids还没获取下来
      let { session_key, openid } = JSON.parse(ids);
      console.log("session_key:", session_key);
      let param = { session_key, openid, encryptedData, iv };
      this.sendPhoneData(param); //调用：{发送手机号到后端的函数}

      // wx.getStorage({
      //   key: "ids",
      //   success(res) {
      //     console.log("wx.getStorage-ids成功");
      //     let { session_key, openid } = JSON.parse(res.data);
      //     let param = { session_key, openid, encryptedData, iv };
      //     self.sendPhoneData(param);
      //   }
      // });
    },
    //发送手机号到后端的函数
    sendPhoneData(param) {
      console.log("method:sendPhoneData-发送手机号到后端的函数");
      util
        .post({
          url: `${global.PUB.domain}/tangball/encodePhoneNumber`,
          param
        })
        .then(res => {
          let { code } = res.data;
          let aaaa = { phone: "11111" };
          if (code === 0) {
            this.getPhoneNumberShow = false;
            // 防止一直弹出绑定手机弹窗
            wx.setStorage({
              key: "tangballUserInfo",
              data: JSON.stringify(aaaa)
            });
          }
        });
      // 测试代码， 调试接口的时候删除
      // this.getPhoneNumberShow = false;
    },
    //变量：{显示或关闭绑定手机号弹窗函数}
    updataGetPhoneNumberShow(getPhoneNumberShow) {
      console.log("getPhoneNumberShow:", getPhoneNumberShow);
      console.log("method:updataGetPhoneNumberShow");
      this.getPhoneNumberShow = getPhoneNumberShow;
    },
    getUserInfo1() {
      //获取用户信息的函数-弹出微信授权弹窗
      console.log("method:getUserInfo1");
      // 判断小程序的API，回调，参数，组件等是否在当前版本可用。  为false 提醒用户升级微信版本
      // console.log(wx.canIUse('button.open-type.getUserInfo'))
      if (wx.canIUse("button.open-type.getUserInfo")) {
        // 用户版本可用
      } else {
        console.log("请升级微信版本");
      }
    },
    //用户操作授权后的回调
    async bindGetUserInfo(e) {
      console.log("method:bindGetUserInfo-用户操作授权后的回调");
      if (e.mp.detail.rawData) {
        console.log("用户按了允许授权按钮");
        //用户按了允许授权按钮
        await this.existPhone();
      } else {
        //用户按了拒绝按钮
        console.log("用户按了拒绝按钮");
      }
    }
  },
  async created() {},
  async mounted() {
    // 一进来看看用户是否授权过
    // util.getMyWXSetting();
  },
  onLoad(options) {
    if (options.id) {
      this.JumpId = options.id;
    }
  }
};
</script>
<style scoped>
.button-box {
  display: flex;
  margin-left: 5px;
}
.phone-button {
  flex: 0 0 43%;
  margin: 10px 10px;
}
.getNumberTip {
  margin: 10px 10px;
}
</style>
