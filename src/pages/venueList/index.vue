<template>
  <div class="main-wrap">
    <debug_item path="pageName" v-model="pageName" text="页面名称" />

    <van-search :value="value" placeholder="请输入搜索关键词" use-action-slot bind:search="onSearch" />

    <debug_item path="venueList" v-model="venueList" text="场馆列表" />
    <mytabbar></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import mytabbar from "@/components/mytabbar/mytabbar";
import debug_item from "@/components/common/debug_item/debug_item";
import util from "@/utils/util";


export default {
  components: {
    mytabbar,
    debug_item
  },
  data() {
    return {
      pageName: "场馆列表",
      venueList:[],
      value: "" // 搜索value
    };
  },

  methods: {
    /**
     * @desc 搜索回调
     */
    onSearch() {}
  },
  async created() {
   console.log("场馆列表-created");
    let { data } = await util.post({
      url: global.PUB.domain + "/crossList?page=tangball_venue"
     
    });
    console.log("data111111", data);
    this.venueList = data.list;
  }
};
</script>

<style scoped>
</style>
