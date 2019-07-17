<template>
  <div class="main-wrap">
    <debug_item path="pageName" v-model="pageName" text="页面名称"/>
    <mytabbar></mytabbar>
    <!-- 引进筛选城市组件 -->
    <city_select @select="print"></city_select>
    <!-- 测试筛选城市组件 -->
    <div v-if="showCity">
      <div>{{selectCity}}</div>
    </div>
  </div>
  
</template>
<script>
/* eslint-disable */
import mytabbar from '@/components/mytabbar/mytabbar'
import debug_item from '@/components/common/debug_item/debug_item'
import city_select from '../../components/city_select'
export default {
  components: {
    mytabbar, debug_item,city_select
  },
  data() {
    return {
      pageName: "场馆列表",
      selectCity:"",
      showCity:false
    }
  },

  methods: {
    // 测试筛选城市组件方法
    print(city){
      this.showCity = true
      console.log(city);
      this.selectCity = city
    }
  },
  created() {
  }
}
</script>

<style scoped>
</style>
