<template>
  <div class="myInfo-box">
    <debug_item v-model="isShowDialogMobileConfirm" text="isShowDialogMobileConfirm" />
    <debug_item v-model="verfiy" text="验证码" />
    <div class="message-main">
      <div style="height:5px;"></div>
      <!-- 循环遍历信息，渲染页面 -->
      <div
        class="message-box"
        v-for="(message,index) in memberMessageList"
        :key="index"
        style="margin:5px 0px"
      >
        <div class="message-text">{{message.value}}</div>
        <div class="message-input">
          <!-- 如果input类型是单选框，显示单选框 -->
          <div v-if="message.type=='redio'">
            <div class="input-text" v-if="!showRadio" @click="showRadio=!showRadio">{{sex}}</div>
            <div v-if="showRadio">
              <radio-group @change="changeSex">
                <radio :value="1" :checked="memberMessage[message.index]=='1'?true:false" />男
                <radio :value="2" :checked="memberMessage[message.index]=='2'?true:false" />女
              </radio-group>
            </div>
          </div>
          <!-- 如果input类型是下拉框，显示单选框 -->
          <div v-else-if="message.type=='select'">
            <div class="input-text" v-if="!showSelect" @click="showSelect=!showSelect">{{ballAge}}</div>
            <div v-if="showSelect">
              <div class="mask-layer"></div>
              <van-picker
                class="picker-box"
                :columns="columns"
                show-toolbar="true"
                @confirm="changeSelect"
                @cancel="closeSelect"
              />
            </div>
          </div>
          <input
            v-else-if="message.type=='num'"
            class="input-text"
            :class="focusIndex==index?'active':''"
            type="number"
            v-model="memberMessage[message.index]"
            pattern="[0-9]*"
            @click="focusIndex=index"
            placeholder="请输入"
          />
          <input
            v-else
            class="input-text"
            :class="focusIndex==index?'active':''"
            type="text"
            v-model="memberMessage[message.index]"
            @click="focusIndex=index"
            placeholder="请输入"
          />
        </div>
        <div style="clear:both"></div>
      </div>
      <div style="height:10px;"></div>
    </div>
    <div @click="tryModifyMember()" class="button-modify">保存修改</div>

    <mp-dialog
      :title="modifyTitle"
      :show="isShowDialogMobileConfirm"
      :buttons="buttonList"
      :mask-closable="false"
      @buttontap="dialogBtbClick"
    >
      <div class>
        <div class="PB10">
          请确认
          <span class="C_f30">{{memberMessage.phone}}</span>是您的手机号码并发送验证码进行短信验证
        </div>
        <van-cell-group>
          <van-field
            title-width="0"
            :value="verfiy"
            center
            clearable
            type="number"
            :label="null"
            placeholder="请输入短信验证码"
            required
            @blur="verfiyChange"
            use-button-slot
          >
            <span v-if="sendStatus" slot="button" class="sendText">{{sendText}}</span>
            <!-- <van-button disabled type="info"  slot="button" size="small">{{sendText}}</van-button> -->
            <van-button
              slot="button"
              size="small"
              type="info"
              @click="startSend"
              v-else
            >{{sendText}}</van-button>
          </van-field>
        </van-cell-group>
      </div>
    </mp-dialog>
    <van-dialog id="van-dialog" />
     <van-toast id="van-toast" />
    <mytabbar></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import mytabbar from "@/components/mytabbar/mytabbar";
