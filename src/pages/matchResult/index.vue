<template>
  <div class="main-wrap">
    <div class="macthManual-title-box">
      <div class="img-box">
        <img :src="matchDoc.album[0].url" v-if="matchDoc.album" />
        <img :src="matchListImg" v-else />
      </div>
      <div class="macth-msg-box">
        <div class="macthManual-title">{{matchDoc.matchName}}</div>
        <div style="height:5px;"></div>
        <div style="display:flex">
          <div class="macth-main">
            <van-icon name="clock-o" style="margin-top:5px" />
            &nbsp;{{matchDoc.matchTime}}
          </div>
          <div
            class="macth-button"
            @click="gotoPage(`/pages/matchDetail/main?id= ${matchDoc.P1}`)"
          >赛事信息</div>
          <div class="macth-button" @click="gotoPage('/pages/macth_group/main')">对阵分组</div>
        </div>
      </div>
    </div>
    <div style="height:10px;background-color: #ddd;"></div>
    <div class="macthManual-main-box" v-if="matchDoc.matchResult">
      <div class="macthManual-main-title">赛事结果说明：</div>
      <div v-html="matchDoc.matchResult" class="macthManual-main"></div>
    </div>
    <!-- <div v-else class="no-macthManual">
        暂无赛事结果说明
    </div>-->
    <div class="achievement-box" v-if="matchDoc.progress">
      <div class="macthManual-main-title" style="margin-top:10px;">成绩榜：</div>
      <div v-if="matchDoc.progress.length>1">
        <van-tabs :active="progressIndex" @change="changeProgress($event,matchDoc.progress)">
          <van-tab :title="item.name" v-for="(item,i) in matchDoc.progress" :key="i">
            <div v-if="item.roundCount>1" class="roundNum-box">
              <div
                v-for="num in roundNum"
                :key="num"
                @click="changeRoundCount(num,i)"
                class="roundNum"
                :class="roundNumIndex==num?'active':''"
              >第{{num+1}}轮</div>
            </div>
            <!-- <van-tabs :active="roundNumIndex" @change="changeRoundCount($event,item.roundCount,i)">
            <van-tab :title="'第'+(j+1)+'轮'" v-for="j in roundNum" :key="j">-->
            <!-- <achiecement_tab :groupAchievementlist='groupAchievementlist' :text='text'></achiecement_tab> -->
            <!-- </van-tab>
            </van-tabs>-->
            <!-- <div v-for="j in 3" :key="j">{{j}}</div> -->
            <div class="achievement-box">
              <!-- {{groupAchievementlist}} -->
              <div
                class="achievement-tab-box"
                v-if="groupAchievementlist&&groupAchievementlist.length>0"
              >
                <div class="achievement-tr-box">
                  <div class="achievement-td-left-box">排名</div>
                  <div class="achievement-td-center-box">{{text}}</div>
                  <div class="achievement-td-right-box">{{scoreText}}</div>
                </div>
                <div
                  class="achievement-tr-box"
                  v-for="(item,index) in groupAchievementlist"
                  :key="index"
                >
                  <div class="achievement-td-left-box">{{index+1}}</div>
                  <div class="achievement-td-center-box">{{item.groupName}}</div>
                  <div class="achievement-td-right-box">{{item.score==-1?'无':item.score}}</div>
                </div>
              </div>
              <div v-else class="noAchievement-box">成绩暂未录入</div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
      <div v-else-if="matchDoc.progress&&matchDoc.progress.length>0">
        <div v-if="matchDoc.progress[0].roundCount>1" class="roundNum-box">
          <div
            v-for="num in roundNum"
            :key="num"
            @click="changeRoundCount(num,i)"
            class="roundNum"
            :class="roundNumIndex==num?'active':''"
          >第{{num+1}}轮</div>
        </div>
        <!-- <achiecement_tab :groupAchievementlist='groupAchievementlist' :text='text'></achiecement_tab> -->
        <div class="achievement-box">
          <!-- {{groupAchievementlist}} -->
          <div
            class="achievement-tab-box"
            v-if="groupAchievementlist&&groupAchievementlist.length>0"
          >
            <div class="achievement-tr-box">
              <div class="achievement-td-left-box">排名</div>
              <div class="achievement-td-center-box">{{text}}</div>
              <div class="achievement-td-right-box">{{scoreText}}</div>
            </div>
            <div
              class="achievement-tr-box"
              v-for="(item,index) in groupAchievementlist"
              :key="index"
            >
              <div class="achievement-td-left-box">{{index+1}}</div>
              <div class="achievement-td-center-box">{{item.groupName}}</div>
              <div class="achievement-td-right-box">{{item.score==-1?'无':item.score}}</div>
            </div>
          </div>
          <div v-else class="noAchievement-box">成绩暂未录入</div>
        </div>
      </div>
      <div v-else class="noAchievement-box" style="padding-left:15px;">成绩暂未录入</div>
    </div>
    <div style="height:20px;"></div>
  </div>
