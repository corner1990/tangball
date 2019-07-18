<template>
  <div class="main-wrap">
    <debug_item path="pageName" v-model="pageName" text="页面名称" />
    <rankingListcomponent></rankingListcomponent>
    <mytabbar></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import mytabbar from "@/components/mytabbar/mytabbar";
import debug_item from "@/components/common/debug_item/debug_item";
import rankingListcomponent from "./rankingListComponent";
import util from "@/utils/util";

export default {
  components: {
    mytabbar,
    debug_item,
    rankingListcomponent
  },
  data() {
    return {
      pageName: "唐球达人"
    };
  }
};
</script>

<style scoped>
</style>
