<template>
  <div class="main-wrap">
    <div class>
      <!-- <div class="data-group-right">
          <img src="../image/location.png" />
      </div>-->
    </div>
    <!--无数据时显示暂无数据-->
    <tisp v-if="status"></tisp>
    <div v-else>
      <articleListIndex v-for="(item,i) in articleList" :key="i" :cf="item"></articleListIndex>
    </div>

    <div style="height:20px"></div>

    <!-- <mytabbar></mytabbar> -->
  </div>
</template>
<script>
/* eslint-disable */
import tisp from "@/components/tisp/tisp";
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
    articleListIndex,
    tisp
  },
  data() {
    return {
      articleList: [], //文章列表
      Categorylist: [], //文章列表
      status: false //显示暂无数据
    };
  },
  methods: {
    
    async getArticleList() {
      wx.showLoading({ title: "加载中", icon: "loading" });
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
      wx.hideLoading(); //请求到数据后加载中隐藏
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
      //-----判断接口数据的长度小于等于0显示暂无数据
      if (this.articleList.length <= 0 || this.Categorylist.length <= 0) {
        this.status = true;
      } else {
        this.status = false;
      }
    }
  },
  mounted() {
    this.getArticleList();
  }
 
};
</script>
<style scoped>
</style>
