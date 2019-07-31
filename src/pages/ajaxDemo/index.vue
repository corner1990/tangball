<template>
  <div class="main-wrap">

 

 <authorize ></authorize>


     <test_article_list ></test_article_list>
     123
    <phone_msg_code ></phone_msg_code>

   <test_venu_list ></test_venu_list>
    <test_msg_list ></test_msg_list>
     <test_enroll_list ></test_enroll_list>
    <p class="H30 OF2 CL1"></p>
    
    
   
  
    <debug_item v-model="memberDoc" text="ajax获取单个会员数据" />
    <debug_item v-model="matchDoc" text="ajax获取单个赛事数据" />
    <debug_item v-model="memberList" text="ajax获取会员列表-男性+参数次数降序+前5条" />
    <div class="H100"></div>
    <mytabbar></mytabbar> 
  </div>
</template>
<script>
/* eslint-disable */
import lodash from "lodash";
import card from "@/components/card";
import mytabbar from "@/components/mytabbar/mytabbar";
import test_article_list from "@/components/bussiness/test_article_list";
import phone_msg_code from "@/components/bussiness/phone_msg_code";
import test_venu_list from "@/components/bussiness/test_venu_list";
import test_msg_list from "@/components/bussiness/test_msg_list"; 
import authorize from "@/components/bussiness/authorize"; 
import test_enroll_list from "@/components/bussiness/test_enroll_list"; 
import debug_item from "@/components/common/debug_item/debug_item";

import util from "@/utils/util";
export default {
  components: {
    card,
    mytabbar,
    debug_item,
    util,
   
    phone_msg_code,test_venu_list,test_msg_list,test_enroll_list,test_article_list,authorize
  },
  data() {
    return {
      memberId: 17,
     
      memberDoc: null, //会员详情
      matchDoc: null, //赛事详情
      memberList: null //会员列表
    };
  },
  methods: {
   
    
    

  
  },
  async created() {},
  async mounted() {
    console.log("lodash", lodash);
    //ajax获取单个会员数据
    this.memberDoc = await util.ajaxGetDoc({ page: "tangball_member", id: 10 });
    //ajax获取单个赛事数据
    this.matchDoc = await util.ajaxGetDoc({ page: "tangball_match", id: 37 });
    //ajax获取会员列表
    this.memberList = await util.ajaxGetList({
      page: "tangball_member",
      pageSize: 1,
      findJson: { sex: 1 }, //查询条件
      sortJson: { entries: -1 }, //排序条件
      selectJson: { name: 1, entries: 1 } //只返回指定字段
    });

    
  }
};
</script>

<style scoped>


</style>
