<template>
  <div class="main-wrap">
    <debug_item path="matchlist" v-model="matchlistDoc" text="赛事列表详情" />

    <!-- 显示选择场馆弹窗 -->
    <van-dialog use-slot title="请选择场馆" :show="showdDialog" @close="onClose" v-if="showdDialog">
      <van-picker :columns="cityVenueList" @change="pickerChange" />
    </van-dialog>
    <!-- 赛事照片 -->
    <div class>
      <swiper
        style="height:250px"
        :indicator-dots="indicatorDots"
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration"
      >
        <block v-for="item in matchlistDoc.album" :key="item">
          <swiper-item>
            <image
              @click="showImg(item.url)"
              :src="item.url"
              class="slide-image"
              v-if="matchlistDoc.album"
              style="width:100%"
              height="250"
            />
          </swiper-item>
        </block>
      </swiper>

      <!--显示图片弹窗-->
      <van-popup customStyle="height:250px" v-if="show" :show="show" @close="ClosePhoto">
        <img style="height:250px" alt :src="bigImg" />
      </van-popup>
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
        v-model="NationalmatchIndex"
        @change="matchTypeChange"
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
    <van-button size="large" v-if="isMatchIdStatus" plain disabled :style="style">{{enrollText}}</van-button>
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
      bigImg: "",
      show: false,
      showdDialog: false,
      cityVenueList: null,
      venueId: null, //场馆id
      venueName: null, //场馆名字
      NationalmatchIndex: null, //举办地点聚焦
      matchId: 37, //  当前赛事id

      isMatchIdStatus: false, //控制是否跳转报名列表的状态
      activeStep: 0, //步骤条id
      enrollText: "立即报名", //管理是否立即报名的文字
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
      style: "background-color:#eee;padding: 13px 0 16px 0;", //已经报名或者截止报名的样式
      indicatorDots: true,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      value: "" // 搜索value
    };
  },

  methods: {
    showImg(url) {
      this.show = true;
      this.bigImg = url;
    },
    ClosePhoto() {
      this.show = false;
    },
    /**
     * @name onClose是弹窗的函数
     * @desc
     * @param event是默认值
     */
    onClose() {
      this.showdDialog = !this.showdDialog; //控制是否打开弹窗
      //拼接跳转到报名订单的地址
      let {
        matchName,
        matchTime,
        registrationFee: total_fee
      } = this.matchlistDoc;
      let { matchId, venueId, venueName } = this;
      let url = `/pages/matchEroll/main`;
      if (!this.status && this.venueId) {
        wx.setStorage({
          key: "matchInfo",
          data: JSON.stringify({
            matchName,
            matchTime,
            total_fee,
            matchId,
            venueId,
            venueName
          }),
          success() {
            wx.navigateTo({ url });
          }
        });

        wx.navigateTo({ url });
      } else {
        this.showdDialog = true;
      }
    },

    /**
     * @name pickerChange是场馆选择器函数
     * @desc 场馆选择，缓存当前选中的场馆id
     * @param event是默认值
     */
    pickerChange(event) {
      // 缓存当前选中的场馆id

      let index = event.mp.detail.index;
      this.venueId = this.matchlistDoc.cityVenueList[index].venueId;
      this.venueName = event.mp.detail.value;
    },

    /**
     * @name gotoPage是立即报名函数
     * @desc 点击立即报名按钮，跳转到报名页
     * @param url是跳转的地址
     */
    gotoPage() {
      if (this.matchlistDoc.matchType !== 2 || !this.matchlistDoc.matchType) {
        let {
          matchName,
          matchTime,
          registrationFee: total_fee
        } = this.matchlistDoc;
        let { matchId } = this;
        let url = `/pages/matchEroll/main`;
        if (!this.status) {
          // 保存报名数据
          wx.setStorage({
            key: "matchInfo",
            data: JSON.stringify({ matchName, matchTime, total_fee, matchId }),
            success() {
              wx.navigateTo({ url });
            }
          });
        }
      } else {
        this.showdDialog = true; //打开弹窗
        this.venueId = null;
        // 拼接场馆列表数组
        this.cityVenueList = this.matchlistDoc.cityVenueList.map(
          (item, index) => {
            return item.cityName + "---" + item.venueName;
          }
        );
        this.venueId = this.matchlistDoc.cityVenueList[0].venueId; //默认选中第一个
        this.venueName = this.cityVenueList[0];
      }
    },
    /**
     * @name getEnrollList是获取报名订单列表函数
     * @desc 获取报名订单列表，并传入当前的会员id，判断列表中的赛事id是否等于当前赛事id，通过isMatchIdStatus状态进行管理
     * @param 接口返回值是报名订单列表
     */
    async getEnrollList() {
      let { data } = await util.post({
        url: global.PUB.domain + "/crossList?page=tangball_enroll",
        param: { findJson: { tangballUserId: this.tangballUserId } }
      });

      this.isMatchIdStatus = false; //变量初始化为false
      this.enrollText = "立即报名"; //初始化为立即报名

      data.list.filter((item, index) => {
        //如果当前会员赛事id含有当前用户
        if (item.matchId == this.matchId) {
          this.isMatchIdStatus = true; //该用户已经报名
          this.enrollText = "您已报名";
          return;
        }
      });
    },
    /**
     * @name matchTypeChange举办地点函数
     * @desc 当点击举办地点时，选择展开或者折叠
     * @param val是默认传的参数
     */
    matchTypeChange(val) {
      this.NationalmatchIndex = val.mp.detail;
    },
    onShow() {
      this.show = true;
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
      wx.switchTab({
        url
      });
    }
  },
  created() {},
  async mounted() {
    this.showdDialog = false;
    /**
     * @desc 请求赛事详情接口函数
     */
    //
    let { data } = await util.post({
      url: global.PUB.domain + "/crossDetail?page=tangball_match",
      param: { id: this.matchId }
    });
    this.matchlistDoc = data.Doc; //赛事详情列表

    // 如果报名未截止
    if (this.matchlistDoc.publicationStatus == 1) {
      this.getEnrollList(); //获取报名订单列表函数
    } else {
      // 如果报名时间已经截止
      this.enrollText = "报名已结束";
      this.isMatchIdStatus = true;
    }
    // 赛事步骤状态处理
    let Progress = this.matchlistDoc.matchProgress.smallProgress; //当前赛事阶段
    if (Progress) {
      //如果当前赛事阶段存在
      this.steps.forEach((item, index) => {
        if (Progress == item.value) {
          this.activeStep = index; //当前步骤条的选中状态
        }
      });
    }
  },
  computed: {
    // 当前会员id
    tangballUserId: function() {
      return this.$store.state.tangballUserInfo.matchId; //
    }
  },
  /**
   * @desc 获取页面参数,
   */
  onLoad: function(options) {
    if (options.id) {
      this.matchId = options.id;
    }
  }
};
</script>

<style scoped>
.swiper-item {
  height: 1000px;
}

.slide-image {
  width: 100%;
  height: 120%;
  overflow: hidden;
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
