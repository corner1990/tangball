<template>
  <div class="main-wrap PL15 PR15">
    <!-- <debug_item v-model="docArticle" text="文章数据" /> -->
      <div class="FS20 LH50 TA2 FWB">{{docArticle.articleTitle}}</div>
      <rich-text :nodes="docArticle.articleContent" class="FS16 LH24"></rich-text>
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
    debug_item,
    util
  },
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
    
      //ajax获取单篇文章数据
      this.docArticle = await util.ajaxGetDoc({
        page: "tangball_article",
        id: this.dataId
      });
      
  }
};
</script>
<style scoped>

</style>
