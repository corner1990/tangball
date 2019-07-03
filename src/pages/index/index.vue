<template>
  <div class="main-wrap">
    <swiper :indicator-dots="indicatorDots"
      :autoplay="autoplay" :interval="interval" :duration="duration">
      <block v-for="item in imgUrls" :key="item">
        <swiper-item>
          <image :src="item" class="slide-image" width="355" height="150"/>
        </swiper-item>
      </block>
    </swiper>
    <van-search
    :value="value"
      placeholder="请输入搜索关键词"
      use-action-slot
      bind:search="onSearch"
    />
    <div class="card">
      <h3>赛事</h3>
      <van-tabs :active="active" bind:change="onChange">
        <van-tab title="近期">
          <van-card
            tag="111"
            desc="描述信息"
            title="商品标题"
            thumb="111"
          />
        </van-tab>
        <van-tab title="全国">
          <van-card
            tag="222"
            desc="描述信息"
            title="商品标题"
            thumb="111"
          />
        </van-tab>
        <van-tab title="加盟商">
          <van-card
            tag="333"
            desc="描述信息"
            title="商品标题"
            thumb="111"
          />
        </van-tab>
        <van-tab title="全部">
          <van-card
            tag="444"
            desc="描述信息"
            title="商品标题"
            thumb="111"
          />
        </van-tab>
      </van-tabs>
    </div>
    <div class="card">
      <h3>唐球达人</h3>
      <div>
        <van-panel title="标题" desc="描述信息" status="状态">
          <view>内容</view>
        </van-panel>
      </div>
    </div>
    <div class="card">
      <h3>互动节目</h3>
      <div>
        <van-panel title="标题" desc="描述信息" status="状态">
          <view>内容</view>
        </van-panel>
      </div>
    </div>
    <div class="card">
      <h3>唐球学院</h3>
      <div>
        <van-panel title="标题" desc="描述信息" status="状态">
          <view>内容</view>
        </van-panel>
      </div>
    </div>
    <div class="card">
      <h3>最新动态</h3>
      <div>
        <van-panel title="标题" desc="描述信息" status="状态">
          <view>内容</view>
        </van-panel>
      </div>
    </div>
    <div class="card">
      <h3>连锁加盟</h3>
      <div>
        <van-panel title="标题" desc="描述信息" status="状态">
          <view>内容</view>
        </van-panel>
      </div>
    </div>
    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
    <div class="all">
        <div class="left">
        </div>
        <div class="right">
        </div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
import { get } from '@/utils/request'
export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      },
      radio: 1,
      imgUrls: [
        'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      ],
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      active: 1,
      value: '' // 搜索value
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
    onShow () {
      this.show = true
      console.log('mpvue.data', this)
      // mpvue.setData({show: true})
    },
    /**
     * @desc 搜索回调
     */
    onSearch () {},
    /**
     * @desc 赛事切换回调
     */
    onChange () {}
  },

  created () {
    console.log('12312')
    // let app = getApp()
    get('http://localhost:4001/api/users').then(res => {
      console.log('res', res)
    })
  }
}
</script>

<style scoped>
  .main-wrap{
    padding-bottom: 60px;
  }
  .title{
    margin: 10px 20px;
    color: #333;
    border-bottom: 1px solid #000;
  }
  .card{
    margin: 0 10px;
  }
</style>
