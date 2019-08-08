<template>
  <section>
    <h3 class="info-title">个人信息-</h3>
    <debug_item v-model="info" text="info" />
    <van-cell-group>
      <div class="flex line">
        <title class="sub-title">姓名</title>
        <p>{{ info.name }}</p>
      </div>
      <div class="flex line">
        <title class="sub-title">性别</title>
        <p>{{ sexStr }}</p>
      </div>
      <div class="flex line">
        <title class="sub-title">联系电话</title>
        <p>{{ info.phone }}</p>
      </div>
      <div class="flex line">
        <title class="sub-title">球龄</title>
        <p>{{ info.ballAge }}</p>
      </div>
      <div class="flex line">
        <title class="sub-title">职业</title>
        <p>{{ info.career }}</p>
      </div>
    </van-cell-group>
    <h3 class="info-title event-info">赛事及场馆信息</h3>
    <div class="flex line">
      <p class="sub-title">赛事名称</p>
      <div>{{ matchInfo.matchName }}</div>
    </div>
    <div class="flex line">
      <p class="sub-title">赛事时间</p>
      <div>{{ matchInfo.matchTime }}</div>
    </div>
    <div class="flex line">
      <p class="sub-title" style="width: 90px;">赛事地点</p>
      <div v-if="matchInfo.venue">{{ matchInfo.venue }}</div>
      <div v-else>
        <span>
          {{ matchInfo.cityName }}
          {{ matchInfo.venueName }}
        </span>
      </div>
    </div>
    <div class="flex line">
      <title class="sub-title">报名费</title>
      <div>
        <span class="price">{{ matchInfo.total_fee }} (元)</span>
      </div>
    </div>
  </section>
</template>
<script>
/* eslint-disable */
import debug_item from "@/components/common/debug_item/debug_item";
export default {
  components: {
    debug_item
  },
  data() {
    return {
      radio: "1"
      // matchInfo: {
      //   matchName: '',
      //   matchTime: '未确定',
      //   total_fee: 'xxx',
      //   venueName: '',
      //   cityName: ''
      // }
    };
  },
  props: ["info", "matchInfo"],
  mounted() {
    // 获取赛事数据
    // let data = wx.getStorageSync('matchInfo')
    // if (data) {
    //   this.matchInfo = JSON.parse(data)
    //     console.log("this.matchInfo#", this.matchInfo);
    // }
  },
  filters: {
    initSex(val) {
      console.log("initsex", val);
      if ([undefined, "", -1].includes(val)) return "";
      if (val === "1") return "男";
      if (val === "0") return "女";
    }
  },
  computed: {
    sexStr() {
      let { sex } = this.info;
      if ([undefined, "", -1].includes(sex)) return "";
      if (sex === "1") return "男";
      if (sex === "0") return "女";
    }
  }
};
</script>
<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
}
.line {
  justify-content: flex-start;
  align-items: center;
  min-height: 44px;
  line-height: 26px;
  margin-left: 15px;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  text-indent: 0.053rem;
  color: #333;
}
.line .sub-title {
  width: 78px;
  margin-right: 10px;
}
.price {
  margin-right: 0.133rem;
  color: #f00;
  font-weight: 700;
}
</style>
