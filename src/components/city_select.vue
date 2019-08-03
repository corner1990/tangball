<template>
  <div class="select-city-box">
    <div style="height:10px"></div>
    <div class="city-box">
      <button :class="selectIndex==-1?'active':''" class="city-button" @click="allCity()">所有</button>
      <!-- 遍历数组得到所有城市按钮，在其点击时添加聚焦样式 -->
      <button
        class="city-button"
        v-show="index>5?showCityButton:true"
        v-for="(item,index) in cityList"
        :key="item.P1"
        :class="selectIndex==index?'active':''"
        @click="checkedCity(index,item.P7)"
      >{{item.P2}}({{item.tangball?item.tangball.countVenue:0}})</button>
      <button class="city-button" @click="showCityButton = false" v-show="showCityButton">
        <van-icon name="arrow-up" />
      </button>
      <button class="city-button" @click="showCityButton = true" v-show="!showCityButton">更多...</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import util from "@/utils/util";
export default {
  props: {
    // 接收父组件传过来的聚焦index,默认聚焦所有
    selectIndex: {
      default: -1
    }
  },
  data() {
    return {
      cityList: [],//城市数据列表
      showCityButton: false//是否显示所有城市index
    };
  },
  methods: {
    /**
    * @name 选中城市触发的方法
    * @desc 选中城市时，将选中的城市显示在第一个，调换数组中城市的位置
    *       然后设置显示部分城市，将选中的城市数据发送到父组件上
    * @param index 选中的城市在数组中的索引 city  选中的城市
    *         showCityButton  是否显示所有城市
    */
    checkedCity(index, city) {
      let str = this.cityList[0];
      this.cityList[0] = this.cityList[index];
      this.cityList[index] = str;
      this.showCityButton = false;
      this.selectIndex = 0;
      this.$emit("select", city);
    },
    /**
    * @name 选中所有城市时触发的方法
    * @desc 选中所有城市时，聚焦所有，并显示所有城市，向父组件发送自定义事件
    * @param 
    */
    allCity() {
      this.selectIndex = -1;
      this.showCityButton = !this.showCityButton;
      this.$emit("select");
    },
    /**
    * @name 获取城市列表的方法
    * @desc 根据P8为0001获取所有市级数据
    * @param 
    */
    async getCityList() {
      let { data } = await util.post({
        url: global.PUB.domain + "/crossList?page=dmagic_area",
        param: {
          findJson: {
            P8: "0001"
          },
          sortJson: {
            "tangball.countVenue": -1
          }
        }
      });
      this.cityList = data.list;
      console.log(this.cityList);
    }
  },
  mounted() {
    // 在页面加载完之后，获取所有城市列表
    this.getCityList();
    //页面加载完之后聚焦 所有城市
    this.selectIndex = -1;
  }
};
</script>

<style>
.select-city-box {
  margin-top: 40px;
  height: 100%;
  padding: 0px 15px;
}
.select-text {
  height: 40px;
  line-height: 40px;
  background-color: white;
  margin-bottom: 10px;
  font-size: 17px;
  padding-left: 20px;
}
.city-box {
  padding-top: 5px;
  background-color: white;
  padding-left: 5px;
}
.city-button {
  padding: 0px;
  text-align: center;
  color:#333;
  display: inline-block;
  width: 23%;
  margin-right: 2%;
  height: 35px;
  font-size: 16px;
}
.active {
  background-color: #F4B116;
  color:#fff;
}
</style>
