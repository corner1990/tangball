<template>
  <div class="main-wrap">
<<<<<<< HEAD
    <van-search
     placeholder="请输入搜索关键词"
     @search="searchList"/>
     <!-- <openImg v-model="venueDoc.album" ></openImg> -->
=======
    <van-search placeholder="请输入搜索关键词" @search="searchList" />
    <!-- <openImg v-model="venueDoc.album" ></openImg> -->
>>>>>>> 5f6e608bae579b71ceadc1c0d3b24f0ac9c3fb71
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
    <!-- <swiper
      :indicator-active-color="indicatorActiveColor"
      :indicator-color="indicatorColor"
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <block v-for="item in imgUrls" :key="item">
        <swiper-item>
          <image :src="item" class="slide-image" height="150"  />
        </swiper-item>
      </block>
    </swiper>-->
    <div>
      <div class="index_area_title">唐球赛事</div>
      <div class>
        <togod pageSize="5"></togod>
      </div>
    </div>
    <div style>
      <div class="index_area_title">唐球资讯</div>
      <div class="card">
        <articleList></articleList>
      </div>
    </div>

    <div class="TAC LH30 CLB MB20" style="color:#999" >
       <navigator url="/pages/articleDetail/main?dataId=8"  hover-class="other-navigator-hover">商务合作</navigator>

      </div>
    <!-- <div class="all">
      <div class="left"></div>
      <div class="right"></div>
    </div>-->
    <!-- <van-cell
      is-link
      :title="item.title"
      link-type="navigateTo"
      :url="item.url"
      v-for="(item,i) in arrLink"
      :key="i"
    />-->
    <!-- <van-button size="large" @click="gotoPage('/pages/myErollDetail/main?dataId=1&type=t1')">我的参赛详情1</van-button>
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
      >切换 Tab-针对tabar中的页面--</navigator>
    </view>-->

    <mytabbar :active="0"></mytabbar>
    <!-- <mp-dialog
      :show="getPhoneNumberShow"
      title="唐球"
      show-cancel-button
    >
      <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">获取手机号</button>
<<<<<<< HEAD
    </mp-dialog> -->

=======
    </mp-dialog>-->
    <van-dialog :show="getPhoneNumberShow" title="唐球" use-slot :show-confirm-button="false">
      <p class="getNumberTip">为了方便您查询比赛成绩，唐球邀请您绑定手机号！</p>
      <van-button
        type="primary"
        open-type="getPhoneNumber"
        @getphonenumber="getPhoneNumber"
        block
      >确定</van-button>
    </van-dialog>
>>>>>>> 5f6e608bae579b71ceadc1c0d3b24f0ac9c3fb71
  </div>
</template>
<script>
/* eslint-disable */
import util from "@/utils/util";
import mytabbar from "@/components/mytabbar/mytabbar";
import togod from "../../components/matchList/togod";
import articleList from "../articleList/index";
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
      value: "", // 搜索value,
<<<<<<< HEAD

=======
      getPhoneNumberShow: false
>>>>>>> 5f6e608bae579b71ceadc1c0d3b24f0ac9c3fb71
    };
  },
  methods: {
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
<<<<<<< HEAD

  },
  onShow() {

=======
    /**
     * @desc 获取手机号回调函数
     */
    getPhoneNumber(e) {
      let { errMsg } = e.target;
      if (errMsg.indexOf("ok") < 0) {
        this.getPhoneNumberShow = false;
        return setTimeout(() => {
          this.getPhoneNumberShow = true;
        }, 1000);
      }
      this.updataPhone(e.target);
    },
    /**
     * @desc 获取手机号用户点击同意时回调
     */
    updataPhone(data) {
      let { encryptedData, iv } = data;
      let self = this;
      wx.getStorage({
        key: "ids",
        success(res) {
          let { session_key, openid } = JSON.parse(res.data);
          let param = { session_key, openid, encryptedData, iv };
          self.sendPhoneData(param);
        }
      });
    },
    sendPhoneData(param) {
      util
        .post({
          url: `${global.PUB.domain}/tangball/encodePhoneNumber`,
          param
        })
        .then(res => {
          let { code } = res.data;
          let aaaa = { phone: "11111" };
          if (code === 0) {
            this.getPhoneNumberShow = false;
            // 防止一直弹出绑定手机弹窗
            wx.setStorage({
              key: "tangballUserInfo",
              data: JSON.stringify(aaaa)
            });
          }
        });
      // 测试代码， 调试接口的时候删除
      // this.getPhoneNumberShow = false;
    },
    updataGetPhoneNumberShow(getPhoneNumberShow) {
      this.getPhoneNumberShow = getPhoneNumberShow;
    }
  },
  onShow() {
    wx.hideTabBar({
      complete() {}
    });
    setTimeout(() => {
      //延迟函数
      wx.getStorage({
        key: "tangballUserInfo",
        success: res => {
          let { phone } = JSON.parse(res.data);

          if (!phone) {
            this.updataGetPhoneNumberShow(true);
          }
        },
        fail: () => {
          this.updataGetPhoneNumberShow(true);
        }
      });
    }, 2000);
>>>>>>> 5f6e608bae579b71ceadc1c0d3b24f0ac9c3fb71
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
<<<<<<< HEAD

=======
>>>>>>> 5f6e608bae579b71ceadc1c0d3b24f0ac9c3fb71
    // console.log('√', this.$store.state)
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
  font-weight: bold;
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
</style>
