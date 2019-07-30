<template>
  <div>
    <div class="match-box">
      <div class="match-img-box">
        <img
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3778486341,778005772&fm=26&gp=0.jpg"
        />
      </div>
      <div class="match-img-box1">
        <h1>{{title}}</h1>

        <div>赛事时间：{{matchTime}}</div>

        <div>{{price}}</div>
      </div>

      <div name="footer" class="rpg11">
        <!-- <div :class="{'macth-btn':true,btn:publicationStatus==2}" @click="daying">{{Status}}</div> -->
        <navigator :url="applyUrl">
          <van-button plain size="small" type="danger" v-if="applyIngStatus" @click="daying">火热报名中</van-button>
        </navigator>
        <van-button disabled size="small" v-if="applyEndStatus">报名已结束</van-button>
        <div style="height:10px;"></div>
        <navigator :url="matchDetailUrl">
          <van-button plain size="small" type="default">&nbsp;&nbsp;查看详情&nbsp;</van-button>
        </navigator>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */

export default {
  data() {
    return {
      applyIngStatus: true,
      applyEndStatus: false,
      applyUrl: "/pages/matchEroll/main?id=" + this.matchListP1 + "",
      matchDetailUrl: "/pages/matchDetail/main?id=" + this.matchListP1 + ""
    };
  },
  props: [
    "title",
    "desc",
    "price",
    "matchTime",
    "publicationStatus",
    "matchListP1"
  ],
  components: {

  },
  mounted() {
    if (this.publicationStatus == 1) {
      (this.applyIngStatus = true), (this.applyEndStatus = false);
    } else {
      (this.applyIngStatus = false), (this.applyEndStatus = true);
    }
  },
  methods: {},
  created() {}
};
</script>

<style >
.main-wrap {
  padding-bottom: 60px;
}
.title {
  margin: 10px 20px;
  color: #333;
  border-bottom: 1px solid #000;
}

.match-box {
  margin-bottom: 5px;
  /* position: relative; */
  border-bottom: #d9d9d9 1px solid;
  height: 105px;
  display: flex;
}
.rpg11 {
  /* position: absolute;
  right: 0px;
  bottom: 10px; */

  /* float: right; */
  margin-top: 15px;
  margin-right: 5px;
}
.match-img-box {
  /* float: left; */

  margin: 15px 1px 0 10px;
  height: 80px;
  width: 80px;
  background: #fff;
}
.match-img-box img {
  width: 100%;
  height: 100%;
}
.match-img-box1 {
  padding: 0 0 5px 5px;
  flex: 1;
  margin: 15px 0 0 0px;
  display: flex;
  flex-direction: column;
}
.match-img-box1 h1 {
  font-weight: bold;
  font-size: 16px;
}
.macth-btn {
  line-height: 20px;
  font-size: 11px;
  font-weight: bold;
  width: 60px;
  height: 20px;
  text-align: center;

  border-radius: 5px;
  /* display: inline-block; */
  margin: 15px 5px 0 5px;
}
.btn {
  background-color: #ccc;
  color: #000;
  border: 1px solid #000;
  opacity: 0.5;
}
</style>
