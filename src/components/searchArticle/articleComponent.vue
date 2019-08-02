<template>
  <div>
      <div class="article-box">
         <div class="article-title"><span>文章标题:</span>&nbsp;&nbsp;
         {{article.articleTitle}}</div>
         <div class="article-title">
           <navigator :url="'/pages/articleDetail/main?id='+article.P1">
             文章详情>>
           </navigator>
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
  mounted () {
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
