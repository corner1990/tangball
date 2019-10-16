<template>
  <div class="main-wrap">
    <van-search placeholder="请输入搜索关键词" @search="searchList" />
    <!-- <openImg v-model="venueDoc.album" ></openImg> -->
    <swiper
      :indicator-active-color="indicatorActiveColor"
      :indicator-color="indicatorColor"
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <block v-for="item in arrRecommend" :key="item.P1">
        <swiper-item>
          <image :src="item.imageUrl" class="slide-image" height="150" @click="gotoPage(item.link)" />
        </swiper-item>
      </block>
    </swiper>
    <div style="height:20px;"></div>
    <div>
      <div class="nav-box">
        <div class="nav-main" @click="gotoPage('/pages/venueList/main')"><van-icon name="home-o" style="color:#F4B116"/>&nbsp;&nbsp;场馆列表</div>
        <div class="nav-main" @click="gotoPage('/pages/matchList/main')"><van-icon name="flag-o" style="color:#F4B116"/>&nbsp;&nbsp;赛事列表</div>
        <div class="nav-main" @click="gotoPage('/pages/rankingList/main')"><van-icon name="bar-chart-o" style="color:#F4B116"/>&nbsp;&nbsp;排行榜</div>
      </div>
      <div class="nav-box">
       
        <div class="nav-main" @click="gotoPage('/pages/articleList/main')"><van-icon name="description" style="color:#F4B116"/>&nbsp;&nbsp;资讯</div>
        <div class="nav-main" @click="gotoPage('/pages/articleDetail/main')"><van-icon name="friends-o" style="color:#F4B116"/>&nbsp;&nbsp;商务合作</div>
      </div>
    </div>
    <div>
      <div style="display:flex">
        <div class="index_area_title" style="flex:0 0 30%">唐球赛事</div>

        <div class="all-box" @click="gotoPage('/pages/matchList/main')">全部赛事&nbsp;></div>
      </div>
      
      <div class>
        <togod pageSize="5"></togod>
      </div>
    </div>
    <div style>
      <div style="display:flex">
        <div class="index_area_title" style="flex:0 0 30%">唐球资讯</div>
        <div class="all-box" @click="gotoPage('/pages/articleList/main')">全部资讯&nbsp;></div>
      </div>
      
      
      <div class="card">
        <articleList></articleList>
      </div>
    </div>

    <div class="TAC LH30 CLB MB20" style="color:#999">
      <navigator
        url="/pages/articleDetail/main?dataId=8"
        hover-class="other-navigator-hover"
      >商务合作 &gt;</navigator>
    </div>
   

    <mytabbar :active="0"></mytabbar>
   
  </div>
