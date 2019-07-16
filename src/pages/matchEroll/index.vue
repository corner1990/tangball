<template>
  <div class="main-wrap">
    <swiper :indicator-dots="indicatorDots"
      :autoplay="autoplay" :interval="interval" :duration="duration">
      <block v-for="item in imgUrls" :key="item">
        <swiper-item>
          <image :src="item" class="slide-image" height="150"/>
        </swiper-item>
      </block>
    </swiper>
    <div class="event-info">
      <h3>赛事名称</h3>
      <p>比赛时间：2019-09-01</p>
      <p>比赛地点： 22223423424</p>
    </div>
    <div class="form-wrap">
      <form>
        <van-row>
          <van-col span="8" class="title">参赛人姓名</van-col>
          <van-col span="16"><input placeholder="参赛人姓名" /></van-col>
        </van-row>
        <van-row>
          <van-col span="8" class="title">手机号码</van-col>
          <van-col span="10"><input placeholder="手机号码" /></van-col>
          <van-col span="6"><van-button plain type="primary" size="small">获取验证码</van-button></van-col>
        </van-row>
        <van-row>
          <van-col span="8" class="title">报名费</van-col>
          <van-col span="16" class="price"></van-col>
        </van-row>
        <van-row class="button-wrap">
          <van-col span="24">
            <van-button type="info" block>立刻报名</van-button>
          </van-col>
        </van-row>
      </form>
    </div>
    <mytabbar></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import mytabbar from '@/components/mytabbar/mytabbar'
import debug_item from '@/components/common/debug_item/debug_item'

export default {
  components: {
    mytabbar, debug_item
  },
  data() {
    return {
      pageName: "比赛报名操作",
      imgUrls: [
        'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      ],
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000,
    }
  },

  methods: {

  },
  created() {
  }
}
</script>

<style scoped>
  .main-wrap{
    margin: 0 20px;
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
</style>
