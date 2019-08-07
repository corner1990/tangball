<template>
  <section>
    <h3 class="info-title">个人信息</h3>
     <debug_item v-model="info" text="info"/>
    <van-cell-group>
      <van-field
        :value="selfInfo.name"
        type="text"
        label="姓名"
        placeholder="请输入姓名"
        required
        @change="nameChange"
      />
      <div class="flex line">
        <title class="sub-title">性别</title>
        <radio-group class="radio-group" @change="onRadioChange" >
          <label class="radio">
            <radio value="1" :checked="selfInfo.sex=== '1'"/>男
          </label>
          <label class="radio">
            <radio value="2" :checked="selfInfo.sex=== '2'"/>女
          </label>
        </radio-group>
      </div>
      <van-field
        :value="selfInfo.phone"
        label="联系电话"
        @blur="phoneChange"
        placeholder="请输入手机号"
      />
      <div class="flex line">
        <p class="sub-title">球龄</p>
        <div @click="selectAge">
          <input type="text" class="tangBallInput" v-model="selfInfo.ballAge" placeholder="请输入球龄">
        </div>
      </div>
      <van-field
        :value="selfInfo.career"
        label="职业"
        placeholder="请输入职业"
        @blur="careerChange"
      />
    </van-cell-group>
    <h3 class="info-title event-info">赛事及场馆信息</h3>
    <div class="flex line">
      <p class="sub-title">赛事名称</p>
      <div>{{ matchInfo.matchName }}</div>
    </div>
    <div class="flex line">
      <p class="sub-title">赛事时间</p>
      <div>{{ matchInfo.matchTime }}</div>
    </div>
    <div class="flex line">
      <p class="sub-title" style="width: 90px;">赛事地点</p>
      <div>{{ matchInfo.cityName }} {{ matchInfo.venueName }}</div>
    </div>
    <div class="flex line">
      <title class="sub-title">报名费</title>
      <div><span class="price">{{ matchInfo.total_fee }} (元)</span></div>
    </div>
    <van-cell-group>
      <van-field
        :value="sms"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
        required
        @blur="verfiyChange"
        use-button-slot
      >
        <van-button slot="button" size="small" type="info" @click="waitTime">{{sendText}}</van-button>
      </van-field>
    </van-cell-group>
    <!-- 选择球龄 -->
    <van-popup
     :show="showSelectBallAge"
     @close="hideSelectBallAge"
     position="bottom"
    >
      <van-picker
        show-toolbar
        title="选择球龄"
        :columns="columns"
        @cancel="hideSelectBallAge"
        @confirm="onSelectChange"
      />
    </van-popup>
    <van-toast id="van-toast" />
  </section>
</template>
<script>
/* eslint-disable */
import util from '@/utils/util'
import debug_item from "@/components/common/debug_item/debug_item";
import Toast from '../../../static/vant/toast/toast';
export default {
  components: {
    debug_item,
  },
  data () {
    return {
      radio: '1',
      showSelectBallAge: false,
      selectVal: '',
      columns: ['1-3年', '3-5年', '5年以上'],
      sexList: [
        {name: '男', value: '1'},
        {name: '女', value: '2'}
      ],
      timer: 0,
      num: 0,
      matchInfo: {
        matchName: '',
        matchTime: '未确定',
        total_fee: 'xxx',
        venueName: '',
        cityName: ''
      },
      sendText: '发送验证码',
      sendTime: 60
    }
  },
  // {"matchId":37,"venueId":76,"venueName":"深圳南山场馆3","cityName":"深圳"}
  mounted () {
    // 获取赛事数据
    let data = wx.getStorageSync('matchInfo')
    if (data) {
      this.matchInfo = JSON.parse(data)
    }

    // Toast.loading({
    //   mask: true,
    //   message: '加载中...'
    // })
  },
  watch: {
    // info: {
    //   handler (info, oldName) {
    //     console.log('info12212', info)
    //   },
    //   immediate: true,
    //   deep: true
    // }
  },
  computed: {
    selfInfo () {
      return this.info
    }
  },
  props: ['info'],
  methods: {
    onRadioChange (radio) {
      this.info.sex = radio.target.value
      this.$emit('changeInfo', {
        sex: radio.target.value
      })
    },
    selectAge () {
      this.showSelectBallAge = true
    },
    hideSelectBallAge () {
      this.showSelectBallAge = false
    },
    onSelectChange (e) {
      let { value, index } = e.target
      this.selectIndex = index
      this.info.ballAge = value
      this.$emit('changeInfo', {
        ballAge: value
      })
      this.hideSelectBallAge()
    },
    waitTime () {
      let { phone: mobile } = this.info;
      if (!mobile) {
        return Toast.fail('手机号不能为空！');
      }
      if (this.sendTime === 60) {
        this.getVerfity(mobile)
      }
      if (this.sendTime <= 1) {
        this.sendTime = 60
        this.sendText = '发送验证码'
        return false
      }
      // debugger
      this.sendTime -= 1
      this.sendText = `${this.sendTime}秒后重新获取`
      setTimeout(() => {
        this.waitTime()
      }, 300);
    },
    getVerfity (mobile) {
      // 请求赛事列表接口函数
      util.post({
        url: `${global.PUB.domain}/tangball/sendMobileVCode`,
        param: { mobile }
      })
    },
    verfiyChange (e) {
      this.$emit('changeInfo', {
        verfiy: e.mp.detail.value
      })
    },
    nameChange (e) {
      let name = e.mp.detail.value
      this.$emit('changeInfo', {
        name
      })
    },
    phoneChange (e) {
      let phone = e.mp.detail.value
      this.$emit('changeInfo', {
        phone
      })
    },
    careerChange (e) {
      let career = e.mp.detail.value
      this.$emit('changeInfo', {
        career
      })
    }
  }
}
</script>
<style scoped>
  .flex{
    display: flex;
    justify-content: space-between;
  }
  .line{
    justify-content: flex-start;
    align-items: center;
    min-height: 44px;
    line-height: 26px;
    margin-left: 15px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    text-indent: .053rem;
    color: #333;
  }
  .line .sub-title{
    width: 80px;
    margin-right: 10px;
  }
  .radio-wrap{
    width: 2.667rem;
    justify-content: space-around;
  }
  .radio-wrap .radio-item{
    width: .667rem;
  }
  .info-title{
    font-size: 18px;
    line-height: .6rem;
    font-weight: 700;
    color: #333;
  }
  .tangBallInput{
    font-size: .373rem;
  }
  .event-info{
    margin-top: .8rem;
  }
</style>
