<template>
  <div>
    <van-tabs :active="active" @change="onClickTab" style="position: relative;" >
      <van-tab :title="bigItem.category " v-for="(bigItem,index) in tabList" :key="index">
          <tisp v-if="status"></tisp>
        <matct_detail v-for="(item,i) in matchlist" :key="i" :item="item" :active="active"></matct_detail>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
/* eslint-disable */
import matct_detail from "./match_detail";
import tisp from "../tisp/tisp";
import util from "../../utils/util";
import mytabbar from "../mytabbar/mytabbar";
import debug_item from "../common/debug_item/debug_item";
export default {
  components: {
    mytabbar,
    tisp,
    debug_item,
    matct_detail
  },
  props: {
    pageSize: {
      type: Number,
      default: 6
    },
    pageIndex: {
      type: Number,
      default: 1
    }
  },

  data() {
    return {
      matchType: null,
      // pageSize: 10,
      // pageIndex: 1,
      active: 0,
      alldata: [],
      count: 0,
      matchlist: [],
      tabList: [
        { category: "近期赛事" },
        { category: "团队赛" },
        { category: "个人赛" },
        // { category: "全部" }
      ],

      status: false, //显示暂无数据
      footerText: "更多赛事", //初始为更多赛事，当最后一页时是查往事
      isStatus: true //控制能够触发请求接口的状态
    };
  },
  methods: {
    tabCutInin() {
      this.matchlist = [];
      this.pageIndex = 1;

      this.getlist(); //调用一次接口
    },
    footLoadLazy() {
      this.pageIndex++;
      if (this.isStatus) {
        //这里是点击更多赛事触发了调取接口函数，在这里作判断
        this.getlist();
      }
    },
    //----------- 请求接口数据的函数-------------------
    async getlist() {
      wx.showLoading({ title: "加载中", icon: "loading" });
      let { data } = await util.post({
        url: global.PUB.domain + "/crossList?page=tangball_match",
        param: {
          pageSize: this.pageSize,
          pageIndex: this.pageIndex,
          sortJson: { matchTime: -1 },
          findJson: { matchForm: this.matchType,
          publicationStatus:1}
        }
      });
      wx.hideLoading(); //请求到数据后加载中隐藏
      this.matchlist = [];
      let arr = data.list;

       this.matchlist= data.list;

    },
    //----------- 点击标签时触发的函数，并且会默认传递event-------------------
    onClickTab(event) {
      this.active = event.target.index;

      // ------------------地区区分---------------------
      //如果是近期（因为近期的index为0）,全国Index=1,如果是加盟商Index=2
      if (event.target.index == 0) {
        this.matchType = null; //改变请求接口参数
          this.pageSize = 5;
        this.tabCutInin(); //切换初始化方法
      } else if (event.target.index == 1) {
        this.matchType = 2; //改变请求接口参数
          this.pageSize = 10;
        this.tabCutInin(); //切换初始化方法
      } else if (event.target.index == 2) {
        this.matchType = 1;
          this.pageSize = 10;
        this.tabCutInin(); //切换初始化方法
      } else if (event.target.index == 3) {
        this.matchType = null;
        this.pageSize=1000;
        this.tabCutInin(); //切换初始化方法

      }
    },
    changeValue(event) {
      this.searchValue = event.mp.detail;
    }
  },
  onLoad() {
    this.getlist(); //页面创建成功后，调用一次请求接口，此时是加载所有数据
  },
  onUNnLoad() {
    this.footerText = "更多赛事";
  },
  computed: {
    objParam() {
      return { pageSize: this.pageSize, pageIndex: this.pageIndex };
    }
  }, watch: {
            'matchlist.length': {
                handler(newValue, oldValue) {
                    if (newValue !== oldValue) {
                        // getlist()
                    }
                }
            }
        },
  //  onPageScroll(res) {
  //   let listHeight = this.matchlist.length * 82.5 - 120.5; //计算赛事列表现有的长度
  //   let index = Math.ceil(res.scrollTop / listHeight); //计算页面滚动的距离除以页面长度，并且取整数
  //   // 相当每一次滚动到底部的时候，就会进行一次加载
  //   if (this.pageIndex == index) {
  //     this.pageIndex++;
  //     if (this.isStatus) {
  //       //这里是点击更多赛事触发了调取接口函数，在这里作判断
  //       this.getlist();
  //     }
  //   }
  // },
  onReachBottom(res) {
    //滑动到底部
  },
};
</script>
<style scoped>
.foot-loadlazy {
  opacity: 0.5;
  font-weight: bold;
  /* line-height: 30px; */
  text-align: center;
  /* position: absolute;
  bottom: 9px;
  left: 0; */
  background: rgb(158, 149, 149);
  height: 30px;
  width: 100%;
}
.noload {
  color: #999999;
  background-color: #fff;
  height: 30px;
  font-weight: bold;
  text-align: center;
  line-height: 30px;
}
.van-tab__pane{
  overflow-y:visible
}
</style>
