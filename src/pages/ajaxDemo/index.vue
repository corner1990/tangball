<template>
  <div class="main-wrap">
    <van-button type="primary" size="small" @click="ajaxVenueList">获取场馆列表</van-button>
    <van-button type="primary" size="small" @click="ajaxVenueList2">获取场馆列表2</van-button>
    <div class="data-group" v-for="(item,i) in venuList" :key="i" v>
      {{item.P1}}-{{item.name}}-
      <span class="C_f30" v-if="item.cityDoc">{{item.cityDoc.P2}}</span>
      <span class="C_f30" v-else>{{item.area}}</span>

      <span class="C_f30" v-if="item.cityDoc2">cityDoc2</span>
      {{item.area}}
    </div>
    <debug_item path="venuList" v-model="venuList" text="场馆列表"/>
<p class="H50 OF2 CL1 "></p>
    <van-button type="primary" size="small" @click="ajaxMsgList">获取消息列表</van-button>
    <van-button type="primary" size="small" @click="showDialogEnroll('add')">新增报名1</van-button>
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

    <debug_item path="myMsgList" v-model="myMsgList" text="我的消息列表"/>
    <debug_item path="formData" v-model="formData" text="表单数据"/>
    <debug_item path="isShowDialogEnroll" v-model="isShowDialogEnroll" text="是否显示修改弹窗"/>
    <debug_item path="memberDoc" v-model="memberDoc" text="ajax获取单个会员数据"/>
    <debug_item path="matchDoc" v-model="matchDoc" text="ajax获取单个赛事数据"/>
    <debug_item path="memberList" v-model="memberList" text="ajax获取会员列表-男性+参数次数降序+前5条"/>
    <div class="H100"></div>
    <mytabbar></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import lodash from "lodash";
import card from "@/components/card";
import mytabbar from "@/components/mytabbar/mytabbar";
import debug_item from "@/components/common/debug_item/debug_item";
import my_field from "@/components/form_item/my_field"; //导入debug_item
import util from "@/utils/util";
export default {
  components: {
    card,
    mytabbar,
    debug_item,
    util,
    my_field
  },
  data() {
    return {
      venuList: null, //场馆列表
      memberId: 17,
      myMsgList: null,
      test: "111",
      titleDialog: "弹窗标题",
      formData: {},
      isShowDialogEnroll: false,
      enrollList: null, //报名列表
      memberDoc: null, //会员详情
      matchDoc: null, //赛事详情
      memberList: null //会员列表
    };
  },

  methods: {
    changeMatchId(event) {
      console.log("changeMatchId");
      console.log(event);
      let value = event.mp.detail;
      this.formData.matchId = value;
    },
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
    //函数：{ajax获取消息列表函数}
    async ajaxMsgList() {
      //ajax获取消息列表
      this.myMsgList = await util.ajaxGetList({
        page: "tangball_msg",
        pageSize: 999,
        findJson: {
          //或查询条件：range==1或[range==2&&memberIdList包含当前会员id]
          $or: [{ range: 1 }, { range: 2, memberIdList: 17 }]
        }
        // sortJson: { publishTime: -1 }, //排序条件
        // selectJson: { name: 1, entries: 1 } //只返回指定字段
      });
    },

    //函数：{ajax获取场馆列表，并且根据每条数据的城市id（area）拿到地区名称}
    async ajaxVenueList() {
      console.log("ajaxVenueList");
      let list = await util.ajaxGetListPopulate({
        page: "tangball_venue",
        pageSize: 5,
        populate: [
          {
            populateColumn: "cityDoc",
            idColumn: "area",
            idKeyColumn: "P7",
            page: "dmagic_area"
          },
          {
            populateColumn: "cityDoc2",
            idColumn: "area",
            idKeyColumn: "P7",
            page: "dmagic_area"
          }
        ]
      });

      // await util.timeout(500); //延迟
      await util.timeout(2500); //延迟
      this.venuList = list;
      console.log("this.venuList", this.venuList);
    },
    //函数：{ajax获取场馆列表，并且根据每条数据的城市id（area）拿到地区名称}
    async ajaxVenueList2() {
      console.log("ajaxVenueList");
      let list = await util.ajaxGetList({
        page: "tangball_venue",
        pageSize: 5

      });

      this.venuList = list;
      console.log("this.venuList1", this.venuList);

  
  await util.timeout(3500); //延迟

      this.venuList = await util.ajaxPopulate({
        listData: this.venuList,
        populateColumn: "cityDoc",
        idColumn: "area",
        idKeyColumn: "P7",
        page: "dmagic_area"
      });

      // this.venuList = await util.ajaxPopulate({
      //   listData: this.venuList,
      //   populateColumn: "cityDoc2",
      //   idColumn: "area",
      //   idKeyColumn: "P7",
      //   page: "dmagic_area"
      // });

      //  this.venuList = list;

      console.log("this.venuList2", this.venuList);
    }
  },
  async created() {},
  async mounted() {
    console.log("lodash", lodash);
    //ajax获取单个会员数据
    this.memberDoc = await util.ajaxGetDoc({ page: "tangball_member", id: 10 });
    //ajax获取单个赛事数据
    this.matchDoc = await util.ajaxGetDoc({ page: "tangball_match", id: 37 });
    //ajax获取会员列表
    this.memberList = await util.ajaxGetList({
      page: "tangball_member",
      pageSize: 1,
      findJson: { sex: 1 }, //查询条件
      sortJson: { entries: -1 }, //排序条件
      selectJson: { name: 1, entries: 1 } //只返回指定字段
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
