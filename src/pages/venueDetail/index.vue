<template>
  <div class="main-wrap">
    <debug_item path="pageName" v-model="venueDoc" text="场馆数据" />
    <div class v-if="venueDoc">
      <div>
        <openImg v-model="venueDoc.album" ></openImg>
        <van-tabs :active="active" v-bind:change="onChange">
          <van-tab title="场馆介绍">
            <div style="font-size:16px;margin-top:5px">
              <van-cell title="场馆名称" title-width="100px" :value="venueDoc.name" />
              <van-cell title="场馆地址" title-width="100px" :value="venueDoc.address" />
              <van-cell title="场馆电话" title-width="100px" :value="venueDoc.phoneNumber" />
              <van-cell title="场馆详情" title-width="100px" :value="Detail" />
            </div>
          </van-tab>
          <van-tab title="地理位置">
            <div class="page-body">
              <div class="page-section page-section-gap">
                <map
                  id="myMap"
                  :latitude="venueDoc.extend.latitude"
                  :longitude="venueDoc.extend.longitude"
                  :markers="markers"
                ></map>
              </div>
            </div>
          </van-tab>
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
import OpenImg from "@/components/openImg/openImg";
import util from "@/utils/util";
export default {
  components: {
    mytabbar,
    debug_item,
    OpenImg
  },
  data() {
    return {
      // radio: 1,
      Detail:"一二三四五六七八九十十一十二十三十四",
      pageName: "场馆详情",
      value: "", // 搜索value
      venueDoc: null,
      markers: [{ longitude: "", latitude: "", iconPath: "" }]
    };
  },
  methods: {
    /**
    * ajax获取当前场馆数据函数
    */
    async getDoc() {
      let doc = await util.post({
        //详情接口
        url: global.PUB.domain + "/crossDetail?page=tangball_venue",
        param: {
          id: this.P1 //每场馆id
        }
      });
      this.venueDoc = doc.data.Doc;
      this.markers[0] = this.venueDoc.extend;
      // this.markers.push({
      //   longitude: this.venueDoc.extend.longitude,
      //   latitude: this.venueDoc.extend.latitude,
      //   iconPath: "/static/images/location.png"
      // });
      //   Object.assign(this.markers, this.venueDoc.extend)
      // this.imgUrls=this.venueDoc.album
    }
  },
  created() {},
  mounted() {
    this.getDoc(); //调用：{ajax获取当前场馆数据函数}
  },
  // 页面登陆事件
  onLoad(options) {
    //获取id
    this.P1 = options.id;
    // 看一下传过来的是什么
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
