<template>
  <div>
    <swiper :indicator-dots="indicatorDots"
      :autoplay="autoplay" :interval="interval" :duration="duration">
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
    <van-tabbar :active="active">
      <van-tabbar-item :icon="item.iconPath" v-for="(item, key) in list" :key="key" @click="tabChange(item.pagePath)">{{item.text}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
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
    list: [
      {
        'text': '首页',
        'pagePath': '../index/main',
        'iconPath': 'home-o'
      },
      {
        'text': '唐球馆',
        'pagePath': '../tanghome/main',
        'iconPath': 'fire-o'
      },
      {
        'text': '活动',
        'pagePath': '../event/main',
        'iconPath': 'medel-o'
      },
      {
        'text': '个人中心',
        'pagePath': '../usercenter/main',
        'iconPath': 'friends-o'
      }
    ]
  },
  methods: {
    /**
     * @desc tab切换回调
     */
    tabChange (url) {
      console.log(url)
      wx.switchTab({
        url
      })
    }
  },

  onShow () {
    // `this` 指向 vm 实例
    // console.log('234')
  }
}
</script>

<style scaffold>
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

