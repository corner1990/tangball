<template>
  <div class="main-wrap">
  
    <div>
      <div
        class="data-group"
        @click="gotoPage(cf)"
      >
        <div class="data-group-left">
          <span class="title_text">{{cf.articleTitle}}</span>
          <div class="name_time_text">{{cf.CategoryName}}&nbsp;&nbsp;&nbsp;&nbsp;{{cf.CreateTime}}</div>
        </div>
        <!-- <div class="data-group-right">
          <img src="../image/location.png" />
        </div> -->
      </div>
       
    </div>
 
  </div>
</template>
<script>
/* eslint-disable */

import util from "../../utils/util";
import card from "../card";
import mytabbar from "../mytabbar/mytabbar";

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
    //跳转页面方法，20191007刘咏辉修正
    gotoPage(cf){
      util.gotoPage(`/pages/articleDetailWX/main?dataId=${cf.P1}&wxArticleUrl=${this.$lodash.get(cf, 'extend.wxArticleUrl','')}`)
    }
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
      "http://qn-static.dmagic.cn/images/placeholder.png";
    this.matchListImg = this.$lodash.get(
      this.cf,
      "album[0].url",
      placeholderImg
    );

  }
};
</script>
<style scoped>
.data-group {
  padding: 5px 0;
  border-bottom: 1px #ddd solid;
  font-size: 16px;
  display: flex;
}
.data-group-left {
  width: 100%;
  /* position: relative; */
  /* height: 70px; */
}
.name_time_text {
  margin: 5px 0;
  font-size: 12px;
  color: #ccc;
  /* position: absolute;
    bottom:0px;
    left: 0px; */
}
.title_text {
  font-size: 16px;
  /* 自动换行 */
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
}
.data-group-right {
  flex: 1;
  height: 75px;
}
.data-group-right img {
  height: 100%;
  width: 100%;
}
.n-input {
  display: inline-block;
  border: 1px #ddd solid;
  height: 28px;
  line-height: 28px;
  border-radius: 5px;
}
</style>
