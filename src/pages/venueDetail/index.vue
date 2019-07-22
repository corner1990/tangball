<template>
  <div class="main-wrap">
    <debug_item path="pageName" v-model="venueDoc" text="场馆数据" />
    <debug_item path="pageName" v-model="venueList" text="场馆数据" />
    <div class v-if="venueDoc">
      <div class="FS24 TAC LH36">{{venueList.name}}</div>
      <img :src="venueList.album[0].url" />
      <div>
        <van-tabs :active="active" v-bind:change="onChange">
          <van-tab title="场馆介绍1">
            <div>{{venueList.name}}</div>
            <div class="main-wrap">
              <div class="page-body">
                <div class="page-section page-section-gap">
                  <map
                    id="myMap"
                    :latitude="venueList.extend.latitude"
                    :longitude="venueList.extend.longitude"
                    :markers="markers"
                  ></map>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="地理位置"></van-tab>
        </van-tabs>
      </div>
    </div>

    <mytabbar></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import mytabbar from "@/components/mytabbar/mytabbar";
import debug_item from "@/components/common/debug_item/debug_item";
import util from "@/utils/util";
export default {
  components: {
    mytabbar,
    debug_item
  },
  data() {
    return {
      pageName: "场馆详情",
      value: "", // 搜索value
      venueDoc: null,
      venueList: [],
      markers: []
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
        url: global.PUB.domain + "/crossListRelation",
        param: { findJson: { P1: this.P1 } }
      });
      this.venueList = data.list[0];
      let doc = await util.post({
        url: global.PUB.domain + "/crossDetail?page=tangball_venue",
        param: {
          id: this.P1 //每场馆id
        }
      });
      this.venueDoc = doc.data.Doc;
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
  },
  // 页面登陆事件
  onLoad(options) {
    const id = P1.id
    // 看一下传过来的是什么
    console.log(options);
    // 获取传过来的id
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
