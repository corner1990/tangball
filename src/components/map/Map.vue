<template>
  <div class="main-wrap">
    <map
      id="map"
      longitude="113.324520"
      latitude="23.099994"
      scale="14"
      :controls="controls"
      bindcontroltap="controltap"
      :markers="markers"
      bindmarkertap="markertap"
      :polyline="polyline"
      bindregionchange="regionchange"
      show-location
      style="width: 100%; height: 300px;"
    ></map>
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
      markers: [
        {
          iconPath:
            "https://upload-images.jianshu.io/upload_images/3687593-16487a4e40fd817c.png",
          id: 0,
          latitude: 23.099994,
          longitude: 113.32452,
          width: 35,
          height: 35
        }
      ],
      polyline: [
        {
          points: [
            {
              longitude: 113.3245211,
              latitude: 23.10229
            },
            {
              longitude: 113.32452,
              latitude: 23.21229
            }
          ],
          color: "#FF0000DD",
          width: 2,
          dottedLine: true
        }
      ],
      controls: [
        {
          id: 1,
          iconPath: "/resources/location.png",
          position: {
            left: 0,
            top: 300 - 50,
            width: 50,
            height: 50
          },
          clickable: true
        }
      ]
    };
  },

  methods: {
    regionchange(e) {
      console.log(e.type);
    },
    markertap(e) {
      console.log(e.markerId);
    },
    controltap(e) {
      console.log(e.controlId);
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
