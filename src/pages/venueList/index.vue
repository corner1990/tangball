<template>
  <div class="main-wrap">
    <debug_item path="pageName" v-model="pageName" text="页面名称" />
    <!-- <debug_item path="venueList" v-model="venueList" text="场馆列表" /> -->
    <van-search :value="value" placeholder="请输入搜索关键词" use-action-slot bind:search="onSearch" />
     <venueListComponent
        :area="item.area"
        :title="item.name"
        :phone="item.phoneNumber"
        :address="item.address"
        :album="item.album"
        v-for="(item,i) in venueList"
        :key="i"
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

export default {
  components: {
    mytabbar,
    debug_item,
    venueListComponent
  },
  data() {
    return {
      pageName: "场馆列表",
      venueList: [],
      value: "" // 搜索value
    };
  },

  methods: {
    /**
     * @desc 搜索回调
     */
    onSearch() {}
  },
  async created() {
    let { data } = await util.post({
      url: global.PUB.domain + "/crossList?page=tangball_venue",
      param: {}
    });
    this.venueList = data.list;
  }
};
</script>

<style scoped>
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
