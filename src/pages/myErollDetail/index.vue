<template>
  <div class="main-wrap">
    <debug_item path="pageName" v-model="pageName" text="页面名称"/>
     <debug_item path="dataId" v-model="dataId" text="数据id传参"/>
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
      dataId:null,
      pageName: "个人中心-我的赛事报名详情"
    }
  },
  methods: {
  },
  mounted() {
   let param=util.getQuery();//获取页面参数
   this.dataId=param.dataId;
  }
}
</script>
<style scoped>
</style>
