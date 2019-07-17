<template>
  <div class="main-wrap">
    <van-steps
        :steps="steps"
        :active="active"
      />
    <!-- <BingPhone v-show="0" /> -->
    <PersonInfo />
    <van-row>
      <van-col span="11">
        <van-button type="info" plain :disabled="(active > 0)" block @click="prevStep">上一步</van-button>
      </van-col>
      <van-col span="11" offset="2">
        <van-button type="info" block @click="nextStep">{{btnText}}</van-button>
      </van-col>
    </van-row>
    <div class="event-info">
      <h3>赛事名称</h3>
      <p>比赛时间：2019-09-01</p>
      <p>比赛地点： 22223423424</p>
    </div>
    <div class="form-wrap">      
      <form>
        <van-row class="button-wrap">
          <van-col span="24">
            <van-button type="info" block>立刻报名</van-button>
          </van-col>
        </van-row>
      </form>
    </div>
    <mytabbar></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import mytabbar from '@/components/mytabbar/mytabbar'
import debug_item from '@/components/common/debug_item/debug_item'
import BingPhone from '@/components/matchErooll/bindPhine'
import PersonInfo from '@/components/matchErooll/personInfo'

export default {
  components: {
    mytabbar,
    debug_item,
    BingPhone,
    PersonInfo
  },
  data () {
    return {
      pageName: "比赛报名",
      btnText: '下一步',
      steps: [
        {
          text: '绑定手机'
        },
        {
          text: '基本信息'
        },
        {
          text: '确认信息'
        },
        {
          text: '完成缴费',
        }
      ],
      active: 0
    }
  },

  methods: {
    nextStep () {
      if (this.active >= 3) {
        return false;
      }
      this.active = this.active + 1
    },
    prevStep () {
      if (this.active <= 0) {
        return false;
      }
      this.active = this.active - 1
    }
  },
  created() {
  }
}
</script>

<style scoped>
  .main-wrap{
    margin: 0 10px;
  }
  .event-info{
    line-height: 30px;
    font-size: 16px;
  }
  .form-wrap{
    margin-top: 20px;
    line-height: 36px;
    font-size: 16px;
  }
  .form-wrap input{
    height: 36px;
  }
  .form-wrap .button{
    width: 100%;
  }
</style>
