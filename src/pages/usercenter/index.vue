<template>
  <div>
    <h2>个人中心</h2>
    <h3>{{name}}</h3>
    <van-tabbar :active="active">
      <van-tabbar-item :icon="item.iconPath" v-for="(item, key) in list" :key="key" @click="tabChange(item.pagePath)">{{item.text}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data: {
    name: 'leo',
    active: 3,
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
  onShow () {}
}
</script>