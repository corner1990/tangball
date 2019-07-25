<template>
  <div class="main-wrap">
    <debug_item path="pageName" v-model="pageName" text="页面名称"/>
    <mytabbar></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import mytabbar from '@/components/mytabbar/mytabbar'
import debug_item from '@/components/common/debug_item/debug_item'

export default {
  components: {
    mytabbar, debug_item
  },
  data() {
    return {
      pageName: "我的资料"

    }
  },

  methods: {

  },
  created() {
  }
}
</script>

<style scoped>
</style>
