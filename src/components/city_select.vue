<template>
  <div class="select-city-box">
      <div style="height:10px"></div>
      <div class="select-text" @click="showCityBox()">按省份/城市筛选</div>
      <div class="city-box" v-if="showCity"> 
          <button :class="selectIndex==-1?'active':''" class="city-button" @click="allCity()">所有</button>
          <button class="city-button"
            v-show="showCityButton"
           v-for="(item,index) in cityList" 
           :key="item.P1"
           :class="selectIndex==index?'active':''"
           @click="checkedCity(index,item.P2)"
           >{{item.P2}}</button>
          <button class="city-button" @click="allCity()" v-show="showCityButton"><van-icon name="arrow-up" /></button>
      </div>
  </div>
</template>

<script>
/* eslint-disable */
import util from "@/utils/util";
export default {
    data(){
        return {
            selectIndex:-1,
            showCity:false,
            cityList:[],
            showCityButton:true,
        }
    },
    methods:{
        showCityBox(){
            this.showCity = !this.showCity
            console.log();
            
        },
        checkedCity(index,city){
            this.selectIndex = index
            this.$emit("select",city)
        },
        allCity(){
            this.selectIndex = -1
            this.showCityButton = !this.showCityButton
            this.$emit("select",this.cityList)
        },
        async getCityList(){     
            let { data } = await util.post({
                url:global.PUB.domain + '/crossList?page=dmagic_area',
                param:{
                    findJson:{
                        P8:"0001"
                    }
                }
            })
            this.cityList = data.list;
        }
    },
    mounted(){
        this.getCityList()
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
