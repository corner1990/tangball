<template>
  <div class="main-wrap">
      <web-view :src="url"></web-view>
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
      url: "https://mp.weixin.qq.com/s?__biz=MjM5OTU0MzkwNA==&mid=2648840002&idx=1&sn=408f8b7cd8e79fd7833ca602749b4c54&chksm=bf2f624d8858eb5bb8ecdf86f0801c6f79728a60ed2ef7328ba2f74454979d5075767e68a482&mpshare=1&scene=1&srcid=&sharer_sharetime=1563965861424&sharer_shareid=99cae6b5001af0c60a90266f7fc09247&key=a1ae7233401db86daaae614069516d8a50172d715cab918841951c0851aa447c4cb13e6daa1666179989416a446cda0b1b91668b4bd3b1c0e7e77e77a901b07caca9c2b05e3afb2bc0b4354e8b48fbbc&ascene=1&uin=NjU5MzgxMjQw&devicetype=Windows+10&version=62060833&lang=zh_CN&pass_ticket=T72dYdOdKZmtyzs0WspoZIa5tDM8HYQWZnKO3sMoCFfiqp28qVrFntA6HBQUKdGu",
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
