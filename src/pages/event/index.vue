<template>
  <div>赛事活动
    <mytabbar ></mytabbar>
  </div>
</template>

<script>
/* eslint-disable */



import mytabbar from '@/components/mytabbar/mytabbar'

 
export default {
  components: {
    mytabbar
  },
  data: {

    
  },
  methods: {
    /**
     * @desc tab切换回调
     */
    tabChange (url) {
      wx.switchTab({
        url
      })
    }
  },

  onShow () {
    // `this` 指向 vm 实例
  }
}
</script>
