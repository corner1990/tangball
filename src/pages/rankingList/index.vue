<template>
  <div class="main-wrap">
    <debug_item path="pageName" v-model="pageName" text="页面名称" />
    <debug_item path="matchTimeRanklist" v-model="matchTimeRanklist" text="比赛次数排行列表" />
    <debug_item path="achievementRanklist" v-model="achievementRanklist" text="比赛成绩排行列表" />
    <div class="button-center">
      <van-button plain type="primary" size="small" @click="matchTime">参赛次数</van-button>
      <van-button plain type="primary" size="small" @click="matchAchievement">成绩排名</van-button>
      <van-button plain type="primary" size="small">鸟王排名</van-button>
      <van-button plain type="primary" size="small" @click="matchIntegral">积分排名</van-button>
    </div>

    <van-tabs :active="active">
      <van-tab title="男子">
        <!-- 参赛成绩 -->
        <div v-if="showchievementlist">
          <div class="ranking-title">
            <div>{{ranking}}</div>
            <div>{{menname}}</div>
            <div>{{achievements}}</div>
          </div>
          <rankingListcomponent
            v-for="item in achievementRanklist"
            :ranking="1"
            :rankingname="item.participantsName"
            :rankingachievement="item.matchScore"
            :key="item"
          ></rankingListcomponent>
        </div>
        <!-- 参赛次数 -->
        <div v-if="showTimelist">
          <div class="ranking-title">
            <div>{{ranking}}</div>
            <div>{{menname}}</div>
            <div>{{numberentries}}</div>
          </div>
          <rankingListcomponent
            v-for="item in matchTimeRanklist"
            :ranking="1"
            :rankingname="item.name"
            :rankingachievement="item.entries"
            :key="item"
          ></rankingListcomponent>
        </div>
        <!-- 参赛积分 -->
        <div v-if="showintegrallist">
          <div class="ranking-title">
            <div>{{ranking}}</div>
            <div>{{menname}}</div>
            <div>{{integral}}</div>
          </div>
          <rankingListcomponent
            v-for="item in achievementRanklist"
            :ranking="1"
            :rankingname="item.participantsName"
            :rankingachievement="item.integral"
            :key="item"
          ></rankingListcomponent>
        </div>
      </van-tab>

      <van-tab title="女子">
        <!-- 参赛成绩 -->
        <div v-if="showchievementlist">
          <div class="ranking-title">
            <div>{{ranking}}</div>
            <div>{{womenname}}</div>
            <div>{{achievements}}</div>
          </div>
          <rankingListcomponent
            v-for="item in achievementRanklist"
            :ranking="1"
            :rankingname="item.participantsName"
            :rankingachievement="item.matchScore"
            :key="item"
          ></rankingListcomponent>
        </div>
        <!-- 参赛次数 -->
        <div v-if="showTimelist">
          <div class="ranking-title">
            <div>{{ranking}}</div>
            <div>{{womenname}}</div>
            <div>{{numberentries}}</div>
          </div>
          <rankingListcomponent
            v-for="item in matchTimeRanklist"
            :ranking="1"
            :rankingname="item.name"
            :rankingachievement="item.entries"
            :key="item"
          ></rankingListcomponent>
        </div>
        <!-- 参赛积分 -->
        <div v-if="showintegrallist">
          <div class="ranking-title">
            <div>{{ranking}}</div>
            <div>{{womenname}}</div>
            <div>{{integral}}</div>
          </div>
          <rankingListcomponent
            v-for="item in achievementRanklist"
            :ranking="1"
            :rankingname="item.participantsName"
            :rankingachievement="item.integral"
            :key="item"
          ></rankingListcomponent>
        </div>
      </van-tab>
    </van-tabs>

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
      pageName: "唐球达人",
      ranking: "排名",
      menname: "男子名字",
      womenname: "女子名字",
      numberentries: "参赛次数",
      achievements: "参数成绩",
      integral: "积分",
      showTimelist: false, //是否显示次数列表
      showchievementlist: false, //是否显示成绩列表
      showintegrallist: false, //是否显示积分列表
      matchTimeRanklist: [], //比赛次数排行列表
      achievementRanklist: [] //比赛成绩排行列表
    };
  },
  methods: {
    onShow() {
      console.log("rankingList-mpvue.data", this);
      // mpvue.setData({show: true})
    },
    async matchTime() {
      /**
       * ajax请求参赛次数排行榜
       * 请求会员表tangball_member
       */
      this.showTimelist = true;
      this.showchievementlist = false;
      this.showintegrallist = false;
      let { data } = await util.post({
        url: global.PUB.domain + "/crossList?page=tangball_member",
        param: {
          pageSize: 50, //每页50条数据
          sortJson: { entries: 1, integral: 1 }, //按参赛次数降序排序
          selectJson: { P1: 1, entries: 1, name: 1, integral: 1 } //指定返回哪些字段
        }
      });
      this.matchTimeRanklist = data.list;
    },
    async matchAchievement() {
      /**
       * ajax请求参赛成绩排行榜
       * 请求会员表tangball_achievement
       */
      this.showchievementlist = true;
      this.showTimelist = false;
      this.showintegrallist = false;
      let { data } = await util.post({
        url: global.PUB.domain + "/crossList?page=tangball_achievement",
        param: {
          pageSize: 50, //每页50条数据
          sortJson: { matchScore: -1 }, //按参赛成绩杆数降序排序
          selectJson: { P1: 1, ranking: 1, matchScore: 1, participantsName: 1 } //指定返回哪些字段
        }
      });
      this.achievementRanklist = data.list;
    },
    async matchIntegral() {
      /**
       * ajax请求参赛积分排行榜
       * 请求会员表tangball_member
       */
      this.showintegrallist = true;
      this.showTimelist = false;
      this.showchievementlist = false;
      let { data } = await util.post({
        url: global.PUB.domain + "/crossList?page=tangball_member",
        param: {
          pageSize: 50, //每页50条数据
          sortJson: { entries: 1, integral: 1 }, //按参赛次数降序排序
          selectJson: { P1: 1, entries: 1, name: 1, integral: 1 } //指定返回哪些字段
        }
      });
      this.matchTimeRanklist = data.list;
    }
  },
  async created() {
    console.log("唐球达人-created");
  }
};
</script>

<style scoped>
.button-center {
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  text-align: center;
}
.button-center van-button {
  margin: 5px;
}
.ranking-title {
  margin: 0 auto;
  width: 100%;
  text-align: center;
}
.ranking-title div {
  width: 100px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  text-align: center;
  margin: 10px 5px;
}
</style>
