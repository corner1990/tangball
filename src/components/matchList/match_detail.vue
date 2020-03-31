<template>
  <div>
    <!-- <navigator :url="matchDetailUrl"> -->
     
      <div class="match-box" @click="gotoPage">
        <div class="match-img-box" >
          <img :src="item.album[0].url" v-if="item.album"/>
          <img :src="matchListImg" v-else/>
        </div>
        <div class="match-img-box1">
          <h1>{{item.matchName}}</h1>
          <div class="C_999">赛事时间：{{matchTime}}</div>
          <div class="C_999">报名费用：{{item.registrationFee}}</div>
          <div :class="statusIndex?'active':''">{{matchStatus}}</div>
        </div>
        <div class="rpg11">
          <div class="arrow">
            <van-icon name="arrow" size="20px" />
          </div>
        </div>
      </div>
    <!-- </navigator> -->
  
  </div>

</template>
<script>
/* eslint-disable */

import "./matchList.css";
import debug_item from "@/components/common/debug_item/debug_item";
export default {
  watch: {
    active: function(newdata, olddata) {
    
    }
  },
  components: {
    debug_item
  },
  props: ["item", "active"],
  data() {
    return {
      matchListImg: "http://qn-static.dmagic.cn/images/placeholder.png",
      placeholderImg: null,
      searchValue: "111", // 搜索value
      matchType: null,
      applyUrl: null,
      matchTime:null,
      statusIndex:false
      // matchDetailUrl: null
    };
  },
  computed: {
    matchDetailUrl: function() {
      return `/pages/matchDetail/main?id= ${this.item.P1}`;
    },
    matchStatus(){
    
      
      let nowDate=global.moment().format('YYYY-MM-DD HH:mm');
     let enrollTimeDate = global.moment(this.item.enrollTime).format('YYYY-MM-DD HH:mm');
     let enrollTimeEnd  = global.moment(this.item.enrollTimeEnd).format('YYYY-MM-DD HH:mm');
     let matchTime = global.moment(this.item.matchTime ).format('YYYY-MM-DD HH:mm');
     let matchTimeEnd = global.moment(this.item.matchTimeEnd ).format('YYYY-MM-DD HH:mm');
   
      if (nowDate>matchTimeEnd) {
        return '赛事已结束'
      }else if(nowDate>matchTime){
        return '正在比赛中'
      }else if (nowDate>enrollTimeEnd) {
        return '报名时间已结束'
      }else if (nowDate>enrollTimeDate) {
        this.statusIndex = true
        return '火热报名中'
      }else{
        return '报名时间未到'
      }
    }
  },
  methods: {
    gotoPage(){
      if (this.matchStatus == '火热报名中'||this.matchStatus =='报名时间已结束'||this.matchStatus=='报名时间未到') {
        wx.navigateTo({url:`/pages/matchDetail/main?id= ${this.item.P1}`})
      }else{
         wx.setStorage({
           key: "matchInfo",
           data:JSON.stringify(this.item),
           success(){
              wx.navigateTo({url:`/pages/matchResult/main`})
           }
         })
      }
    }
  },
  onLoad() {
    this.matchTime = global.moment(this.item.matchTime).format('YYYY-MM-DD');
    /**
     * @name 加载图片的方法
     * @desc 调用lodash库导入图片，默认占位图
     * @param 默认占位图：placeholderImg
     * @param 接收的图片地址：matchListImg
     */
    
    
  
  },
  mounted() {
   
  }
};
</script>
<style scoped>
.title {
  margin: 10px 20px;
  color: #333;
  border-bottom: 1px solid #000;
}
.card {
  margin: 0 10px;
}
.active{
  color: red
}
</style>
