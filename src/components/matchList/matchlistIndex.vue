<template>
  <div class="main-wrap">
    <!-- {{searchValue}} -->
    <!-- <debug_item path="steps" v-model="steps" text="步骤" />
    <debug_item path="matchlist" v-model="matchlist" text="赛事列表" />
    <debug_item path="searchValue" v-model="searchValue" text="searchValue" />-->
    <div>
          <div >
            <navigator :url="matchDetailUrl">
              <div class="match-box">
                <div class="match-img-box">
                  <img :src="matchListImg" />
                </div>
                <div class="match-img-box1">
                  <h1>{{cf.matchName}}</h1>
                  <div>赛事时间：{{cf.matchTime}}</div>
                  <div>报名费用：{{cf.registrationFee}}</div>
                </div>
                <div class="rpg11">
                  <div class="arrow">
                    <van-icon name="arrow" size="20px" />
                  </div>
                </div>
              </div>
            </navigator>
          </div>
       
    </div>
 
  </div>
</template>
<script>
/* eslint-disable */

import util from "../../utils/util";
import card from "../card";
import mytabbar from "../mytabbar/mytabbar";
import "./matchList.css";
// import debug_item from "@/components/common/debug_item/debug_item";
export default {
  components: {
    card,
    mytabbar

    // debug_item
  },props:["cf"],
  data() {
    return {
      matchListImg: null,
      placeholderImg: null,
      searchValue: "111", // 搜索value
      matchType: null,
      activeStep: 0,
      applyUrl: "/pages/matchEroll/main?id=" + this.cf.P1,
      matchDetailUrl:`/pages/matchDetail/main?id=  ${this.cf.P1}`
    };
  },
  methods: {
    /**
     * @desc 搜索回调
     */
    /**
     * @desc 赛事切换回调
     */
  },
  mounted() {
    /**
     * @name 加载图片的方法
     * @desc 调用lodash库导入图片，默认占位图
     * @param 默认占位图：placeholderImg
     * @param 接收的图片地址：matchListImg
     */
    let placeholderImg =
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564478930764&di=fbf54154d40d042b2a71bee21bd7bef9&imgtype=0&src=http%3A%2F%2Fphoto.16pic.com%2F00%2F20%2F02%2F16pic_2002642_b.jpg";
    this.matchListImg = this.$lodash.get(
      this.cf,
      "album[0].url",
      placeholderImg
    );

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
