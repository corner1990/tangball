<template>
  <div class="main-wrap">
    <matchListIndex :cf="matchlist"></matchListIndex>
    <div>
      <van-tabs :active="active" @change="onClickTab">
        <van-tab :title="bigItem.category " v-for="bigItem in tabList" :key="bigItem">
            <!--无数据时显示暂无数据-->
          <tisp v-if="matchlist.length<=0"></tisp>
          <div v-else>
            <matchlistindex v-for="(item,i) in matchlist" :key="i" :cf="item"></matchlistindex>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import tisp from "@/components/tisp/tisp";
import matchlistindex from "@/components/matchList/matchlistindex";
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
    matchlistindex,
    debug_item,
    tisp
  },
  data() {
    return {
      active: 0,
      matchlist: [],
      tabList: [
        { category: "近期赛事" },
        { category: "全国赛" },
        { category: "普通赛" },
        { category: "全部" }
      ]
    };
  },
  methods: {
    //----------- 点击标签时触发的函数，并且会默认传递event-------------------
    onClickTab(event) {
      console.log(event);

      this.active = event.target.index;
      // ------------------地区区分---------------------
      //如果是近期（因为近期的index为0）,全国Index=1,如果是加盟商Index=2
      if (event.target.index == 0) {
        this.matchType = null; //改变请求接口参数
        this.getlist(); //调用一次接口
      } else if (event.target.index == 1) {
        this.matchType = 2; //改变请求接口参数
        this.getlist(); //调用一次接口
      } else if (event.target.index == 2) {
        this.matchType = 1;
        this.getlist(); //调用一次接口
      } else if (event.target.index == 3) {
        this.matchType = null;
        this.getlist();
      }
    },
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
    }
  },
  onLoad() {
    console.log("页面加载————————————————————————");
    this.getlist(); //页面创建成功后，调用一次请求接口，此时是加载所有数据
  }
};
</script>
<style scoped>
</style>
