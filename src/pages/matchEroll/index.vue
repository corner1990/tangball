<template>
  <div class="main-wrap">
    <div v-show="active <2||payStatus==2">
      <debug_item v-model="info" text="info" />
      <van-steps :steps="steps" :active="active" />
    </div>
    <div v-if="active === 0">
      <PersonInfo :info="info" @changeInfo="changeInfo" :matchInfo="objMatchInfo" :skipPage="skipPage"/>
    </div>
    <div v-if="active === 1">
      <EventInfo :info="info" :matchInfo="objMatchInfo" />
    </div>
    <div v-show="active === 2">
      <div v-if="payStatus==2">
        <EventInfo :info="info" :matchInfo="objMatchInfo" />
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
      skipPage:0,
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
    console.log("mounted###");
    this.skipPage=0;
    
    // 页面加载请求会员数据
    this.getMember();
  },
  onLoad(options) {
    console.log("onLoad#######");
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

    // 请求赛事详情接口函数
    // let doc = await util.post({
    //   url: global.PUB.domain + "/crossDetail?page=tangball_match",
    //   param: { id: this.P1 }
    // });
    // console.log('this', this)
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
      this.modifyMember();
      this.checkVerfiy();
    },
    prevStep() {
      if (this.active <= 0) {
        this.skipPage = 0;
        this.skipPage = 1
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
      let matchForm = this.objMatchInfo.matchForm
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
       async success(res) {
          let { statusCode, data } = res;
          if (statusCode === 200) {
            let { data: chrildData } = data;
            self.funlyPay(JSON.parse(chrildData));
          }
          console.log('res',res);
          if (matchForm == 2) {
            let groups = JSON.parse(wx.getStorageSync("groupsMsg"));
            if (!groups.orderId) {
              console.log('groups',res.data.orderId);
              
              groups.orderId = res.data.orderId
              let  data  = await util.post({
              url: global.PUB.domain + "/crossAdd?page=tangball_team",
              param: {
                data:groups
              }
            });
              console.log('data',data);
              
            }
          }
        }
      });
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
      let { matchId, venueId:cityVenueId } = this.matchInfo;
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
      console.log("this.info%", this.info);

      let { tangballUserInfo } = this.$store.state;
      console.log("tangballUserInfo%", tangballUserInfo);
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
