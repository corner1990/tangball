<template>
  <div>
    <div class="button-center">
      <van-button plain type="primary" size="small">参赛次数</van-button>
      <van-button plain type="primary" size="small">成绩排名</van-button>
      <van-button plain type="primary" size="small">鸟王排名</van-button>
      <van-button plain type="primary" size="small">积分排名</van-button>
    </div>

    <van-tabs :active="active">
      <van-tab title="男子">
        <div class="ranking-title">
          <div>排名</div>
          <div>男子选手</div>
          <div>成绩</div>
        </div>

        <div class="ranking-content">
          <div>
            <a>1</a>
          </div>
          <div>
            <a>张三</a>
            <a>地区</a>
          </div>
          <div>
            <a>99</a>
            <a>2019-10-1</a>
          </div>
        </div>
      </van-tab>

      <van-tab title="女子">
        <div class="ranking-title">
          <div>排名</div>
          <div>女子选手</div>
          <div>成绩</div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  created() {}
};
</script>

<style scoped>
.button-center {
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  text-align: center;
}
.button-center van-button {
  margin: 5px;
}
.ranking-title {
  margin: 0 auto;
  width: 100%;
  text-align: center;
}
.ranking-title div {
  width: 100px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  text-align: center;
  margin: 10px 5px;
}

.ranking-content {
  margin: 0 auto;
  width: 100%;
  text-align: center;
}
.ranking-content div {
  width: 100px;
  display: inline-block;
  text-align: center;
  margin: 5px;
}
</style>
