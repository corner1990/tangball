<template>
  <div class="demo-box">
    demo
 
  </div>
</template>
<script>
/* eslint-disable */
import lodash from "lodash";
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
      name: "demo名称", //手机号码
    };
  },

  methods: {
   
  },
  async created() {
 
  },
  async mounted() {}
};
</script>

<style scoped>
</style>
