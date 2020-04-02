<template>
  <div class="main-wrap">
    <debug_item path="pageName" v-model="myErollList" text="我的赛事报名1" />
    <div class="data-group" v-for="(item,i) in myErollList" :key="i">
      <div class="data-group-left">
        <div
          class="FWB"
          v-if="item.matchDoc"
        >{{item.matchDoc.matchName}}({{item.matchDoc.matchTime}}开赛)</div>
        <div class>报名订单id：{{item.P1}}</div>
        <div class>提交时间：[{{item.time}}]</div>
        <div class>
          报名状态：
          <span class="C_3a0" v-if="item.payStatus==2">已支付</span>
          <span class="C_f30" v-else>等待支付</span>
        </div>
        <div class v-if="item.venueDoc">所选球场：{{item.venueDoc.name}}</div>
        <div class="TAR">
          <van-button plain size="small" type="danger" @click="gotoPage(item.P1,i)">查看详情</van-button>
        </div>
      </div>
    </div>
    <mytabbar></mytabbar>
    <!--无数据时显示暂无数据-->
     <tisp v-if="status"></tisp>
  </div>
</template>
<script>
/* eslint-disable */
import util from "@/utils/util";
import tisp from "@/components/tisp/tisp";
import mytabbar from "@/components/mytabbar/mytabbar";
import debug_item from "@/components/common/debug_item/debug_item";
export default {
  components: {
    mytabbar,
    debug_item,
    tisp
  },
  data() {
    return {
      myErollList: [],
      status: false, //显示暂无数据
      groups:{}
    };
  },
  computed: {
    //唐球会员信息-在vuex中获取
    tangballUserInfo: function() {
      return this.$store.state.tangballUserInfo;
    }
  },
  methods: {
    /**
     * @name 查看详情按钮跳转
     * @desc 向报名详情传id，
     * @param 使用模板字符串拼接P1传参
     */
   async gotoPage(P1, index) {
      // 拼接详情需要的数据
      let info = this.myErollList[index];
      let url = `/pages/matchEroll/main?id=2`;
      let { sex, orderMoney } = info;
      // let active = 2;
      info = { ...info, total_fee: orderMoney };
      let matchInfo = {
        ...info.matchDoc,
        total_fee: orderMoney,
        sex
      };

      
      if (matchInfo.matchForm == 2) {
        let { data  }= await util.post({
              url: global.PUB.domain + "/crossList?page=tangball_team",
              param: {
                findJson:{
                  orderId:info.orderId
                }
              }
        });
        this.groups = data.list[0]
        wx.setStorage({
        key: "myErollDetail",
        data: JSON.stringify({  info, matchInfo, P1 }),
        success() {
          // wx.navigateTo({ url });
              wx.setStorage({
              key: "groupsMsg",
              data: JSON.stringify(data.list[0]),
              success() {
                wx.navigateTo({ url });
              }
          });
        }
      });
      }else{
      
      
      wx.setStorage({
        key: "myErollDetail",
        data: JSON.stringify({  info, matchInfo, P1 }),
        success() {
          wx.navigateTo({ url });
        }
      });
      }
     
    },
    // 请求接口获取组队信息
    async getGroups(orderId){
      
    },
    /**
     * @name ajax获取报名列表函数
     * @desc 三重ajax请求
     * @param xxxx
     */
    async ajaxEnrollList() {
       wx.showLoading({ title: "加载中", icon: "loading" });
      this.myErollList = await util.ajaxGetList({
        page: "tangball_enroll",
        pageSize: 9999,
        findJson: { memberId: this.tangballUserInfo.P1 }
      });
      this.myErollList = await util.ajaxPopulate({
        listData: this.myErollList,
        populateColumn: "matchDoc",
        idColumn: "matchId",
        idKeyColumn: "P1",
        page: "tangball_match"
      });
      this.myErollList = await util.ajaxPopulate({
        listData: this.myErollList,
        populateColumn: "venueDoc",
        idColumn: "cityVenueId",
        idKeyColumn: "P1",
        page: "tangball_venue"
      });
       wx.hideLoading(); //请求到数据后加载中隐藏
       //-----判断接口数据的长度小于等于0显示暂无数据
      if (this.myErollList.length <= 0) {
        this.status = true;
      } else {
        this.status = false;
      }
    }
  },
  mounted() {
    this.ajaxEnrollList(); //调用：{ajax获取报名列表函数}
    
  }
};
</script>
<style scoped>
.data-group {
  padding: 5px 10px;
  border: 1px #ddd solid;
  font-size: 16px;
  display: flex;
}
.data-group-left {
  flex: 1;
}
.main-wrap {
  padding: 5px 10px 50px;
}
.main-wrap .data-group {
  padding: 10px 10px;
  margin: 0 0 10px 0;
  border-radius: 5px;
}
</style>
