<template>
  <div class="main-wrap">
    <div class>
    
        <!-- <div class="data-group-right">
          <img src="../image/location.png" />
        </div>-->
      </div>
      <articleListIndex v-for="(item,i) in articleList" :key="i" :cf="item"></articleListIndex>
      <div style="height:20px"></div>
  
    <!-- <mytabbar></mytabbar> -->
  </div>
</template>
<script>
/* eslint-disable */
import articleListIndex from "@/components/articleList/articleListIndex";
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
    my_field,
    articleListIndex
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
          articleCategory: 3 //锁定公众号文章分类
        }
      });

      this.Categorylist = await util.ajaxGetList({
        page: "tangball_article_category",
        pageSize: 15,
        findJson: {}
      });
      let dictPerson = {}; //人员数据字典对象
      this.Categorylist.forEach(item => {
        //循环：{人员数组}
        dictPerson[item.P1] = item;
      });
      this.articleList.forEach(matchEach => {
        /**
         * 第3种方式：使用数据字典对象，需要在循环之前拼装好数据字典
         */
        matchEach.CategoryName = dictPerson[matchEach.articleCategory].name;
      });
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

</style>
