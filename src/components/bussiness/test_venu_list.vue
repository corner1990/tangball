<template>
  <div class="demo-box">
     <van-button type="primary" size="small" @click="ajaxVenueList" class="MR10">获取球场列表</van-button>
    <van-button type="primary" size="small" @click="ajaxVenueList2">获取球场列表2</van-button>
    <div class="data-group" v-for="(item,i) in venuList" :key="i" v>
      {{item.P1}}-{{item.name}}-
      <span class="C_f30" v-if="item.cityDoc">{{item.cityDoc.P2}}</span>
      <span class="C_f30" v-else>{{item.area}}</span>
      <span class="C_f30" v-if="item.cityDoc2">cityDoc2</span>
      {{item.area}}
    </div>
    <debug_item path="venuList" v-model="venuList" text="球场列表" />
  </div>
</template>
<script>
/* eslint-disable */
import mytabbar from "@/components/mytabbar/mytabbar";
import debug_item from "@/components/common/debug_item/debug_item";
import util from "@/utils/util";
export default {
  components: {
    mytabbar,
    debug_item,
    util
  },
  data() {
    return {
      venuList: null, //球场列表
      name: "demo名称", //手机号码
    };
  },
  methods: {
     //函数：{ajax获取球场列表，并且根据每条数据的城市id（area）拿到地区名称}
    async ajaxVenueList() {
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
      this.venuList = list;
    },
    //函数：{ajax获取球场列表，并且根据每条数据的城市id（area）拿到地区名称}
    async ajaxVenueList2() {
      let list = await util.ajaxGetList({
        page: "tangball_venue",
        pageSize: 5
      });
      this.venuList = list;
      this.venuList = await util.ajaxPopulate({
        listData: this.venuList,
        populateColumn: "cityDoc",
        idColumn: "area",
        idKeyColumn: "P7",
        page: "dmagic_area"
      });
    }
  },
  async created() {
  },
  async mounted() {}
};
</script>
<style scoped>
</style>
