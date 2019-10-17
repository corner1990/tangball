<template>
  <div class="main-wrap" >
    <div class="macthManual-title">{{matchDoc.matchName}}</div>
    <div class="macthManual-title">对阵分组数据表</div>
       <div v-if="matchDoc.progress.length>1">
        <van-tabs :active="progressIndex-1" @change="changeProgress($event,matchDoc.progress)">
          <van-tab :title="item.name" v-for="(item,i) in matchDoc.progress" :key="i">
                <div v-if="item.roundCount>1" class="roundNum-box">
                  <div v-for="num in nowRoundNum" :key="num" @click="changeRoundCount(num)" class="roundNum"
                  :class="roundNum==num+1?'active':''">第{{num+1}}轮</div>
                </div>
                <div class="achievement-box">
  <!-- {{groupAchievementlist}} -->
   <div class='achievement-tab-box' v-if="groupsMsgList&&groupsMsgList.length>0">
        <div class="achievement-tr-box"> 
            <div class="achievement-td-left-box" style="line-height: 40px;">组号</div>
            <div class="achievement-td-center-box">{{matchDoc.matchForm == 1?'比赛球员':'比赛队伍'}}</div>
            <div class="achievement-td-right-box">比赛时间</div>
        </div>
        <div class="achievement-tr-box" v-for="(item,index) in groupsMsgList" :key="index">
            <div class="achievement-td-left-box">{{item.groupNum}}</div>
            <div class="achievement-td-center-box"><div v-for="(member,num) in item.groupMember" :key="num">
              {{member}}</div></div>
            <div class="achievement-td-right-box">
              {{item.timeStartDay}}<br/>
              {{item.timeStart!='暂无'?item.timeStart:''}}</div>
        </div>
      </div>
    <div v-else class="noAchievement-box">暂无对阵分组信息</div>
</div>


          </van-tab>
        </van-tabs>
      </div>
    <div v-else-if="matchDoc">
        <div v-if="matchDoc.progress[0].roundCount>1" class="roundNum-box">
                  <div v-for="num in nowRoundNum" :key="num" @click="changeRoundCount(num)" class="roundNum"
                  :class="roundNum==num+1?'active':''">第{{num+1}}轮</div>
                </div>
                <div class="achievement-box">
  <!-- {{groupAchievementlist}} -->
   <div class='achievement-tab-box' v-if="groupsMsgList&&groupsMsgList.length>0">
        <div class="achievement-tr-box">
            <div class="achievement-td-left-box" style="line-height: 40px;">组号</div>
            <div class="achievement-td-center-box">{{matchDoc.matchForm == 1?'比赛球员':'比赛队伍'}}</div>
            <div class="achievement-td-right-box">比赛时间</div>
        </div>
        <div class="achievement-tr-box" v-for="(item,index) in groupsMsgList" :key="index">
            <div class="achievement-td-left-box">{{item.groupNum}}</div>
            <div class="achievement-td-center-box"><div v-for="(member,num) in item.groupMember" :key="num">
              {{member}}</div></div>
              <div class="achievement-td-right-box">
              {{item.timeStartDay}}<br/>
              {{item.timeStart!='暂无'?item.timeStart:''}}</div>
            
        </div>
      </div>
    <div v-else class="noAchievement-box">暂无对阵分组信息</div>
</div>

      </div>
      <div style="height:20px;"></div>
  </div>
</template>
<script>
/* eslint-disable */
import util from "@/utils/util";

