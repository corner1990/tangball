<template>
  <div class="demo-box">
    <p class="H10 OF2 CL1"></p>
    <input type="text" v-model="mobile" class="n-input FL MR10" />
    <van-button type="primary" size="small" @click="getMsgCode" class="MR10">获取短信验证码</van-button>
    <debug_item v-model="mobile" text="手机号" />
    <debug_item v-model="result" text="请求结果" />
  
 
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
      mobile: 13691916429, //手机号码
      result:null,
    };
  },

  methods: {
    async getMsgCode(event) {
      console.log("getMsgCode");

      let { data } = await util.post({
        url: global.PUB.domain + `/tangball/sendMobileMessage`,
        param: {
          mobile: this.mobile
        }
      });
      this.result=data;
    }
  },
  async created() {
    console.log("created2");
  },
  async mounted() {}
};
</script>

<style scoped>
</style>
