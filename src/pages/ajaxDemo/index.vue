<template>
  <div class="main-wrap">
    <debug_item path="memberDoc" v-model="memberDoc" text="ajax获取单个会员数据"/>
    <debug_item path="matchDoc" v-model="matchDoc" text="ajax获取单个赛事数据"/>
    <debug_item path="matchDoc" v-model="memberList" text="ajax获取会员列表-男性+参数次数降序+前5条"/>

    <mytabbar></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import card from "@/components/card";
import mytabbar from "@/components/mytabbar/mytabbar";
import debug_item from "@/components/common/debug_item/debug_item";
import util from "@/utils/util";
export default {
  components: {
    card,
    mytabbar,
    debug_item,
    util
  },
  data() {
    return {
      memberDoc: null, //会员详情
      matchDoc: null, //赛事详情
      memberList: null //会员列表
    };
  },

  methods: {},
  created() {},
  async mounted() {
    //ajax获取单个会员数据
    this.memberDoc = await util.ajaxGetDoc({ page: "tangball_member", id: 10 });
    //ajax获取单个赛事数据
    this.matchDoc = await util.ajaxGetDoc({ page: "tangball_match", id: 37 });
    //ajax获取会员列表-男性+参数次数降序+前5条
    this.memberList = await util.ajaxGetList({
      page: "tangball_member",
      pageSize: 5,
      findJson: { sex: 1 },//查询条件
      sortJson: { entries: -1 },//排序条件
      selectJson: { name:1,entries: 1 },//只返回指定字典
    });
  }
};
</script>

<style scoped>
.main-wrap {
  padding-bottom: 60px;
}
.title {
  margin: 10px 20px;
  color: #333;
  border-bottom: 1px solid #000;
}
.card {
  margin: 0 10px;
}
/* 赛事状态按钮 */
/* .browsing van-button {
  margin-right: 10px;
} */
/* 折叠面板 */
.collapse {
  text-align: center;
  border: 1px solid #fbfbfb;
  border-radius: 5px;
}
/* 折叠面板 内容*/
.collapse span {
  display: block;
  background-color: #fafafa;
  margin: 5px 15px;
}
</style>
