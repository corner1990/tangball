<template>
  <div class="select-city-box">
      <div style="height:10px"></div>
      <div class="city-box"> 
          <button :class="selectIndex==-1?'active':''" class="city-button" @click="allCity()">所有</button>
          <!-- 遍历数组得到所有城市按钮，在其点击时添加聚焦样式 -->
          <button class="city-button"
            v-show="index>5?showCityButton:true"
           v-for="(item,index) in cityList" 
           :key="item.P1"
           :class="selectIndex==index?'active':''"
           @click="checkedCity(index,item.P7)"
           >{{item.P2}}({{item.tangball?item.tangball.countVenue:0}})</button>
          <button class="city-button" @click="showCityButton = false" v-show="showCityButton"><van-icon name="arrow-up" /></button>
          <button class="city-button" @click="showCityButton = true" v-show="!showCityButton">更多...</button>
      </div>
  </div>
</template>

<script>
/* eslint-disable */
import util from "@/utils/util";
export default {
    props:{
        // 接收父组件传过来的聚焦index,默认聚焦所有
        selectIndex:{
            default:-1
        }
    },
    data(){
        return {
            showCity:false,
            cityList:[],
            showCityButton:false,
        }
    },
    methods:{
        // 选中城市时
        checkedCity(index,city){
            let str = this.cityList[0]
            this.cityList[0] = this.cityList[index]
            this.cityList[index] = str
            this.showCityButton = false
            this.selectIndex = 0
            this.$emit("select",city)
        },
        // 选中所有城市时 
        allCity(){
            this.selectIndex = -1
            this.showCityButton = !this.showCityButton
            this.$emit("select")
        },
        // 获取所有城市列表
        async getCityList(){     
            let { data } = await util.post({
                url:global.PUB.domain + '/crossList?page=dmagic_area',
                param:{
                    findJson:{
                        P8:"0001"
                    },
                    sortJson:{
                        "tangball.countVenue":-1
                    }
                }
            })
            this.cityList = data.list;
            console.log(this.cityList);
            
        }
    },
    mounted(){
        // 在页面加载完之后，获取所有城市列表
        this.getCityList()
        this.selectIndex = -1
    }
}
</script>

<style>
    .select-city-box{
        height: 100%;
        background-color: rgb(228, 228, 230);
    }
    .select-text{
        height: 40px;
        line-height: 40px;
        background-color: white;
        margin-bottom: 10px;
        font-size:17px;
        padding-left:20px;
    }
    .city-box{
        padding-top:5px;
        background-color: white;
        padding-left:5px;
    }
    .city-button{
        padding: 0px;
        text-align: center;
        display: inline-block;
        width: 23%;
        margin-right: 2%;
        height: 35px;
        font-size: 16px;
        background-color: rgb(228, 228, 230);
    }
    .active{
        background-color: rgb(25, 137, 250);
    }
</style>
