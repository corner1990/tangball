<template>
  <div class="main-wrap">
    <!-- <debug_item path="pageName" v-model="pageName" text="页面名称" /> -->
    <!-- <debug_item path="venueList" v-model="venueList" text="场馆列表" /> -->

    <!-- 搜索框 -->
    <div class="searchBox">
      <input type="text" v-model="keywords" placeholder="请输入搜索关键词" />
      <div slot="action" @click="onSearch">
        <van-icon name="search" size="24px" />
      </div>
    </div>

    <!-- 引进筛选城市组件 -->
    <city_select @select="search" :selectIndex="selectIndex"></city_select>

    <!-- 赛事场馆列表组件 -->
    <venueListComponent
      :area="item.area"
      :title="item.name"
      :phone="item.phoneNumber"
      :address="item.address"
      :album="item.album"
      :P1="item.P1"
      v-for="(item,i) in venueList"
      :key="i"
      :itemshow="item.show"
    ></venueListComponent>
    <mytabbar></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import mytabbar from "@/components/mytabbar/mytabbar";
import debug_item from "@/components/common/debug_item/debug_item";
import util from "@/utils/util";
import venueListComponent from "./venueListComponent";
import city_select from "@/components/city_select";

export default {
  components: {
    mytabbar,
    debug_item,
    venueListComponent,
    city_select
  },
  data() {
    return {
      // 地区组件聚焦的index
      selectIndex: -1,
      pageName: "场馆列表",
      venueList: [],
      keywords: null, //搜索关键词
      show: true //是否显示
    };
  },
  methods: {
    onSearch(keywords) {
      this.venueList.forEach(item => {
        let index = item.name.indexOf(this.keywords); //关键字出现的位置索引值
        if (index > -1) {
          //如果关键字匹配
          item.show = true;
        } else {
          //如果关键字不匹配
          item.show = false;
        }
      });
    },
    async search(areaId) {
      if (areaId) {
        this.selectIndex = 0;
      } else {
        this.selectIndex = -1;
      }

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
            pageSize: "9999",
            findJson: {}
          }
        }
      });
      data.list.forEach(item => {
        item.show = true;
      });
      this.venueList = data.list;
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
  padding-bottom: 60px;
  position: relative;
}
.searchBox {
  width: 100%;
  height: 30px;
  padding: 10px;
  background-color: #f8b432;
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
  border-radius: 10px;
  text-align: center;
  float: left;
  margin-left: 5px;
  color: #fff;
}
</style>
