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
          <span class="C_3a0" v-if="item.payStatus==1">已支付</span>
          <span class="C_f30" v-else>等待支付</span>
        </div>
        <div class v-if="item.venueDoc">所选场馆：{{item.venueDoc.name}}</div>

        <div class="TAR">
          <van-button
            plain
            size="small"
            type="danger"
            @click="daying"
            
           
          >查看详情</van-button>
        </div>
      </div>
    </div>
    <mytabbar></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import util from "@/utils/util";
import mytabbar from "@/components/mytabbar/mytabbar";
import debug_item from "@/components/common/debug_item/debug_item";

export default {
  components: {
    mytabbar,
    debug_item
  },

  data() {
    return {
      myErollList: null,
    };
  },
computed: {
  //唐球会员信息-在vuex中获取
    tangballUserInfo: function() {
      return this.$store.state.tangballUserInfo 
    }
  },
  methods: {
  
    /**
     * @name ajax获取报名列表函数
     * @desc 三重ajax请求
     * @param xxxx
     */
    
    async ajaxEnrollList() {
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
