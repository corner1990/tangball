<template>
  <div>
    <div class="" >自定义导航11111</div>
     <van-tabbar :active="active1111">

      <van-tabbar-item
        :icon="item.iconPath"
        v-for="(item, key) in list"
        :key="key"
        @click="tabChange(item.pagePath)"
      >{{item.text}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: ['text'],
  data:function(){
    return {
      list: [
        {
          'text': '首页1',
          'pagePath': '../index/main',
          'iconPath': 'home-o'
        },
        {
          'text': '唐球馆',
          'pagePath': '../tanghome/main',
          'iconPath': 'fire-o'
        },
        {
          'text': '活动',
          'pagePath': '../event/main',
          'iconPath': 'medel-o'
        },
        {
          'text': '个人中心',
          'pagePath': '../usercenter/main',
          'iconPath': 'friends-o'
        }
      ],
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      active1111: 0,
      value: '' // 搜索value
    }
  }
}
</script>

<style>

</style>
