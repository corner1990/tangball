<template>
  <div class="main-wrap">
    <debug_item path="pageName" v-model="venueDoc" text="场馆数据" />
    <div class="FS24 TAC LH36">{{venueDoc.name}}</div>
    <img :src="venueDoc.album[0].url" />
    <div>
      <van-tabs :active="active" v-bind:change="onChange">
        <van-tab title="场馆介绍1">
          <div style="font-size:30px">{{venueDoc.name}}</div>
          <div class="main-wrap">
            <div class="page-body">
              <div class="page-section page-section-gap">
                <map
                  id="myMap"
                  :latitude="venueDoc.extend.latitude"
                  :longitude="venueDoc.extend.longitude"
                  :markers="markers"
                  :covers="covers"
                ></map>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="地理位置"></van-tab>
      </van-tabs>
    </div>
    <mytabbar></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import mytabbar from "@/components/mytabbar/mytabbar";
import debug_item from "@/components/common/debug_item/debug_item";
import util from "@/utils/util";
// import Map from "@/components/map/Map";
export default {
  components: {
    mytabbar,
    debug_item
    // Map
  },
  data() {
    return {
      pageName: "场馆详情",
      value: "", // 搜索value
      venueDoc: null,
      markers: [
        {
          id: 1,
          latitude: 23.099994,
          longitude: 113.32452,
          name: "T.I.T 创意园",
          iconPath: "/static/images/location.png"
        }
      ]
    };
  },

  methods: {
    onChange(event) {
      wx.showToast({
        title: `切换到标签 ${event.detail.index + 1}`,
        icon: "none"
      });
    },
    onReady: function(e) {
      this.mapCtx = wx.createMapContext("myMap");
    },
    /**
    * ajax获取当前场馆数据函数

    */
    async getDoc() {
      console.log("getDoc");
      let { data } = await util.post({
        url: global.PUB.domain + "/crossDetail?page=tangball_venue",
        param: {
          id: 20 //每场馆id
        }
      });
      this.venueDoc = data.Doc;
      this.markers.push({
        longitude: this.venueDoc.extend.longitude,
        latitude: this.venueDoc.extend.latitude,
        iconPath: "/static/images/location.png"
      });
      //   Object.assign(this.markers, this.venueDoc.extend)
      console.log("getDoc-2");
    }
  },
  created() {},
  mounted() {
    console.log("mounted123");
    this.getDoc(); //调用：{ajax获取当前场馆数据函数}
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
map {
  width: 100%;
  height: 300px;
}
.page-section-gap {
  box-sizing: border-box;
  padding: 0 30rpx;
}
</style>
