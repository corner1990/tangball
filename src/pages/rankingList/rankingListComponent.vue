<template>
  <div>
    <debug_item path="matchTimeRanklist" v-model="matchTimeRanklist" text="比赛次数排行列表" />
    <debug_item path="achievementRanklist" v-model="achievementRanklist" text="比赛成绩排行列表" />
    <div class="button-center">
      <van-button plain type="primary" size="small" @click="matchTime">参赛次数</van-button>
      <van-button plain type="primary" size="small" @click="matchAchievement">成绩排名</van-button>
      <van-button plain type="primary" size="small">鸟王排名</van-button>
      <van-button plain type="primary" size="small">积分排名</van-button>
    </div>

    <van-tabs :active="active">
      <van-tab title="男子">
        <!-- 参赛成绩 -->
        <div class="ranking-title">
          <div>排名</div>
          <div>男子选手</div>
          <div>参数成绩</div>
        </div>
        <div class="ranking-content" v-for="item in achievementRanklist" :key="item">
          <div>
            <a>1</a>
          </div>
          <div>
            <a>{{item.participantsName}}</a>
          </div>
          <div>
            <a>{{item.matchScore}}</a>
          </div>
        </div>

        <!-- 参赛次数 -->
        <div class="ranking-title">
          <div>排名</div>
          <div>男子选手</div>
          <div>参赛次数</div>
        </div>
        <div class="ranking-content" v-for="item in matchTimeRanklist" :key="item">
          <div>
            <a>1</a>
          </div>
          <div>
            <a>{{item.name}}</a>
          </div>
          <div>
            <a>{{item.entries}}</a>
          </div>
        </div>
      </van-tab>

      <van-tab title="女子">
        <!-- 参赛成绩 -->
        <div class="ranking-title">
          <div>排名</div>
          <div>女子选手</div>
          <div>参数成绩</div>
        </div>
        <!-- 参赛次数 -->
        <div class="ranking-title">
          <div>排名</div>
          <div>女子选手</div>
          <div>参赛次数</div>
        </div>

      </van-tab>
    </van-tabs>
    
  </div>
</template>
<script>
/* eslint-disable */
import debug_item from "@/components/common/debug_item/debug_item";
import util from "@/utils/util";
export default {
  components: {
    debug_item
  },
  data() {
    return {
      cfList: {
        //默认排序参数
        sortJsonDefault: {
          "item.entries": 1
        }
      },
      matchTimeRanklist: [], //比赛次数排行列表
      achievementRanklist: [] //比赛成绩排行列表
    };
  },
  components: {},
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
      let { data } = await util.post({
        url: global.PUB.domain + "/crossList?page=tangball_member",
        param: {
          pageSize: 50, //每页50条数据
          sortJson: { entries: 1 }, //按参赛次数降序排序
          selectJson: { P1: 1, entries: 1, name: 1 } //指定返回哪些字段
        }
      });
      this.matchTimeRanklist = data.list;
      console.log(1111);
    },
    async matchAchievement() {
      /**
       * ajax请求参赛次数排行榜
       * 请求会员表tangball_member
       */
      let { data } = await util.post({
        url: global.PUB.domain + "/crossList?page=tangball_achievement",
        param: {
          pageSize: 50, //每页50条数据
          sortJson: { matchScore: -1 }, //按参赛成绩杆数降序排序
          selectJson: { P1: 1, ranking: 1, matchScore: 1, participantsName: 1 } //指定返回哪些字段
        }
      });
      this.achievementRanklist = data.list;
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

.ranking-content {
  margin: 0 auto;
  width: 100%;
  text-align: center;
}
.ranking-content div {
  width: 100px;
  display: inline-block;
  text-align: center;
  margin: 5px;
}
</style>
