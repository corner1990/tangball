<template>
  <div class="main-wrap">
    <!-- <debug_item path="pageName" v-model="pageName" text="页面名称" /> -->
    <!-- 搜索框 -->
    <div class="searchBox">
      <input type="text" v-model="keywords" placeholder="请输入搜索关键词" />
      <div slot="action" @click="onSearch">
        <van-icon name="search" size="24px" />
      </div>
    </div>
    <!-- 引进筛选城市组件 -->
    <city_select @select="search" :selectIndex="selectIndex"></city_select>
    <!-- <debug_item path="venueList" v-model="venueList" text="场馆列表" /> -->
    <!-- 赛事场馆列表组件 -->
    <venueListComponent :cf="item" v-for="(item,i) in venueList" :key="i"></venueListComponent>
    <!--无数据时显示暂无数据-->
    <tisp v-if="status"></tisp>
    <mytabbar :active="1"></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import mytabbar from "@/components/mytabbar/mytabbar";
import tisp from "@/components/tisp/tisp";
import debug_item from "@/components/common/debug_item/debug_item";
import util from "@/utils/util";
import venueListComponent from "@/components/venueList/venueListComponent";
import city_select from "@/components/city_select";
export default {
  components: {
    mytabbar,
    debug_item,
    venueListComponent,
    city_select,
    tisp
  },
  data() {
    return {
      // 地区组件聚焦的index
      selectIndex: 0,
      pageName: "场馆列表",
      venueList: [],
      keywords: null, //搜索关键字
      show: true, //是否显示
      status: false //显示暂无数据
    };
  },
  methods: {
    /**
     * @desc 搜索方法
     * @param 搜索关键字：keywords
     * @param 是否显示：show
     */
    onSearch(keywords) {
      console.log("this.status1111", this.status);
      this.venueList.forEach(item => {
        let index = item.name.indexOf(this.keywords); //关键字出现的位置索引值
        if (index > -1) {
          //如果关键字匹配
          item.show = true;
        } else {
          //如果关键字不匹配
          item.show = false;
          //如果关键字不匹配显示暂无数据
          this.status = true;
        }
      });
      // console.log("this.status222", this.status,this.venueList.length);
      // if (this.venueList.length == 0) {
      //   console.log("this.status333", this.status);
      //   this.status = true;
      // }
    },
    /**
     * @desc 请求接口数据的函数
     *
     */
    async search(areaId) {
      if (areaId) {
        this.selectIndex = 0;
      } else {
        this.selectIndex = -1;
      }
      //还未请求到数据前显示showLoading加载中
      wx.showLoading({ title: "加载中", icon: "loading" });
      let { data } = await util.post({
        url: global.PUB.domain + "/crossListRelation",
        param: {
          needRelation: "1",
          columnItem: "P7",
          columnTarget: "area",
          sheetRelation: {
            page: "dmagic_area",
            findJson: {
              P8: areaId
            }
          },
          sheetTarget: {
            page: "tangball_venue",
            pageSize: "9999"
          }
        }
      });
      wx.hideLoading();//请求到数据后加载中隐藏
      if (this.venueList.length <= 0) {//判断接口数据的长度小于等于0显示暂无数据
        this.status = false;
      } else {
        this.status = true;
      }

      data.list.forEach(item => {
        item.show = true;
      });
      this.venueList = data.list;
      //填充地区数据cityDoc
      this.venueList = await util.ajaxPopulate({
        listData: this.venueList,
        populateColumn: "cityDoc",
        idColumn: "area",
        idKeyColumn: "P7",
        page: "dmagic_area"
      });
    }
  },
  mounted() {
    this.search();
    //  每次刷新页面将地区组件聚焦到所有
  }
};
</script>
<style scoped>
.main-wrap {
  padding-bottom: 80px;
  position: relative;
}
.searchBox {
  width: 100%;
  height: 30px;
  padding: 10px;
  background-color: #f4b116;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
.searchBox input {
  width: 83%;
  height: 30px;
  border-radius: 10px;
  background-color: #fff;
  float: left;
  padding-left: 5px;
}
.searchBox div {
  width: 10%;
  height: 30px;
  text-align: center;
  float: left;
  margin-left: 5px;
  color: #fff;
}
</style>
