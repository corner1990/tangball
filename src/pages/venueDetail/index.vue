<template>
  <div class="main-wrap">
    <div class="FS24 TAC LH36">深圳XXX场馆</div>
    <swiper
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <block v-for="item in imgUrls" :key="item">
        <swiper-item>
          <image :src="item" class="slide-image" width="350" height="150" />
        </swiper-item>
      </block>
    </swiper>
    <div>
      <van-tabs :active="active" bind:change="onChange">
        <van-tab title="场馆介绍">
          <van-panel title="深圳XXX场馆" desc="描述信息" status="营业中">
            <view>内容</view>
          </van-panel>
        </van-tab>
        <van-tab title="xxx">内容 2</van-tab>
        <van-tab title="地理位置">
          
        </van-tab>
      </van-tabs>
    </div>

    <mytabbar></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import card from "@/components/card";
import mytabbar from "@/components/mytabbar/mytabbar";


export default {
  components: {
    card,
    mytabbar,
  
  },
  data() {
    return {
      activeStep: 0,
      active: 0,
      imgUrls: [
        "https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640",
        "https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640",
        "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640"
      ],

      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000,

      value: "" // 搜索value
    };
  },

  methods: {
    onChange(event) {
      wx.showToast({
        title: `切换到标签 ${event.detail.index + 1}`,
        icon: "none"
      });
    },
    onShow() {
      this.show = true;
      console.log("mpvue.data", this);
      // mpvue.setData({show: true})
    },
    /**
     * @desc 搜索回调
     */
    onSearch() {},
    /**
     * @desc 赛事切换回调
     */
    tabChange(url) {
      console.log(url);
      wx.switchTab({
        url
      });
    }
  },
  created() {}
};
</script>

<style scoped>
.main-wrap {
  padding-bottom: 60px;
}
.title {
  margin: 10px 20px;
  color: #333;
  border-bottom: 1px solid #000;
}
.card {
  margin: 0 10px;
}
.bm-view {
  width: 100%;
  height: 300px;
}
</style>
