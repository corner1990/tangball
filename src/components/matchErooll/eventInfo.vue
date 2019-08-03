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
        <p>男</p>
      </div>
      <div class="flex line">
        <title class="sub-title">联系电话</title>
        <p>电话号码</p>
      </div>
      <div class="flex line">
        <title class="sub-title">球龄</title>
        <p>1-3年</p>
      </div>
      <div class="flex line">
        <title class="sub-title">职业</title>
        <p>白领</p>
      </div>
      <div class="flex line">
        <title class="sub-title">性别</title>
        <p>男</p>
      </div>
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
  </section>
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
    width: 78px;
    margin-right: 10px;
  }
  .price{
    margin-right: .133rem;
    color: #f00;
    font-weight: 700;
  }
</style>


