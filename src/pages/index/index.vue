<template>
  <div class="main-wrap">
    <van-cell
      is-link
      :title="item.title"
      link-type="navigateTo"
      :url="item.url"
      v-for="(item,i) in arrLink"
      :key="i"
    />
    <van-button size="large" @click="gotoPage('/pages/myErollDetail/main?dataId=1&type=t1')">我的参赛详情1</van-button>
    <van-button size="large" @click="gotoPage('/pages/myErollDetail/main?dataId=2')">我的参赛详情2</van-button>

    <view class="btn-area">
      <navigator url="/pages/myErollDetail/main?dataId=3" hover-class="navigator-hover">跳转到新页面</navigator>
      <navigator
        url="/pages/myErollDetail/main?dataId=3"
        open-type="redirect"
        hover-class="other-navigator-hover"
      >在当前页打开</navigator>
      <navigator
        url="/pages/tanghome/main"
        open-type="switchTab"
        hover-class="other-navigator-hover"
      >切换 Tab-针对tabar中的页面</navigator>
    </view>
    <swiper
      :indicator-active-color="indicatorActiveColor"
      :indicator-color="indicatorColor"
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <block v-for="item in imgUrls" :key="item">
        <swiper-item>
          <image :src="item" class="slide-image" height="150" />
        </swiper-item>
      </block>
    </swiper>

    <div class="card">
      <matchlist></matchlist>
    </div>
    <div class="card">
      <h3>唐球达人</h3>
      <div>
        <van-panel title="标题" desc="描述信息" status="状态">
          <view>内容</view>
        </van-panel>
      </div>
    </div>
    <div class="card">
      <h3>互动节目</h3>
      <div>
        <van-panel title="标题" desc="描述信息" status="状态">
          <view>内容</view>
        </van-panel>
      </div>
    </div>
    <div class="card">
      <h3>唐球学院</h3>
      <div>
        <van-panel title="标题" desc="描述信息" status="状态">
          <view>内容</view>
        </van-panel>
      </div>
    </div>
    <div class="card">
      <h3>最新动态</h3>
      <div>
        <van-panel title="标题" desc="描述信息" status="状态">
          <view>内容</view>
        </van-panel>
      </div>
    </div>
    <div class="card">
      <h3>连锁加盟</h3>
      <div>
        <van-panel title="标题" desc="描述信息" status="状态">
          <view>内容</view>
        </van-panel>
      </div>
    </div>
    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
    <div class="all">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <mytabbar :active="0"></mytabbar>
  </div>
</template>

<script>
/* eslint-disable */
import util from "@/utils/util";
import mytabbar from "@/components/mytabbar/mytabbar";
import matchlist from "../matchList/index";
import card from "@/components/card";
// import { get } from '@/utils/request'
export default {
  components: {
    card,
    mytabbar,
    matchlist
  },
  data() {
    return {
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
        { title: "搜索页面", url: "/pages/searchPage/main" },
      ],
      motto: "Hello miniprograme",
      userInfo: {
        nickName: "mpvue",
        avatarUrl: "http://mpvue.com/assets/logo.png"
      },

      radio: 1,
      imgUrls: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564573217134&di=5d6655a5878a881ec33b50267a5273f0&imgtype=0&src=http%3A%2F%2Fimg01.tooopen.com%2Fdowns%2Fimages%2F2010%2F12%2F13%2Fsy_20101213160951685816.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1765811829,83133326&fm=26&gp=0.jpg",
        "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640"
      ],
      indicatorDots: true,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      indicatorActiveColor: "#2f0000",
      indicatorColor: "#e0e0e0",
      value: "" // 搜索value
    };
  },

  methods: {
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
      console.log("clickHandle:", ev);
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
      console.log(url);
      wx.switchTab({
        url
      });
    }
  },
  onShow() {
    console.log("index-onShow");
    wx.hideTabBar({
      complete() {
        console.log("关闭tabbar");
      }
    });
  },
  async mounted() {
    /****************************微信会员登录和信息存储-START****************************/
    console.log("index-mounted");
    let result = await util.getMyWXSetting();
    console.log("result#", result);
    //如果未授权，先return,等待用户主动授权
    if (result == "noAuth") {
      console.log("noAuth,等待授权");
      util.gotoPage("/pages/authorize/main"); //跳转到授权页面
      return;
    }

    await util.loginAndInitUser(this);//函数：{登录并ajax初始化用户信息的函数}

    /****************************微信会员登录和信息存储-END****************************/
  },

  created() {
    // let app = getApp()
    // get('http://localhost:4001/api/users').then(res => {
    //   console.log('res', res)
    // })
  }
};
</script>

<style scoped>
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
</style>
