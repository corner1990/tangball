<template>
  <div class="main-wrap">
    <div class="" >123</div>
      <web-view :src="url"></web-view>
    <div class="" >456</div>
    <mytabbar></mytabbar>
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
    util,
    
  },
  data() {
    return {
      url: "https://mp.weixin.qq.com/",
      myMsgList: null,
     
    };
  },

  methods: {
    
    
  },
  created() {},
  async mounted() {
    
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
