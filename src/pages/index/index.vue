<template>
  <div class="main-wrap">
    <van-button size="large" @click="gotoPage('/pages/myErollDetail/main?dataId=1&type=t1')">我的参赛详情1</van-button>
    <van-button size="large" @click="gotoPage('/pages/myErollDetail/main?dataId=2')" >我的参赛详情2</van-button>
   
   <view class="btn-area">
  <navigator url="/pages/myErollDetail/main?dataId=3" hover-class="navigator-hover">跳转到新页面</navigator>
  <navigator url="/pages/myErollDetail/main?dataId=3" open-type="redirect" hover-class="other-navigator-hover">在当前页打开</navigator>
  <navigator url="/pages/tanghome/main" open-type="switchTab" hover-class="other-navigator-hover">切换 Tab-针对tabar中的页面</navigator>
</view>
   
    <van-cell
      is-link
      :title="item.title"
      link-type="navigateTo"
      :url="item.url"
      v-for="(item,i) in arrLink"
      :key="i"
    />
    <swiper
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <block v-for="item in imgUrls" :key="item">
        <swiper-item>
          <image :src="item" class="slide-image" height="150"/>
        </swiper-item>
      </block>
    </swiper>
    <van-search :value="value" placeholder="请输入搜索关键词" use-action-slot bind:search="onSearch"/>
    <div class="card">
      <h3>赛事</h3>
      <van-tabs :active="active" bind:change="onChange">
        <van-tab title="近期">
          <van-card desc="描述信息" title="商品标题"/>
        </van-tab>
        <van-tab title="全国">
          <van-card tag="222" desc="描述信息" title="商品标题"/>
        </van-tab>
        <van-tab title="加盟商">
          <van-card tag="333" desc="描述信息" title="商品标题"/>
        </van-tab>
        <van-tab title="全部">
          <van-card tag="444" desc="描述信息" title="商品标题" thumb="111"/>
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
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <mytabbar :active="0"></mytabbar>
  </div>
</template>

<script>
/* eslint-disable */


import mytabbar from '@/components/mytabbar/mytabbar'


import card from '@/components/card'
// import { get } from '@/utils/request'
export default {
  components: {
    card, mytabbar
  },
  data() {
    return {
      arrLink: [
         { "title": "ajaxDemo", "url": "/pages/ajaxDemo/main" },
        { "title": "赛事列表-", "url": "/pages/matchList/main" },
        { "title": "赛事详情", "url": "/pages/matchDetail/main" },
        { "title": "赛事报名", "url": "/pages/matchEroll/main" },
        // { "title": "场馆列表", "url": "/pages/venueList/main" },
        { "title": "场馆详情", "url": "/pages/venueDetail/main" },
        { "title": "唐球达人", "url": "/pages/rankingList/main" },

        { "title": "个人中心-赛事报名列表", "url": "/pages/myEroll/main" },
        { "title": "个人中心-赛事报名详情", "url": "/pages/myErollDetail/main" },
        { "title": "个人中心-系统消息列表", "url": "/pages/myMsgList/main" }

      ],
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

      value: '' // 搜索value
    }
  },



  methods: {
    gotoPage(url){
      console.log("gotoPage");
      // let url="/pages/tanghome/main";
       wx.navigateTo({ url })
    },
    bindViewTap() {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle(ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
  
    /**
     * @desc 搜索回调
     */
    onSearch() { },
    /**
     * @desc 赛事切换回调
     */
    tabChange(url) {
      console.log(url)
      wx.switchTab({
        url
      })
    }
  },
    onShow() {
    console.log("onShow");
      wx.hideTabBar({
      complete() {
        console.log('关闭tabbar')
      }
    })
    },
  created() {
    console.log('12312')
    // let app = getApp()
    // get('http://localhost:4001/api/users').then(res => {
    //   console.log('res', res)
    // })
   
  }
}
</script>

<style scoped>
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
