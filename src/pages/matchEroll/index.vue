<template>
  <div class="main-wrap">
    <van-steps
        :steps="steps"
        :active="active"
      />
    <!-- <BingPhone v-show="0" /> -->
    <!-- <PersonInfo /> -->
    <EventInfo />
    <div class="btn-wrap" v-show="active < 3">
      <van-row>
        <van-col span="11">
          <van-button type="info" plain block @click="prevStep">上一步</van-button>
        </van-col>
        <van-col span="11" offset="2">
          <van-button type="info" block @click="nextStep">{{btnText}}</van-button>
        </van-col>
      </van-row>
    </div>
    <div class="form-wrap" v-show="active >= 3">      
      <form>
        <van-row class="button-wrap">
          <van-col span="24">
            <van-button type="info" block @click="showTip">立刻报名</van-button>
          </van-col>
        </van-row>
      </form>
    </div>
    <van-dialog id="van-dialog" />
    <mytabbar></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import mytabbar from '@/components/mytabbar/mytabbar'
import debug_item from '@/components/common/debug_item/debug_item'
import BingPhone from '@/components/matchErooll/bindPhine'
import PersonInfo from '@/components/matchErooll/personInfo'
import EventInfo from '@/components/matchErooll/eventInfo'
import Dialog from '../../../static/vant/dialog/dialog';
export default {
  components: {
    mytabbar,
    debug_item,
    BingPhone,
    PersonInfo,
    EventInfo
  },
  data () {
    return {
      pageName: "比赛报名",
      btnText: '下一步',
      steps: [
        {
          text: '绑定手机'
        },
        {
          text: '基本信息'
        },
        {
          text: '确认信息'
        },
        {
          text: '完成缴费',
        }
      ],
      active: 0
    }
  },

  methods: {
    nextStep () {
      if (this.active >= 3) {
        return false;
      }
      this.active = this.active + 1
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
      });
    },
    sendPay () {
      setTimeout(() => {
        Dialog.close()
      }, 1000)
      let self = this;
      wx.getStorage({
        key: 'ids',
        success (res) {
          let ids = JSON.parse(res.data)
          self.pay(ids.openid)
        }
      })
    },
    pay (openId) {
      let data = {
        "total_fee": 0.01,
        openId,
        "goodsNameAll": "abc"
      }
      const self = this;
      wx.request({
        url: 'https://e6234kn.hn3.mofasuidao.cn/paicheng/getCode',
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
    }
  },
  created() {
  }
}
</script>

<style scoped>
  .main-wrap{
    margin: 0 10px;
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
