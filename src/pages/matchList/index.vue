<template>
  <div class="main-wrap">
    <!-- {{searchValue}} -->
    <!-- <debug_item path="steps" v-model="steps" text="步骤" />
    <debug_item path="matchlist" v-model="matchlist" text="赛事列表" />
    <debug_item path="searchValue" v-model="searchValue" text="searchValue" /> -->
    <navigator url="/pages/searchPage/main">
    <div class="search-box">
      <div class="search-text">搜索</div>
      <div class="search-img"><van-icon name="arrow" size="20px" /></div>
    </div>
    </navigator>

    <div>
      <van-tabs :active="active" @change="onClickTab">
        <van-tab :title="bigItem.category " v-for="bigItem in tabList" :key="bigItem">
          <matchListcomponent :cf="item" v-for="(item,i) in matchlist" :key="i"></matchListcomponent>
        </van-tab>
      </van-tabs>
    </div>

    <mytabbar></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import matchListcomponent from "@/components/matchList/matchListComponent";
import util from "@/utils/util";
import card from "@/components/card";
import mytabbar from "@/components/mytabbar/mytabbar";
import Dialog from "../../../static/vant/dialog/dialog";
import debug_item from "@/components/common/debug_item/debug_item";
export default {
  components: {
    card,
    mytabbar,
    Dialog,
    matchListcomponent,
    debug_item
  },
  data() {
    return {
      searchValue: "111", // 搜索value
      matchType: null,
      activeStep: 0,

      matchlist: [],
      tabList: [
        { category: "近期" },
        { category: "全国" },
        { category: "加盟商" },
        { category: "全部" }
      ]
    };
  },
  methods: {
    changeValue(event) {
      this.searchValue = event.mp.detail;
    },
    //----------- 请求接口数据的函数-------------------
    async getlist() {
      let { data } = await util.post({
        url: global.PUB.domain + "/crossList?page=tangball_match",
        param: { findJson: { matchType: this.matchType } }
      });
      this.matchlist = data.list;
      //--------------数组的日期排序的方法-----------------------
      this.matchlist.sort((a, b) => {
        return a.matchTime > b.matchTime ? -1 : 1;
      });
    },
    //----------- 点击标签时触发的函数，并且会默认传递event-------------------
    onClickTab(event) {
      // ------------------地区区分---------------------
      //如果是近期（因为近期的index为1）
      if (event.target.index == 0) {
        console.group("如果是近期", event.target.title);
        this.matchType = null; //改变请求接口参数
        this.getlist(); //调用一次接口
      }

      if (event.target.index == 1) {
        console.group("如果是全国", event.target.title);
        this.matchType = 2; //改变请求接口参数
        this.getlist(); //调用一次接口
      }

      if (event.target.index == 2) {
        console.group("如果是加盟商", event.target.title);
        console.log("如果是加盟商2", event.target.title);
        this.matchType = 1;
        this.getlist(); //调用一次接口
      }

      if (event.target.index == 3) {
        console.group("如果是全部", event.target.title);
        console.log("如果是全部", event.target.title);
        this.matchType = null;
        this.getlist();
      }
    },
    /**
     * @desc 搜索回调
     */
    onSearch(seachValue) {
      console.log("后面的值：", seachValue);
    }
    /**
     * @desc 赛事切换回调
     */
  },
  async mounted() {
    this.getlist(); //页面创建成功后，调用一次请求接口，此时是加载所有数据
  }
};
</script>

<style scoped>
.main-wrap {
  padding-bottom: 60px;
}
.title {
  margin: 10px 20px;
  color: #333;
  border-bottom: 1px solid #000;
}
.card {
  margin: 0 10px;
}
.search-box{
  margin-left: 5%;
  height:40px;
  width:90%;
  font-size: 18px;
  line-height: 40px;
  border-bottom: 1px solid #F4B116;
}
.search-text{
  float: left;
  color: gray;
  margin-right: 8px;
}
.search-img{
  float: right;
  color: #999999;
  padding-top:8px;
}
</style>
