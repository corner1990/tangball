<template>
  <div>
    <navigator :url="matchDetailUrl">
      {{item.P1}}--{{matchDetailUrl}}
      <div class="match-box">
        <div class="match-img-box">
          <img :src="matchListImg" />
        </div>
        <div class="match-img-box1">
          <h1>{{item.matchName}}</h1>
          <div>赛事时间：{{item.matchTime}}</div>
          <div>报名费用：{{item.registrationFee}}</div>
        </div>
        <div class="rpg11">
          <div class="arrow">
            <van-icon name="arrow" size="20px" />
          </div>
        </div>
      </div>
    </navigator>
  </div>
</template>
<script>
/* eslint-disable */

import "./matchList.css";
import debug_item from "@/components/common/debug_item/debug_item";
export default {
  watch: {
    active:function (newdata,olddata) {
      console.log(newdata,olddata);
 
    }
  },
  components: {
    debug_item
  },
  props: ["item", "active"],
  data() {
    return {
      matchListImg: null,
      placeholderImg: null,
      searchValue: "111", // 搜索value
      matchType: null,
      activeStep: 0,
      applyUrl: null
      // matchDetailUrl: null
    };
  },
  computed: {
    matchDetailUrl: function() {
      return `/pages/matchDetail/main?id= ${this.item.P1}`;
    }
  },
  methods: {
    /**
     * @desc 搜索回调
     */
    /**
     * @desc 赛事切换回调
     */
  },
  onLoad() {
    /**
     * @name 加载图片的方法
     * @desc 调用lodash库导入图片，默认占位图
     * @param 默认占位图：placeholderImg
     * @param 接收的图片地址：matchListImg
     */

    let placeholderImg =
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564478930764&di=fbf54154d40d042b2a71bee21bd7bef9&imgtype=0&src=http%3A%2F%2Fphoto.16pic.com%2F00%2F20%2F02%2F16pic_2002642_b.jpg";
    this.matchListImg = this.$lodash.get(
      this.item,
      "album[0].url",
      placeholderImg
    );
    // this.applyUrl = `/pages/matchEroll/main?id= ${this.item.P1}`;
    // this.matchDetailUrl = `/pages/matchDetail/main?id= ${this.item.P1}`;
  },
  mounted() {
    console.log("this.item.P1___##", this.item.P1, this.item.matchName);
    console.log(this.item)
  }
};
</script>
<style scoped>
.title {
  margin: 10px 20px;
  color: #333;
  border-bottom: 1px solid #000;
}
.card {
  margin: 0 10px;
}
</style>
