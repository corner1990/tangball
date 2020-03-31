<template>
  <div class="groups">
    <div style="height:10px;"></div>
    <div class="groups-box">
      <div style="height:5px;"></div>
      <div class="groupsName-box">
        <div class="groupsName">队伍名称:</div>
        <div class="groupsName" style="margin-left:10px;">
          <input v-model="name" placeholder="请输入队伍名称" />
        </div>
        <div style="clear:both;height:4px"></div>
      </div>
      <!-- <div style="clear:both"></div> -->
      <div v-for="(item,index) in member" :key="index" class="playerBox">
        <div class="playerName">
          {{item.name?item.name:'无'}}
          <span
            class="C_999"
          >(&nbsp;{{item.sex?item.sex==1?'男 |':'女 |':''}}{{item.phone? " "+item.phone+'':''}}{{index==0?' | 队长':''}})</span>
        </div>
        <div class="playerDetail" @click="deletePlayer(index)" v-if="index!=0">
          <van-icon name="close" title="删除" />
        </div>
        <div class="playerDetail" @click="showModifyDialog(item,index)">
          <van-icon name="edit" title="修改" />
        </div>
        <div style="clear:both"></div>
      </div>
      <div class="addPlayer">
        <div class="FL" v-if="minPlayer!=maxPlayer">队伍人数要求{{minPlayer}}-{{maxPlayer}}人</div>
        <div class="FL" v-else>队伍人数要求{{minPlayer}}人</div>
        <div class="FR MR10" style="color: #F4B116;" v-if="member.length<maxPlayer">
          (&nbsp;添加队员&nbsp;)&nbsp;&nbsp;
          <span class="addbutton">
            <van-icon
              name="add-o"
              title="添加"
              @click="addPlay"
              style="padding-right: 5px;margin-top:5px;"
            />
          </span>
        </div>
        <div style="clear:both"></div>
      </div>
      <div v-if="womenCount||menCount">
        <div v-if="menCount" class="require-box">
          <sapn v-if="menCount.min&&menCount.max">男队员人数要求({{menCount.min}}-{{menCount.max}})人</sapn>
          <sapn v-else-if="menCount.min&&menCount.min!=0">男队员人数至少{{menCount.min}}人</sapn>
          <sapn v-else-if="menCount.max">男队员人数不能超过{{menCount.max}}人</sapn>
        </div>
        <div v-if="womenCount" class="require-box">
          <sapn
            v-if="womenCount.min&&womenCount.max"
          >女队员人数要求({{womenCount.min}}-{{womenCount.max}})人</sapn>
          <sapn v-else-if="womenCount.min&&womenCount.min!=0">女队员人数至少{{womenCount.min}}人</sapn>
          <sapn v-else-if="womenCount.max">女队员人数不能超过{{womenCount.max}}人</sapn>
        </div>
      </div>
      <div class style="padding:5px 0">
        <div style="padding:3px 0">选择比赛日期：</div>

        <radio-group @change="changePlayingTime" v-model="playingTime">
          <template  v-for="(item,i) in arrPlayingTime">
            <div style="margin:0 5px 9px 0" :key="i" >
               <radio  :value="item" :checked="item==playingTime?true:false"  />
            {{item}}
            </div>
           
           
          </template>
        </radio-group>
      </div>

      <!-- <div v-else class="addPlayer">队员数量已经达到上限</div> -->
    </div>
    <div class="button-modify" @click="createGroups">创建队伍并报名</div>
    <div style="height:20px;"></div>
    <mp-dialog
      :title="modifyTitle"
      :show="showModify"
      :buttons="buttonList"
      :mask-closable="false"
      @buttontap="modifyDialog"
    >
      <div style="height:10px;"></div>
      <div class="modify-box">
        <div class="modify-text">姓名：</div>
        <div class="modify-input">
          <input
            v-model="player.name"
            placeholder="请输入队员姓名"
            placeholder-style="color:rgba(214, 212, 205, 0.918);"
          />
        </div>
        <div style="clear:both"></div>
      </div>
      <div v-if="nameError" class="nameError">姓名不能为空</div>
      <div class="modify-box">
        <div class="modify-text">姓别：</div>
        <div class="modify-input">
          <radio-group @change="changeSex" v-model="player.sex">
            <radio value="1" :checked="player.sex==1?true:false" />男
            <radio value="2" :checked="player.sex==2?true:false" />女
          </radio-group>
        </div>
        <div style="clear:both"></div>
      </div>
      <div class="modify-box" v-if="playerIndex != 0||add">
        <div class="modify-text">手机号：</div>
        <div class="modify-input">
          <input
            v-model="player.phone"
            placeholder="请输入队员手机号"
            type="number"
            placeholder-style="color:rgba(214, 212, 205, 0.918);"
          />
        </div>
        <div style="clear:both"></div>
      </div>
      <div v-if="phoneError" class="nameError">手机号格式错误</div>
    </mp-dialog>
    <mp-dialog
      :title="captainTitle"
      :show="showCaptainDialog"
      :buttons="captainButtonList"
      :mask-closable="false"
      @buttontap="gotoPage"
    >
      <!-- <div style="height:10px;"></div> -->
      <div class="captainAlert">PS:本赛事为团体赛，报名后您将成为队长，您的手机号需接收短信验证码，您的姓名和性别必须填写，请先完善您的个人信息。</div>
    </mp-dialog>
    <van-dialog id="van-dialog" />
  </div>
