<template>
  <van-cell-group>
    <van-field
      :value="info.name"
      type="text"
      label="参赛人姓名"
      placeholder="请输入参赛人姓名"
      required
    />
    <van-field
      :value="info.phone"
      label="联系电话"
      placeholder="请输入手机号"
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
      :value="info.age"
      label="年龄"
      placeholder="请输入年龄"
    />
    <van-field
      :value="info.job"
      label="职业"
      placeholder="请输入职业"
    />
    <van-row>
      <van-col span="8" class="title">球龄</van-col>
      <van-col span="16"></van-col>
    </van-row>
  </van-cell-group>
</template>

<script>
export default {
  data () {
    return {
      info: {
        name: '高富帅',
        phone: '15176522133',
        age: 12,
        job: ''
      },
      radio: '1'
    }
  },
  methods: {
    onRadioChange (radio) {
      this.radio = radio
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
    height: 44px;
    margin-left: 15px;
    border-bottom: 1px solid #eee;
  }
  .line .title{
    width: 78px;
    margin-right: 10px;
  }
  .radio-wrap{
    width: 2.667rem;
    justify-content: space-around;
  }
  .radio-wrap .radio-item{
    width: .667rem;
  }
</style>


