<template>
  <section>
    <h3 class="info-title">个人信息</h3>
    <van-cell-group>
      <van-field
        :value="info.name"
        type="text"
        label="姓名"
        placeholder="请输入姓名"
        required
      />
      <div class="flex line">
        <title class="sub-title">性别</title>
        <radio-group class="radio-group" @change="onRadioChange" >
          <label class="radio">
            <radio value="1" :checked="info.sex=== '1'"/>男
          </label>
          <label class="radio">
            <radio value="2" :checked="info.sex=== '2'"/>女
          </label>
        </radio-group>
      </div>
      <van-field
        :value="info.phone"
        label="联系电话"
        placeholder="请输入手机号"
      />
      <div class="flex line">
        <p class="sub-title">球龄</p>
        <div @click="selectAge">
          <input type="text" class="tangBallInput" v-model="info.ballAge" placeholder="请输入球龄">
        </div>
      </div>
      <van-field
        :value="info.career"
        label="职业"
        placeholder="请输入职业"
      />
    </van-cell-group>
    <h3 class="info-title event-info">赛事及场馆信息</h3>
    <div class="flex line">
      <p class="sub-title">赛事名称</p>
      <div>高富帅才有资格</div>
    </div>
    <div class="flex line">
      <p class="sub-title">赛事时间</p>
      <div>2019-05-15</div>
    </div>
    <div class="flex line">
      <p class="sub-title" style="width: 90px;">赛事地点</p>
      <div>广东神，深圳市，福田区，深航中路1238900号</div>
    </div>
    <div class="flex line">
      <title class="sub-title">报名费</title>
      <div><span class="price">1999 (元)</span></div>
    </div>
    <van-cell-group>
      <van-field
        :value="sms"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
        required
        @change="verfiyChange"
        use-button-slot
      >
        <van-button slot="button" size="small" type="info" @click="getVerfity">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <!-- 选择球龄 -->
    <van-popup
     :show="showSelectBallAge"
     @close="hideSelectBallAge"
     position="bottom"
    >
      <van-picker
        show-toolbar
        title="选择球龄"
        :columns="columns"
        @cancel="hideSelectBallAge"
        @confirm="onSelectChange"
      />
    </van-popup>
  </section>
</template>

<script>
import util from '@/utils/util'
export default {
  data () {
    return {
      radio: '1',
      showSelectBallAge: false,
      selectVal: '',
      columns: ['1-3年', '3-5年', '5年以上'],
      sex: 1,
      sexList: [
        {name: '男', value: '1'},
        {name: '女', value: '2'}
      ],
      timer: 0,
      num: 0
    }
  },
  mounted () {
    // 请求赛事列表接口函数
  },
  watch: {
    // info: {
    //   handler (info, oldName) {
    //   },
    //   immediate: true,
    //   deep: true
    // }
  },
  props: ['info'],
  methods: {
    onRadioChange (radio) {
      this.info.sex = radio.target.value
    },
    selectAge () {
      this.showSelectBallAge = true
    },
    hideSelectBallAge () {
      this.showSelectBallAge = false
    },
    onSelectChange (e) {
      let { value, index } = e.target
      this.selectIndex = index
      this.info.ballAge = value
      this.hideSelectBallAge()
    },
    async getVerfity () {
      let { phone: mobile } = this.info
      // 请求赛事列表接口函数
      let { data } = await util.post({
        url: `${global.PUB.domain}/tangball/sendMobileVCode`,
        param: { mobile }
      })
      console.log('data', data)
    },
    verfiyChange (e) {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.$emit('changeInfo', {
          verfiy: e.mp.detail
        })
      }, 500)
    }
  }
}
</script>
<style scoped>
  .flex{
    display: flex;
    justify-content: space-between;
  }
  .line{
    justify-content: flex-start;
    align-items: center;
    min-height: 44px;
    line-height: 26px;
    margin-left: 15px;
    border-bottom: 1px solid #eee;
    font-size: .373rem;
    text-indent: .053rem;
  }
  .line .sub-title{
    width: 80px;
    margin-right: 10px;
  }
  .radio-wrap{
    width: 2.667rem;
    justify-content: space-around;
  }
  .radio-wrap .radio-item{
    width: .667rem;
  }
  .info-title{
    font-size: .38rem;
    line-height: .6rem;
    font-weight: 700;
    color: #333;
  }
  .tangBallInput{
    font-size: .373rem;
  }

  .event-info{
    margin-top: .8rem;
  }
</style>


