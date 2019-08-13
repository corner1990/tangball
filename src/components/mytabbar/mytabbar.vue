<template>
  <div>
    <van-tabbar :active="activeNeed" active-color="#009B4C" inactive-color="#333">
      <van-tabbar-item
        :icon="item.iconPath"
        v-for="(item, key) in list"
        :key="key"
        @click="tabChange(item.pagePath)"
        :info="item.info"
      >{{item.text}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
/* eslint-disable */
import util from "@/utils/util";
export default {
  props: ["active","read"],
   computed: {
    //唐球会员信息-在vuex中获取
    UserID: function() {
      return this.$store.state.tangballUserInfo.P1;
    }
  },
  watch:{
    UserID:function(val, oldVal){
        this.getMyMsgList();
    },
    read:function(val, oldVal){
        this.getMyMsgList();
    }
  },
  data: function() {
    return {
      request:false,
      unread:0,
      list: [
        {
          text: "首页",
          pagePath: "../index/main",
          iconPath: "home-o"
        },
        {
          text: "唐球馆",
          pagePath: "../venueList/main",
          iconPath: "fire-o"
        },
        {
          text: "唐球达人",
          pagePath: "../rankingList/main",
          iconPath: "medel-o"
        },
        {
          text: "个人中心",
          pagePath: "../usercenter/main",
          iconPath: "friends-o",
          info:""
        }
      ],
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      activeNeed: this.active,
      value: "" // 搜索value
    };
  },
  created() {
    if (!this.active && this.active !== 0) {
      this.activeNeed = null;
    }
    // console.log("this.activeNeed", this.activeNeed);
  },
  onShow () {
    if (this.$store.state.tangballUserInfo.unreadCount==0) {
          this.list[3].info = "none";
        }else{
        this.list[3].info = this.$store.state.tangballUserInfo.unreadCount
        }
  },
  methods: {
    /**
     * @desc 导航切换回调
     */
    tabChange(url) {
      wx.switchTab({
        url
      });
    },
    // 获取信息接口，得到用户有多少消息未读
    async getMyMsgList() {
      let { data } = await util.post({
        //请求接口
        url: global.PUB.domain + "/crossList?page=tangball_msg ",
        param: {
          findJson: {
            //或查询条件：range==1或[range==2&&memberIdList包含当前会员id]
            $or: [
              { range: 1 },
              { range: 2, memberIdList: this.UserID }
            ]
          }
        } //传递参数
      });
      {
        let { data } = await util.post({
          //请求接口
          url: global.PUB.domain + "/crossList?page=tangball_msg_read",
          param: {
            findJson: {
              memberId: this.UserID
            }
          } //传递参数
        });
        this.unread = data.list.length
      }
      // 得到用户未读消息数列，如果为0 设置为undefined不显示，
      // 将数据保存到vuex方便引用
      this.unread = data.list.length - this.unread
        let UserInfo = this.$store.state.tangballUserInfo
        if (this.unread==0) {
          UserInfo.unreadCount = undefined
          this.$store.commit('setTangballUserInfo',UserInfo)
          this.list[3].info = this.$store.state.tangballUserInfo.unreadCount;
        }else{
          UserInfo.unreadCount =this.unread
        this.list[3].info = this.$store.state.tangballUserInfo.unreadCount
        }
     }
  },
  mounted(){
  }
}
</script>
<style>
</style>
