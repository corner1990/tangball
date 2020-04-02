<template>
  <div class="card" @click="jumpTo(data.path)">
    <van-icon :name="data.icon" color="#009B4C" size="30px" :info="data.info"/>
    <p class="card-title">{{data.text}}</p>
  </div>
</template>
<script>
export default {
  props: ['data'],
  mounted () {
  },
  methods: {
    jumpTo (url) {
      wx.navigateTo({ url })
    }
  }
}
</script>
<style>
.card {
  width: 20%;
  height: 70px;
  margin: 0 12px 20px;
  text-align: center;
  display: inline-block;
  padding: 10px;
  box-shadow: 0 1px 2px #ddd;
  border-radius: 20px;
}
.card-title{
  font-size: 14px;
}
</style>