import debug_item from "@/components/common/debug_item/debug_item";
import util from "@/utils/util";
import Toast from "../../../static/vant/toast/toast";
import Dialog from "../../../static/vant/dialog/dialog";
export default {
  components: {
    mytabbar,
    debug_item
  },
  data() {
    return {
      groups:false,
      buttonList: [
        //弹窗按钮设置
        { text: "取消" },
        { text: "确认" }
      ],

      sendTime: 60,
      sendStatus: false, //用户是否已经点击发送验证码
      sendText: "发送验证码",
      verfiy: null, //验证码

      isShowDialogMobileConfirm: false, //是否显示确认手机号信息弹窗

      ballAge: "请选择",
      sex: "请选择",
      num: "aa",
      memberId: "28",
      modifyList: {},
      memberMessage: {},
      focusIndex: -1,
      showSelect: false,
      showRadio: false,
      columns: ["一年以下", "一到三年", "三到五年", "五到十年", "十年以上"],
      memberMessageList: [
        { index: "wxNickName", value: "昵称:" },
        { index: "name", value: "姓名:" },
        { index: "sex", value: "性别:", type: "redio" },
        { index: "ballAge", value: "球龄:", type: "select" },
        // {index:"idCard",value:"身份证证号:"},
        { index: "phone", value: "手机号码:", type: "num" },
        { index: "career", value: "职业:" }
      ]
    };
  },
  computed: {
    //唐球会员信息-在vuex中获取
    tangballUserInfo: function() {
      return this.$store.state.tangballUserInfo;
    }
  },
  methods: {
    //检测验证码是否正确的函数
    async checkVCode(event) {
      let { data } = await util.post({
        url: global.PUB.domain + `/tangball/checkMobileVCode`,
        param: {
          mobile: this.memberMessage.phone,
          vCode: this.verfiy
        }
      });
      return data;
    },
    async dialogBtbClick(e) {
      // 点击取消按钮触发关闭弹窗方法
      if (e.target.index == 0) {
        console.log("取消");
        this.isShowDialogMobileConfirm = false;
      } else {
        if (!/\d{4}/.test(this.verfiy)) {
       return   wx.showToast({
            title: "请输入四位数字验证码",
            icon: "none",
            duration: 2000
          });
        }

        //点击确认按钮触发修改方法
        console.log("确认");
        let data = await this.checkVCode(); //调用：{检测验证码是否正确的函数}

        if (data.code !== 0) {
          return wx.showToast({
            title: data.message,
            icon: "none",
            duration: 2000
          });
        }
        await this.modifyMember(); //调用：{ajax修改会员信息函数}
        this.isShowDialogMobileConfirm = false;
        this.phoneOld = this.memberMessage.phone; //旧手机号更新
        console.log("data:", data);
      }
    },

    waitTime() {
      if (!this.isShowDialogMobileConfirm) {
        //如果弹窗已被关闭，不再递归,并还原这些信息
        this.sendTime = 60;
        this.sendStatus = false; //用户是否已经点击发送验证码
        this.sendText = "发送验证码";
        this.verfiy = null; //验证码
        return;
      }
      console.log("waitTime");
      let mobile = this.memberMessage.phone;

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

      if (this.sendTime === 60) {
        this.getVerfity(mobile); //发送短信验证码
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
      this.verfiy = e.mp.detail.value;
    },
    // 点击下拉款确定的话将数据信息保存下来，实现双向绑定
    changeSelect(event) {
      this.showSelect = !this.showSelect;
      this.memberMessage.ballAge = event.mp.detail.index + 1;
      this.ballAgeToString();
    },
    closeSelect() {
      this.showSelect = !this.showSelect;
    },
    // 切换单选框的时候将数据信息保存下来，实现双向绑定
    changeSex(event) {
      this.memberMessage["sex"] = event.mp.detail.value;
      this.sexToString();
      this.showRadio = !this.showRadio;
    },
    // 由于接口返回的性别是数字，需要通过这个方法处理转换成字符串
    sexToString() {
      if (this.memberMessage.sex == "1") {
        this.sex = "男";
      } else if (this.memberMessage.sex == "2") {
        this.sex = "女";
      }
    },
    // 由于接口返回的球龄是数字，需要通过这个方法处理转换成字符串
    ballAgeToString() {
      switch (this.memberMessage.ballAge) {
        case 1:
          this.ballAge = "一年以下";
          break;
        case 2:
          this.ballAge = "一到三年";
          break;
        case 3:
          this.ballAge = "三到五年";
          break;
        case 4:
          this.ballAge = "五到十年";
          break;
        case 5:
          this.ballAge = "十年以上";
          break;
        default:
          break;
      }
    },
    // 请求会员接口
    async getMember() {
      let { data } = await util.post({
        url: global.PUB.domain + "/crossDetail?page=tangball_member",
        param: {
          findJson: {
            // P1: this.memberId
            openid: this.tangballUserInfo.openid
          }
        }
      });

      this.memberMessage = data.Doc;
      this.phoneOld = this.memberMessage.phone; //旧手机号
      this.sexToString();
      this.ballAgeToString();
      console.log(this.memberMessage);
    },

    // 尝试请求修改函数
    async tryModifyMember() {
      if (
        !/^1([38][0-9]|14[579]|5[^4]|16[6]|7[1-35-8]|9[189])\d{8}$/.test(this.memberMessage.phone)
      ) {
        this.sendStatus = false;
        return Toast.fail("手机号格式错误");
      }
      if (this.memberMessage.phone != this.phoneOld) {
        return (this.isShowDialogMobileConfirm = true);
      }
      this.modifyMember(); //调用：{ajax修改会员信息函数}
    },

    // ajax修改会员信息函数,修改成功跳转到首页
    async modifyMember() {
      console.log();
      
      if (!this.memberMessage.name||this.memberMessage.name=='') {
        return Dialog.alert({
          title: "提示",
          message: "姓名不能为空"
        });
      }
      if (!this.memberMessage.sex) {
        return Dialog.alert({
          title: "提示",
          message: "请选择性别"
        });
      }
      let { data } = await util.post({
        url: global.PUB.domain + "/crossModify?page=tangball_member",
        param: {
          findJson: { openid: this.tangballUserInfo.openid },
          modifyJson: this.memberMessage
        }
      });
      this.$store.commit("setTangballUserInfo", this.memberMessage);
      wx.showToast({
        title: "修改成功",
        icon: "success"
      });
      if (this.groups) {
        wx.navigateTo({url:'/pages/myEroll_groups/main'})
      }else{
        wx.switchTab({url:'/pages/usercenter/main'})
      }
      
    }
  },
  mounted() {
    // 页面加载请求会员数据
    this.getMember();
    console.log(this.tangballUserInfo);
  },
  onLoad(options) {
    console.log('aaaa',options);
    if (options.groups) {
      this.groups = options.groups
    }else{
      this.groups = false
    }
    this.showSelect = false;
  }
};
</script>
<style scoped>
.myInfo-box {
  height: 500px;
  background-color: rgb(246, 248, 250);
  overflow: hidden;
}
.message-head {
  font-size: 18px;
  padding-left: 2px;
}
.message-main {
  background-color: rgb(255, 255, 255);
  margin: 10px 20px;
  border-radius: 10px;
  padding: 0px 10px;
}
.message-box {
  font-size: 16px;
  box-sizing: border-box;
  border-bottom: 2px solid rgb(252, 252, 252);
}
.message-text {
  float: left;
  width: 30%;
  height: 40px;
  line-height: 40px;
  padding-left: 3px;
}
.message-input {
  float: left;
  height: 40px;
  width: 69%;
  line-height: 40px;
}
.input-text {
  margin-top: 5px;
  background-color: rgb(252, 252, 252);
  border: 1px solid rgb(252, 252, 252);
  height: 60%;
  width: 98%;
  padding-left: 10px;
  border-radius: 5px;
}
/* input聚焦样式 */
.active {
  border: 1px solid #f4b116;
}
.button-modify {
  background-color: #f4b116;
  text-align: center;
  margin-left: 5%;
  height: 40px;
  line-height: 40px;
  width: 90%;
  color: white;
  font-size: 20px;
  margin-right: 20px;
  border-radius: 10px;
}
/* 遮罩层样式 */
.mask-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
}
/* 下拉框样式 */
.picker-box {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 101;
}
</style>
