<template>
  <div>
    <h2>个人中心</h2>
    <h3>{{name}}</h3>
  </div>
</template>

<script>
export default {
  data: {
    name: 'leo'
  },
  onShow () {
    this.$root.$mp.page.getTabBar().setData({
      active: 3 // 对应页面的index
    })
  }
}
</script>