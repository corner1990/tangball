<template>
  <div>
    <van-tabbar :active="activeNeed" active-color="#3a0" inactive-color="#333">
      <van-tabbar-item
        :icon="item.iconPath"
        v-for="(item, key) in list"
        :key="key"
        @click="tabChange(item.pagePath)"
      >{{item.text}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: [ 'active'],
  data: function () {
    return {
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
      ],
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      activeNeed:this.active||999,
      value: '' // 搜索value
    }
  },
  methods: {

    /**
     * @desc 导航切换回调
     */
    tabChange(url) {
      console.log(url)
      wx.switchTab({
        url
      })
    }
  },
}
</script>

<style>
</style>
