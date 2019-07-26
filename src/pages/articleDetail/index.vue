<template>
  <div class="main-wrap" v-if="ready" >
    <web-view :src="wxArticleUrl" v-if="wxArticleUrl"></web-view>
    <div class v-else>
      <debug_item v-model="wxArticleUrl" text="微信url" />
      <debug_item v-model="pageName" text="页面名称" />
      <debug_item v-model="dataId" text="数据id传参" />
    </div>
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
      ready:false,
      wxArticleUrl: null,
      dataId: null,
      pageName: "文章详情"
    };
  },

  methods: {},
  mounted() {
    let param = util.getQuery(); //获取页面参数
    console.log("param", param);

    this.dataId = param.dataId;
    this.wxArticleUrl = param.wxArticleUrl;
    this.ready=true;
  }
};
</script>

<style scoped>
.data-group {
  padding: 5px 10px;
  border-bottom: 1px #ddd solid;
  font-size: 16px;
  display: flex;
}
.data-group-left {
  flex: 1;
}
.data-group-right {
  text-align: right;
  width: 60px;
}
.n-input {
  display: inline-block;
  border: 1px #ddd solid;
  height: 28px;
  line-height: 28px;
  border-radius: 5px;
}
</style>
