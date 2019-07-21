<template>
  <van-cell-group class="personInfo">
    <div class="flex line">
      <title class="title">姓名</title>
      <div>高富帅</div>
    </div>
    <div class="flex line">
      <title class="title">联系电话</title>
      <div>15286458326</div>
    </div>
    <div class="flex line">
      <p class="title">赛事名称</p>
      <div>高富帅才有资格</div>
    </div>
    <div class="flex line">
      <p class="title">赛事时间</p>
      <div>2019-05-15</div>
    </div>
    <div class="flex line">
      <p class="title">赛事地点</p>
      <div>广东神，深圳市，福田区，深航中路1238900号</div>
    </div>
    <div class="flex line">
      <title class="title">报名费</title>
      <div><span class="price">1999 (元)</span></div>
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
  .price{
    margin-right: .133rem;
    color: #f00;
    font-weight: 700;
  }
</style>


