<template>
  <div class="user-list">
    <itemCard v-for="(item, key) in list" :key="key" :data="item" />
  </div>
</template>

<script>
import itemCard from './cardItem'
export default {
  data () {
    return {
      list: [
        {
          text: '我的赛事',
          path: '/pages/usercenter/my-event',
          icon: 'gem-o'
        },
        {
          text: '我的订单',
          path: '',
          icon: 'balance-list-o'
        },
        {
          text: '我的财富',
          path: '',
          icon: 'balance-o'
        },
        {
          text: '收货地址',
          path: '',
          icon: 'logistics'
        },
        {
          text: '我的客服',
          path: '',
          icon: 'chat-o'
        },
        {
          text: '商务合作',
          path: '',
          icon: 'exchange'
        }
      ]
    }
  },
  components: {
    itemCard
  }
}
</script>

<style>
.user-list {
  position: relative;
  z-index: 5;
  margin: -40px 20px 0;
  background: #fff;
  padding-top: 20px;
  border-radius: 20px;
  box-shadow: 0 3px 6px #ddd;
}
</style>
