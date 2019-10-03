<template>
<div>
   <div class='achievement-tab-box' v-if="groupAchievementlist&&groupAchievementlist.length>0">
        <div class="achievement-tr-box">
            <div class="achievement-td-left-box">排名</div>
            <div class="achievement-td-center-box">队名</div>
            <div class="achievement-td-right-box">总成绩</div>
        </div>
        <div class="achievement-tr-box" v-for="(item,index) in groupAchievementlist" :key="index">
            <div class="achievement-td-left-box">{{index+1}}</div>
            <div class="achievement-td-center-box">{{item.groupName}}</div>
            <div class="achievement-td-right-box">{{item.score==-1?'无':item.score}}</div>
        </div>
      </div>
    <div v-else>成绩暂未录入</div>
</div>
</template>
<script>
export default {
  props: ['groupAchievementlist']
}
</script>
<style  scoped>
    .achievement-tr-box{
        display: flex;
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
    }
    .achievement-tr-box div{
        border: 1px solid black;
    }
    .achievement-tab-box .achievement-tr-box:first-child div{
        background-color:  #F4B116;
        color: white;
        font-weight: 700
    }
    .achievement-td-left-box{
        flex:0 0 20%;
    }
    .achievement-td-center-box{
        flex:0 0 60%;
    }
    .achievement-td-right-box{
        flex:0 0 20%;
    }
</style>
