<template>
  <div class="main-wrap">
    <div v-show="active <2||payStatus==2">
      <debug_item v-model="info" text="info" />
      <van-steps :steps="steps" :active="active" />
    </div>
    <div v-if="active === 0">
      <PersonInfo
        :info="info"
        @changeInfo="changeInfo"
        :matchInfo="objMatchInfo"
        :skipPage="skipPage"
        :groupGame="groupGame"
        :groups="groups"
      />
    </div>
    <div v-if="active === 1">
      <EventInfo :info="info" :matchInfo="objMatchInfo" :groupGame="groupGame" :groups="groups" />
    </div>
    <div v-show="active === 2">
      <div v-if="payStatus==2">
        <EventInfo :info="info" :matchInfo="objMatchInfo" :groupGame="groupGame" :groups="groups" />
        <div class="icon_success">
          <div class="__success">
            <van-icon name="success" color="#07c160" size="32px" />
          </div>
          <div class="__span">已支付</div>
        </div>
      </div>
      <End :info="state" v-else />
    </div>
    <div class="btn-wrap" v-show="active < 2">
      <!-- <van-row v-if="payStatus==2"></van-row> -->
      <van-row v-if="payStatus==1">
        <van-button size="large" type="info" @click="nextStep">立即支付</van-button>
      </van-row>
      <van-row v-if="payStatus==0">
        <van-col span="11">
          <van-button type="info" plain block @click="prevStep">上一步</van-button>
        </van-col>
        <van-col span="11" offset="2">
          <van-button type="info" block @click="nextStep">{{btnText}}</van-button>
        </van-col>
      </van-row>
    </div>
    <van-dialog id="van-dialog" />
    <mytabbar></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import mytabbar from "@/components/mytabbar/mytabbar";
