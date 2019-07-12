<template>
  <div class="main-wrap">
    <van-search :value="value" placeholder="请输入搜索关键词" use-action-slot bind:search="onSearch"/>
    <div>
      <van-tabs :active="active" bind:change="onChange">
        <van-tab title="近期">
          <van-card
            :tag="item.tag"
            :desc="item.desc"
            :title="item.title"
            :thumb="item.thumb"
            :price="'报名费'+item.price"
            origin-price="1000"
            :thumb-link="'/pages/matchDetail/main?id='+item.id"
            v-for="(item,i) in matchlist"
            :key="i"
          >
            <view slot="footer">
              <van-button size="mini" class="MR10">去报名</van-button>
              <van-button size="mini">查看详情</van-button>
            </view>
          </van-card>
        </van-tab>
        <van-tab title="全国">全国</van-tab>
        <van-tab title="加盟商">加盟商</van-tab>
        <van-tab title="全部">全部</van-tab>
      </van-tabs>
    </div>

    <mytabbar></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import { get } from '@/utils/request'
import card from '@/components/card'
import mytabbar from '@/components/mytabbar/mytabbar'
import Dialog from '../../../static/vant/dialog/dialog';
export default {
  components: {
    card, mytabbar, Dialog
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
          'id': 1,
          'title': '首届唐球锦标赛1',
          'desc': '这是首届唐球锦标赛',
          'tag': '可报名',
          'thumb': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=358607504,2119176225&fm=26&gp=0.jpg',
          'price': 500,
          'thumbLink': "pages/matchDetail/main",
        },
        {
          'id': 2,
          'title': '首届唐球锦标赛2',
          'desc': '这是首届唐球锦标赛',
          'tag': '可报名',
          'thumb': 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3468639195,1703499497&fm=26&gp=0.jpg',

        },
      ],


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

  },
  created() {

    console.log("created标题标题标题标题");

    get('http://120.76.160.41:3000/crossList?page=tangball_match').then(res => {
      console.log('res', res)
      let { data } = res;
      this.matchlist = data.list;


    })


    // alert("created");//
    Dialog.alert({
      title: '标题',
      message: '弹窗内容'
    }).then(() => {
      // on close
    });

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
