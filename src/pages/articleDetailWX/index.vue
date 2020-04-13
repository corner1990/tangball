<template>
  <div class="main-wrap">
    <web-view :src="wxArticleUrl" v-if="wxArticleUrl"></web-view>
    
    <div class="PL10 PR10" v-else>
      找不到公众号文章url
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import mytabbar from "@/components/mytabbar/mytabbar";
import debug_item from "@/components/common/debug_item/debug_item";
import util from "@/utils/util";
export default {
  components: { mytabbar, debug_item, util },
  data() {
    return {
      wxArticleUrl: null,
      docArticle: {}
    };
  },
  methods: {},
  created() {},
  async mounted() {
    let param = util.getQuery(); //获取页面参数
    console.log("param", param);
    this.dataId = param.dataId;
    this.wxArticleUrl = param.wxArticleUrl;

    
  }
};
</script>
<style scoped>

</style>
