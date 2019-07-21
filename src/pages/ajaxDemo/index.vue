<template>
  <div class="main-wrap">
    <debug_item path="memberDoc" v-model="memberDoc" text="ajax获取单个会员数据"/>
    <debug_item path="matchDoc" v-model="matchDoc" text="ajax获取单个赛事数据"/>
    <debug_item path="memberList" v-model="memberList" text="ajax获取会员列表-男性+参数次数降序+前5条"/>
    <van-button type="primary" size="large" @click="addAEnroll()">新增一个报名（配合后台查看数据）</van-button>
    <van-button type="primary" size="large" @click="modifyAEnroll()">修改一个报名（配合后台查看数据）</van-button>
    <van-button type="primary" size="large" @click="deleteAEnroll()">删除一个报名（配合后台查看数据）</van-button>
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

  methods: {
    //函数：{添加一条报名函数}-请配合后台查看数据
    async addAEnroll() {
      await util.ajaxAdd({
        page: "tangball_enroll",
        data: {
          sex: 1,
          memberId: 10,
          matchId: 37, //赛事Idid
          cityVenueId: 37 //城市球馆id
        }
      });
      wx.showToast({
        title: "新增成功",
        icon: "success"
      });
    },
    //函数：{修改一条报名函数}-请配合后台查看数据
    async modifyAEnroll() {
      await util.ajaxModify({
        page: "tangball_enroll",
        findJson: { P1: 44 }, //锁定需要修改的数据
        modifyJson: { age: 18, phone: "13345678888" } //修改字段
      });
      wx.showToast({
        title: "修改成功",
        icon: "success"
      });
    },
    //函数：{删除一条报名函数}-请配合后台查看数据
    async deleteAEnroll() {
      await util.ajaxDelete({
        page: "tangball_enroll",
        findJson: { P1: 46 } //锁定需要删除的数据
      });
      wx.showToast({
        title: "删除成功",
        icon: "success"
      });
    }
  },
  created() {},
  async mounted() {
    //ajax获取单个会员数据
    this.memberDoc = await util.ajaxGetDoc({ page: "tangball_member", id: 10 });
    //ajax获取单个赛事数据
    this.matchDoc = await util.ajaxGetDoc({ page: "tangball_match", id: 37 });
    //ajax获取会员列表
    this.memberList = await util.ajaxGetList({
      page: "tangball_member",
      pageSize: 5,
      findJson: { sex: 1 }, //查询条件
      sortJson: { entries: -1 }, //排序条件
      selectJson: { name: 1, entries: 1 } //只返回指定字典
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
