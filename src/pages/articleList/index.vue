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
        <div class="data-group-left">
          <span class="title_text">{{item.articleTitle}}</span>
          <div class="">{{item.CategoryName}}{{item.CreateTime}}</div>
        </div>
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
// import lodash from "lodash";
const lodash = require("@/utils/lodash");
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
      articleList: null, //文章列表
      Categorylist: null //文章列表
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
      this.Categorylist = await util.ajaxGetList({
        page: "tangball_article_category",
        pageSize: 15,
        findJson: {}
      });
      console.log("this.articleList ", this.articleList);
      console.log("this.Categorylist", this.Categorylist);

      let dictPerson = {}; //人员数据字典对象
      this.Categorylist.forEach(item => {
        //循环：{人员数组}
        dictPerson[item.P1] = item;
      });
      
      
      console.log("dictPerson", dictPerson);
      this.articleList.forEach(matchEach => {
        /**
         * 第3种方式：使用数据字典对象，需要在循环之前拼装好数据字典
         */
        matchEach.CategoryName = dictPerson[matchEach.articleCategory].name;

      });
      console.log("this.articleList后 ", this.articleList);
    }
  },
  mounted() {
    this.getArticleList();
  }
  // created() {
  //   //id是自增
  //   this.Categorylist = [
  //     { P1: "1", name: "张三" },//p1
  //     { P1: "2", name: "李四" },
  //     { P1: "4", name: "大明" }
  //   ];
  //   //赛事数组
  //   this.articleList = [
  //     { id: 1, matc: "赛事1", articleCategory: "1" },//articleCategory
  //     { id: 2, matchName: "赛事2", articleCategory: "4" }
  //   ];

  //   /**为第三种方式准备 */
  //   this.dictPerson = {}; //人员数据字典对象
  //   this.Categorylist.forEach(Category => {
  //     //循环：{人员数组}
  //     this.dictPerson[Category.P1] = Category;
  //   });

  //   this.articleList.forEach(matchEach => {

  //     /**
  //      * 第3种方式：使用数据字典对象，需要在循环之前拼装好数据字典
  //      */
  //     matchEach.personName = this.dictPerson[matchEach.articleCategory].name;
  //   });
  // }
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
  width: 210px;
}
.title_text {
  /* 自动换行 */
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
}
.data-group-right {
  flex: 1;
  border: 1px solid #000;
  height: 75px;
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
