<template>
  <div class="demo-box">
    <van-button type="primary" size="small" @click="getArticleList()">获取公众号文章列表</van-button>
    <div
      class="data-group"
      v-for="(item,i) in articleList"
      :key="i"
      @click="gotoPage(`/pages/articleDetail/main?dataId=${item.P1}&wxArticleUrl=${$lodash.get(item, 'extend.wxArticleUrl','')}`)"
    >
      <div class="data-group-left">{{item.P1}}-{{item.articleTitle}}-</div>
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
    debug_item,
    util
  },
  data() {
    return {
      articleList: null //文章列表
    };
  },
  methods: {
    gotoPage(url) {
      wx.navigateTo({ url });
    },
    async getArticleList() {
      this.articleList = await util.ajaxGetList({
        page: "tangball_article",
        pageSize: 5,
        findJson: {
          articleCategory: 3
        }
      });
    }
  },
  async created() {},
  async mounted() {}
};
</script>
<style scoped>
.data-group {
  padding: 5px 10px;
  border-bottom: 1px #ddd solid;
  font-size: 16px;
  display: flex;
}
</style>
