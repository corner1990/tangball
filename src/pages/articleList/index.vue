<template>
  <div class="main-wrap">
    <debug_item path="articleList" v-model="articleList" text="文章列表" />

    <div class="H100">
      aaaaaaaaaaaaaaaaaaaaa
      <div
        class="data-group"
        v-for="(item,i) in articleList"
        :key="i"
        @click="gotoPage(`/pages/articleDetail/main?dataId=${item.P1}&wxArticleUrl=${$lodash.get(item, 'extend.wxArticleUrl','')}`)"
      >
        <div class="data-group-left">{{item.articleTitle}}</div>
        <div class="data-group-right">
          <img src="../image/location.png" />
        </div>
      </div>
    </div>
    <mytabbar></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import lodash from "lodash";
import card from "@/components/card";
import mytabbar from "@/components/mytabbar/mytabbar";
import debug_item from "@/components/common/debug_item/debug_item";
import my_field from "@/components/form_item/my_field"; //导入debug_item
import util from "@/utils/util";

export default {
  components: {
    card,
    mytabbar,
    debug_item,
    util,
    my_field
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
        pageSize: 15,
        findJson: {
          articleCategory: null
        }
      });
    }
  },
  mounted() {
    this.getArticleList();
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
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.data-group-right {
  border: 1px solid #000;
  height: 75px;
  width: 135px;
}
.data-group-right img {
  height: 100%;
  width: 100%;
}
.n-input {
  display: inline-block;
  border: 1px #ddd solid;
  height: 28px;
  line-height: 28px;
  border-radius: 5px;
}
</style>
