<template>
  <div class="myInfo-box">
    <van-search v-model="searchMsg"
     placeholder="请输入搜索关键词" 
     @change="changeSearchMsg"
     @search="searchList"/>
    <van-tabs :active="active" @change="onChange">
      <van-tab title="赛事">
        <div v-if="!isSearch" class="before-search">您还没有进行搜索,请先搜索</div>
        <div v-else-if="matchList.length==0" class="before-search">搜索结果为空,请重新搜索</div>
        <div v-else>
          <div style="height:20px;"></div>
          <!-- 赛事列表组件 -->
            <matchListcomponent :cf="item" v-for="(item,i) in matchList" :key="i"></matchListcomponent>
            <div style="height:50px;"></div>
        </div>
        </van-tab>
      <van-tab title="文章">
        <div v-if="!isSearch" class="before-search">您还没有进行搜索,请先搜索</div>
        <div v-else-if="articleList.length==0" class="before-search">搜索结果为空,请重新搜索</div>
        <div v-else>
          <div style="height:10px;"></div>
          <!-- 文章列表组件 -->
          <articleComponent  :article="article" v-for="(article,index) in articleList" :key="index"></articleComponent>
          <div style="height:50px;"></div>
        </div>
      </van-tab>
    </van-tabs>
    <mytabbar></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import mytabbar from '@/components/mytabbar/mytabbar'
import debug_item from '@/components/common/debug_item/debug_item'
import util from '@/utils/util'
import matchListcomponent from "@/components/matchList/matchListComponent";
import articleComponent from '../../components/searchArticle/articleComponent'
export default {
  components: {
    mytabbar, debug_item,matchListcomponent,articleComponent
  },
  data() {
    return {
      searchMsg:"",//用户输入的搜索关键字
      isSearch:false,//用户是否搜索了
      active:0,//选项卡页面index
      matchList:[],//赛事列表数据
      articleList:[]//文章列表数据
    }
  },
  methods: {
    /**
    * @name 搜索方法，用户在搜索框按回车键调用
    * @desc 判断用户是否搜索了，如果还没有搜索，就将isSearch设为true
    *       调用获取赛事列表和文章列表的方法
    * @param isSearch 是否搜索 active 所在的选项卡页面
    */
    searchList(){
       if(!this.isSearch){
          this.isSearch = true
        }
        this.getMatch()
        this.getArticle()
    },
    /**
    * @name 搜索框双向绑定方法
    * @desc 用户在搜索框输入的内容应该双向绑定
    * @param searchMsg  用户数据的数据
    */
    changeSearchMsg(event){
      this.searchMsg=event.mp.detail
    },
     /**
    * @name 选项卡tab双向绑定方法
    * @desc 用户在切换页面的时候应该实现双向绑定
    * @param active  用户所在页面index
    */
    onChange(event){
      this.active=event.mp.detail.index;
      console.log(this.active);
    },
    /**
    * @name 获取赛事列表方法
    * @desc 
    * @param matchList 赛事列表数据
    */
    async getMatch() {
      if (this.searchMsg!='') {
      let { data } = await util.post({
        url: global.PUB.domain + "/crossList?page=tangball_match",
        param: {
          findJson: {
            matchName:{
              $options: "i",
              $regex: this.searchMsg
            }
          },
        }
      });
      this.matchList = data.list
      }
  },
  /**
    * @name 获取文章列表方法
    * @desc 
    * @param articleList 文章列表数据
    */
  async getArticle(){
    if (this.searchMsg!='') {
      let { data } = await util.post({
        url: global.PUB.domain + "/crossList?page=tangball_article",
        param: {
          findJson: {
            articleTitle:{
              $options: "i",
              $regex: this.searchMsg
            }
          },
        }
      });
      this.articleList = data.list
    }
  }
  },
  mounted(){
  },
  onLoad(options) {
    this.searchMsg = options.search
    this.searchList()
  }
}
</script>
<style scoped>
  .before-search{
    width: 77%;
    margin:20px 5%;
    height: 200px;
    padding-left:50px;
    line-height: 200px;
    background-color: rgb(230, 230, 230);
    font-size:18px;
    border-radius: 10px;
  }
</style>
