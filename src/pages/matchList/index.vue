<template>
  <div class="main-wrap">
    <van-search
    :value="value"
      placeholder="请输入搜索关键词"
      use-action-slot
      bind:search="onSearch"
    />
    <div class="card">
      <van-tabs :active="active" bind:change="onChange">
        <van-tab title="近期">
          <van-card
            tag="111"
            desc="描述信息"
            title="商品标题"
            thumb="111"
          />
        </van-tab>
        <van-tab title="全国">
          <van-card
            tag="222"
            desc="描述信息"
            title="商品标题"
            thumb="111"
          />
        </van-tab>
        <van-tab title="加盟商">
          <van-card
            tag="333"
            desc="描述信息"
            title="商品标题"
            thumb="111"
          />
        </van-tab>
        <van-tab title="全部">
          <van-card
            tag="444"
            desc="描述信息"
            title="商品标题"
            thumb="111"
          />
        </van-tab>
      </van-tabs>
    </div>
 
    <van-tabbar :active="active">
      <van-tabbar-item :icon="item.iconPath" v-for="(item, key) in list" :key="key" @click="tabChange(item.pagePath)">{{item.text}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import card from '@/components/card'
// import { get } from '@/utils/request'
export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      },
      list: [
        {
          'text': '首页',
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
      active: 0,
      value: '' // 搜索value
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
    onShow () {
      this.show = true
      console.log('mpvue.data', this)
      // mpvue.setData({show: true})
    },
    /**
     * @desc 搜索回调
     */
    onSearch () {},
    /**
     * @desc 赛事切换回调
     */
    tabChange (url) {
      console.log(url)
      wx.switchTab({
        url
      })
    }
  },
  created () {
    console.log('12312')
    // let app = getApp()
    // get('http://localhost:4001/api/users').then(res => {
    //   console.log('res', res)
    // })
  }
}
</script>

<style scoped>
  .main-wrap{
    padding-bottom: 60px;
  }
  .title{
    margin: 10px 20px;
    color: #333;
    border-bottom: 1px solid #000;
  }
  .card{
    margin: 0 10px;
  }
</style>
