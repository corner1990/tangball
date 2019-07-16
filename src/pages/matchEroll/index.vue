<template>
  <div class="main-wrap">
   
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
      pageName: "比赛报名操作"

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
