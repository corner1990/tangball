<template>
  <div class="main-wrap">
    <debug_item path="steps" v-model="steps" text="步骤" />
    <debug_item path="matchlist" v-model="matchlist" text="赛事列表" />

    <input type="text" v-model="value" />
    <van-search v-model="value" placeholder="请输入搜索关键词123" use-action-slot bind:search="onSearch" />
    <div>
      <button @click="nationwideList">我可以的！</button>
      <van-tabs :active="active" bind:change="onChange">
        <van-tab title="近期">
          <matchListcomponent
            :desc="item.remark"
            :title="item.matchName"
            :matchTime="item.matchTime"
            :price="'报名费'+item.registrationFee"
            origin-price="1000"
            :thumb-link="'/pages/matchDetail/main?id='+item.P1"
            v-for="(item,i) in matchlist"
            :key="i"
          ></matchListcomponent>
        </van-tab>
       
          <van-tab title="全国" @click="nationwideList">
            <matchListcomponent
              :desc="item.remark"
              :title="item.matchName"
              :matchTime="item.matchTime"
              :thumb="item.thumb"
              :price="'报名费'+item.registrationFee"
              origin-price="1000"
              :thumb-link="'/pages/matchDetail/main?id='+item.P1"
              v-for="(item,i) in nationwideMatchlist"
              :key="i"
            ></matchListcomponent>
          </van-tab>
  
        <van-tab title="加盟商">加盟商</van-tab>
        <van-tab title="全部">全部</van-tab>
      </van-tabs>
    </div>

    <mytabbar></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import matchListcomponent from "./matchListComponent";
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
      activeStep: 0,
      matchType: null,
      steps: [
        {
          text: "步骤一",
          desc: "描述信息"
        },
        {
          text: "步骤二",
          desc: "描述信息"
        },
        {
          text: "步骤三",
          desc: "描述信息"
        },
        {
          text: "步骤四",
          desc: "描述信息"
        }
      ],
      matchlist: [],
      nationwideMatchlist: [],

      value: "111" // 搜索value
    };
  },
  methods: {
    onShow() {
      this.show = true;
      console.log("mpvue.data", this);
      // mpvue.setData({show: true})
    },
    nationwideList() {
      console.log("大傻子");
      this.matchType = 2;
     
    },

    /**
     * @desc 搜索回调
     */
    onSearch() {}
    /**
     * @desc 赛事切换回调
     */
  },


  async mounted() {
    console.log("赛事列表mounted");
    // //ajax请求接口数据
    // let { data } = await post(global.PUB.domain + '/crossList?page=tangball_match',{findJson:{ "matchType": 2 }});
    // this.matchlist = data.list;

    /**
     * ajax请求参赛次数排行榜
     * 请求会员表tangball_member
     */

    let { data } = await util.post({
      url: global.PUB.domain + "/crossList?page=tangball_match",
      param: { findJson: { matchType: this.matchType } }
    });
    this.matchlist = data.list;
    console.log("aa", this.matchlist);
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