</template>
<script>
/* eslint-disable */
import Dialog from "../../../static/vant/dialog/dialog";
import util from "@/utils/util";
export default {
  components: {},
  data() {
    return {
      playingTime: null,
      arrPlayingTime: [], //出场日期数组
      captainTitle: "",
      showCaptainDialog: false,
      captainButtonList: [
        {
          text: "前往修改"
        }
      ],
      menCount: {},
      womenCount: {},
      nameError: false, //名字校验key
      phoneError: false, //电话校验key
      modifyTitle: "修改队员信息", //弹窗title
      maxPlayer: 8, //队伍最大人数
      minPlayer: 4, //队伍最少人数
      add: false, //添加人数key
      playerIndex: "", //当前球员对应数组的key
      member: [], //保存队伍信息数组
      name: "", //队名
      player: { name: "", sex: 1, phone: "" }, //当前球员的数据
      showModify: false, //显示弹窗key
      buttonList: [
        //弹窗按钮设置
        { text: "取消" },
        { text: "确认" }
      ]
    };
  },
  computed: {
    //唐球会员信息-在vuex中获取
    tangballUserInfo: function() {
      return this.$store.state.tangballUserInfo;
    }
  },
  onUnload: function() {
    let objMatchInfo = JSON.parse(wx.getStorageSync("matchInfo"));
    let addGroups = {
      createMemberId: this.tangballUserInfo.P1,
      matchId: objMatchInfo.matchId,
      member: this.member,
      CreateUser: this.member[0].name,
      name: this.name
    };
    wx.setStorage({
      key: "groupsMsg",
      data: JSON.stringify(addGroups),
      success() {
        // wx.navigateTo({url:`/pages/matchEroll/main?id=1`});
      }
    });
  },
  methods: {
    gotoPage() {
      util.gotoPage("/pages/myInfo/main?groups=true");
    },
    // 点击弹出按钮触发的方法
    modifyDialog(e) {
      // 点击取消按钮触发关闭弹窗方法
      if (e.target.index == 0) {
        this.closeModifyDialog();
      } else {
        //点击确认按钮触发修改方法
        this.modifyPlayer();
      }
    },
    // 显示修改弹窗触发的方法
    showModifyDialog(item, index) {
      this.modifyTitle = "修改队员信息";
      this.playerIndex = index;
      this.player = JSON.parse(JSON.stringify(item));
      this.showModify = true;
    },
    // 修改性别触发双向绑定
    changeSex(event) {
      this.player.sex = Number(event.target.value);
    },
// 修改比赛日期
    changePlayingTime(event) {
      this.playingTime = event.target.value;
    },
    // 修改或增加球员的方法
    async modifyPlayer() {
      // 如果名字为空
      if (this.player.name == "") {
        this.nameError = true;
        // 如果手机号格式错误
      } else if (
        !/^1([38][0-9]|14[579]|5[^4]|16[6]|7[1-35-8]|9[189])\d{8}$/.test(
          this.player.phone
        )
      ) {
        this.nameError = false;
        this.phoneError = true;
      } else {
        this.nameError = false;
        this.phoneError = false;
        // 如果是新增球员
        if (this.add) {
          this.member.push(JSON.parse(JSON.stringify(this.player)));
          this.player = { name: "", sex: 1, phone: "" };
          this.add = false;
          this.showModify = false;
        } else {
          //修改球员信息
          if (this.playerIndex == 0) {
            let modifyData = this.tangballUserInfo;
            modifyData.name = this.player.name;
            modifyData.sex = this.player.sex;
            modifyData.phone = this.player.phone;
            let { data } = await util.post({
              url: global.PUB.domain + "/crossModify?page=tangball_member",
              param: {
                findJson: { openid: this.tangballUserInfo.openid },
                modifyJson: modifyData
              }
            });
            this.$store.commit("setTangballUserInfo", modifyData);
          }
          this.member[this.playerIndex] = JSON.parse(
            JSON.stringify(this.player)
          );
          this.player = { name: "", sex: 1, phone: "" };
          this.showModify = false;
          this.showCaptainDialog = false;
        }
      }
    },
    // 关闭修改弹窗的方法
    closeModifyDialog() {
      this.showModify = false;
      this.nameError = false;
      this.phoneError = false;
      // this.player = {name:'',sex:'1',phone:''}
    },
    groupEroll() {
      let objMatchInfo = JSON.parse(wx.getStorageSync("matchInfo"));

      let addGroups = {
        createMemberId: this.tangballUserInfo.P1,
        matchId: objMatchInfo.matchId,
        member: this.member,
        CreateUser: this.member[0].name,
        name: this.name,
        playingTime: this.playingTime,
      };
      wx.setStorage({
        key: "groupsMsg",
        data: JSON.stringify(addGroups),
        success() {
          wx.navigateTo({ url: `/pages/matchEroll/main?id=1` });
        }
      });
      // wx.navigateTo({url:`/pages/matchEroll/main?id=1`});
    },
    // 保存球队信息跳转页面
    createGroups() {
    

      // 队名不能为空
      if (this.name == "") {
        Dialog.alert({
          title: "提示",
          message: "队名不能为空"
        }).then(() => {
          // on confirm
        });
        // 队伍要达到人数下限
      } else if (this.member.length < this.minPlayer) {
        Dialog.alert({
          title: "提示",
          message: "队伍人数不够"
        }).then(() => {
          // on confirm
        });
      } else if (this.member.length > this.maxPlayer) {
        Dialog.alert({
          title: "提示",
          message: "队伍人数超过上限"
        }).then(() => {
          // on confirm
        });
      }  else if (this.arrPlayingTime.length>1&&!this.playingTime ) {
        Dialog.alert({
          title: "提示",
          message: "请选择参赛日期"
        }).then(() => {
          // on confirm
        });
      }else if (this.menCount || this.womenCount) {
        if (this.menCount) {
          let count = 0;
          this.member.forEach(item => {
            if (item.sex == 1) {
              count++;
            }
          });
          if (this.menCount.min) {
            if (count < this.menCount.min) {
              Dialog.alert({
                title: "提示",
                message: "男队员人数不够"
              }).then(() => {
                return;
              });
              return;
            }
          }
          if (this.menCount.max) {
            if (count > this.menCount.max) {
              Dialog.alert({
                title: "提示",
                message: "男队员人数超过上限"
              }).then(() => {
                return;
              });
              return;
            }
          }
        }
        if (this.womenCount) {
          let count = 0;
          this.member.forEach(item => {
            if (item.sex == 2) {
              count++;
            }
          });
          if (this.womenCount.min) {
            if (count < this.womenCount.min) {
              Dialog.alert({
                title: "提示",
                message: "女队员人数不够"
              }).then(() => {});
              return;
            }
          }
          if (this.womenCount.max) {
            if (count > this.womenCount.max) {
              Dialog.alert({
                title: "提示",
                message: "女队员人数超过上限"
              }).then(() => {});
              return;
            }
          }
        }

        this.groupEroll();
      } else {
        this.groupEroll();
      }
    },
    // 显示新增球员弹窗的方法
    addPlay() {
      this.add = true;
      this.modifyTitle = "添加队员";
      this.player = { name: "", sex: 1, phone: "" };
      this.showModify = true;
    },
    // 删除球员触发的方法
    deletePlayer(index) {
      Dialog.confirm({
        title: "确定删除该队员?"
      })
        .then(() => {
          // on confirm
          this.member.splice(index, 1);
        })
        .catch(() => {
          // on cancel
        });
    }
  },
  mounted() {
    let groups = wx.getStorageSync("groupsMsg");



    if (groups || groups != "") {

      groups = JSON.parse(groups);
      if (groups.member.length > 1) {
        this.member = groups.member;
        this.name = groups.name;
      } else {
        // 页面加载时初始化球队信息
        this.member = [];
        (this.player.name = this.tangballUserInfo.name || ""),
          (this.player.sex = this.tangballUserInfo.sex || ""),
          (this.player.phone = this.tangballUserInfo.phone || "");
        let obj = JSON.parse(JSON.stringify(this.player));
        this.member.push(obj);
      }
    } else {
      // 页面加载时初始化球队信息
      this.member = [];
      (this.player.name = this.tangballUserInfo.name || ""),
        (this.player.sex = this.tangballUserInfo.sex || ""),
        (this.player.phone = this.tangballUserInfo.phone || "");
      let obj = JSON.parse(JSON.stringify(this.player));

      this.member.push(obj);
    }

    // this.player = {name:'',sex:1,phone:''}
    let objMatchInfo = JSON.parse(wx.getStorageSync("matchInfo"));
    //比赛开始时间
    let matchTime = global.moment(objMatchInfo.matchTime).format("YYYY-MM-DD");
    //比赛结束时间
    let matchTimeEnd = global
      .moment(objMatchInfo.matchTimeEnd)
      .format("YYYY-MM-DD");

    //获取时间段内的所有日期作为选项
    this.arrPlayingTime = util.getDatefromDuration(matchTime, matchTimeEnd);

    this.maxPlayer = objMatchInfo.teamMemberMax;
    this.minPlayer = objMatchInfo.teamMemberMin;
    this.menCount = objMatchInfo.menCount ? objMatchInfo.menCount : {};
    this.womenCount = objMatchInfo.womenCount ? objMatchInfo.womenCount : {};

    if (
      !this.tangballUserInfo.phone ||
      this.tangballUserInfo.phone == "" ||
      !this.tangballUserInfo.name ||
      this.tangballUserInfo.name == "" ||
      !this.tangballUserInfo.sex
    ) {
      this.showCaptainDialog = true;
      this.playerIndex = 0;
    } else {
      this.showCaptainDialog = false;
      this.player = { name: "", sex: 1, phone: "" };
    }
  },
  created() {}
};
</script>
<style scoped>
.groups {
  background-color: rgb(246, 248, 250);
}
.groups-box {
  margin: 10px 15px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  padding-left: 10px;
}
.groupsName-box {
  font-size: 16px;
  line-height: 40px;
  border-bottom: 1px solid rgb(230, 230, 230);
  margin-right: 5px;
}
.groupsName {
  float: left;
  height: 40px;
}
.groupsName input {
  padding-left: 5px;
  margin-top: 5px;
  height: 30px;
  line-height: 30px;
  border-radius: 2px;
  border: 1px solid #ddd;
}
.playerBox {
  font-size: 16px;
  /* height: 40px; */
  line-height: 40px;
  margin-right: 5px;
  border-bottom: 1px solid rgb(230, 230, 230);
}
.playerName {
  float: left;
  width: 80%;
}

