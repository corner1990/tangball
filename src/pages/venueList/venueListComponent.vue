<template>
  <div class="main-venue">
    <div class="venue-imgbox">
      <img alt="title" class="venue-img" v-if="album&&album.length" :src="album[0].url" />
    </div>
    <div class="venue-textbox">
      <div class="MB5">
        <span class="C_999">【{{area}}】</span>
        <span>{{title}}</span>
      </div>
      <div class="MB5">电话:{{phone}}</div>
      <div class="MB5">地址:{{address}}</div>
    </div>
    <div class="LH110">
      <van-icon name="arrow" size="20px" />
    </div>
  </div>
</template>
<script>
/* eslint-disable */

export default {
  data() {
    return {};
  },
  props: ["area", "title", "phone", "address", "album"],
  components: {},
  methods: {
    dayin() {
      console.log("cf", cf.venueList);
    }
  },
  created() {}
};
</script>

<style scoped>
.main-venue {
  width: 345px;
  height: 110px;
  margin: 15px;
}
.venue-imgbox {
  width: 135px;
  height: 90px;
  margin: 10px;
  float: left;
}
.venue-img {
  width: 135px;
  height: 90px;
}
.venue-textbox {
  width: 165px;
  height: 90px;
  font-size: 16px;
  float: left;
  margin-top: 10px;
}
</style>
