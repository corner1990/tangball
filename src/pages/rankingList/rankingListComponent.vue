<template>
  <div>
    <!-- 子组件：用于展示排名信息-->
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
  props: ["cf", "value", "ranking"],
  data() {
    return {};
  },
  components: {}
};
</script>
<style scoped>
.ranking-content {
  display: flex;
  margin: 5px 10px;
  justify-content: space-evenly;
  text-align: center;
}
.ranking-content div {
  width: 100px;
  text-align: center;
  margin: 5px;
}
</style>
