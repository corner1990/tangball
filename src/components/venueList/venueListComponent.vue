<template>
  <div class="main-venue" v-if="cf.show">
    <navigator :url="venueDetaiUrl">
      <div>
        <div class="venue-imgBox">
          <img :src="venueListImg" />
        </div>
        <div class="venue-textBox">
          <div class="venue-text">
            <span class="C_999" v-if="cf.cityDoc">【{{cf.cityDoc.P2}}】</span>
            <span>{{cf.name}}</span>
          </div>
          <div>电话:{{cf.phoneNumber}}</div>
          <div class="venue-text">地址:{{cf.address}}</div>
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
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564478930764&di=fbf54154d40d042b2a71bee21bd7bef9&imgtype=0&src=http%3A%2F%2Fphoto.16pic.com%2F00%2F20%2F02%2F16pic_2002642_b.jpg";
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
  width: 350px;
  margin: 5px;
  padding: 0 10px;
  overflow: hidden;
}
.venue-imgBox {
  width: 110px;
  height: 70px;
  margin: 5px auto;
  float: left;
  /* border: 1px solid #f00; */
}
.venue-imgBox img {
  width: 100%;
  height: 100%;
}
.venue-textBox {
  width: 190px;
  float: left;
  margin: 5px 10px;
  line-height: 20px;
  /* border: 1px solid #f00; */
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
  /* border: 1px solid #f00; */
}
</style>
