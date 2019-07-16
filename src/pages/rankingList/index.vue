<template>
  <div class="main-wrap">
    <debug_item path="pageName" v-model="pageName" text="页面名称" />
    <van-button plain type="primary" size="small">参赛次数</van-button>
    <van-button plain type="primary" size="small">成绩排名</van-button>
    <van-button plain type="primary" size="small">鸟王排名</van-button>
    <van-button plain type="primary" size="small">积分排名</van-button>
    <debug_item path="matchTimeRanklist" v-model="matchTimeRanklist" text="比赛次数排行列表" />
    <mytabbar></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import mytabbar from "@/components/mytabbar/mytabbar";
import debug_item from "@/components/common/debug_item/debug_item";

export default {
  components: {
    mytabbar,
    debug_item
  },
  data() {
    return {
      pageName: "唐球达人",
      matchTimeRanklist: [] //比赛次数排行列表
    };
  },

  methods: {},
  async created() {
    console.log("唐球达人-created");
    //ajax请求接口数据
    let { data } = await post(
      global.PUB.domain + "/crossList?page=tangball_member"
    );
    console.log("data", data);
    this.matchTimeRanklist = data.list;
  }
};
</script>

<style scoped>
</style>
