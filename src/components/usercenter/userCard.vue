<template>
  <div class="user-list">
    用户信息调整
  </div>
</template>

<script>
console.log('usecard')
export default {
  props: ['text']
}
</script>

<style>
.user-list {
  position: relative;
  z-index: 5;
  margin: -40px 20px 0;
  background: #fff;
  min-height: 400px;
  border-radius: 10px;
  border: 1px solid #f00;
}
</style>