</template>
<script>
/* eslint-disable */
import util from "@/utils/util";
import mytabbar from "@/components/mytabbar/mytabbar";
import togod from "../../components/matchList/togod";
import articleList from "../articleList/articlelistIndex";
import card from "@/components/card";
import Dialog from "../../../static/vant/dialog/dialog";
// import { get } from '@/utils/request'
import debug_item from "@/components/common/debug_item/debug_item";
export default {
  components: {
    card,
    mytabbar,
    togod,
    articleList,
    debug_item
  },
  data() {
    return {
      arrRecommend: [],
      arrLink: [
        { title: "ajaxDemo", url: "/pages/ajaxDemo/main" },
        { title: "赛事列表-", url: "/pages/matchList/main" },
        { title: "赛事详情", url: "/pages/matchDetail/main" },
        { title: "赛事报名", url: "/pages/matchEroll/main" },
        // { "title": "场馆列表", "url": "/pages/venueList/main" },
        { title: "场馆详情", url: "/pages/venueDetail/main" },
        { title: "唐球达人", url: "/pages/rankingList/main" },
        { title: "个人中心-我的资料", url: "/pages/myInfo/main" },
        { title: "个人中心-赛事报名列表", url: "/pages/myEroll/main" },
        { title: "个人中心-赛事报名详情", url: "/pages/myErollDetail/main" },
        { title: "个人中心-系统消息列表", url: "/pages/myMsgList/main" },
        { title: "文章列表", url: "/pages/articleList/main" },
        { title: "文章详情", url: "/pages/articleDetail/main" },
        { title: "搜索页面", url: "/pages/searchPage/main" }
      ],
      motto: "Hello miniprograme",
      userInfo: {
        nickName: "mpvue",
        avatarUrl: "http://mpvue.com/assets/logo.png"
      },
      radio: 1,
      // imgUrls: [
      //   "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564573217134&di=5d6655a5878a881ec33b50267a5273f0&imgtype=0&src=http%3A%2F%2Fimg01.tooopen.com%2Fdowns%2Fimages%2F2010%2F12%2F13%2Fsy_20101213160951685816.jpg",
      //   "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1765811829,83133326&fm=26&gp=0.jpg",
      //   "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640"
      // ],
      indicatorDots: true,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      indicatorActiveColor: "#2f0000",
      indicatorColor: "#e0e0e0",
      value: "" // 搜索value,
    };
  },
  methods: {
    gotoPage(url){
      util.gotoPage(url)
    },
    //函数：{ajax获取轮播图列表函数}
    async ajaxRecommendList() {
      let arrRecommend = await util.ajaxGetList({
        page: "tangball_recommend",
        pageSize: 5
      });
      arrRecommend.forEach(docEach => {
        docEach.imageUrl = this.$lodash.get(docEach, `album[0].url`);
      });
      this.arrRecommend = arrRecommend;
    },
    searchList(event) {
      wx.navigateTo({
        url: "/pages/searchPage/main?search=" + event.mp.detail
      });
    },
    gotoPage(url) {
      wx.navigateTo({ url });
    },
    bindViewTap() {
      const url = "../logs/main";
      if (mpvuePlatform === "wx") {
        mpvue.switchTab({ url });
      } else {
        mpvue.navigateTo({ url });
      }
    },
    clickHandle(ev) {
      // throw {message: 'custom test'}
    },
    /**
     * @desc 搜索回调
     */
    onSearch() {},
    /**
     * @desc 赛事切换回调
     */
    tabChange(url) {
      wx.switchTab({
        url
      });
    },
   
  },
  onShow() {
    console.log("onShow");
    const updateManager = wx.getUpdateManager();
    updateManager.onCheckForUpdate(function(res) {
      console.log("CheckForUpdate-res:", res);
      // // 请求完新版本信息的回调
      // console.log(res.hasUpdate);
    });

    updateManager.onUpdateReady(function() {
      wx.showModal({
        title: "更新提示",
        content: "新版本已经准备好，是否重启应用？",
        success(res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate();
          }
        }
      });
    });

    updateManager.onUpdateFailed(function() {
      console.log("onUpdateFailed");
      // 新版本下载失败
    });
  },
  async mounted() {
    /****************************微信会员登录和信息存储-START****************************/
    // let result = await util.getMyWXSetting();
    // //如果未授权，先return,等待用户主动授权
    // if (result == "noAuth") {
    //   util.gotoPage("/pages/authorize/main"); //跳转到授权页面
    //   return;
    // }
    // await util.loginAndInitUser(this);
    // util.isLogin(this);
    this.ajaxRecommendList(); //调用：{ajax获取轮播图列表函数}
    //函数：{登录并ajax初始化用户信息的函数}
    /****************************微信会员登录和信息存储-END****************************/
  },
  created() {
    // let app = getApp()
    // get('http://localhost:4001/api/users').then(res => {
    //   console.log('res', res)
    // })
    // console.log('√', this.$store.state)
  },
  //配置分享页的内容
  onShareAppMessage: function() {
    return {
      title: "唐球",
      path: `/pages/index/main`
    };
  }
};
</script>
<style scoped>
.index_area_title {
  margin-top: 5px;
  /* background: #f4f7fe; */
  height: 40px;
  color: #000;
  font-size: 18px;

  line-height: 40px;
  /* text-align: center; */
  padding-left: 16px;
}
.main-wrap {
  padding-bottom: 60px;
}
.title {
  margin: 10px 20px;
  color: #333;
  border-bottom: 1px solid #000;
}
.card {
  margin: 0 10px;
}
.slide-image {
  width: 100%;
}
.search-text {
  float: left;
  color: gray;
  margin-right: 8px;
}
.getNumberTip {
  color: #646464;
  font-size: 16px;
  padding: 30px 20px;
}
.all-box{
  flex:0 0 63%;
  text-align: right;
  margin-top: 5px;
  /* background: #f4f7fe; */
  height: 40px;
  /* text-decoration: underline; */
  /* color: #F4B116; */
  font-size: 18px;

  line-height: 40px;
  /* margin-right: 15px; */
}
.nav-box{
  display: flex;
  font-size: 18px;
  line-height: 40px;
  
}
.nav-main{
  flex:0 0 28%;
  margin-left: 6%;
}
</style>
