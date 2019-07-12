<template>
  <div>
    赛事活动
    <van-tabs active="tabActive" bind:change="onChange">
      <van-tab title="近期赛事">内容 1</van-tab>
      <van-tab title="全国性赛事">内容 2</van-tab>
      <van-tab title="加盟商赛事">内容 3</van-tab>
      <van-tab title="全部赛事">内容 4</van-tab>
    </van-tabs>
    <van-tabbar :active="active">
      <van-tabbar-item :icon="item.iconPath" v-for="(item, key) in list" :key="key" @click="tabChange(item.pagePath)">{{item.text}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data: {
    active: 2,
    tabActive: 1,
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
      wx.switchTab({
        url
      })
    }
  },

  onShow () {
    // `this` 指向 vm 实例
  }
}
</script>
