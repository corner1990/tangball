<template>
  <section>
    <div v-if="!groupGame">
    <h2 class="info-title">个人信息</h2>
    <debug_item v-model="info" text="info" />
    <debug_item v-model="matchInfo" text="matchInfo" />
    <van-cell-group>
      <van-field
        :value="selfInfo.name"
        type="text"
        label="姓名"
        placeholder="请输入姓名"
        required
        @change="nameChange"
      />
      <div class="flex line">
        <title class="sub-title">性别</title>
        <radio-group class="radio-group" @change="onRadioChange">
          <label class="radio">
            <radio value="1" :checked="selfInfo.sex=== '1'" />男
          </label>
          <label class="radio">
            <radio value="2" :checked="selfInfo.sex=== '2'" />女
          </label>
        </radio-group>
      </div>
      <van-field :value="selfInfo.phone" label="联系电话" @blur="phoneChange" placeholder="请输入手机号" />
      <div class="flex line">
        <p class="sub-title">球龄</p>
        <div @click="selectAge">
          {{selfInfo.ballAgeText}}
          <!-- <input type="text" class="tangBallInput" v-model="selfInfo.ballAgeText" placeholder="请输入球龄" readonly /> -->
        </div>
      </div>
      <van-field :value="selfInfo.career" label="职业" placeholder="请输入职业" @blur="careerChange" />
    </van-cell-group>
    </div>
    <div v-if="groupGame">
      <h2 class="info-title">队伍信息</h2>
      <div class="groups-box"><div class="groups-title">队名</div><div class="FL">{{groups.name}}</div>
      <div style="clear:both"></div></div>
      <div v-for='(item,index) in groups.member' :key="index" class="groups-box">
        <div class="groups-title">{{index==0?'队长':'队员'+index}}</div><div class="FL">{{item.name}}
          (&nbsp;{{item.sex==1?'男':'女'}}\{{item.phone?item.phone:'无'}}&nbsp;)
        </div>
        <div style="clear:both"></div>
      </div>
    </div>
    <h2 class="info-title event-info">赛事及场馆信息</h2>
    <div class="flex line">
      <p class="sub-title">赛事名称</p>
      <div>{{ matchInfo.matchName }}</div>
    </div>
    <div class="flex line">
      <p class="sub-title">赛事时间</p>
      <div>{{ matchInfo.matchTime }}</div>
    </div>
    <div class="flex line">
      <p class="sub-title">赛事地点</p>
      <div v-if="matchInfo.venue">{{ matchInfo.venue }}</div>
      <div v-else>
        {{ matchInfo.cityName }}
        {{ matchInfo.venueName }}
      </div>
    </div>
    <div class="flex line">
      <title class="sub-title">报名费</title>
      <div>
        <span class="price">{{ matchInfo.total_fee }} (元)</span>
      </div>
    </div>
    <van-cell-group>
      <van-field
        :value="sms"
        center
        clearable
        type="number"
        label="短信验证码"
        placeholder="请输入短信验证码"
        required
        @blur="verfiyChange"
        use-button-slot
      >
        <span v-if="sendStatus" slot="button" class="sendText">{{sendText}}</span>
        <!-- <van-button disabled type="info"  slot="button" size="small">{{sendText}}</van-button> -->
        <van-button slot="button" size="small" type="info" @click="startSend" v-else>{{sendText}}</van-button>
      </van-field>
    </van-cell-group>
    <!-- 选择球龄 -->
    <van-popup :show="showSelectBallAge" @close="hideSelectBallAge" position="bottom">
      <van-picker
        show-toolbar
        title="选择球龄"
        :columns="columns"
        value-key="label"
        @cancel="hideSelectBallAge"
        @confirm="onSelectChange"
      />
    </van-popup>
    <van-toast id="van-toast" />
  </section>
