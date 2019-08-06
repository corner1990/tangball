<template>
  <section class="bind-phone">
    <van-field
      :value="phone"
      label="手机号"
      placeholder="请输入手机号"
      border="false"
      required
    />
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
        <van-button slot="button" size="small" type="info">发送验证码</van-button>
      </van-field>
    </van-cell-group>
  </section>
</template>
<script>
export default {
  data () {
    return {
      sms: '',
      phone: ''
    }
  }
}
</script>
<style scoped>
.bind-phone{
  margin-top: 20px;
  height: 200px;
}
.bind-phone input{
  vertical-align: center;
}
.row{
  height: 70px;
  border-bottom: 1px solid #dedede;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
