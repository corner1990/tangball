<template>
  <div class="main-wrap">
    <div class="macthManual-title">{{matchDoc.matchName}}赛事结果</div>
    <div class="macthManual-main-box" v-if="matchDoc.matchResult">
      <div v-html="matchDoc.matchResult" class="macthManual-main"></div>
    </div>
    <div v-else class="no-macthManual">
        赛事结果未录入
    </div>
  </div>
</template>
<script>
/* eslint-disable */

export default {

  data() {
    return {
      matchDoc:{}
    }
  },
  mounted(){
    this.matchDoc = JSON.parse(wx.getStorageSync("matchInfo"));
  }

};
</script>
<style scoped>
  .macthManual-title{
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    font-weight: 700
  }
  .macthManual-main-box{
    margin: 0 20px;
  }
  .no-macthManual{
    margin-left: 20px;
    font-size: 18px;
  }

</style>
<style>

</style>
