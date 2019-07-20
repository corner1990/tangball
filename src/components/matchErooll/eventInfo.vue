<template>
  <van-cell-group class="personInfo">
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
      <p class="title">性别</p>
      <van-radio-group :value="radio" class="flex">
        <van-radio name="1">男</van-radio>
        &emsp;
        <van-radio name="2">女</van-radio>
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
    <div class="flex line">
      <title class="title">球龄</title>
      <div>球龄</div>
    </div>
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
  }
}
</script>

<style>
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
</style>


