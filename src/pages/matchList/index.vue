<template>
  <div class="main-wrap">
    <!-- {{searchValue}} -->
    <debug_item path="steps" v-model="steps" text="步骤" />
    <debug_item path="matchlist" v-model="matchlist" text="赛事列表" />
    <debug_item path="searchValue" v-model="searchValue" text="searchValue" />
    <van-search placeholder="请输入搜索关键词1" @blur="onSearch(seachValue)" @change="aa" />

    <div>
      <van-tabs :active="active" @change="onClickTab">
        <van-tab :title="bigItem.category " v-for="bigItem in tabList" :key="bigItem">
          <matchListcomponent
            :desc="item.remark"
            :title="item.matchName"
            :matchTime="item.matchTime"
            :publicationStatus="item.publicationStatus"
            :price="'报名费'+item.registrationFee"
            origin-price="1000"
            :matchListP1="item.P1"
            :album="item.album"
            v-for="(item,i) in matchlist"
            :key="i"
          ></matchListcomponent>
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
    aa(event) {
      console.group("event", event);

      console.group("event", event.mp.detail);
      this.searchValue = event.mp.detail;
    },
    //----------- 请求接口数据的函数-------------------
    async getlist() {
      let { data } = await util.post({
        url: global.PUB.domain + "/crossList?page=tangball_match",
        param: { findJson: { matchType: this.matchType } }
      });

      this.matchlist = data.list;
      console.log("data-----------------------", data);
      let bb = _.get(this.matchlist[0],"album");
      console.log("bb-----------------------", bb);

      //--------------数组的日期排序-----------------------
      this.matchlist.sort((a, b) => {
        return a.matchTime > b.matchTime ? -1 : 1;
      });
    },
    //----------- 点击标签时触发的函数，并且会默认传递event-------------------
    onClickTab(event) {
      console.group("onClickTab", event.target); //这个对象包含tab的index和title
      console.log("onClickTab", event.target.index);
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
      // debugger
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
</style>
