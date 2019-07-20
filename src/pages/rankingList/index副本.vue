<template>
  <div class="main-wrap">
    <debug_item path="matchlist" v-model="matchlist" text="matchlist" />
    <div class="button-center">
      <van-button
        plain
        type="primary"
        size="small"
        @click="clickfun(index,item)"
        :key="index"
        v-for="(item,index) in arrList "
      >{{item.name}}</van-button>
    </div>
    <van-tabs :active="active" @change="changeSex">
      <van-tab :title="doc" v-for="(doc,i) in sexArr" :key="i">
        <div class="ranking-title">排名</div>
        <div class="ranking-title">{{doc+"名字"}}</div>
        <div class="ranking-title">{{activeTitle}}</div>
        <rankingListcomponent
          v-for="(each,j) in matchlist"
          :ranking="j+1"
          :cf="each"
          :value="arrList[activeMatch].value"
          :key="j"
        ></rankingListcomponent>
      </van-tab>
    </van-tabs>
    <div class="bottom-space"></div>
    <mytabbar></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import mytabbar from "@/components/mytabbar/mytabbar";
import debug_item from "@/components/common/debug_item/debug_item";
import rankingListcomponent from "./rankingListComponent";
import util from "@/utils/util";

export default {
  components: {
    mytabbar,
    debug_item,
    rankingListcomponent
  },
  data() {
    return {
      // 配置的数据列表
      arrList: [
        {
          name: "参赛次数",
          title: "参赛次数",
          value: ["name", "entries"]
        },
        {
          name: "成绩排名",
          title: "参数成绩",
          value: ["participantsName", "matchScore"]
        },
        {
          name: "鸟王排名",
          title: "参赛排名"
          // value: ["participantsName", "integral"]这个还没有接口
        },
        {
          name: "积分排名",
          title: "积分",
          value: ["name", "entries"]
        }
      ],
      sexArr: ["男子", "女子"],
      matchlist: [], //渲染的数据列表
      activeMatch: 0, //参赛次数、成绩排名、鸟王排名、积分排名的索引
      activeSex: 0, //男或者女的索引
      activeTitle: "参赛次数",
      sortJson1: { entries: 1, integral: 1 },
      selectJson1: { P1: 1, entries: 1, name: 1, integral: 1, sex: 0 },
      sortJson2: { matchScore: -1 },
      selectJson2: {
        P1: 1,
        ranking: 1,
        matchScore: 1,
        participantsName: 1,
        sex: 0
      },
      newurl: "/crossList?page=tangball_member",
      newurl2: "/crossList?page=tangball_achievement"
    };
  },
  methods: {
    onShow() {
      console.log("rankingList-mpvue.data", this);
    },
    // -----点击男女的函数
    changeSex(e) {
      this.activeSex = e.target.index;
      this.selectJson1.sex = this.activeSex;
      this.selectJson2.sex = this.activeSex;
    },
    // -----参赛次数、成绩排名、鸟王排名、积分排名函数
    async clickfun(index, item) {
      this.activeMatch = index;
      this.activeTitle = item.title;

      if (index == 0) {
        this.getlist(this.newurl, this.sortJson1, this.selectJson1);
        //参赛次数
      } else if (index == 1) {
        this.getlist(this.newurl2, this.sortJson2, this.selectJson2);
        //成绩排名
      } else if (index == 2) {
        //鸟王排名
      } else {
        //第二个接口参数//排名积分
        this.getlist(this.newurl, this.sortJson1, this.selectJson1);
      }
    },
    async getlist(url, sortJson, selectJson) {
      let { data } = await util.post({
        url: global.PUB.domain + url,
        param: {
          pageSize: 50, //每页50条数据
          sortJson: sortJson, //按参赛次数降序排序
          selectJson: selectJson //指定返回哪些字段
        }
      });
      this.matchlist = data.list;
    }
  },
  // beforemounted
  beforeMount() {
    console.log("唐球达人-created");
    this.getlist(this.newurl, this.sortJson1, this.selectJson1);
  }
};
</script>

<style scoped>
/* 排名按钮 */
.button-center {
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  text-align: center;
}
.button-center van-button {
  margin: 5px;
}
/* 排名标题 */
.ranking-title {
  margin: 0 auto;
  width: 100%;
  text-align: center;
}
.ranking-title {
  width: 100px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  text-align: center;
  margin: 10px 5px;
}
/* 底部间隙 */
.bottom-space {
  height: 60px;
  width: 100%;
}
</style>
