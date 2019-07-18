<template>
  <div class="main-wrap">
    <debug_item path="matchlist" v-model="matchlist" text="赛事列表"/>
    <div class="FS24 TAC LH36">XXX首届唐球赛12345</div>
    <van-steps :steps="steps" :active="activeStep" active-color="#f44"/>
    <van-cell-group title="赛事信息">
      <van-cell title="赛事时间" title-width="100px" value="2019.07.30-2019.08.09"/>
      <van-cell title="距报名截止时间" value="5天6小时26分"/>
      <van-cell title="举办地点" value="深圳南山XXXXX"/>
      <van-cell title="报名费" value="200元"/>
      <van-cell title="已报名人数" value="567人"/>
    </van-cell-group>
    <van-cell-group title="分组2">
      <van-cell title="单元格" value="内容"/>
    </van-cell-group>

    <van-button size="large" square type="primary">立即报名</van-button>

    <mytabbar></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import card from '@/components/card'
import mytabbar from '@/components/mytabbar/mytabbar'
import debug_item from '@/components/common/debug_item/debug_item'

export default {
  components: {
    card, mytabbar,debug_item
  },
  data() {
    return {
      activeStep: 0,
      steps: [
        {
          text: '步骤一',
          desc: '描述信息'
        },
        {
          text: '步骤二',
          desc: '描述信息'
        },
        {
          text: '步骤三',
          desc: '描述信息'
        },
        {
          text: '步骤四',
          desc: '描述信息'
        }
      ],
      matchlist: [
        {
          'title': '首届唐球锦标赛1',
          'desc': '这是首届唐球锦标赛',
          'tag': '可报名',
          'thumb': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=358607504,2119176225&fm=26&gp=0.jpg',
          'price': 500,
        },
        {
          'title': '首届唐球锦标赛2',
          'desc': '这是首届唐球锦标赛',
          'tag': '可报名',
          'thumb': 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3468639195,1703499497&fm=26&gp=0.jpg',
          'aaaa': '1111',
        },
      ],

      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000,

      value: '' // 搜索value
    }
  },



  methods: {
    onShow() {
      this.show = true
      console.log('mpvue.data', this)
      // mpvue.setData({show: true})
    },
    /**
     * @desc 搜索回调
     */
    onSearch() { },
    /**
     * @desc 赛事切换回调
     */
    tabChange(url) {
      console.log(url)
      wx.switchTab({
        url
      })
    }
  },
  created() {
  }
}
</script>

<style scoped>
.main-wrap {
  padding-bottom: 60px;
}
.title {
  margin: 10px 20px;
  color: #333;
  border-bottom: 1px solid #000;
}
.card {
  margin: 0 10px;
}
</style>