</template>
<script>
/* eslint-disable */
import util from "@/utils/util";
// import tisp from '../../components/tisp/tisp'
// import achiecement_tab from "../../components/achiecement_tab";
export default {
  // components:{ achiecement_tab },
  data() {
    return {
      matchListImg: "http://qn-static.dmagic.cn/images/placeholder.png",
      matchDoc: {}, //赛事数据对象
      groupList: [], //队伍数据列表
      achievementList: [], //成绩数据列表
      gradeText: "teamHoleScoreTotal", //成绩字段对象
      groupAchievementlist: [], //队伍成绩数据数组
      progressIndex: 0, //赛程key
      roundNumIndex: 0, //论述key
      roundNum: 0, //当前赛程有多少轮数key
      text: "队名",
      nowRrogressIndex: 1,
      nowRoundNum: 1,
      scoreText: "积分"
    };
  },
  methods: {
    gotoPage(url) {
      util.gotoPage(url);
    },
    // 切换赛程的方法
    changeProgress(e, progress) {
      wx.showLoading({ title: "加载中", icon: "loading" });
      // console.log(e.target.index);
      // console.log(progress);
      this.roundNum = Number(progress[e.target.index].roundCount);
      this.roundNumIndex = 0;
      if (this.matchDoc.matchForm == 2) {
        if (progress[e.target.index].roundCount > 1) {
          this.gradeText =
            "teamHoleScoreTotal_p" + (e.target.index + 1) + "_r1";
        } else {
          this.gradeText = "teamHoleScoreTotal_p" + (e.target.index + 1);
        }
        // console.log(this.gradeText);

        this.getGroupAchievementlist();
      } else {
        this.nowRoundNum = 1;
        this.nowRrogressIndex = e.target.index + 1;
        this.getIndividualAchievement();
        // console.log(this.roundNumIndex);
      }
      console.log("aaaa");
    },
    // 切换轮数的方法
    changeRoundCount(num, index) {
      wx.showLoading({ title: "加载中", icon: "loading" });
      console.log(num);
      this.roundNumIndex = num - 1;

      // this.roundNum = Number(roundCount)
      // console.log(this.roundNum);
      if (this.matchDoc.matchForm == 2) {
        this.gradeText = "teamHoleScoreTotal_p" + (index + 1) + "_r" + num;

        this.getGroupAchievementlist();
      } else {
        this.nowRoundNum = num;
        this.getIndividualAchievement();
      }
    },
    // 获取成绩队员数据列表的方法
    getGroupAchievementlist() {
      this.groupAchievementlist = [];
      let groupList = JSON.parse(JSON.stringify(this.groupList));
      // console.log('this.achievementList',this.achievementList );
      if (groupList.length <= 0) {
        this.groupAchievementlist = [];
      } else if (this.achievementList <= 0) {
        groupList.forEach(item => {
          let groupName = player.name;
          let score = -1;
          let obj = { groupName, score };
          this.groupAchievementlist.push(obj);
        });
      } else {
        this.achievementList.forEach(item => {
          groupList.forEach((player, index) => {
            if (player.orderId == item.orderId) {
              let groupName = player.name;
              let score = -1;
              if (item.score) {
                if (item.score[this.gradeText]) {
                  score = item.score[this.gradeText] || -1;
                  let obj = { groupName, score };
                  this.groupAchievementlist.push(obj);
                }
              }
              // groupList.splice(index, 1)
            }
          });
        });
      }
      console.log("this.groupAchievementlist", this.groupAchievementlist);
      this.groupAchievementlist.sort(function(obj1, obj2) {
        return obj2.score - obj1.score;
      });
      wx.hideLoading();
      // console.log('this.groupAchievementlist',this.groupAchievementlist);
      // console.log('this.groupList',this.groupList.length);
      // if(groupList.length>0) {
      //   // console.log('aaaa');
      //     groupList.forEach(item => {
      //       let groupName = item.name
      //       let score = -1
      //       let obj = {groupName,score}
      //       this.groupAchievementlist.push(obj)
      //     });
      // console.log('this.groupAchievementlist',this.groupAchievementlist);
      // }
    },
    // 获取参赛队伍信息
    async getGroup() {
      let { data } = await util.post({
        url: global.PUB.domain + "/crossList?page=tangball_team",
        param: {
          findJson: {
            matchId: this.matchDoc.P1
          }
        }
      });
      this.groupList = data.list;
      // console.log('this.groupList',this.groupList);
      this.getAchievement();
    },
    // 获取成绩信息信息
    async getAchievement() {
      let { data } = await util.post({
        url: global.PUB.domain + "/crossList?page=tangball_enroll",
        param: {
          sortJson: { "score.teamHoleScoreTotal": -1 },
          findJson: {
            matchId: this.matchDoc.P1
          }
        }
      });
      this.achievementList = data.list;
      this.getGroupAchievementlist();
      console.log("this.achievementList", this.achievementList);
    },
    // 获取个人赛成绩
    async getIndividualAchievement() {
      wx.showLoading({ title: "加载中", icon: "loading" });
      console.log(1111);
      let { data } = await util.post({
        url: global.PUB.domain + "/crossList?page=tangball_achievement",
        param: {
          sortJson: { matchScore: 1 },
          findJson: {
            matchId: this.matchDoc.P1,
            progressIndex: this.nowRrogressIndex,
            roundNum: this.nowRoundNum
          }
        }
      });
      console.log("data", data);
      this.groupAchievementlist = [];
      let arr = [];
      let memberIdList = [];
      arr = data.list.map(item => {
        let obj = { score: item.matchScore };
        memberIdList.push(item.participantsId);
        return obj;
      });
      {
        let { data } = await util.post({
          url: global.PUB.domain + "/crossList?page=tangball_member",
          param: {
            findJson: {
              P1: memberIdList
            }
          }
        });
        data.list.forEach((item, index) => {
          arr[index].groupName = item.name;
        });
      }
      this.groupAchievementlist = arr;
      console.log("this.groupAchievementlist", this.groupAchievementlist);
      wx.hideLoading();
    }
  },

  onLoad(options) {
    // 获取赛事数据
    this.matchDoc = JSON.parse(wx.getStorageSync("matchInfo"));
    let matchTime = this.matchDoc.matchTime
    matchTime = matchTime.split(' ')[0]
    console.log(matchTime);
    
    let date = new Date(matchTime );
    this.matchDoc.matchTime =date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    console.log("this.matchDoc", this.matchDoc);
    if (this.matchDoc.progress.length>0) {
    // 初始化成绩数据
    if (this.matchDoc.progress[0].roundCount > 1) {
      this.gradeText = "teamHoleScoreTotal_p1_r1";
    } else {
      this.gradeText = "teamHoleScoreTotal_p1";
    }
    // this.groupAchievementlist = []
    this.progressIndex = 0;
    this.roundNumIndex = 0;
    
      this.roundNum = Number(this.matchDoc.progress[0].roundCount);
    }
    
    wx.showLoading({ title: "加载中", icon: "loading" });

    if (this.matchDoc.matchForm == 2) {
      this.text = "队员";
      this.scoreText = "积分";
      this.getGroup();
    } else {
      this.text = "球员";
      this.scoreText = "总杆数";
      this.getIndividualAchievement();
    }
  }
};
</script>
<style scoped>
.macthManual-title {
  text-align: center;
  height: 55px;
  line-height: 30px;
  font-size: 18px;
  font-weight: 700;
  padding: 0 10px;
  padding-top: 5px;
}
.macthManual-main-box {
  padding: 0 20px;
}
.no-macthManual {
  margin-left: 20px;
  font-size: 18px;
}
.macthManual-main-title {
  font-size: 18px;
  margin-left: -10px;
  font-weight: 700;
  margin-bottom: 10px;
}
.achievement-box {
  width: 90%;
  padding: 0 20px;
}
.roundNum-box {
  display: flex;
  margin-top: 10px;
  margin-left: 20px;
}
.roundNum {
  flex: 0 0 20%;
  margin-right: 10px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  border-radius: 10px;
  text-align: center;
}
.active {
  background-color: #f4b116;
  color: white;
}
.achievement-tr-box {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
.achievement-tr-box div {
  border: 1px solid rgb(224, 222, 222);
}
.achievement-tab-box .achievement-tr-box:first-child div {
  background-color: #f4b116;
  color: white;
  font-weight: 700;
}
.achievement-td-left-box {
  flex: 0 0 20%;
}
.achievement-td-center-box {
  flex: 0 0 50%;
}
.achievement-td-right-box {
  flex: 0 0 30%;
}
.achievement-box {
  margin-top: 10px;
  margin-right: 10px;
}
.noAchievement-box {
  font-size: 16px;
}
.macthManual-title-box {
  display: flex;
  height: 100px;
  padding: 10px 20px;
  padding-left: 10px;
}
.img-box {
  flex: 0 0 30%;
  /* border-radius: 5px; */
  /* height: 80px; */
}
.img-box img {
  margin-top: 8px;
  width: 85px;
  height: 90px;
}
.macth-msg-box {
  flex: 0 0 70%;
  /* display: flex; */
}
.macth-main {
  flex: 0 0 40%;
  color: gray;
  height: 30px;
  line-height: 30px;
}
.macth-button {
  flex: 0 0 25%;
  margin-left: 4%;
  height: 28px;
  border-radius: 10px;
  border: #f4b116 1px solid;
  color: #f4b116;
  font-size: 14px;
  text-align: center;
  line-height: 28px;
}
</style>
<style>
</style>
