<template>
  <div class="main-wrap">
   
    <div class="FS24 TAC LH36">深圳XXX场馆</div>
    
    <div>
      <van-tabs :active="active" bind:change="onChange">
        <van-tab title="场馆介绍1">
          <van-panel title="深圳XXX场馆" desc="描述信息" status="营业中">
            <view>
            
            </view>
          </van-panel>
        </van-tab>
        <van-tab title="xxx">
          <venDetail></venDetail>
        </van-tab>
        <van-tab title="地理位置"><Map></Map></van-tab>
      </van-tabs>
    </div>
    <mytabbar></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */

import Map from "@/components/map/Map";
import util from "@/utils/util";

export default {
  components: {
    Map,
  },
  data() {
    return {
      venueDoc: null,
      pageName: "场馆详情",
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
    onSearch() { },
    /**
     * @desc 赛事切换回调
     */
    tabChange(url) {
      console.log(url);
      wx.switchTab({
        url
      });
    },
    /**
    * ajax获取当前场馆数据函数

    */
    async getDoc() {
      console.log("getDoc");
      let { data } = await util.post({
        url: global.PUB.domain + "/crossDetail?page=tangball_venue",
        param: {
          id: 20, //每场馆id
        }
      });
      this.venueDoc = data.Doc
      console.log("getDoc-2");
    }
  },
  created() { },
  mounted() {
    console.log("mounted123");
    this.getDoc();//调用：{ajax获取当前场馆数据函数}
  }
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
