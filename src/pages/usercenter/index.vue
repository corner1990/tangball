<template>
  <div>
    <Info />
    <UserOperList />
     <mytabbar :active="3"></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import Info from '@/components/usercenter/userinfo'
import UserOperList from '@/components/usercenter/userCard'
import mytabbar from '@/components/mytabbar/mytabbar'
export default {
  components: {
    Info,
    UserOperList,mytabbar
  },
  data: {
    name: 'leo',
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
    wx.hideTabBar({
      complete () {
        console.log('关闭tabbar')
      }
    })
  }
}
</script>