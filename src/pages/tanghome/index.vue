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
    duration: 1000
  },
  methotds: {},

  onShow () {
    // `this` 指向 vm 实例
    console.log('234')
    this.$root.$mp.page.getTabBar().setData({
      active: 1 // 对应页面的index
    })
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

