<template>
  <div class="main-wrap">
    <van-search v-model="searchMsg"
     placeholder="请输入搜索关键词" 
     @change="changeSearchMsg"
     @search="getlist"/>
     <div class="input-text" >
       <div style="flex: 0 0 30%">赛事时间：</div>
     <div class="time-box"  @click="showSelect=!showSelect">{{matchTime}}</div>
     </div>
            <div v-if="showSelect">
              <div class="mask-layer"></div>
              <van-picker
                class="picker-box"
                :columns="columns"
                show-toolbar="true"
                @confirm="changeSelect"
                @cancel="closeSelect"
              />
            </div>
    <matct_detail v-for="(item,i) in matchList" :key="i" :item="item" active="0"></matct_detail>
    <!-- <div style="height:1000px"></div> -->
    <div class="moreMatch-box" @click="getMoreMatch">{{moreMatchText}}</div>
    <!-- <mytabbar></mytabbar> -->
    <!-- <footer @click="footLoadLazy()" :class="{footLoadLazy:true,noload:!isStatus}" >{{footerText}}</footer> -->
  </div>
</template>
<script>
/* eslint-disable */
import matct_detail from "@/components/matchList/match_detail";

import util from "@/utils/util";

import mytabbar from "@/components/mytabbar/mytabbar";

export default {
  
  components: {

    mytabbar,

    matct_detail
   
  },
  data() {
    return {
      columns: ["全部", "一月内", "三月内", "半年内", "一年内"],
      matchTime:'全部',
      matchList:[],
      pageIndex:1,
      moreMatchText:"更多赛事",
      moreMatch:true,
      searchMsg:'',
      showSelect:false,
      startTime:'',
      endTiem:'',
      findTime:'',
    };
  },
  methods: {
    getTime(index){
      console.log(index);
      
      if (index == 0) {
        this.findTime = ''
        // this.getlist()
      }else{
        let day = index==1?30:index==2?92:index==3?183:365
        let dateStart = new Date()
      // console.log(dateStart.toLocaleDateString());
      let dateEnd = new Date().setDate(dateStart.getDate()+day)
      dateEnd = new Date(dateEnd)
      //  console.log(dateEnd.toLocaleDateString());
       this.startTime = dateStart
       this.endTiem = dateEnd
       this.findTime={"$gte":this.startTime,"$lte":this.endTiem}
      //  this.getlist()
      }
      // let day = index==0?
      
    },
    // 点击下拉款确定的话将数据信息保存下来，实现双向绑定
    changeSelect(event) {
      this.showSelect = !this.showSelect;
      this.getTime(event.mp.detail.index)
      // console.log(event.mp.detail.index);
      this.matchTime =this.columns[event.mp.detail.index]
      this.getlist()
      // console.log(this.matchTime);
      
      // this.memberMessage.ballAge = event.mp.detail.index + 1;
      // this.ballAgeToString();
    },
    closeSelect() {
      this.showSelect = !this.showSelect;
    },
    async getlist() {
      wx.showLoading({ title: "加载中", icon: "loading" });
      let { data } = await util.post({
        url: global.PUB.domain + "/crossList?page=tangball_match",
        param: {
          pageSize: 7,
          pageIndex: 1,
          sortJson: { matchTime: -1 },
          findJson: {
            matchName:{
              $options: "i",
              $regex: this.searchMsg
            },
            publicationStatus:1,
            
            matchTime:this.findTime,
          },
          
          // findJson: { matchForm: this.matchType,
          // publicationStatus:1}
        }
      });
      this.matchList = data.list;
      console.log('this.matchListh',this.matchList);
      if (this.matchList.length<7) {
        this.moreMatchText = "已加载全部赛事"
        this.moreMatch = false
      }
      wx.hideLoading();
    },
   async getMoreMatch(){
      if (this.moreMatch) {
        this.pageIndex++
      wx.showLoading({ title: "加载中", icon: "loading" });
      let { data } = await util.post({
        url: global.PUB.domain + "/crossList?page=tangball_match",
        param: {
          pageSize: 7,
          pageIndex: this.pageIndex,
          sortJson: { matchTime: -1 },
          findJson: {
            matchName:{
              $options: "i",
              $regex: this.searchMsg
            },
            publicationStatus:1,
             matchTime:this.findTime,
          }
        }
      });
      if (data.list.length>0) {
        // console.log('this.matchListh',data.list);
        this.matchList.push(...data.list)
      }
      
      if (data.list.length<7) {
        this.moreMatchText = "已加载全部赛事"
        this.moreMatch = false
      }
      wx.hideLoading();
      }
      
    },
    changeSearchMsg(event){
      this.searchMsg=event.mp.detail
    },
  },
  
  computed: {
   
  },
  onLoad() {
    this.matchTime = '全部'
    this.getTime(0)
    this.pageIndex = 1
    this.moreMatch = true
    this.searchMsg = ''
    this.getlist(); //页面创建成功后，调用一次请求接口，此时是加载所有数据
    
  },
  onReachBottom(){
    this.getMoreMatch();
    
  }
  
};
</script>
<style scoped>
.moreMatch-box{
  text-align: center;
  line-height:30px;
  /* text-decoration: underline; */
  color: #999;
  font-size: 16px;
}
/* 遮罩层样式 */
.mask-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
}
/* 下拉框样式 */
.picker-box {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 101;
}
.input-text{
  display: flex;
  font-size: 18px;
  line-height: 30px;
  margin-left: 20px;
}
.time-box{
  flex: 0 0 20%;
  padding: 0 15px;
  border-radius: 10px;
  /* background-color: #F4B116 */
  border:1px solid #F4B116;
  color: #F4B116;
  text-align: center;
}
</style> 
