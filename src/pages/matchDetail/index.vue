<template>
  <div class="main-wrap">
    <debug_item path="matchlist" v-model="matchlistDoc" text="赛事列表详情" />

    <!-- 赛事照片 -->
    <div class>
      <img :src="matchlistDoc.album[0].url" v-if="matchlistDoc.album" />
    </div>
    <!-- 赛事名称 -->
    <div class="FS24 TAC LH36">{{matchlistDoc.matchName}}</div>

    <!-- 赛事步骤 -->
    <van-steps :steps="steps" :active="activeStep" active-color="#F4B116" />

    <van-cell-group title="赛事信息">
      <van-cell title="赛事时间" title-width="100px" :value="matchlistDoc.matchTime" />
      <van-cell title="距报名截止时间" :value="matchlistDoc.enrollTimeEnd" />

      <!-- 如果是全国赛 -->
      <van-collapse
        v-model="activeName"
        @change="handleChange"
        v-if="matchlistDoc.matchType==2&&matchlistDoc.matchType"
      >
        <van-collapse-item title="举办地点" name="1">
          <div class="collapse">
            <span
              v-for="(item,index) in matchlistDoc.cityVenueList"
              :key="index"
            >{{item.cityName}}--{{item.venueName}}</span>
          </div>
        </van-collapse-item>
      </van-collapse>

      <van-cell title="报名费" :value="matchlistDoc.registrationFee" />
      <van-cell title="已报名人数" :value="matchlistDoc.registeredPersons" />
    </van-cell-group>

    <!-- 如果已经截止报名和该用户已经报名，那么禁选 -->
    <van-button size="large" v-if="status" plain disabled :style="style">{{enrollText}}</van-button>
    <van-button size="large" type="primary" @click="gotoPage(url)" v-else>{{enrollText}}</van-button>

    <mytabbar></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import card from "@/components/card";
import mytabbar from "@/components/mytabbar/mytabbar";
import debug_item from "@/components/common/debug_item/debug_item";
import util from "@/utils/util";
export default {
  components: {
    card,
    mytabbar,
    debug_item,
    util
  },
  data() {
    return {
      activeName: null, //举办地点聚焦
      P1: 37, //请求接口id  当前赛事id
      memberId: 17, //当前会员id
      status: false, //控制是否跳转报名列表的状态
      activeStep: 0, //步骤条id
      enrollText: "立即报名",
      url: "/pages/matchEroll/main",
      steps: [
        //步骤条数组
        { text: "选拔赛", desc: "", value: 11 },
        { text: "晋级赛", desc: "", value: 12 },
        { text: "决赛", desc: "", value: 13 },
        { text: "淘汰赛", desc: "", value: 21 },
        { text: "1/4决赛", desc: "", value: 22 },
        { text: "决赛", desc: "", value: 23 }
      ],

      matchlistDoc: {}, //赛事详情列表
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      value: "", // 搜索value
      style: "background-color:#eee;padding: 13px 0 16px 0;" //已经报名或者截止报名的样式
    };
  },

  methods: {
    gotoPage(url) {
      console.log("gotoPage");
      if (!this.status) {
        wx.navigateTo({ url });
      }
    },

    bindViewTap() {
      const url = "../logs/main";
      if (mpvuePlatform === "wx") {
        mpvue.switchTab({ url });
      } else {
        mpvue.navigateTo({ url });
      }
    },
    async getEnrollList() {
      console.log("getEnrollList");
      let { data } = await util.post({
        url: global.PUB.domain + "/crossList?page=tangball_enroll",
        param: { findJson: { memberId: this.memberId } }
      });
      this.status = false;
      data.list.filter((item, index) => {
        if (item.matchId == this.P1) {
          //如果当前会员赛事id含有当前用户
          this.status = true; //状态
          console.log("符合条件", index);
          return;
        }
      });
      this.status
        ? (this.enrollText = "您已报名")
        : (this.enrollText = "立即报名");
    },
    handleChange(val) {
      //举办地点点击函数
      this.activeName = val.mp.detail;
    },
    onShow() {
      this.show = true;
      console.log("mpvue.data", this);
      // mpvue.setData({show: true})
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
  created() {},
  async mounted() {
    // 请求赛事详情接口函数
    let { data } = await util.post({
      url: global.PUB.domain + "/crossDetail?page=tangball_match",
      param: { id: this.P1 }
    });
    this.matchlistDoc = data.Doc;

    // 如果报名未截止
    if (this.matchlistDoc.publicationStatus == 1) {
      this.getEnrollList(); //获取报名订单
    } else {
      // 如果报名事件已经截止
      this.enrollText = "报名已结束";
      this.status = true;
    }
    // 赛事步骤状态处理
    if (this.matchlistDoc.matchProgress.smallProgress) {
      this.steps.forEach((item, index) => {
        if (this.matchlistDoc.matchProgress.smallProgress == item.value) {
          this.activeStep = index; //当前选中状态
        }
      });
    }
  },
  onLoad: function(options) {
    this.P1 = options.id;
    console.log("onLoad", this.P1);
    this.url = "/pages/matchEroll/main?id=" + this.P1 + "";
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

/* 折叠面板 */
.collapse {
  text-align: center;
  border: 1px solid #fbfbfb;
  border-radius: 5px;
}
/* 折叠面板 内容*/
.collapse span {
  display: block;
  background-color: #fafafa;
  margin: 5px 15px;
}
</style>
