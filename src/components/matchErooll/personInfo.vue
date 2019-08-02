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
        <title class="title">性别</title>
        <van-radio-group :value="radio">
          <div class="flex radio-wrap">
            <van-cell
                title="男"
                clickable
                value-class="radio-item"
                data-name="1"
                @click="onRadioChange('1')"
              >
                <van-radio name="1" />
              </van-cell>
              <van-cell
                title="女"
                clickable
                data-name="2"
                @click="onRadioChange('2')"
                value-class="radio-item"
              >
                <van-radio name="2" />
              </van-cell>
          </div>  
        </van-radio-group>
      </div>
      <van-field
        :value="info.phone"
        label="联系电话"
        placeholder="请输入手机号"
      />
      <div class="flex line">
        <p class="title">球龄</p>
        <div @click="selectAge">
          <input type="text" class="tangBallInput" v-model="selectVal" placeholder="请输入球龄">
        </div>
      </div>
      <van-field
        :value="info.job"
        label="职业"
        placeholder="请输入职业"
      />
    </van-cell-group>
    <h3 class="info-title event-info">赛事及场馆信息</h3>
    <div class="flex line">
      <p class="title">赛事名称</p>
      <div>高富帅才有资格</div>
    </div>
    <div class="flex line">
      <p class="title">赛事时间</p>
      <div>2019-05-15</div>
    </div>
    <div class="flex line">
      <p class="title" style="width: 90px;">赛事地点</p>
      <div>广东神，深圳市，福田区，深航中路1238900号</div>
    </div>
    <div class="flex line">
      <title class="title">报名费</title>
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
      info: {
        name: '高富帅',
        phone: '15276513522',
        age: 12,
        job: ''
      },
      radio: '1',
      showSelectBallAge: false,
      selectVal: '',
      columns: ['1-3年', '3-5年', '5年以上']
    }
  },
  async mounted () {
    // 请求赛事列表接口函数
    let { data } = await util.post({
      url: `${global.PUB.domain}/crossList?page=tangball_match`,
      param: { findJson: { P1: this.P1 } }
    })
    console.log('data', data)
  },
  methods: {
    onRadioChange (radio) {
      this.radio = radio
    },
    selectAge () {
      this.showSelectBallAge = true
    },
    hideSelectBallAge () {
      this.showSelectBallAge = false
    },
    onSelectChange (e) {
      let { value, index } = e.target
      this.selectVal = value
      this.selectIndex = index
      this.hideSelectBallAge()
    },
    async getVerfity () {
      console.log('获取验证码')
      let { phone: mobile } = this.info
      // 请求赛事列表接口函数
      let { data } = await util.post({
        url: `${global.PUB.domain}/tangball/sendMobileVCode`,
        param: {mobile}
      })
      console.log('data', data)
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
  .line .title{
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


