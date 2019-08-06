<template>
  <div class="main-wrap">
    <p class="H50 OF2 CL1"></p>
    <authorize></authorize>
  </div>
</template>
<script>
/* eslint-disable */
import card from "@/components/card";
import mytabbar from "@/components/mytabbar/mytabbar";
import debug_item from "@/components/common/debug_item/debug_item";
import authorize from "@/components/bussiness/authorize"; 
import util from "@/utils/util";
export default {
  components: {
    card,
    mytabbar,
    debug_item,
    util,
    authorize
  },
  data() {
    return {
    };
  },
  methods: {
  },
  async created() {},
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
