<template>
  <div class="main-wrap">
    <debug_item path="pageName" v-model="venueDoc" text="场馆数据" />
    <div class v-if="venueDoc">
      <div class="FS24 TAC LH36">{{venueDoc.name}}</div>
      <swiper
        style="height:250px"
        :indicator-dots="indicatorDots"
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration"
      >
        <block v-for="item in venueDoc.album" :key="item.url">
          <swiper-item>
            <!--点击图片事件-->
            <img
              style="width:100%"
              @click="showImg(item.url)"
              :src="item.url"
              v-if="venueDoc.album"
              class="slide-image"
              height="250"
            />
          </swiper-item>
        </block>
      </swiper>
      <div>
        <!--显示图片弹窗-->
        <van-popup customStyle="height:250px" v-if="show" :show="show" @close="onClose">
          <img style="height:250px" alt :src="bigImg" />
        </van-popup>

        <van-tabs :active="active" v-bind:change="onChange">
          <van-tab title="场馆介绍1">
            <div style="font-size:16px;margin-top:5px">
              <h2>场馆名称:{{venueDoc.name}}</h2>
              <h2>场馆地址:{{venueDoc.address}}</h2>
              <h2>场馆电话:{{venueDoc.phoneNumber}}</h2>
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
import util from "@/utils/util";
export default {
  components: {
    mytabbar,
    debug_item
  },
  data() {
    return {
      //注册图片
      bigImg:"",
      show: false,
      // radio: 1,
      indicatorDots: true,
      autoplay: true,
      interval: 4000,
      duration: 1000,
      pageName: "场馆详情",
      value: "", // 搜索value
      venueDoc: null,
      markers: [{longitude:"",latitude:"",iconPath: ""}]
      // imgUrls: []
      // P1: null
    };
  },

  methods: {
    showImg(url) {
      this.show = true;
      this.bigImg = url;
      console.log(this.url);
    },
    onClose() {
      this.show = false;
    },
  
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
      
      console.log("555555555",this.markers)
      //  Object.assign(this.markers[0], ...this.venueDoc.extend)
      console.log("2222",this.markers)
      this.markers[0]=this.venueDoc.extend
       console.log("3333",this.markers)
      // this.markers.push({
      //   longitude: this.venueDoc.extend.longitude,
      //   latitude: this.venueDoc.extend.latitude,
      //   iconPath: "/static/images/location.png"
      // });
      //   Object.assign(this.markers, this.venueDoc.extend)
      console.log("getDoc-2");
      console.log("doc-2", this.venueDoc.album);
      // this.imgUrls=this.venueDoc.album
    }
  },
  created() {},
  mounted() {
    console.log("mounted123");
    this.getDoc(); //调用：{ajax获取当前场馆数据函数}
  },
  // 页面登陆事件
  onLoad(options) {
    //获取id
    this.P1 = options.id;
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
