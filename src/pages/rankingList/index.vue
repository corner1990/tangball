<template>
  <div class="main-wrap">
    <debug_item v-model="memberList" text="会员列表" />
    <p class="H10 OF2 CL1"></p>
    <!-- 分页组件 -->
    <pageLink></pageLink>
    <!--参赛次数、成绩排名、鸟王排名、积分排名等按钮 -->
    <div class="button-box">
      <div
        @click="clickfun(index,item,item.id)"
        :key="index"
        v-for="(item,index) in arrList "
        :class="{buttonFocus : item.id===selected}"
      >{{item.name}}</div>
    </div>
    <p class="H10 OF2 CL1"></p>
    <!--男女选项卡 -->
    <van-tabs :active="active" @change="changeSex">
      <van-tab :title="doc" v-for="(doc,i) in sexArr" :key="i">
        <!-- 子选项卡，排名、男子排名、参赛次数 -->
        <div class="ranking-title-box">
          <div class="ranking-title">排名</div>
          <div class="ranking-title">{{doc+"名字"}}</div>
          <div class="ranking-title">{{activeTitle}}</div>
        </div>
        <!-- 展示排名信息组件 -->
        <rankingListComponent
          v-for="(each,j) in memberList"
          :ranking="j+1"
          :cf="each"
          :value="arrList[rankingIndex].value"
          :key="j"
        ></rankingListComponent>
      </van-tab>
    </van-tabs>
    <div class="bottom-space"></div>
    <mytabbar :active="2"></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import mytabbar from "@/components/mytabbar/mytabbar";
import debug_item from "@/components/common/debug_item/debug_item";
import rankingListComponent from "./rankingListComponent";
import pageLink from "./pageLink";
import util from "@/utils/util";
export default {
  components: {
    mytabbar,
    debug_item,
    rankingListComponent,
    pageLink
  },
  data() {
    return {
      // 配置的数据列表
      arrList: [
        {
          name: "参赛次数",
          title: "参赛次数",
          value: ["name", "entries"],
          id: 0
        },
        {
          name: "成绩排名",
          title: "参数成绩",
          value: ["name", "countAchievement"],
          id: 1
        },
        {
          name: "鸟王排名",
          title: "参赛排名",
          id: 2
        },
        {
          name: "积分排名",
          title: "积分",
          value: ["name", "integral"],
          id: 3
        }
      ],
      selected: 0,
      sexArr: ["男子", "女子"],
      rankingIndex: 0, //参赛次数、成绩排名、鸟王排名、积分排名的索引
      sexIndex: 1, //男或者女的索引
      activeTitle: "参赛次数", //参赛次数、成绩排名、鸟王排名、积分排名的文字
      // memberList: [{ list: [] }, { list: [] }] //会员数据列表
      memberList: [] //会员数据列表
    };
  },
  methods: {
    /**
     * @name changeSex切换男女函数方法
     * @desc 判断当前状态是男还是女，并改变索引值
     * @param 参数说明
     */
    changeSex(e) {
      if (e.target.index == 0) {
      }
      this.sexIndex = e.target.index + 1; //改变当前男女状态的索引
      this.getMemberList(); //请求会员列表函数
    },
    /**
     * @name clickfun根据索引值判断需要调用的列表
     * @desc 参赛次数、成绩排名、鸟王排名、积分排名函数
     * @param index索引值 item.title点击的名称
     */
    async clickfun(index, item, id) {
      this.rankingIndex = index;
      this.activeTitle = item.title;
      this.selected = id; //按钮聚焦
      this.getMemberList(); //请求会员列表函数
    },
    /**
     * @name getMemberList请求会员列表
     * @desc 会员列表
     * @param pageSize展示页数 entries次数排名正序 integral积分排名正序
     */
    async getMemberList(url, sortJson, selectJson) {
      let RankingName = this.arrList[this.rankingIndex].value[1]; //排名名称
      let { data } = await util.post({
        url: global.PUB.domain + "/crossList?page=tangball_member",
        param: {
          pageSize: 20, //每页20条数据
          sortJson: { [RankingName]: -1 }, //参赛次数
          findJson: {
            sex: this.sexIndex
          }
        }
      });
      console.log("data", data.list);
      this.memberList = data.list;
      /**
       * @desc 根据成绩列表的第一个列表是男，第二个列表是女
       */
      // this.memberList[0].list = data.list.filter(doc => {
      //   return doc.sex == 1;
      // });
      // this.memberList[1].lgetMemberListist = data.list.filter(doc => {
      //   return doc.sex == 2;
      // });
    }
  },
  beforeMount() {
    this.sexIndex = 1; //初始化性别
    this.getMemberList(); //获取会员列表
  }
};
</script>
<style scoped>
.button-box {
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  /* display: flex; */
  /* justify-content: space-evenly; */
  color: #f4b116;
  text-align: center;
}
.button-box div {
  width: 20%;
  margin: 0 5px;
  padding: 0 2px;
  border: 1px solid #f4b116;
  display: inline-block;
}
.buttonFocus {
  background-color: #f4b116;
  color: #fff;
}
/* 排名按钮 */
.button-center {
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  text-align: center;
  padding-top: 10px;
}
.button-center van-button {
  margin: 5px;
}
.ranking-title-box {
  display: flex;
  justify-content: space-evenly;
  border: 1px solid #fff;
  border-bottom-color: #f8f8f8;
  font-weight: bold;
  margin: 5px 10px 5px 10px;
}
/* 排名标题 */
.ranking-title {
  margin: 10px 5px;
  width: 100px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
/* 底部间隙 */
.bottom-space {
  height: 60px;
  width: 100%;
}
</style>
