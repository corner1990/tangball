<template>
  <div class="main-wrap">
    <debug_item path="steps" v-model="steps" text="步骤" />
    <debug_item path="matchlist" v-model="matchlist" text="赛事列表" />

    <input type="text" v-model="value" />
    <van-search v-model="value" placeholder="请输入搜索关键词123" use-action-slot bind:search="onSearch" />
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
            :thumb-link="'/pages/matchDetail/main?id='+item.P1"
            v-for="(item,i) in matchlist"
            :key="i"
          >
    
         
          </matchListcomponent>
        </van-tab>
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
      matchType: null,
      activeStep: 0,
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
      tabList:[
        {category:"近期"},{category:"全国"},{category:"加盟商"},{category:"全部"}
      ],

      value: "999" // 搜索value
    };
  },
  methods: {
    //----------- 请求接口数据的函数-------------------
    async getlist() {
      let { data } = await util.post({
        url: global.PUB.domain + "/crossList?page=tangball_match",
        param: { findJson: { matchType: this.matchType } }
      });
      this.matchlist = data.list;
      localStorage.matchID=this.matchlist.P1
       console.log("getlist成功", this.matchlist.P1);
      console.log("getlist成功", this.matchlist);
    },
    //----------- 点击标签时触发的函数，并且会默认传递event-------------------
    onClickTab(event) {
      console.group("onClickTab", event.target); //这个对象包含tab的index和title
      console.log("onClickTab", event.target.index);

      //如果是近期（因为近期的index为1）
      if (event.target.index == 0) {
        console.group("如果是近期", event.target.title);
          this.matchType = null;//改变请求接口参数
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
        this.matchType = 3;
        this.getlist();
      }
    },
    onShow() {
      this.show = true;
      console.log("mpvue.data", this);
      // mpvue.setData({show: true})
    },
    onDaying() {
      console.log(this.matchlist);
    },

    /**
     * @desc 搜索回调
     */
    onSearch() {}
    /**
     * @desc 赛事切换回调
     */
  },
  created() {
    console.log("赛事列表created");
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