</template>
<script>
/* eslint-disable */
import util from "@/utils/util";
import debug_item from "@/components/common/debug_item/debug_item";
import Toast from "../../../static/vant/toast/toast";
export default {
  components: {
    debug_item
  },

  data() {
    return {
      // groups:{},
      radio: "1",
      showSelectBallAge: false,
      selectVal: "",
      columns: [
        {
          label: "一年以下",
          value: 1
        },
        {
          label: "一到三年",
          value: 2
        },
        {
          label: "三到五年",
          value: 3
        },
        {
          label: "五到十年",
          value: 4
        },
        {
          label: "十年以上",
          value: 5
        }
      ],
      sexList: [{ name: "男", value: "1" }, { name: "女", value: "2" }],
      timer: 0,
      num: 0,
      // matchInfo: {
      //   matchName: "",
      //   matchTime: "未确定",
      //   total_fee: "xxx"
      // },
      sendText: "发送验证码",
      sendTime: 60,
      sendStatus: false //用户是否已经点击发送验证码
    };
  },
  mounted() {
      // this.groups = JSON.parse(wx.getStorageSync("groupsMsg"));


    // 获取赛事数据
    // let data = wx.getStorageSync("matchInfo");
    // if (data) {
    //   this.matchInfo = JSON.parse(data);
    // }
    // Toast.loading({
    //   mask: true,
    //   message: '加载中...'
    // })
  },
  watch: {
    skipPage: function(val, oldVal) {
      (this.sendText = "发送验证码"),
        (this.sendTime = 60),
        (this.sendStatus = false);
    }
    // info: {
    //   handler (info, oldName) {
    //     console.log('info12212', info)
    //   },
    //   immediate: true,
    //   deep: true
    // }
  },
  computed: {
    selfInfo() {
      return this.info;
    }
  },
  props: ["info", "matchInfo", "skipPage",'groupGame','groups'],
  methods: {
    onRadioChange(radio) {
      this.info.sex = radio.target.value;
      this.$emit("changeInfo", {
        sex: radio.target.value
      });
    },
    selectAge() {
      this.showSelectBallAge = true;
    },
    hideSelectBallAge() {
      this.showSelectBallAge = false;
    },
    onSelectChange(e) {
      let { value, index } = e.target;
      console.log("value", value);
      this.selectIndex = index;
      this.info.ballAge = value;
      this.info.ballAgeText = value.label;
      this.$emit("changeInfo", {
        ballAge: value.value
      });
      this.hideSelectBallAge();
    },
    waitTime() {
      let { phone: mobile } = this.info;
      console.log("this.selfInfo.sex_________________", this.selfInfo.sex);
      console.log("this.selfInfo________________", this.selfInfo);
      if (!mobile) {
        this.sendStatus = false;
        return Toast.fail("手机号为空,请输入手机号");
      }
      if (
        !/^1([38][0-9]|14[579]|5[^4]|16[6]|7[1-35-8]|9[189])\d{8}$/.test(mobile)
      ) {
        this.sendStatus = false;
        return Toast.fail("手机号格式错误");
      }
      if ([undefined, "", -1, null, "null"].includes(this.selfInfo.sex)) {
        this.sendStatus = false;
        return Toast.fail("性别必填");
      }

      if (this.sendTime === 60) {
        this.getVerfity(mobile);
      }

      if (this.sendTime <= 1) {
        this.sendStatus = false;
        this.sendTime = 60;
        this.sendText = "发送验证码";
        return false;
      }
      // debugger
      this.sendTime -= 1;
      this.sendText = `${this.sendTime}秒后重新获取`;
      setTimeout(() => {
        this.waitTime();
      }, 1000);
    },
    // 根据发送状态判断是否调用倒计时方法
    startSend() {
      if (!this.sendStatus) {
        this.sendStatus = true;
        this.waitTime();
      }
    },
    getVerfity(mobile) {
      // 发送短信验证码接口函数
      util.post({
        url: `${global.PUB.domain}/tangball/sendMobileVCode`,
        param: { mobile }
      });
    },
    verfiyChange(e) {
      this.$emit("changeInfo", {
        verfiy: e.mp.detail.value
      });
    },
    nameChange(e) {
      let name = e.mp.detail;
      this.$emit("changeInfo", {
        name
      });
    },
    phoneChange(e) {
      let phone = e.mp.detail.value;
      this.$emit("changeInfo", {
        phone
      });
    },
    careerChange(e) {
      let career = e.mp.detail.value;
      this.$emit("changeInfo", {
        career
      });
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
  width: 80px;
  margin-right: 10px;
}
.radio-wrap {
  width: 2.667rem;
  justify-content: space-around;
}
.radio-wrap .radio-item {
  width: 0.667rem;
}
.info-title {
  font-size: 18px;
  line-height: 0.6rem;
  font-weight: 700;
  color: #333;
  font-weight: bold;
}
.tangBallInput {
  font-size: 12px;
}
.event-info {
  margin-top: 0.8rem;
}
.sendText {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  background: #f4f4f5;
  border: 1px solid #dcdfe6;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  font-weight: 500;
  padding: 10px;
  font-size: 12px;
  border-radius: 4px;
}
.groups-box{
  height: 40px;
  font-size: 14px;
  line-height: 40px;
  border-bottom: 1px solid #eee;
  margin-left: 15px;
}
.groups-title{
  float: left;
  width: 80px;
}
</style>
