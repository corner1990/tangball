<template>
  <div >
    <div v-show="!isLogin">
      <div class="user-info">
        <img src="/static/images/timg.jpg" alt="bg" class="bg" />
        <div class="avatar-row">
          <div class="avatar"></div>
          <!-- <div class="avatar-text" @click="login">&nbsp;&nbsp;&nbsp;&nbsp;暂未登录</div> -->
          <div class="avatar-text" >
            <van-button type="primary" size="small" round @click="login">点击授权登录</van-button></div>
        </div>
      </div>

    </div>
    <div v-show="isLogin">
    <Info />
    <UserOperList :unreadCount="unreadCount"></UserOperList>

     </div>
     <mytabbar :active="3"></mytabbar>
     <!-- <canvas style="width: 100px; height: 100px;" canvas-id="myQrcode"></canvas> -->
  </div>

</template>
<script>
/* eslint-disable */
import Info from '@/components/usercenter/userinfo'
import UserOperList from '@/components/usercenter/userCard'
import mytabbar from '@/components/mytabbar/mytabbar'
import util from "@/utils/util";
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
    },
    unreadCount(){
      return  this.$store.state.unreadCount
    }
  },
  components: {
    Info,
    UserOperList,mytabbar
  },
  data(){
    return{
      // id:'8075',
      isLogin:false,
      // unreadCount: this.$store.state.tangballUserInfo.unreadCount
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
    login(){
       util.gotoPage("/pages/authorize/main");
    }


    },

 async onShow () {
    this.isLogin = await util.isLogin(this)
    if (!this.isLogin) {
      // util.gotoPage("/pages/authorize/main");
    }

      // this.unreadCount = this.$store.state.tangballUserInfo.unreadCount

    wx.hideTabBar({
      complete () {
        console.log('关闭tabbar')
      }
      })

  }
}
</script>
<style  scoped>
.user-info {
  position: relative;
  height: 180px;
  /* text-align: center; */
  overflow: hidden;
}
.user-info .bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.user-info .avatar {
  width: 80px;
  height: 80px;
  margin-top: 10px;
  border-radius: 50%;

  margin-left:40%;
  margin-top:30px;
  background-image: url('http://qn-static.dmagic.cn/images/placeholder_head.jpg');
  background-size: 100%
}
.avatar-row {
  position: relative;
  z-index: 2;
  /* text-align: center; */
}
.avatar-text{
  color:white;
  line-height: 24px;
  font-size: 16px;
  /* font-weight: 700; */
  cursor: pointer;
  text-align: left;
  margin-left:38%;
  /* background-color: #F4B116; */
  border-radius: 10px;
  width:110px;
  margin-top: 10px;
}
</style>
