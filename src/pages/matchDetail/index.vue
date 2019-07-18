<template>
  <div class="main-wrap">
    <debug_item path="matchlist" v-model="matchlist" text="赛事列表" />
    <debug_item path="matchlist" v-model="matchlistDoc" text="赛事列表详情" />

    <div class>
      <img :src="matchlist.album" />
    </div>
    <div class="FS24 TAC LH36">{{matchlist.matchName}}</div>

    <van-cell class="browsing">
      <van-button round plain type="primary" size="mini" v-if="matchStatus">{{matchStatus}}</van-button>
      <van-button round plain type="warning" size="mini">{{matchlist.matchName}}</van-button>
    </van-cell>

    <van-steps :steps="steps" :active="activeStep" active-color="#f44" />
    <van-cell-group title="赛事信息">
      <van-cell title="赛事时间" title-width="100px" :value="matchlist.matchTime" />
      <van-cell title="距报名截止时间" value="5天6小时26分" />
      <!-- 如果是普通赛 -->
      <van-cell title="举办地点" value="深圳南山XXXXX" />
      <!-- 如果是全国赛 -->
      <van-collapse v-model="activeName" @change="handleChange">
        <van-collapse-item title="举办地点" name="1">
          <div class="valueNeed">
            <span v-for="(item,index) in matchlistDoc.cityVenueList" :key="index">
              {{item.cityName}}--{{item.venueName}}
              <i
                class="el-icon-remove-outline"
                @click="nationalMatchDelete(index)"
                v-if="isEdit"
              ></i>
            </span>
          </div>
        </van-collapse-item>
      </van-collapse>

      <van-cell title="报名费" :value="matchlist.registrationFee" />
      <van-cell title="已报名人数" :value="matchlist.registeredPersons" />
    </van-cell-group>
    <van-cell-group title="分组2">
      <van-cell title="单元格" value="内容" />
    </van-cell-group>

    <van-button size="large" square type="primary">立即报名</van-button>

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
      activeNames: ["1"],

      activeName: null,
      P1: 46,
      activeStep: 0,
      matchStatus: "",
      steps: [
        { text: "选拔赛", desc: "", value: 11 },
        { text: "晋级赛", desc: "", value: 12 },
        { text: "决赛", desc: "", value: 13 },
        { text: "淘汰赛", desc: "", value: 21 },
        { text: "1/4决赛", desc: "", value: 22 },
        { text: "决赛", desc: "", value: 23 }
      ],
      matchlist: [],
      matchlistDoc: {},
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000,

      value: "" // 搜索value
    };
  },

  methods: {
    handleChange(val) {
      console.log(val);
      this.activeName = val.mp.detail;
    },
    onChange(event) {
      console.log("event", event);
      console.log("event", event.mp.detail);
      this.activeName = event.mp.detail;
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
    let { data } = await util.post({
      url: global.PUB.domain + "/crossList?page=tangball_match",
      param: { findJson: { P1: this.P1 } }
    });
    this.matchlist = data.list[0];

    let doc = await util.post({
      url: global.PUB.domain + "/crossDetail?page=tangball_match",
      param: { id: this.P1 }
    });
    this.matchlistDoc = doc.data.doc;
    if (this.matchlist.matchProgress.smallProgress) {
      this.steps.forEach((item, index) => {
        if (this.matchlist.matchProgress.smallProgress == item.value) {
          this.activeStep = index; //当前选中状态
        }
      });
    }

    if (this.matchlist.matchStatus == 1) {
      return (this.matchStatus = "未开始");
    } else if (this.matchlist.matchStatus == 2) {
      return (this.matchStatus = "进行中");
    } else {
      return (this.matchStatus = "已结束");
    }
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

.browsing van-button {
  margin-right: 10px;
}
/* .browsing .icon{
color: #E36E2B;
  } */
.van-collapse-item div {
  color: #333;
  z-index: 1000000000;
}
.valueNeed span {
  display: block;
  background-color: #fafafa;
  padding: 3px 0;
  margin: 10px 15px;
}

.valueNeed {
  text-align: center;
  border: 1px solid #fbfbfb;
  border-radius: 5px;
}
</style>
