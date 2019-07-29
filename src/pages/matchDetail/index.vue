<template>
  <div class="main-wrap">
    <debug_item path="matchlist" v-model="matchlist" text="赛事列表" />
    <debug_item path="matchlist" v-model="matchlistDoc" text="赛事列表详情" />

    <!-- 赛事照片 -->
    <div class>
      <img :src="matchlist.album[0].url" v-if="matchlist.album" />
    </div>
    <!-- 赛事名称 -->
    <div class="FS24 TAC LH36">{{matchlist.matchName}}</div>

    <!-- 赛事步骤 -->
    <van-steps :steps="steps" :active="activeStep" active-color="#F4B116" />

    <van-cell-group title="赛事信息">
      <van-cell title="赛事时间" title-width="100px" :value="matchlist.matchTime" />
      <van-cell title="距报名截止时间" :value="matchlistDoc.enrollTimeEnd" />

      <!-- 如果是全国赛 -->
      <van-collapse
        v-model="activeName"
        @change="handleChange"
        v-if="matchlist.matchType==2&&matchlist.matchType"
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

      <van-cell title="报名费" :value="matchlist.registrationFee" />
      <van-cell title="已报名人数" :value="matchlist.registeredPersons" />
    </van-cell-group>

    <van-button size="large" type="primary" @click="gotoPage(url)" :disabled="status" >{{enrollText}}</van-button>
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
      memberId: 10, //当前会员id
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
      matchlist: [], //赛事列表
      matchlistDoc: {}, //赛事详情列表
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      value: "" // 搜索value
    };
  },

  methods: {
    gotoPage(url) {
      console.log("gotoPage");

      if (this.status) {
        //如果存在该会员
        this.enrollText = "您已报名";
        console.log("您已报名");
      } else {
        this.enrollText = "立即报名";
        wx.navigateTo({ url });
      }
    },
    async getEnrollList() {
       console.log("getEnrollList");
      let { data } = await util.post({
        url: global.PUB.domain + "/crossList?page=tangball_enroll",
        param: { findJson: { memberId: this.memberId } }
      });
      data.list.filter(item => {
        if (item.matchId == this.P1) {
          //如果当前会员赛事id含有当前用户
          this.status = true; //状态
        }
      });
      console.log("this.status");

      if (this.status) {
        //如果存在该会员
        this.enrollText = "您已报名";
      } else {
        this.enrollText = "立即报名";
      }
      console.log(" this.enrollText ", this.enrollText );
    },
    bindViewTap() {
      const url = "../logs/main";
      if (mpvuePlatform === "wx") {
        mpvue.switchTab({ url });
      } else {
        mpvue.navigateTo({ url });
      }
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
    this.getEnrollList();//获取报名订单
    // 请求赛事列表接口函数
    let { data } = await util.post({
      url: global.PUB.domain + "/crossList?page=tangball_match",
      param: { findJson: { P1: this.P1 } }
    });
    this.matchlist = data.list[0];

    // 请求赛事详情接口函数
    let doc = await util.post({
      url: global.PUB.domain + "/crossDetail?page=tangball_match",
      param: { id: this.P1 }
    });
    this.matchlistDoc = doc.data.doc;

    // 赛事步骤状态处理
    if (this.matchlist.matchProgress.smallProgress) {
      this.steps.forEach((item, index) => {
        if (this.matchlist.matchProgress.smallProgress == item.value) {
          this.activeStep = index; //当前选中状态
        }
      });
    }

    //报名截止时间格式处理
    let time = this.matchlistDoc.enrollTimeEnd;
    time = time.slice(0, time.indexOf("T"));
    this.matchlistDoc.enrollTimeEnd = time;
  },
  onLoad: function(options) {
    this.P1 = options.id;
    //  this.P1 = 37
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
/* 赛事状态按钮 */
/* .browsing van-button {
  margin-right: 10px;
} */
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
