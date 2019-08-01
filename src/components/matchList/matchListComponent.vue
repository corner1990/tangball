<template>
  <div>
    <div class="match-box">
      <div class="match-img-box">
        <img :src="matchListImg" />
      </div>
      <div class="match-img-box1">
        <h1>{{cf.matchName}}</h1>
        <div>赛事时间：{{cf.matchTime}}</div>
        <div>报名费用：{{cf.registrationFee}}</div>
      </div>
      <div name="footer" class="rpg11">
        <navigator :url="applyUrl">
          <van-button plain size="small" type="danger" v-if="applyIngStatus">火热报名中</van-button>
        </navigator>
        <van-button disabled size="small" v-if="applyEndStatus">报名已结束</van-button>
        <div style="height:10px;"></div>
        <navigator :url="matchDetailUrl">
          <van-button plain size="small" type="default">&nbsp;&nbsp;查看详情&nbsp;</van-button>
        </navigator>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      matchListImg: null,
      applyIngStatus: true,
      applyEndStatus: false,
      applyUrl: '/pages/matchEroll/main?id=' + this.cf.P1,
      matchDetailUrl: '/pages/matchDetail/main?id=' + this.cf.P1
    }
  },
  props: ['cf'],
  components: {},
  mounted () {
    /**
     * @name 加载图片的方法
     * @desc 调用lodash库导入图片，默认占位图
     * @param 默认占位图：placeholderImg
     * @param 接收的图片地址：matchListImg
     */

    let placeholderImg =
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564478930764&di=fbf54154d40d042b2a71bee21bd7bef9&imgtype=0&src=http%3A%2F%2Fphoto.16pic.com%2F00%2F20%2F02%2F16pic_2002642_b.jpg'
    this.matchListImg = this.$lodash.get(
      this.cf,
      'album[0].url',
      placeholderImg
    )

    /**
     * @name 根据报名状态判断显示按钮的方法
     * @desc this.cf.publicationStatus  == 1 是可报名状态，否则为false
     * @param 火热报名按钮：applyIngStatus,默认为true
     * @param 报名已结束按钮：applyEndStatus,默认为false
     */

    if (this.cf.publicationStatus === 1) {
      this.applyIngStatus = true
      this.applyEndStatus = false
    } else {
      this.applyIngStatus = false
      this.applyEndStatus = true
    }
  },
  methods: {},
  created () {}
}
</script>

<style >
.main-wrap {
  padding-bottom: 60px;
}
.title {
  margin: 10px 20px;
  color: #333;
  border-bottom: 1px solid #000;
}

.match-box {
  margin: 5px 15px;
  /* margin-bottom: 5px; */
  /* position: relative; */
  border-bottom: #f4b116 1px solid;
  height: 97px;
  display: flex;
}
.rpg11 {
  margin-top: 5px;
  margin-right: 5px;
}
.match-img-box {
  margin: 5px 1px 0 0px;
  height: 85px;
  width: 85px;
  background: #fff;
}
.match-img-box img {
  width: 100%;
  height: 100%;
}
.match-img-box1 {
  padding: 0 0 5px 5px;
  flex: 1;
  margin: 5px 0 0 0px;
  display: flex;
  flex-direction: column;
}
.match-img-box1 h1 {
  font-weight: bold;
  font-size: 16px;
}
.macth-btn {
  line-height: 20px;
  font-size: 11px;
  font-weight: bold;
  width: 60px;
  height: 20px;
  text-align: center;

  border-radius: 5px;
  /* display: inline-block; */
  margin: 15px 5px 0 5px;
}
.btn {
  background-color: #ccc;
  color: #000;
  border: 1px solid #000;
  opacity: 0.5;
}
</style>
