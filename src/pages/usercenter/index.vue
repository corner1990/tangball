<template>
  <div>
    <Info />
    <UserOperList :unreadCount="unreadCount"></UserOperList>
     <mytabbar :active="3"></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import Info from '@/components/usercenter/userinfo'
import UserOperList from '@/components/usercenter/userCard'
import mytabbar from '@/components/mytabbar/mytabbar'
export default {
  // name: 'leo',
  mounted(){
  },
  components: {
    Info,
    UserOperList,mytabbar
  },
  data(){
    return{
      unreadCount: this.$store.state.tangballUserInfo.unreadCount
    }
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
    this.unreadCount = this.$store.state.tangballUserInfo.unreadCount
    wx.hideTabBar({
      complete () {
        console.log('关闭tabbar')
      }
    })
  }
}
</script>