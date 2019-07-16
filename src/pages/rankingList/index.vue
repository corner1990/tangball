<template>
  <div class="main-wrap">
    <debug_item path="pageName" v-model="pageName" text="页面名称"/>
    <debug_item path="matchTimeRanklist" v-model="matchTimeRanklist" text="比赛次数排行列表"/>
    <van-search
  :value=" value "
  placeholder="请输入搜索关键词"
  show-action
  bind:search="onSearch"
  bind:cancel="onCancel"
/>
    <mytabbar></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import mytabbar from '@/components/mytabbar/mytabbar'
import debug_item from '@/components/common/debug_item/debug_item'

export default {
  components: {
    mytabbar, debug_item
  },
  data() {
    return {
      pageName: "唐球达人",
      matchTimeRanklist: [],//比赛次数排行列表
       value: '' // 搜索value

    }
  },

  methods: {
onSearch () {},
  },
  async created() {
    console.log("唐球达人-created");
    //ajax请求接口数据
    let { data } = await post(global.PUB.domain + '/crossList?page=tangball_member');
   console.log("data", data);
    this.matchTimeRanklist = data.list;

  }
}
</script>

<style scoped>
</style>
