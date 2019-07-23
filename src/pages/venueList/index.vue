<template>
  <div class="main-wrap">
    <!-- <debug_item path="pageName" v-model="pageName" text="页面名称" /> -->
    <!-- <debug_item path="venueList" v-model="venueList" text="场馆列表" /> -->
    <van-search :value="value" placeholder="请输入搜索关键词" use-action-slot @search="onSearch">
      <div slot="action" @tap="onSearch">搜索</div>
    </van-search>
    <!-- 引进筛选城市组件 -->
    <city_select @select="search" :selectIndex="selectIndex"></city_select>
    <div style="margin-bottom:50px">
      <venueListComponent
        :area="item.area"
        :title="item.name"
        :phone="item.phoneNumber"
        :address="item.address"
        :album="item.album"
        :P1="item.P1"
        v-for="(item,i) in venueList"
        :key="i"
      ></venueListComponent>
    </div>
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
      value: "", // 搜索value
      keywords: ""
    };
  },
  methods: {
    onSearch(keywords) {
      console.log("keywords", keywords);
    },
    async search(areaId) {
      if (areaId) {
        this.selectIndex = 0;
      }
      console.log("areaId", areaId);
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
      this.venueList = data.list;
    }
  },
  mounted() {
    this.search();
    //  每次刷新页面将地区组件聚焦到所有
    this.selectIndex = -1;
  }
};
</script>

<style scoped>
.list {
  margin-bottom: 20px;
}
.main-venue {
  width: 345px;
  height: 110px;
  margin: 15px;
}
.venue-imgbox {
  width: 135px;
  height: 90px;
  margin: 10px;
}
.venue-textbox {
  width: 165px;
  height: 90px;
  float: left;
  margin-top: 10px;
}
</style>
