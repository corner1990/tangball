<template>
  <div class="main-wrap">
    <mytabbar></mytabbar>
    <div class="top-box">
      <div class="read-box" :class="!focuss?'masEvolve':''" @click="read">已读</div>
      <div class="unread-box" :class="focuss?'masEvolve':''" @click="unread">未读</div>
    </div>
    <msg :transformm="transform" :crowArr="msgg" @newMsgg="moveMsg" @spliceMsgg="closeDoor"></msg>
  </div>
</template>
<script>
/* eslint-disable */
import msg from "@/pages/myMsgList/msg";
import mytabbar from "@/components/mytabbar/mytabbar";
import debug_item from "@/components/common/debug_item/debug_item";
import util from "@/utils/util";
import lodash from "lodash"; //导入lodash方法库

export default {
  components: {
    mytabbar,
    debug_item,
    msg
  },
  data() {
    return {
      transform: true,
      memberId: 17,
      msgId: null,
      myMsgList: null,
      myMsgRead: null,
      dictMsgRead: null,
      msgg0: [],
      msgg: [],
      focuss: true,
      evolve: "masEvolve",
      crow2: [],
      pageName: "个人中心-系统消息列表"
    };
  },
  created() {
    this.getMyMsgList(); //调用：{000函数}
  },
  methods: {
    read() {
      this.focuss = false;
      this.msgg = this.crow2;
      this.transform = false;
    },
    unread() {
      this.focuss = true;
      this.msgg = this.msgg0;
      this.transform = true;
    },
    moveMsg(transmit) {
      this.msgId = transmit.newcrow.msgId;
      console.log("次数", this.msgId)
      this.crow2.push(transmit.newcrow.unreadBox);
      if (this.transform) {
        this.setReadStatus({ memberId: this.memberId, msgId: this.msgId });
      }
    },
    closeDoor(close) {
      this.gant = close.spliceCrow.gant;
      if (close.spliceCrow.door) {
        this.crow2.splice(this.gant, 1);
      } else {
        this.msgg0.splice(this.gant, 1);
      }
    },
    async getMyMsgList(_json) {
      let { data } = await util.post({
        //请求接口
        url: global.PUB.domain + "/crossList?page=tangball_msg ",
        param: {
          findJson: {
            //或查询条件：range==1或[range==2&&memberIdList包含当前会员id]
            $or: [{ range: 1 }, { range: 2, memberIdList: this.memberId }]
          }
        } //传递参数
      });
      {
        let { data } = await util.post({
          //请求接口
          url: global.PUB.domain + "/crossList?page=tangball_msg_read",
          param: {
            findJson: {
              memberId: this.memberId
            }
          } //传递参数
        });
        this.myMsgRead = data.list;
      }
      // this.dictMsgRead = {}; //消息阅读记录的数据字典对象
      // this.myMsgRead.forEach(msgReadEach => {
      //   //循环：{消息阅读记录数组}
      //   this.dictMsgRead[msgReadEach.msgId] = msgReadEach;
      // });
      //使用lodash.keyBy制作数据字典
      this.dictMsgRead = lodash.keyBy(this.myMsgRead, "msgId");
      //循环：{消息数组}
      data.list.forEach(msgEach => {
        let docRead = this.dictMsgRead[msgEach.P1]; //变量：{当前消息对应的已读记录}
        //如果{当前消息对应的已读记录}存在，表00.示已读
        if (docRead) {
          msgEach.isRead = true; //已读
          msgEach.readTime = docRead.readTime;
          this.crow2.push(msgEach);
        } else {
          msgEach.isRead = false; //未读
          this.msgg0.push(msgEach);
        }
      });
      this.myMsgList = data.list;
      this.msgg = this.msgg0;
    },
    /**
     * 函数：{设置消息已读状态的函数}
     * 往消息已读状态记录表更新一条记录,如果该记录不存在则新增
     *
     */
    async setReadStatus(_json) {
      let { memberId, msgId } = _json;
      await util.post({
        //请求接口
        url: global.PUB.domain + "/crossModify?page=tangball_msg_read",
        param: {
          findJson: { memberId, msgId },
          modifyJson: { memberId, msgId }
        }
      });
    }
  }
};
</script>

<style scoped>
.main-wrap {
  padding-bottom: 100px;
}
.top-box {
  margin-top: 8px;
  height: 35px;
  background: white;
  position: relative;
}

.read-box {
  width: 50%;
  height: 35px;
  position: absolute;
  text-align: center;
  line-height: 35px;
  top: 0;
  right: 0px;
}
.unread-box {
  width: 50%;
  height: 35px;
  position: absolute;
  text-align: center;
  line-height: 35px;
  top: 0;
  left: 0px;
}
.masEvolve {
  background-color: #F4B116;
  color: #FFFFFF;
}
</style>
