<template>
  <div class="main-wrap" >
    <div class="macthManual-title">{{matchDoc.matchName}}</div>
    <div class="macthManual-main-box" v-if="matchDoc.matchResult">
      <div class="macthManual-main-title">赛事结果说明：</div>
      <div v-html="matchDoc.matchResult" class="macthManual-main"></div>
    </div>
    <div v-else class="no-macthManual">
        暂无赛事结果说明
    </div>
    <div class="achievement-box" v-if="matchDoc.progress">
      <div class="macthManual-main-title" style="margin-top:10px;">成绩榜：</div>
      <div v-if="matchDoc.progress.length>1">
        <van-tabs :active="progressIndex" @change="changeProgress($event,matchDoc.progress)">
          <van-tab :title="item.name" v-for="(item,i) in matchDoc.progress" :key="i">
                <div v-if="item.roundCount>1" class="roundNum-box">
                  <div v-for="num in roundNum" :key="num" @click="changeRoundCount(num,i)" class="roundNum"
                  :class="roundNumIndex==num?'active':''">第{{num+1}}轮</div>
                </div>
                <!-- <van-tabs :active="roundNumIndex" @change="changeRoundCount($event,item.roundCount,i)">
                  <van-tab :title="'第'+(j+1)+'轮'" v-for="j in roundNum" :key="j"> -->
                  <achiecement_tab :groupAchievementlist='groupAchievementlist' :text='text'></achiecement_tab>
                  <!-- </van-tab>
                </van-tabs> -->
                <!-- <div v-for="j in 3" :key="j">{{j}}</div> -->


          </van-tab>
        </van-tabs>
      </div>
      <div v-else>
              <achiecement_tab :groupAchievementlist='groupAchievementlist' :text='text'></achiecement_tab>
      </div>
    </div>
    <div style="height:20px;"></div>
  </div>
