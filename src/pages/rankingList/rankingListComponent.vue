<template>
  <div>
    <div class="ranking-content">
      <div>
        <a>{{ranking}}</a>
      </div>
      <div v-for="(item,index) in value" :key="index">
        <a>{{cf[item]}}</a>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  components: {},
  props: ["cf", "value","ranking"],
  data() {
    return {
      cfList: {
        //默认排序参数
        sortJsonDefault: {
          "item.entries": 1
        }
      }
    };
  },
  components: {},

};
</script>

<style scoped>
.ranking-content {
  margin: 0 auto;
  width: 100%;
  text-align: center;
}
.ranking-content div {
  width: 100px;
  display: inline-block;
  text-align: center;
  margin: 5px;
}
</style>
