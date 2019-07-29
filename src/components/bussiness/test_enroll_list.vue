<template>
  <div class="demo-box">
    <debug_item v-model="isShowDialogEnroll" text="是否显示新增/修改弹窗" />
    <debug_item v-model="formData" text="弹窗表单数据" />
    <van-button type="primary" size="small" @click="showDialogEnroll('add')">新增报名</van-button>
    <div class="data-group" v-for="(item,i) in enrollList" :key="i">
      <div class="data-group-left">数据id:{{item.P1}}-会员id:{{item.memberId}}-赛事id:{{item.matchId}}</div>
      <div class="data-group-right">
        <van-icon name="close" size="20px" @click="deleteAEnroll(item.P1)" />
        <van-icon name="edit" size="20px" @click="showDialogEnroll('modify',item.P1)" />
      </div>
    </div>
    <!--新增/修改弹窗-->
    <van-dialog
      use-slot
      :title="titleDialog"
      :show="isShowDialogEnroll"
      show-cancel-button
      @confirm="funAfterConfirm"
      @close="isShowDialogEnroll=false"
    >
      <van-cell-group>
        <div class>
          <!-- <input type="text" class="n-input" v-model="formData.matchId"> -->
          <!-- <input type="text" class="n-input" v-model="formData.matchId"> -->
          <!-- <van-field :value="formData.matchId" placeholder="赛事id(vant)" @change="changeMatchId"/>
          -->
          <my_field v-model="formData.matchId" label="赛事id">
            <span class>aa</span>
          </my_field>
          <my_field v-model="formData.memberId" label="会员id"></my_field>
        </div>
      </van-cell-group>
    </van-dialog>
  </div>
</template>
<script>
/* eslint-disable */
import lodash from "lodash";
import util from "@/utils/util";
import mytabbar from "@/components/mytabbar/mytabbar";
import debug_item from "@/components/common/debug_item/debug_item";
import my_field from "@/components/form_item/my_field"; //导入debug_item

export default {
  components: {
    mytabbar,
    debug_item,
    my_field,
    util
  },
  data() {
    return {
      titleDialog: "弹窗标题",
      formData: {},
      isShowDialogEnroll: false,
      enrollList: null //报名列表
    };
  },

  methods: {
    //函数：{弹窗表单确认后执行的函数}
    funAfterConfirm: null,
    async showDialogEnroll(action, dataId) {
      this.isShowDialogEnroll = true;
      //Q1:{新增}
      if (action == "add") {
        //
        /**
         * 需要对属性进行赋值，直接赋值空对象会残留数据，难受
         * 如果用纯Input则可以
         */
        this.formData = { matchId: null, memberId: null };
        this.titleDialog = "新增报名";
        this.funAfterConfirm = this.addAEnroll; //确认后执行的函数
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
    },
    changeMatchId(event) {
      console.log("changeMatchId");
      console.log(event);
      let value = event.mp.detail;
      this.formData.matchId = value;
    }
  },
  async created() {},
  async mounted() {
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
</style>
