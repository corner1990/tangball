<template>
  <div class="main-wrap">
    <van-steps
        :steps="steps"
        :active="active"
      />
    <div v-show="active===0">
      <PersonInfo :info="info" @changeInfo="changeInfo" />
    </div>
    <div v-show="active===1">
      <EventInfo />
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
import mytabbar from '@/components/mytabbar/mytabbar'
import debug_item from '@/components/common/debug_item/debug_item'
import PersonInfo from '@/components/matchErooll/personInfo'
import EventInfo from '@/components/matchErooll/eventInfo'
import Dialog from '../../../static/vant/dialog/dialog';
import util from "@/utils/util";
export default {
  components: {
    mytabbar,
    debug_item,
    PersonInfo,
    EventInfo
  },
  data () {
    return {
      pageName: "比赛报名",
      btnText: '下一步',
      steps: [
        {
          text: '确认报名资料'
        },
        {
          text: '支付报名费'
        },
        {
          text: '完成缴费',
        }
      ],
      active: 0,
      info: {
        name: '高富帅', // 姓名
        phone: '15276513522', // 手机号
        age: 12,
        sex: '1',
        ballAge: '',
        career: '', // 职业
        idCard: '', // 身份证号
        matchId: 29, // 赛事id
        orderMoney: 1,
        memberId: '' // 报名会员id
      },
    }
  },
  async mounted () {
     // 请求赛事详情接口函数
    // let doc = await util.post({
    //   url: global.PUB.domain + "/crossDetail?page=tangball_match",
    //   param: { id: this.P1 }
    // });
    // console.log('this', this)
    // 页面加载请求会员数据
    this.initInfo();
  },
  methods: {
    nextStep () {
      if (this.active >= 1) {
        return this.showTip();
      }
      this.active = this.active + 1
      if(this.active === 1) {
        this.btnText = '立即报名'
      }
    },
    prevStep () {
      if (this.active <= 0) {
        return false;
      }
      this.active = this.active - 1
    },
    showTip () {
      Dialog.confirm({
        title: '参赛报名提醒',
        message: '你将要报名参加xxx赛事，xxxx时举办，报名费xxx元，一旦报名成功，将不在退还',
        asyncClose: true
      })
      .then(() => {
        return this.sendPay()
      })
      .catch(() => {
        Dialog.close()
      })
    },
    sendPay () {
      setTimeout(() => {
        Dialog.close()
      }, 1000)
      // 统一下单
      this.pay(this.info)
    },
    /**
     * @desc 统一下单
     */
    pay (info) {
      let data = {
        "total_fee": 0.01,
        "goodsNameAll": "abc",
        ...info
      }
      const self = this;
      wx.request({
        url: `${global.PUB.domain}/tangball/wxCreateOrder`,
        data,
        method: 'post',
        success (res) {
          let { statusCode, data } = res
          if (statusCode === 200) {
            let { data: chrildData } = data;
            self.funlyPay(JSON.parse(chrildData))
          }
        } 
      })
    },
    funlyPay (data) {
      let { msg, status, timestamp: timeStamp, ...args } = data
      if (status == 100) {
        wx.requestPayment({
          ...args,
          signType: 'MD5',
          timeStamp,
          success (res) {
            console.log('ok', res)
          },
          fail (err) {
            console.log('err', err)
          }
        })
      }
      console.log('data', data)
    },
    initInfo () {
      let { tangballUserInfo } = this.$store.state;
      let { name, sex, P1: memberId, openid: openId } = tangballUserInfo;
      this.info = { ...this.info, name, sex: `${sex}`, memberId, openId }
    },
    // 请求修改接口,修改成功跳转到首页
    async modifyMember(){
        let { data } = await util.post({
          url: global.PUB.domain + "/crossModify?page=tangball_member",
          param: {
            findJson: {openid: this.tangballUserInfo.openid},
            modifyJson:this.memberMessage
          }
        });
        wx.switchTab({url:"/pages/index/main"})
        wx.showToast({
        title: '修改成功',
        icon: 'success'
      })
    },
    /**
     * @desc 修改信息
     */
    changeInfo (info) {
      this.info = {...this.info, ...info}
    },
    getVenue () {},
    getEvent () {}
  }
}
</script>

<style scoped>
  .main-wrap{
    margin: 0 10px 100px;
  }
  .event-info{
    line-height: 30px;
    font-size: 16px;
  }
  .form-wrap{
    margin-top: 20px;
    line-height: 36px;
    font-size: 16px;
  }
  .form-wrap input{
    height: 36px;
  }
  .form-wrap .button{
    width: 100%;
  }
  .btn-wrap{
    margin-top: .533rem
  }
</style>
