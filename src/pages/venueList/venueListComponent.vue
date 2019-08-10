<template>
  <div class="main-venue" v-if="itemshow">
    <navigator :url="'/pages/venueDetail/main?id='+P1">
      <div class="FL">
        <img class="venue-imgbox" v-if="album&&album.length" :src="album[0].url" />
      </div>
      <div class="venue-textbox">
        <div>
          <span class="C_999" v-if="cityDoc">【{{cityDoc.P2}}】</span>
          <span>{{title}}</span>
        </div>
        <div>电话:{{phone}}</div>
        <div>地址:{{address}}</div>
      </div>
      <div class="LH110">
        <van-icon name="arrow" size="20px" />
      </div>
    </navigator>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {};
  },
  props: ["cityDoc", "title", "phone", "address", "album", "P1", "itemshow"],
  components: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
.main-venue {
  width: 345px;
  height: 110px;
  margin: 15px;
  border-bottom: #ddd 1px solid;
}
.venue-imgbox {
  width: 135px;
  height: 90px;
  margin: 10px;
}
.venue-textbox {
  width: 165px;
  height: 90px;
  float: left;
  margin-top: 10px;
}
</style>