.playerDetail {
  float: right;
  padding-right: 10px;
  color: #f4b116;
  font-size: 20px;
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
.modify-box {
  height: 40px;
  line-height: 40px;
  margin: 0 10px;
  display: flex;
}
.modify-text {
  flex: 0 0 80px;
}
.modify-input {
  flex: 1;
  text-align: left;
  margin-left: 10px;
}
.modify-input input {
  height: 40px;
  line-height: 40px;
}
.Detail-box {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgb(230, 230, 230);
  margin: 0 10px;
}
.addPlayer {
  /* height: 40px; */
  line-height: 24px;
  /* font-size: 16px; */
  /* border-bottom: 1px solid rgb(230, 230, 230); */
  color: #f4b116;
  box-sizing: border-box;
}
.nameError {
  height: 12px;
  text-align: right;
  margin-right: 15px;
  font-size: 12px;
  color: red;
}
.captainAlert {
  /* margin-top:-10px; */
  font-size: 18px;
  /* color: rgba(214, 212, 205, 0.918); */
  color: #f4b116;
  /* font-weight: 700; */
}
.require-box {
  /* height: 40px; */
  line-height: 24px;
  /* border-bottom: 1px solid rgb(230, 230, 230); */
  color: #f4b116;
  /* font-size: 16px; */
}
.captain-box {
}
.addbutton {
  margin-top: 3px;
  font-size: 18px;
  float: right;

  /* line-height: 24px; */
}
</style>
