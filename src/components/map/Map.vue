<template>
  <div class="main-wrap">
    <div class="page-body">
      <div class="page-section page-section-gap">
        <map
          id="myMap"
          style="width: 100%; height: 300px;"
          :latitude="latitude"
          :longitude="longitude"
          :markers="markers"
          :covers="covers"
        ></map>
      </div>
      <div class="btn-area">
        <button bindtap="getCenterLocation" class="page-body-button" type="primary">获取位置</button>
        <button bindtap="moveToLocation" class="page-body-button" type="primary">移动位置</button>
        <button bindtap="translateMarker" class="page-body-button" type="primary">移动标注</button>
        <button bindtap="includePoints" class="page-body-button" type="primary">缩放视野展示所有经纬度</button>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import mytabbar from "@/components/mytabbar/mytabbar";
import debug_item from "@/components/common/debug_item/debug_item";

export default {
  components: {
    mytabbar,
    debug_item
  },
  data() {
    return {
      latitude: 23.099994,
      longitude: 113.32452,
      markers: [
        {
          id: 1,
          latitude: 23.099994,
          longitude: 113.32452,
          name: "T.I.T 创意园",
          iconPath: "/static/images/location.png"
        }
      ],
      covers: [
        {
          latitude: 23.099994,
          longitude: 113.32452,
          iconPath: "/static/images/location.png"
        },
        {
          latitude: 23.099994,
          longitude: 113.30452,
          iconPath: "/static/images/location.png"
        }
      ]
    };
  },

  method: {
    onReady: function(e) {
      this.mapCtx = wx.createMapContext("myMap");
    },
    getCenterLocation: function() {
      this.mapCtx.getCenterLocation({
        success: function(res) {
          console.log(res.longitude);
          console.log(res.latitude);
        }
      });
    },
    moveToLocation: function() {
      this.mapCtx.moveToLocation();
    },
    translateMarker: function() {
      this.mapCtx.translateMarker({
        markerId: 1,
        autoRotate: true,
        duration: 1000,
        destination: {
          latitude: 23.10229,
          longitude: 113.3345211
        },
        animationEnd() {
          console.log("animation end");
        }
      });
    },
    includePoints: function() {
      this.mapCtx.includePoints({
        padding: [10],
        points: [
          {
            latitude: 23.10229,
            longitude: 113.3345211
          },
          {
            latitude: 23.00229,
            longitude: 113.3345211
          }
        ]
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
.page-section-gap {
  box-sizing: border-box;
  padding: 0 30rpx;
}

.page-body-button {
  margin-bottom: 30rpx;
}
</style>
