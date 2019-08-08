<template>
  <div class="main-wrap">
    <div v-show="active < 2">
      <van-steps :steps="steps" :active="active" />
    </div>
    <div v-if="active === 0">
      <PersonInfo :info="info" @changeInfo="changeInfo" :matchInfo="objMatchInfo" />
    </div>
    <div v-show="active === 1">
      <EventInfo :info="info" :matchInfo="objMatchInfo" />
    </div>
    <div v-show="active === 2">
      <End :info="state" />
    </div>
    <div class="btn-wrap" v-show="active < 2">
      <van-row>
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
      objMatchInfo: {}, //存储赛事信息
      matchInfo: {}, //存储赛事信息
      pageName: "比赛报名",
      btnText: "下一步",
      steps: [
        {
          text: '确认报名资料'
        },
        {
          text: '支付报名费'
        },
        {
          text: '完成缴费'
        }
      ],
      active: 2,
      info: {},
      state: {
        errMsg: ""
      }
    };
  },
  mounted() {
    // 缓存赛事场馆信息，用于传给PersonInfo组件
    this.objMatchInfo = JSON.parse(wx.getStorageSync("matchInfo"));

    // 请求赛事详情接口函数
    // let doc = await util.post({
    //   url: global.PUB.domain + "/crossDetail?page=tangball_match",
    //   param: { id: this.P1 }
    // });
    // console.log('this', this)
    // 页面加载请求会员数据
    this.getMember()
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
      this.checkVerfiy();
    },
    prevStep() {
      if (this.active <= 0) {
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
      let data = wx.getStorageSync("matchInfo");
      let { matchName, matchTime, total_fee } = JSON.parse(data);
      Dialog.confirm({
        title: "参赛报名提醒",
        message: `你将要报名参加${matchName}，${matchTime} 时举办，报名费${total_fee}元，一旦报名成功，将不在退还`,
        asyncClose: true
      })
        .then(() => {
          return this.sendPay();
        })
        .catch(() => {
          Dialog.close();
        });
    },
    sendPay() {
      setTimeout(() => {
        Dialog.close();
      }, 1000);
      // 统一下单
      this.pay(this.info);
    },
    /**
     * @desc 统一下单
     */
    pay(info) {
      let data = {
        total_fee: 0.01,
        goodsNameAll: "abc",
        ...info
      };
      const self = this;
      wx.request({
        url: `${global.PUB.domain}/tangball/wxCreateOrder`,
        data,
        method: "post",
        success(res) {
          let { statusCode, data } = res;
          if (statusCode === 200) {
            let { data: chrildData } = data;
            self.funlyPay(JSON.parse(chrildData));
          }
        }
      });
    },
    endStep(state) {
      this.state = state;
      this.active = this.active + 1;
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
      let { matchId, venueId } = this.matchInfo;
      let {
        P1: memberId,
        name,
        sex = -1,
        openid: openId,
        phone,
        career
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
        venueId
      };
    },
    // 请求会员接口
    async getMember () {
      let { tangballUserInfo } = this.$store.state;
      let { data } = await util.post({
        url: global.PUB.domain + '/crossDetail?page=tangball_member',
        param: {
          findJson: {
            openid: tangballUserInfo.openid
          }
        }
      })
      this.initInfo(data.Doc)
    },
    askAndGoBack () {},
    // 请求修改接口,修改成功跳转到首页
    async modifyMember () {
      util.post({
        url: global.PUB.domain + '/crossModify?page=tangball_member',
        param: {
          findJson: { openid: this.tangballUserInfo.openid },
          modifyJson: this.memberMessage
        }
      })
    },
    /**
     * @desc 修改信息
     */
    changeInfo(info) {
      this.info = { ...this.info, ...info }
    },
    /**
     * @desc 还原默认状态
     */
    changeState() {
      this.btnText =  '下一步'
      this.info = {}
      this.active = 0
      this.state = {
        errMsg: ''
      }
    }
  },

  onUnload: function() {
    // 页面销毁时执行
    this.changeState()
  },
}
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
</style>
