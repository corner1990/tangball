<template>
  <div class="main-wrap">
    <van-search v-model="searchMsg"
     placeholder="请输入搜索关键词" 
     @change="changeSearchMsg"
     @search="getlist"/>
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
      matchList:[],
      pageIndex:1,
      moreMatchText:"更多赛事",
      moreMatch:true,
      searchMsg:'',
    };
  },
  methods: {
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
            publicationStatus:1
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
            publicationStatus:1
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
  text-decoration: underline;
  color: #F4B116;
  font-size: 16px;
}
</style> 
