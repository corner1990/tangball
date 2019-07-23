<template>
  <div class="main-wrap">
    <van-button type="primary" size="small" @click="showDialogEnroll('add')">新增报名</van-button>

    <div class="data-group" v-for="(item,i) in enrollList" :key="i">
      <div class="data-group-left">数据id:{{item.P1}}-会员id:{{item.memberId}}-赛事id:{{item.matchId}}</div>
      <div class="data-group-right">
        <van-icon name="close" size="20px" @click="deleteAEnroll(item.P1)"/>
        <van-icon name="edit" size="20px" @click="showDialogEnroll('modify',item.P1)"/>
      </div>
    </div>

    <van-dialog
      use-slot
      :title="titleDialog"
      :show="isShowDialogEnroll"
      show-cancel-button
      @confirm="funAfterConfirm"
      @close="closeDialog"
    >
      <van-cell-group>
        <div class>
          赛事id:
          <input class="n-input" type="text" v-model="formData.matchId">
        </div>
        <div class>
          会员id:
          <input class="n-input" type="text" v-model="formData.memberId">
        </div>
      </van-cell-group>
    </van-dialog>
    <debug_item path="enrollList" v-model="isShowDialogEnroll" text="是否显示修改弹窗"/>
    <debug_item path="memberDoc" v-model="memberDoc" text="ajax获取单个会员数据"/>
    <debug_item path="matchDoc" v-model="matchDoc" text="ajax获取单个赛事数据"/>
    <debug_item path="memberList" v-model="memberList" text="ajax获取会员列表-男性+参数次数降序+前5条"/>
    <div class="H100"></div>
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
      titleDialog: "弹窗标题",
      formData: {
        matchId: 999
      },
      isShowDialogEnroll: false,
      enrollList: null, //报名列表
      memberDoc: null, //会员详情
      matchDoc: null, //赛事详情
      memberList: null //会员列表
    };
  },

  methods: {
    //函数：{弹窗表单确认后执行的函数}
    funAfterConfirm: null,
    async showDialogEnroll(action, dataId) {
      this.isShowDialogEnroll = true;
      //Q1:{新增}
      if (action == "add") {
        console.log("add");
        this.titleDialog = "新增报名";
        this.funAfterConfirm = this.addAEnroll; //确认后执行的函数
        this.formData = {};

        //Q2:{修改}
      } else if (action == "modify") {
        this.titleDialog = "修改报名";
        this.funAfterConfirm = this.modifyAEnroll; //确认后执行的函数
        //ajax获取单个会员数据
        this.formData = await util.ajaxGetDoc({
          page: "tangball_enroll",
          id: dataId
        });
      }
    },
    closeDialog() {
      this.isShowDialogEnroll = false;
      console.log("closeDialog");
    },
    //函数：{修改一条报名函数}-请配合后台查看数据
    async modifyAEnroll() {
      let resp = await util.ajaxModify({
        page: "tangball_enroll",
        findJson: { P1: this.formData.P1 }, //锁定需要修改的数据
        modifyJson: this.formData //修改字段
      });
      this.ajaxEnrollList(); //调用：{ajax获取报名列表函数}
      wx.showToast({
        title: "修改成功",
        icon: "success"
      });
    },
    //函数：{添加一条报名函数}-请配合后台查看数据
    async addAEnroll() {
      console.log("addAEnroll");
      await util.ajaxAdd({
        page: "tangball_enroll",
        data: this.formData
      });
      wx.showToast({
        title: "新增成功",
        icon: "success"
      });
      this.ajaxEnrollList(); //调用：{ajax获取报名列表函数}
    },

    //函数：{删除一条报名函数}-请配合后台查看数据
    async deleteAEnroll(dataId) {
      let res = await util.showModal({
        title: "确认删除数据？",
        content: "content"
      }); //调用：{模态弹窗的函数}
      if (!res.confirm) {
        return;
      }
      await util.ajaxDelete({
        page: "tangball_enroll",
        findJson: { P1: dataId } //锁定需要删除的数据
      });

      this.ajaxEnrollList(); //调用：{ajax获取报名列表函数}
      wx.showToast({
        title: "删除成功",
        icon: "success"
      });
    },
    //函数：{ajax获取报名列表函数}
    async ajaxEnrollList() {
      this.enrollList = await util.ajaxGetList({
        page: "tangball_enroll",
        pageSize: 5
      });
    }
  },
  created() {},
  async mounted() {
    //ajax获取单个会员数据
    this.memberDoc = await util.ajaxGetDoc({ page: "tangball_member", id: 10 });
    //ajax获取单个赛事数据
    this.matchDoc = await util.ajaxGetDoc({ page: "tangball_match", id: 37 });
    //ajax获取会员列表
    this.memberList = await util.ajaxGetList({
      page: "tangball_member",
      pageSize: 5,
      findJson: { sex: 1 }, //查询条件
      sortJson: { entries: -1 }, //排序条件
      selectJson: { name: 1, entries: 1 } //只返回指定字典
    });
    this.ajaxEnrollList(); //调用：{ajax获取报名列表函数}
  }
};
</script>

<style scoped>
.data-group {
  padding: 5px 10px;
  border-bottom: 1px #ddd solid;
  font-size: 16px;
  display: flex;
}
.data-group-left {
  flex: 1;
}
.data-group-right {
  text-align: right;
  width: 60px;
}
.n-input {
  display: inline-block;
  border: 1px #ddd solid;
  height: 28px;
  line-height: 28px;
  border-radius: 5px;
}
</style>
