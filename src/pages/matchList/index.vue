<template>
  <div class="main-wrap">
    page.allCount---------------{{page.allCount}}
    page.pageCount---------------{{page.pageCount}}
    page.pageIndex---------------{{page.pageIndex}}
    pageSize--------------------{{page.pageSize}}
    <div>
      <van-tabs :active="active" @change="onClickTab" style="position: relative;">
        <van-tab :title="bigItem.category " v-for="bigItem in tabList" :key="bigItem">
          <tisp v-if="matchlist.length<=0"></tisp>

          <matct_detail v-for="(item,i) in matchlist" :key="i" :item="item" :active="active"></matct_detail>
        </van-tab>
        <!-- <footer @click="aa()" class="aa">更多赛事</footer> -->
      </van-tabs>
    </div>
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
  data() {
    return {
      pageSize: 5,
      pageIndex: 1,

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
      ]
    };
  },
  methods: {
    aa() {
      this.pageIndex++;
      console.log("count------------------", this.pageIndex);
      this.getlist();
    },
    //----------- 点击标签时触发的函数，并且会默认传递event-------------------
    onClickTab(event) {
      this.active = event.target.index;
      // ------------------地区区分---------------------
      //如果是近期（因为近期的index为0）,全国Index=1,如果是加盟商Index=2
      if (event.target.index == 0) {
        this.matchType = null; //改变请求接口参数
        this.matchlist=[]
        this.pageIndex=1
        this.getlist(); //调用一次接口
      } else if (event.target.index == 1) {
        this.matchType = 2; //改变请求接口参数
         this.matchlist=[]
         this.pageIndex=1
        this.getlist(); //调用一次接口
      } else if (event.target.index == 2) {
        this.matchType = 1;
        this.matchlist=[]
        this.pageIndex=1
        this.getlist(); //调用一次接口
      } else if (event.target.index == 3) {
        this.matchType = null;
         this.matchlist=[]
         this.pageIndex=1
        this.getlist();
      }
    },
    changeValue(event) {
      this.searchValue = event.mp.detail;
    },
    //----------- 请求接口数据的函数-------------------

    async getlist() {
      console.log("this.objParam", this.objParam);
      let { data } = await util.post({
        url: global.PUB.domain + "/crossList?page=tangball_match",
        param: {
          pageSize: this.pageSize,
          pageIndex: this.pageIndex,
          findJson: { matchType: this.matchType }
        }
      });
      let arr = this.matchlist;
      
      this.matchlist = data.list;
      if (arr.length > 0) {
        this.matchlist = this.matchlist.concat(arr);
      }
      this.page = data.page;
      console.log("kcf", data);
      console.log("page", this.page);
      console.log("matchlist", this.matchlist);

      //--------------数组的日期排序的方法-----------------------
      this.matchlist.sort((a, b) => {
        return a.matchTime > b.matchTime ? -1 : 1;
      });
    }
  },
  onLoad() {
    this.getlist(); //页面创建成功后，调用一次请求接口，此时是加载所有数据
  },
  computed: {
    objParam() {
      return { pageSize: this.pageSize, pageIndex: this.pageIndex };
    }
  }
};
</script>
<style scoped>
.aa {
  position: absolute;
  bottom: 9px;
  left: 0;
  background: #ccc;
  height: 30px;
  width: 100%;
}
</style>