export default {
  // components:{ achiecement_tab },
  data() {
    return {
      matchDoc:{},
      progressIndex:1,
      roundNum:1,
      nowRoundNum:1,
      groupsMsgList:[],
      memberIdList:[],
      memberMsg:[]
    }
  },
  methods:{
    changeProgress($event){
      this.progressIndex = $event.mp.detail.index+1
      this.nowRoundNum = Number(this.matchDoc.progress[$event.mp.detail.index].roundCount)
      this.roundNum = 1
      this.getGroupMsg()
      
    },
    changeRoundCount(index){
      console.log(index);
      
      this.roundNum = index 
      this.getGroupMsg()
    },
    getDay(date){
      if (!date) {
        return '暂无'
      }else{
      let day = new Date(date).toLocaleDateString()
      return day
      }
    },
    getTime(date){
       if (!date) {
        return '暂无'
      }else{
      let time = new Date(date).toLocaleTimeString()
      return time
      }
    },
    // 将获取到的数据拼接成所需的对阵分组数据
    joingroupsMsg(groupsMsg){
      this.groupsMsgList = []
      groupsMsg.forEach(item=>{
        let arr = []
        item.groupMember.forEach(doc=>{
          this.memberMsg.forEach(member=>{
            if (member.P1 == doc.id) {
              arr.push(member.name)
            }
          })
        })
        let timeStartDay = this.getDay(item.timeStart)
        let timeStart = this.getTime(item.timeStart) 
        console.log(item.timeStart);
        
        let obj = {
          groupNum:item.groupNum||0,
          timeStartDay,
          timeStart,
          groupMember:arr
        }
        this.groupsMsgList.push(obj)
      })
      console.log('this.groupsMsgList ',this.groupsMsgList );
         wx.hideLoading();
      
    },
    // 获取队伍信息
    async getTeam(groupsMsg){
      let { data }  = await util.post({
          url: global.PUB.domain + "/crossList?page=tangball_team",
          param: {
            findJson:{
                P1:this.memberIdList
                }
            }
    })
    this.memberMsg = data.list
    console.log('aaaa',data.list);
    this.joingroupsMsg(groupsMsg)
    },
    // 获取个人信息
    async getMenber(groupsMsg){
      let { data }  = await util.post({
          url: global.PUB.domain + "/crossList?page=tangball_member",
          param: {
            findJson:{
                P1:this.memberIdList
                }
            }

      })
      console.log('aaaa',data.list);
      this.memberMsg = data.list
      this.joingroupsMsg(groupsMsg)
   
    },
    // 获取对阵分组信息
    async getGroupMsg(){
      wx.showLoading({ title: "加载中", icon: "loading" });
      let { data }  = await util.post({
          url: global.PUB.domain + "/crossList?page=tangball_group",
          param: {
            sortJson: {  "groupNum": 1 },
            findJson:{
                matchId:this.matchDoc.P1,
                progressIndex:this.progressIndex,
                roundNum:this.roundNum
                },
                selectJson:{P1: 1, groupNum: 1, groupMember: 1, matchResultForScore: 1, matchResult: 1, timeStart: 1}
            }
    })
      console.log('分组数据',data.list);
      this.memberIdList = []
      let arr = []
      data.list.forEach(doc => {
       arr.push(...doc.groupMember) 
    });
    arr.forEach(item=>{
      if (this.memberIdList.indexOf(item.id)==-1) {
        this.memberIdList.push(item.id)
      }
    })
    console.log(this.memberIdList);
    if (this.matchDoc.matchForm == 2) {
      console.log(111);
      
      this.getTeam(data.list)
    }else{
      this.getMenber(data.list)
    }
      
      
    },
  },
 async onLoad(){
   
   this.progressIndex = 1
   this.roundNum = 1 
    this.matchDoc =await JSON.parse(wx.getStorageSync("matchInfo"));
    console.log('this.matchDoc',this.matchDoc );
    this.nowRoundNum = Number(this.matchDoc.progress[0].roundCount)
    this.getGroupMsg()
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
    width: 90%;
     padding: 0 20px;
  }
  .roundNum-box{
    display: flex;
    margin-top:10px;
    margin-left: 20px;
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
  .achievement-tr-box{
        display: flex;
        text-align: center;
        /* height: 40px; */
        line-height: 40px;
        font-size: 14px;
    }
    .achievement-tr-box div{
        border: 1px solid rgb(224, 222, 222)
    }
    .achievement-tab-box .achievement-tr-box:first-child div{
        background-color:  #F4B116;
        color: white;
        font-weight: 700
    }
    .achievement-td-left-box{
      line-height: 80px;
        flex:0 0 15%;
    }
    .achievement-td-center-box{
        flex:0 0 50%;
    }
    .achievement-td-right-box{
        flex:0 0 35%;
    }
    .achievement-box{
      margin-top:10px;
      margin-right: 10px;
    }
    .noAchievement-box{
      font-size: 16px;
    }
</style>
