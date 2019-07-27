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
      transform: true,//传递向子组件告知已读未读的状态值
      memberId: 19,//用户id
      msgId: null,//传递给接口的消息id
      myMsgList: null,//传递接口的消息列表
      myMsgRead: null,//传递接口的已读消息列表
      dictMsgRead: null,//传递接口的已读消息数字字典
      msgg0: [],//未读数组
      msgg: [],//传递向子组件的数组值
      focuss: true,//已读未读聚焦
      evolve: "masEvolve",//按钮聚焦样式
      crow2: [],//已读数组
      pageName: "个人中心-系统消息列表"//页面名
    };
  },
  created() {
    //在创建后调用一次消息列表接口接口
    // 将数据分别加载至页面假数组中，其中在未读时点击会向已读接口传递数据
    this.getMyMsgList(); 
  },
  methods: {
    // 已读按钮
    // 此处控制按钮focuss聚焦，并且传递向子组件的值
    // msgg值控制子组件显示的为哪个数组
    // transform值告知子组件处于何种状态，触发监听器
    read() {
      this.focuss = false;
      this.msgg = this.crow2;
      this.transform = false;
    },
    // 未读按钮
    unread() {
      this.focuss = true;
      this.msgg = this.msgg0;
      this.transform = true;
    },
// 被子组件$emit触发的方法1，将子组件被点击的未读消息的id传递到父组件
// 触发已读消息接口，传递已读的消息id
// 并且修改页面未读消息数组，将页面被点击的已读移动至未读（此处只修改未读，已读在子组件修改）
    moveMsg(transmit) {
      this.msgId = transmit.newcrow.msgId;
      this.crow2.push(transmit.newcrow.unreadBox);
      if (this.transform) {
        this.setReadStatus({ memberId: this.memberId, msgId: this.msgId });
      }
    },
    // 被子组件$emit触发的方法2，解决用户未点击消息确定就切换已读未读按钮，导致消息数组无法正确删除的问题
    // 子组件会传递被点击的消息的index（gant）进来，
    // 然后判断目前是切换至已读还是未读，然后删除相应的假数组的数据
    closeDoor(close) {
      this.gant = close.spliceCrow.gant;
      if (close.spliceCrow.door) {
        this.crow2.splice(this.gant, 1);
      } else {
        this.msgg0.splice(this.gant, 1);
      }
    },
// 这里是消息列表的接口，此接口只在页面创建后加载一次，将数据加载至页面已读未读的假数组中
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
          this.crow2.push(msgEach);//加载数据至已读接口
        } else {
          msgEach.isRead = false; //未读
          this.msgg0.push(msgEach);//加载数据至未读接口
        }
      });
      this.myMsgList = data.list;
      this.msgg = this.msgg0;//页面加载后使子组件默认显示未读数组
    },
    /**
     * 函数：{设置消息已读状态的函数}
     * 往消息已读状态记录表更新一条记录,如果该记录不存在则新增
     *
     */
    //已读数据接口，在页面加载后，只会在未读消息被点击时才会向页面传递当前消息的id，
    // 将后端接口的消息更改为已读
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
