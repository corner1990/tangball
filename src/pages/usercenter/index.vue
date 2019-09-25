<template>
  <div>
    <Info />
    <UserOperList :unreadCount="unreadCount"></UserOperList>
     <mytabbar :active="3"></mytabbar>
     <!-- <canvas style="width: 100px; height: 100px;" canvas-id="myQrcode"></canvas> -->
  </div>
</template>
<script>
/* eslint-disable */
import Info from '@/components/usercenter/userinfo'
import UserOperList from '@/components/usercenter/userCard'
import mytabbar from '@/components/mytabbar/mytabbar'
// import drawQrcode from 'weapp-qrcode'
export default {
  // name: 'leo',
  mounted(){
//     drawQrcode({
//   width: 100,
//   height: 100,
//   canvasId: 'myQrcode',
//   text: 'http://www.dmagic.cn/article_detail?id='+this.id
// })
//     console.log('tangballUserInfo',this.tangballUserInfo);
    
  },
  computed:{
    tangballUserInfo(){
      return this.$store.state.tangballUserInfo
    }
  },
  components: {
    Info,
    UserOperList,mytabbar
  },
  data(){
    return{
      // id:'8075',
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
    },
      
        
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