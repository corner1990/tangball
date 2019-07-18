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
    <van-row>
      <van-col span="8" class="title">性别</van-col>
      <van-col span="10">
        <van-radio-group :value="radio">
            <van-cell
              title="男"
              value-class="value-class"
              clickable
              data-name="1"
            >
              <van-radio name="1" />
            </van-cell>
            <van-cell
              title="nv"
              value-class="value-class"
              clickable
              data-name="2"
            >
              <van-radio name="2" />
            </van-cell>
        </van-radio-group>
      </van-col>
    </van-row>
    <van-field
      :value="info.age"
      label="年龄"
      placeholder="请输入年龄"
      error
    />
    <van-field
      :value="info.job"
      label="职业"
      placeholder="请输入职业"
      error
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
  }
}
</script>

