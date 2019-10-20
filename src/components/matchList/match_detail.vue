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
          <div class="C_999">赛事时间：{{item.matchTime}}</div>
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
      
      statusIndex:false
      // matchDetailUrl: null
    };
  },
  computed: {
    matchDetailUrl: function() {
      return `/pages/matchDetail/main?id= ${this.item.P1}`;
    },
    matchStatus(){
      let nowDate=new Date().getTime();
      let enrollTimeDate = new Date(this.item.enrollTime).getTime();
      let enrollTimeEnd = new Date(this.item.enrollTimeEnd).getTime();
      let matchTime = new Date(this.item.matchTime).getTime();
      let matchTimeEnd = new Date(this.item.matchTimeEnd).getTime();
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
        return '赛事未发布'
      }
    }
  },
  methods: {
    gotoPage(){
      if (this.matchStatus == '火热报名中'||this.matchStatus =='报名时间已结束'||this.matchStatus=='赛事未发布') {
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
    /**
     * @name 加载图片的方法
     * @desc 调用lodash库导入图片，默认占位图
     * @param 默认占位图：placeholderImg
     * @param 接收的图片地址：matchListImg
     */
    
    
    // let placeholderImg =
    //   "http://qn-static.dmagic.cn/images/placeholder.png";
    // this.matchListImg = this.$lodash.get(
    //   this.item,
    //   "album[0].url",
    //   placeholderImg
    // );
    // this.applyUrl = `/pages/matchEroll/main?id= ${this.item.P1}`;
    // this.matchDetailUrl = `/pages/matchDetail/main?id= ${this.item.P1}`;
  },
  mounted() {
    // console.log("this.item.P1___##", this.item.P1, this.item.matchName);
    // console.log(this.item);
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
