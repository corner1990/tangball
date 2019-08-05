<template>
  <div>
    <van-tabbar :active="activeNeed" active-color="#009B4C" inactive-color="#333">
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
  props: ["active"],
  data: function() {
    return {
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
          iconPath: "friends-o"
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
  methods: {
    /**
     * @desc 导航切换回调
     */
    tabChange(url) {
      // console.log(url);
      wx.switchTab({
        url
      });
    }
  }
};
</script>

<style>
</style>
