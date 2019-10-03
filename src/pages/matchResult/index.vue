<template>
  <div class="main-wrap">
    <div class="macthManual-title">{{matchDoc.matchName}}</div>
    <div class="macthManual-main-box" v-if="matchDoc.matchResult">
      <div class="macthManual-main-title">赛事结果说明：</div>
      <div v-html="matchDoc.matchResult" class="macthManual-main"></div>
    </div>
    <div v-else class="no-macthManual">
        暂无赛事结果说明
    </div>
    <div v-if="achievementList.length>0" class="achievement-box">
      <div class="macthManual-main-title">领先榜：</div>
      <achiecement_tab :groupAchievementlist='groupAchievementlist'></achiecement_tab>
    </div>
    <div style="height:20px;"></div>
  </div>
</template>
<script>
/* eslint-disable */
import util from "@/utils/util";
import achiecement_tab from "../../components/achiecement_tab";
export default {
  components:{ achiecement_tab },
  data() {
    return {
      matchDoc:{},
      groupList:[],
      achievementList:[],
      progressIndex:1,
      roundNum:1,
      groupAchievementlist:[]
    }
  },
  methods:{
    // 获取参赛队伍信息
    async getGroup(){
      let { data }  = await util.post({
          url: global.PUB.domain + "/crossList?page=tangball_team",
          param: {
            findJson:{
                matchId:this.matchDoc.P1}
            }
    })
      this.groupList = data.list
      // console.log('this.groupList',this.groupList);
      this.getAchievement()
    },
    // 获取成绩信息信息
    async getAchievement(){
      let { data }  = await util.post({
          url: global.PUB.domain + "/crossList?page=tangball_enroll",
          param: {
            sortJson: {  "score.teamHoleScoreTotal": -1 },
            findJson:{
                matchId:this.matchDoc.P1,
                }
            }
    })
      this.achievementList = data.list
      this.groupAchievementlist = []
      // console.log('this.achievementList',this.achievementList );
      if (this.groupList.length<=0) {
        this.groupAchievementlist = []
      }else if(this.achievementList<=0) {
        this.groupList.forEach(item => {
            let groupName = player.name
            let score = -1
            let obj = {groupName,score}
            this.groupAchievementlist.push(obj)
          });
      }else{
        this.achievementList.forEach(item => {
            this.groupList.forEach((player,index) => {
              if (player.orderId == item.orderId) {
                let groupName = player.name
                let score = -1
                if (item.score) {
                  score = item.score.teamHoleScoreTotal||-1
                }
                let obj = {groupName,score}
                this.groupAchievementlist.push(obj)
                this.groupList.splice(index, 1)
              }
            });   
        })
      }
      console.log('this.groupAchievementlist',this.groupAchievementlist);
      console.log('this.groupList',this.groupList.length);
      if(this.groupList.length>0) {
        console.log('aaaa');
          this.groupList.forEach(item => {
            let groupName = item.name
            let score = -1
            let obj = {groupName,score}
            this.groupAchievementlist.push(obj)
          });
          console.log('this.groupAchievementlist',this.groupAchievementlist);
        }
    },
  },
  mounted(){
    this.matchDoc = JSON.parse(wx.getStorageSync("matchInfo"));
    this.getGroup()
  }

};
</script>
<style scoped>
  .macthManual-title{
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    font-weight: 700
  }
  .macthManual-main-box{
    padding: 0 20px;
  }
  .no-macthManual{
    margin-left: 20px;
    font-size: 18px;
  }
  .macthManual-main-title{
    font-size: 18px;
    margin-left: -10px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .achievement-box{
     padding: 0 20px;
  }
</style>
<style>

</style>
