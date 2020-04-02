<template>
  <div class="field-box">
    <div class="field-label">{{label}}</div>
    <div class="field-item">
      <input type="text" class="field-input" v-model="valueNeed">
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import mix from "@/utils/mix";
export default {
  mixins: [mix.form_item], //混入
  props: ["label"],
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    change() {}
  },
  created() {
  }
};
</script>
<style scoped>
.field-box {
  padding: 5px 10px;
  border-bottom: 1px #ddd solid;
  font-size: 16px;
  display: flex;
}
.field-label {
  text-align: left;
  /* width: 60px; */
  padding: 3px 0 0 0;
}
.field-item {
  flex: 1;
}
.field-input {
  padding: 0 10px 0 10px;
  display: inline-block;
  /* border: 1px #ddd solid; */
  height: 28px;
  line-height: 28px;
  border-radius: 5px;
  width: 100%;
}
</style>
