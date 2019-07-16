<template>
  <div class="main-wrap">
    <debug_item path="pageName" v-model="pageName" text="页面名称"/>
    <debug_item path="matchTimeRanklist" v-model="matchTimeRanklist" text="比赛次数排行列表"/>
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
    mytabbar, debug_item
  },
  data() {
    return {
      pageName: "唐球达人",
      matchTimeRanklist: [],//比赛次数排行列表

    }
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
    console.log("唐球达人-mounted-1");
    //ajax请求接口数据
    let { data } = await util.post({
      url: global.PUB.domain + '/crossList?page=tangball_member',
      param: {
        pageSize: 50, sortJson: { entries: -1 }
      }
    });
    console.log("data", data);
    this.matchTimeRanklist = data.list;
    console.log("唐球达人-mounted-2");

  }
}
</script>

<style scoped>
</style>
