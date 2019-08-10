<template>
  <div>
      <div class="article-box">
         <div class="article-title">
         {{article.articleTitle}}</div>
         <div class="article-title" v-if="article.articleCategory==3" 
          @click="gotoPage(`/pages/articleDetailWX/main?dataId=${article.P1}&wxArticleUrl=${$lodash.get(article, 'extend.wxArticleUrl','')}`)">
             文章详情>>
           </div>
           <div class="article-title" v-else 
          @click="gotoPage(`/pages/articleDetail/main?dataId=${article.P1}`)">
             文章详情>>
           </div>
      </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  props:{
    article:Object
  },
  data () {
    return {
    }
  },
  methods: {
    gotoPage(url){
      wx.navigateTo({ url });
    },
  },
}
</script>
<style scoped>
  .article-box{
    margin:10px 5%;
    width: 80%;
    height: 100%;
    background-color: rgb(235, 235, 235);
    padding: 10px 20px;
    line-height: 30px;
    font-size:18px;
    border-radius: 10px;
  }
  .article-title span{
    font-weight: 700;
  }
</style>