</template>
<script>
/* eslint-disable */
import util from "@/utils/util";
// import tisp from '../../components/tisp/tisp'
import achiecement_tab from "../../components/achiecement_tab";
export default {
  components:{ achiecement_tab },
  data() {
    return {
      matchDoc:{},//赛事数据对象
      groupList:[],//队伍数据列表
      achievementList:[],//成绩数据列表
      gradeText:'teamHoleScoreTotal',//成绩字段对象
      groupAchievementlist:[],//队伍成绩数据数组
      progressIndex:0,//赛程key
      roundNumIndex:0,//论述key
      roundNum:0,//当前赛程有多少轮数key
      text:'队名',
      nowRrogressIndex: 1,
      nowRoundNum: 1
    }
  },
  methods:{
    // 切换赛程的方法
    changeProgress(e,progress){
      wx.showLoading({ title: "加载中", icon: "loading" });
      // console.log(e.target.index);
      // console.log(progress);
      this.roundNum = Number(progress[e.target.index].roundCount)
      this.roundNumIndex= 0
      if (this.matchDoc.matchForm == 2) {
        if (progress[e.target.index].roundCount>1) {
        this.gradeText = 'teamHoleScoreTotal_p'+(e.target.index+1)+'_r1'
      }else{
        this.gradeText = 'teamHoleScoreTotal_p'+(e.target.index+1)
      }
      // console.log(this.gradeText);

      this.getGroupAchievementlist()
      }else{
        this.nowRoundNum = 1
        this.nowRrogressIndex = e.target.index +1
        this.getIndividualAchievement()
      // console.log(this.roundNumIndex);

      }
      console.log('aaaa');
    },
    // 切换轮数的方法
    changeRoundCount(num,index){
      wx.showLoading({ title: "加载中", icon: "loading" });
      console.log(num);
      this.roundNumIndex = num-1

      // this.roundNum = Number(roundCount)
      // console.log(this.roundNum);
       if (this.matchDoc.matchForm == 2) {
      this.gradeText = 'teamHoleScoreTotal_p'+(index+1)+'_r'+num

      this.getGroupAchievementlist()
       }else{
         this.nowRoundNum = num
         this.getIndividualAchievement()
       }
    },
    // 获取成绩队员数据列表的方法
    getGroupAchievementlist(){
      this.groupAchievementlist = []
      let groupList = JSON.parse(JSON.stringify(this.groupList))
      // console.log('this.achievementList',this.achievementList );
      if (groupList.length<=0) {
        this.groupAchievementlist = []
      }else if(this.achievementList<=0) {
        groupList.forEach(item => {
            let groupName = player.name
            let score = -1
            let obj = {groupName,score}
            this.groupAchievementlist.push(obj)
          });
      }else{
        this.achievementList.forEach(item => {
            groupList.forEach((player,index) => {
              if (player.orderId == item.orderId) {
                let groupName = player.name
                let score = -1
                if (item.score) {
                  if (item.score[this.gradeText]) {
                    score = item.score[this.gradeText]||-1
                    let obj = {groupName,score}
                    this.groupAchievementlist.push(obj)
                  }
                }
                // groupList.splice(index, 1)
              }
            });
        })
      }
      console.log('this.groupAchievementlist',this.groupAchievementlist);
      this.groupAchievementlist.sort(function (obj1,obj2) {
        return  obj2.score-obj1.score
      })
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
      this.getGroupAchievementlist()
      console.log('this.achievementList',this.achievementList);

    },
    // 获取个人赛成绩
    async getIndividualAchievement(){
      wx.showLoading({ title: "加载中", icon: "loading" });
      let { data }  = await util.post({
          url: global.PUB.domain + "/crossList?page=tangball_achievement",
          param: {
            sortJson: {  "matchScore": -1 },
            findJson:{
                matchId:this.matchDoc.P1,
                progressIndex: this.nowRrogressIndex,
                roundNum: this.nowRoundNum
                }
            }
    })
    console.log('data',data);
    this.groupAchievementlist = []
    let arr = []
    let memberIdList =[]
    arr = data.list.map(item=>{
      let obj = {score:item.matchScore}
      memberIdList.push(item.participantsId)
      return obj
    })
    {
      let { data }  = await util.post({
          url: global.PUB.domain + "/crossList?page=tangball_member",
          param: {
            findJson:{
                P1:memberIdList
                }
            }

      })
      data.list.forEach((item,index)=>{
        arr[index].groupName = item.name
      })
    }
    this.groupAchievementlist = arr
    console.log( 'this.groupAchievementlist', this.groupAchievementlist);
    wx.hideLoading();
    }
  },

  mounted(){
    // 获取赛事数据
    this.matchDoc = JSON.parse(wx.getStorageSync("matchInfo"));
    console.log('this.matchDoc',this.matchDoc);
    // 初始化成绩数据
    if (this.matchDoc.progress[0].roundCount>1) {
      this.gradeText = "teamHoleScoreTotal_p1_r1"
    }else{
      this.gradeText = "teamHoleScoreTotal_p1"
    }
    this.progressIndex = 0
    this.roundNumIndex = 0
    this.roundNum = Number(this.matchDoc.progress[0].roundCount)
    wx.showLoading({ title: "加载中", icon: "loading" });
    if (this.matchDoc.matchForm == 2) {
      this.getGroup()
    }else{
      this.text = '球员'
      this.getIndividualAchievement()
    }

  }

};
</script>
<style scoped>
  .macthManual-title{
    text-align: center;
    /* height: 50px; */
    line-height: 50px;
    font-size: 20px;
    font-weight: 700;
    padding:0 10px;
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
  .roundNum-box{
    display: flex;
    margin-top:10px;
  }
  .roundNum{
    flex:0 0 20%;
    margin-right: 10px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    border-radius: 10px;
    text-align: center;
  }
  .active{
    background-color: #F4B116;
    color: white;
  }
</style>
<style>

</style>
