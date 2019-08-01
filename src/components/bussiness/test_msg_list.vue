<template>
  <div class="demo-box">
    <van-button type="primary" size="small" @click="ajaxMsgList">获取消息列表</van-button>
  <debug_item v-model="myMsgList" text="我的消息列表1" />
  </div>
</template>
<script>
/* eslint-disable */
import lodash from "lodash";
import mytabbar from "@/components/mytabbar/mytabbar";
import debug_item from "@/components/common/debug_item/debug_item";
import util from "@/utils/util";
export default {
  components: {
    mytabbar,
    debug_item,
    util
  },
  data() {
    return {
        myMsgList: null,
    };
  },

  methods: {
   //函数：{ajax获取消息列表函数}
    async ajaxMsgList() {
      //ajax获取消息列表
      this.myMsgList = await util.ajaxGetList({
        page: "tangball_msg",
        pageSize: 999,
        findJson: {
          //或查询条件：range==1或[range==2&&memberIdList包含当前会员id]
          $or: [{ range: 1 }, { range: 2, memberIdList: 17 }]
        }
        // sortJson: { publishTime: -1 }, //排序条件
        // selectJson: { name: 1, entries: 1 } //只返回指定字段
      });
    },
  },
  async created() {
 
  },
  async mounted() {}
};
</script>

<style scoped>
</style>
