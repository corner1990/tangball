<template>
  <div>赛事活动</div>
</template>

<script>
export default {
  data: {
    active: 2
  },
  methotds: {},

  onShow () {
    // `this` 指向 vm 实例
    console.log('234')
    this.$root.$mp.page.getTabBar().setData({
      active: 2 // 对应页面的index
    })
  }
}
</script>
