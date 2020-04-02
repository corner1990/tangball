<template>
  <section class="end-step">
    <van-icon v-if="iconShow" name="close" color="#f44" size="40px" />
    <van-icon v-else name="success" color="#07c160" size="40px" />
    <p v-if="iconShow">支付失败！</p>
    <p v-else>报名完成！</p>
    <p class="btn-wrap">
      <van-button type="primary" round block @click="goHome">返回首页</van-button>
    </p>
    <p class="btn-detail">
      <van-button type="warning" round block @click="goMyEroll" plain>查看详情</van-button>
    </p>
  </section>
</template>
<script>
/* eslint-disable */
export default {
  props: ["info"],
  computed: {
    iconShow() {
      let { errMsg } = this.info;
      let reg = /fail/g;
      return reg.test(errMsg);
    }
  },
  methods: {
    goHome() {
      let url = "/pages/index/main";
      wx.switchTab({ url });
    },
    goMyEroll() {
      let url = "/pages/myEroll/main";
      wx.navigateTo({ url });
    }
  }
};
</script>
<style scoped>
.end-step {
  margin-top: 20px;
  height: 200px;
  text-align: center;
}

.row {
  height: 70px;
  border-bottom: 1px solid #dedede;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn-wrap {
  margin-top: 100px;
}
.btn-detail {
  margin-top: 20px;
}
</style>
