<template>
  <div>
    <swiper
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <block v-for="item in imgUrls" :key="item">
        <swiper-item>
          <image :src="item" class="slide-image" width="355" height="150"/>
        </swiper-item>
      </block>
    </swiper>
    <div class="card">
      <h3>合作场馆</h3>
      <div>
        <van-panel title="标题" desc="描述信息" status="状态"></van-panel>
      </div>
    </div>
    <van-button type="danger" @click="sendPay">支付</van-button>
    <mytabbar></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import mytabbar from '@/components/mytabbar/mytabbar'
import { post } from '@/utils/request'
export default {
  components: {
    mytabbar
  },
  data: {
    active: 1,
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
  },
  methods: {
    /**
     * @desc tab切换回调
     */
    tabChange(url) {
      console.log(url)
      wx.switchTab({
        url
      })
    },
    /**
     * @desc 发起支付
     */
    sendPay () {
      console.log('发起支付')
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
        url: `${global.PUB.domain}/paicheng/getCode`,
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
  onShow() {
    // `this` 指向 vm 实例
    // console.log('234')
  }
}
</script>
<style scaffold>
.main-wrap {
  padding-bottom: 60px;
}
.title {
  margin: 10px 20px;
  color: #333;
  border-bottom: 1px solid #000;
}
.card {
  margin: 0 10px;
}
</style>
