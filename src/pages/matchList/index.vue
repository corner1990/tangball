<template>
  <div class="main-wrap">

    <div>
      <van-tabs :active="active" @change="onClickTab" style="position: relative;">
        <van-tab :title="bigItem.category " v-for="bigItem in tabList" :key="bigItem">
          <tisp v-if="status"></tisp>

          <matct_detail v-for="(item,i) in matchlist" :key="i" :item="item" :active="active"></matct_detail>
        </van-tab>
      </van-tabs>
    </div>
    <footer @click="footLoadLazy()" :class="{footLoadLazy:true,noload:!isStatus}">{{footerText}}</footer>
  </div>
</template>
<script>
/* eslint-disable */
import matct_detail from "@/components/matchList/match_detail";
import tisp from "@/components/tisp/tisp";
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
    tisp,
    debug_item,
    matct_detail
  },
  onPageScroll(res) {
    let listHeight = this.matchlist.length * 82.5 - 120.5; //计算赛事列表现有的长度
    let index = Math.ceil(res.scrollTop / listHeight); //计算页面滚动的距离除以页面长度，并且取整数
    // 相当每一次滚动到底部的时候，就会进行一次加载
    if (this.pageIndex == index) {
      this.pageIndex++;
      if (this.isStatus) {
        //这里是点击更多赛事触发了调取接口函数，在这里作判断
        this.getlist();
      }
    }
  },
  onReachBottom(res) {
    //滑动到底部
    //  console.log("---------------------",res);
  },
  data() {
    return {
      pageSize: 5,
      pageIndex: 1,
      alldata: [],
      page: {},
      matchlist1: [],
      count: 0,
      active: 0,
      matchlist: [],
      tabList: [
        { category: "近期赛事" },
        { category: "全国赛" },
        { category: "普通赛" },
        { category: "全部" }
      ],
      status: false, //显示暂无数据
      footerText: "更多赛事", //初始为更多赛事，当最后一页时是查往事
      isStatus: true //控制能够触发请求接口的状态
    };
  },
  methods: {
    tabCutInin() {
      this.matchlist = [];
      this.pageIndex = 1;
      this.getlist(); //调用一次接口
    },
    footLoadLazy() {
      this.pageIndex++;
      if (this.isStatus) {
        //这里是点击更多赛事触发了调取接口函数，在这里作判断
        this.getlist();
      }
    },
    //----------- 点击标签时触发的函数，并且会默认传递event-------------------
    onClickTab(event) {
      this.active = event.target.index;
      this.isStatus = true; //切换普通赛事等时，要能够请求函数，所以设置为true
      this.footerText = "更多赛事"; //切换普通赛事等时，重新把查看往事变为更多赛事
      // ------------------地区区分---------------------
      //如果是近期（因为近期的index为0）,全国Index=1,如果是加盟商Index=2
      if (event.target.index == 0) {
        this.matchType = null; //改变请求接口参数

        this.tabCutInin(); //切换初始化方法
      } else if (event.target.index == 1) {
        this.matchType = 2; //改变请求接口参数
        this.tabCutInin(); //切换初始化方法
      } else if (event.target.index == 2) {
        this.matchType = 1;
        this.tabCutInin(); //切换初始化方法
      } else if (event.target.index == 3) {
        this.matchType = null;
        this.tabCutInin(); //切换初始化方法
      }
    },
    changeValue(event) {
      this.searchValue = event.mp.detail;
    },
    //----------- 请求接口数据的函数-------------------

    async getlist() {
      wx.showLoading({ title: "加载中", icon: "loading" });
      let { data } = await util.post({
        url: global.PUB.domain + "/crossList?page=tangball_match",
        param: {
          pageSize: this.pageSize,
          pageIndex: this.pageIndex,
          sortJson: { matchTime: -1 },
          findJson: { matchType: this.matchType }
        }
      });
      wx.hideLoading(); //请求到数据后加载中隐藏
      let arr = data.list;

      // -------------数组拼接---------------------------
      // console.log("arr.length-----------------------");
      if (arr.length > 0) {
        let arrJoint = this.matchlist.concat(arr);
        this.matchlist = arrJoint;
      }
      //--------------数组的日期排序的方法-----------------------
      this.matchlist.sort((a, b) => {
        return a.matchTime > b.matchTime ? -1 : 1;
      });

      //-----判断接口数据的长度小于等于0显示暂无数据
      if (this.matchlist.length <= 0) {
        this.status = true;
      } else {
        this.status = false;
      }

      if (this.pageIndex == data.page.pageCount) {
        this.footerText = "已无更多赛事"; //当当前页数等于接口的页数时，就文字变为查看往事，不能请求接口了
        this.isStatus = false;
        return;
      }
    }
  },
  onLoad() {
    this.getlist(); //页面创建成功后，调用一次请求接口，此时是加载所有数据
  },
  computed: {
    objParam() {
      return { pageSize: this.pageSize, pageIndex: this.pageIndex };
    }
  },
  onUNnLoad() {
    this.footerText = "更多赛事";
  }
};
</script>
<style scoped>
.foot-loadlazy {
  opacity: 0.5;
  font-weight: bold;
  /* line-height: 30px; */
  text-align: center;
  /* position: absolute;
  bottom: 9px;
  left: 0; */
  background: rgb(158, 149, 149);

  height: 30px;
  width: 100%;
}
.noload {
  background-color: aliceblue;
}
</style>