import debug_item from "@/components/common/debug_item/debug_item";
import PersonInfo from "@/components/matchErooll/personInfo";
import EventInfo from "@/components/matchErooll/eventInfo";
import End from "@/components/matchErooll/end";
import Dialog from "../../../static/vant/dialog/dialog";
import util from "@/utils/util";
export default {
  components: {
    mytabbar,
    debug_item,
    PersonInfo,
    EventInfo,
    End
  },
  data() {
    return {
      groups: {},
      groupGame: false,
      skipPage: 0,
      payStatus: 0, //是否为已支付状态
      objMatchInfo: {}, //存储赛事信息
      matchInfo: {}, //存储赛事信息
      pageName: "比赛报名",
      btnText: "下一步",
      steps: [
        {
          text: "确认报名资料"
        },
        {
          text: "支付报名费"
        },
        {
          text: "完成缴费"
        }
      ],
      active: 0,
      info: {},
      state: {
        errMsg: ""
      }
    };
  },
  mounted() {
    this.skipPage = 0;

    // 页面加载请求会员数据
    this.getMember();
  },
  onLoad(options) {
    // 缓存赛事信息
    // 如果是从报名列表进入
    if (options.id == 2) {
      let data = JSON.parse(wx.getStorageSync("myErollDetail"));
      if (data) {
        let { info, matchInfo, P1 } = data;
        this.info = info;
        this.objMatchInfo = matchInfo;
        this.payStatus = this.info.payStatus;
        this.active = this.info.payStatus;
      }
    } else {
      //  如果是从赛事详情进入
      this.objMatchInfo = JSON.parse(wx.getStorageSync("matchInfo"));
    }
    if (this.objMatchInfo.matchForm == 2) {
      this.groupGame = true;
      this.groups = JSON.parse(wx.getStorageSync("groupsMsg"));
    } else {
      this.groupGame = false;
      // this.groups = JSON.parse(wx.getStorageSync("groupsMsg"));
    }

    // 请求赛事详情接口函数
    // let doc = await util.post({
    //   url: global.PUB.domain + "/crossDetail?page=tangball_match",
    //   param: { id: this.P1 }
    // });
  },
  methods: {
    nextStep() {
      if (this.active >= 1) {
        return this.showTip();
      }
      if (this.active === 0 && !this.info.verfiy) {
        return Dialog.alert({
          title: "提示",
          message: "请先获取并且输入验证码"
        });
      }
      if (
        this.active === 0 &&
        !this.info.name &&
        this.objMatchInfo.matchForm == 1
      ) {
        return Dialog.alert({
          title: "提示",
          message: "姓名不能为空"
        });
      }
      this.modifyMember();
      this.checkVerfiy();
    },
    prevStep() {
      if (this.active <= 0) {
        this.skipPage = 0;
        this.skipPage = 1;
        wx.navigateBack();
        return false;
      }
      this.btnText = "下一步";
      this.active = this.active - 1;
    },
    async checkVerfiy() {
      let { phone: mobile, verfiy: vCode } = this.info;
      let { data } = await util.post({
        url: global.PUB.domain + "/tangball/checkMobileVCode",
        param: { mobile, vCode }
      });
      if (data.code !== 0) {
        return Dialog.alert({
          title: "错误提醒",
          message: data.message
        });
      }
      this.active = this.active + 1;
      if (this.active === 1) {
        this.btnText = "立即报名";
      }
    },
    showTip() {
      // let data = wx.getStorageSync("matchInfo");
      // let { matchName, matchTime, total_fee } = JSON.parse(data);
      let { matchName, matchTime, total_fee } = this.objMatchInfo;
      Dialog.confirm({
        title: "参赛报名提醒",
        message: `你将要报名参加${matchName}，${matchTime} 时举办，报名费${total_fee}元，一旦报名成功，将不再退还`,
        asyncClose: true
      })
        .then(() => {
          return this.sendPay();
        })
        .catch(() => {
          Dialog.close();
        });
    },
    async sendPay() {
      setTimeout(() => {
        Dialog.close();
      }, 1000);
      // 统一下单

      let { data } = await util.post({
        url: global.PUB.domain + "/crossList?page=tangball_enroll",
        param: {
          findJson: {
            matchId: this.objMatchInfo.P1,
            memberId: this.tangballUserId
          }
        }
      });
      if (data.list.length == 0 || data.list[0].payStatus == 1) {
        this.pay(this.info);
      } else {
        wx.navigateTo({
          url: `/pages/matchDetail/main?id= ${this.objMatchInfo.P1}`
        });
        wx.showToast({
          title: "您已报名，无法再次报名",
          icon: "none"
        });
      }
      // this.pay(this.info);
    },
    /**
     * @desc 统一下单
     */
    async pay(info) {
      let matchInfo = await JSON.parse(wx.getStorageSync("matchInfo"));
      let { total_fee } = this.objMatchInfo;
      let matchForm = this.objMatchInfo.matchForm;
      let data = {
        total_fee,
        goodsNameAll: "abcd",
        ...info
      };
      const self = this;
      //Q1:订单总价是0
      if (total_fee == 0) {
        let orderId = `${new Date().valueOf()}${this.tangballUserId}${
          this.objMatchInfo.P1
        }`;
        let time = global.moment().format("YYYY-MM-DD HH:mm");
        let addData = await util.post({
          url: global.PUB.domain + "/crossAdd?page=tangball_enroll",
          param: {
            data: {
              additStatus: 1,
              payStatus: 2,
              time,
              cityVenueId: matchInfo.venueId,
              memberId: this.tangballUserId,
              matchId: this.objMatchInfo.P1,
              orderId,
              orderMoney: 0
            }
          }
        });
   

        if (matchForm == 2) {
          let groups = JSON.parse(wx.getStorageSync("groupsMsg"));
       
          data.playingTime = groups.playingTime; //***补充用户选择的比赛日期

          if (!groups.orderId) {

            groups.orderId = res.data.orderId;
            let data = await util.post({
              url: global.PUB.domain + "/crossAdd?page=tangball_team",
              param: {
                data: groups
              }
            });
          }
        }
        //     wx.showToast({
        //   title: "报名成功",
        //   icon: "success"
        // });
        setInterval(() => {
          this.active = 2;
        }, 1000);
      } else {
        //Q2:订单总价非0
        let groups = JSON.parse(wx.getStorageSync("groupsMsg"));
        data.playingTime = groups.playingTime; //补充用户选择的比赛日期
        wx.request({
          url: `${global.PUB.domain}/tangball/wxCreateOrder`,
          data,
          method: "post",
          async success(res) {
            let { statusCode, data } = res;
            if (statusCode === 200) {
              let { data: chrildData } = data;
              self.funlyPay(JSON.parse(chrildData));
            }
            if (matchForm == 2) {
              

              if (!groups.orderId) {

                groups.orderId = res.data.orderId;
                let data = await util.post({
                  url: global.PUB.domain + "/crossAdd?page=tangball_team",
                  param: {
                    data: groups
                  }
                });
              }
            }
          }
        });
      }
    },
    endStep(state) {
      this.state = state;
      this.active = this.active + 1;
      let { errMsg } = this.state;
      let reg = /fail/g;
      this.iconShow = reg.test(errMsg);
      this.payStatus = 1;
      if (!this.iconShow) {
        // 如果支付成，是显示为已支付
        this.payStatus = 2;
        this.active = 2;
      }
    },
    funlyPay(data) {
      let { msg, status, timestamp: timeStamp, ...args } = data;
      let self = this;
      if (status == 100) {
        wx.requestPayment({
          ...args,
          signType: "MD5",
          timeStamp,
          success(res) {
            self.endStep(res);
          },
          fail(err) {
            self.endStep(err);
          }
        });
      }
    },
    initInfo() {
      let matchInfo = wx.getStorageSync("matchInfo");
      this.matchInfo = JSON.parse(matchInfo);
      let { tangballUserInfo } = this.$store.state;
      wx.self = this;
      let { matchId, venueId: cityVenueId } = this.matchInfo;
      let {
        P1: memberId,
        name,
        sex = -1,
        openid: openId,
        phone,
        career,
        ballAge
      } = tangballUserInfo;
      this.info = {
        ...this.info,
        name,
        sex: `${sex}`,
        memberId,
        openId,
        phone,
        career,
        matchId,
        cityVenueId,
        ballAge
      };
      switch (this.info.ballAge) {
        case 1:
          this.info.ballAgeText = "一年以下";
          break;
        case 2:
          this.info.ballAgeText = "一到三年";
          break;
        case 3:
          this.info.ballAgeText = "三到五年";
          break;
        case 4:
          this.info.ballAgeText = "五到十年";
          break;
        case 5:
          this.info.ballAgeText = "十年以上";
          break;

        default:
          this.info.ballAgeText = "请选择";
          break;
      }
    },
    // 请求会员接口
    async getMember() {
      let { tangballUserInfo } = this.$store.state;
      let { data } = await util.post({
        url: global.PUB.domain + "/crossDetail?page=tangball_member",
        param: {
          findJson: {
            openid: tangballUserInfo.openid
          }
        }
      });
      this.initInfo(data.Doc);
    },
    askAndGoBack() {},
    // 请求修改接口,修改成功跳转到首页
    async modifyMember() {

      let { tangballUserInfo } = this.$store.state;
      let { data } = await util.post({
        url: global.PUB.domain + "/crossModify?page=tangball_member",
        param: {
          findJson: { openid: tangballUserInfo.openid },
          modifyJson: this.info
        }
      });
      //合并对象,因为this.info里面的信息可能跟tangballUserInfoNew不一致，比如openid的大小写
      let tangballUserInfoNew = Object.assign(tangballUserInfo, this.info); //
      this.$store.commit("setTangballUserInfo", tangballUserInfoNew);
    },
    /**
     * @desc 修改信息
     */
    changeInfo(info) {
      this.info = { ...this.info, ...info };
    },
    /**
     * @desc 还原默认状态
     */
    changeState() {
      this.btnText = "下一步";
      this.info = {};
      this.active = 0;
      this.payStatus = 0;
      this.state = {
        errMsg: ""
      };
    }
  },

  onUnload: function() {
    // 页面销毁时执行
    this.skipPage = 0;
    this.skipPage = 1;
    this.changeState();
  },
  computed: {
    // 当前会员id
    tangballUserId: function() {
      return this.$store.state.tangballUserInfo.P1;
    }
  }
};
</script>
<style scoped>
.main-wrap {
  margin: 0 10px;
  padding-bottom: 100px;
}
.event-info {
  line-height: 30px;
  font-size: 16px;
}
.form-wrap {
  margin-top: 20px;
  line-height: 36px;
  font-size: 16px;
}
.form-wrap input {
  height: 36px;
}
.form-wrap .button {
  width: 100%;
}
.btn-wrap {
  margin-top: 0.533rem;
}
.icon_success {
  width: 100%;
  border: 1px solid #009b4d;
  color: #009b4d;
  font-size: 18px;
  text-align: center;
}
.icon_success .__success {
  padding: 10px 2px 5px 0;
  display: inline-block;
}
.icon_success .__span {
  vertical-align: middle;
  box-sizing: border-box;
  margin-top: -30px;
  display: inline-block;
}
</style>
