<template>
  <div class="main-wrap">
    <div class="main-wrap" style="margin-left:-10px;">
      <van-search
        v-model="searchMsg"
        placeholder="请输入搜索关键词"
        @change="changeSearchMsg"
        @search="getArticleList"
      />
    </div>
    <tisp v-if="status"></tisp>
    <div v-else>
      <articleListIndex v-for="(item,i) in articleList" :key="i" :cf="item"></articleListIndex>
    </div>
    <div class="moreArticle-box" @click="getMoreArticle">{{moreArticleText}}</div>
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
      pageIndex: 1,
      moreArticle: true,
      moreArticleText: "更多资讯文章",
      searchMsg: "",
      articleList: [], //文章列表
      Categorylist: [], //文章列表
      status: false //显示暂无数据
    };
  },
  methods: {
    changeSearchMsg(event) {
      this.searchMsg = event.mp.detail;
    },

    async getArticleList() {
      wx.showLoading({ title: "加载中", icon: "loading" });
      this.articleList = await util.ajaxGetList({
        page: "tangball_article",
        pageSize: 15,
        pageIndex: 1,
        sortJson: { matchTime: -1 },
        findJson: {
          articleTitle: {
            $options: "i",
            $regex: this.searchMsg
          },
         //锁定公众号文章分类
        }
      });
      if (this.articleList.length < 15) {
        this.moreArticleText = "已加载全部资讯";
        this.moreArticle = false;
      }
      wx.hideLoading(); //请求到数据后加载中隐藏

      //-----判断接口数据的长度小于等于0显示暂无数据
      if (this.articleList.length <= 0) {
        this.status = true;
      } else {
        this.status = false;
      }
    },
    async getMoreArticle() {
      if (this.moreArticle) {
        this.pageIndex++;
        wx.showLoading({ title: "加载中", icon: "loading" });
        let data = await util.ajaxGetList({
          page: "tangball_article",
          pageSize: 5,
          pageIndex: this.pageIndex,
          sortJson: { matchTime: -1 },
          findJson: {
            //锁定公众号文章分类
          }
        });
        if (data.length > 0) {
          // console.log('this.matchListh',data.list);
          this.articleList.push(...data);
        }
        if (data.length < 5) {
          this.moreArticleText = "已加载全部资讯";
          this.moreArticle = false;
        }
        wx.hideLoading();
      }
    }
  },
  onLoad() {
    this.pageIndex = 1;
    this.moreArticle = true;
    this.searchMsg = "";
    this.getArticleList(); //页面创建成功后，调用一次请求接口，此时是加载所有数据
  },
  onReachBottom() {
    this.getMoreArticle();
  }
};
</script>
<style scoped>
.main-wrap {
  margin-left: 10px;
}
.moreArticle-box {
  text-align: center;
  line-height: 30px;
  /* text-decoration: underline; */
  color: #999;
  font-size: 16px;
}
</style>
