<template>
  <div>
    <navigator :url="venueDetaiUrl" hover-class="none">
      <div class="main-venue" v-if="cf.show">
        <div class="venue-imgBox">
          <img :src="venueListImg" />
        </div>
        <div class="venue-textBox">
          <div class="venue-text">
            <!-- <span class="C_999" v-if="cf.cityDoc">[{{cf.cityDoc.P2}}]</span> -->
            <span class=" FS14">{{cf.name}}</span>
          </div>
          <div class="C_999">电话:{{cf.phoneNumber}}</div>
          <div class="venue-text C_999">地址:{{cf.address}}</div>
        </div>
        <div class="arrow">
          <van-icon name="arrow" size="20px" />
        </div>
      </div>
    </navigator>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      venueListImg: null,
      venueDetaiUrl: "/pages/venueDetail/main?id=" + this.cf.P1 + ""
    };
  },
  props: ["cf"],
  components: {},
  mounted() {
    /**
     * @name 加载图片的方法
     * @desc 调用lodash库导入图片，默认占位图
     * @param 默认占位图：placeholderImg
     * @param 接收的图片地址：venueListImg
     */
    let placeholderImg =
      "http://qn-static.dmagic.cn/images/placeholder.png";
    this.venueListImg = this.$lodash.get(
      this.cf,
      "album[0].url",
      placeholderImg
    );
  }
};
</script>
<style scoped>
.main-venue {
  width: 345px;
  margin: 15px;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
}
.venue-imgBox {
  width: 85px;
  height: 85px;
  margin-bottom: 10px;
  float: left;
}
.venue-imgBox img {
  width: 100%;
  height: 100%;
}
.venue-textBox {
  width: 63%;
  float: left;
  margin: 5px 0 5px 10px;
  line-height: 25px;
}
.venue-text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.arrow {
  color: #999;
  float: right;
  margin-top: 28px;
}
</style>
