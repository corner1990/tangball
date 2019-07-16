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
import mytabbar from '@/components/mytabbar/mytabbar'
import debug_item from '@/components/common/debug_item/debug_item'
import util from "@/utils/util";

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

  methods: {
    onShow() {

      console.log("rankingList-mpvue.data", this);
      // mpvue.setData({show: true})
    }

  },
  async created() {
    console.log("唐球达人-created");


  },
  async mounted() {
  
    /**
     * ajax请求参赛次数排行榜
     * 请求会员表tangball_member
     */
    let { data } = await util.post({
      url: global.PUB.domain + '/crossList?page=tangball_member',
      param: {
        pageSize: 50, //每页50条数据
        sortJson: { entries: 1 },//按参赛次数降序排序
        //  selectJson: { P1: 1 ,entries: 1 },//指定返回哪些字段
      }
    });
    this.matchTimeRanklist = data.list;
  }
};
</script>

<style scoped>
</style>
