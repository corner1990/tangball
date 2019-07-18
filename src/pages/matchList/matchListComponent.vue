<template>
  <div>
    <div class="match-box" >
      <div class="match-img-box">
        <img :src="item.thumb" />
      </div>
      <div class="match-img-box1">
        <h1>{{title}}</h1>
        <p>{{desc}}</p>
        <div>{{matchTime}}</div>

        <div>{{price}}</div>
      </div>

      <div name="footer" class="rpg11">
        <div :class="{'macth-btn':true,btn:publicationStatus==2}" @click="daying">{{Status}}</div>

        <div class="macth-btn">查看详情</div>
      </div>
    </div>
  
     

  </div>
</template>
<script>
/* eslint-disable */

export default {
  data() {
    return {
      Status: ""
    };
  },
  props: ["title", "desc", "price", "matchTime", "publicationStatus"],
  components: {},
  mounted() {
    if (this.publicationStatus == 1) {
      return (this.Status = "火热报名中");
    } else if (this.publicationStatus == 2){
      return (this.Status = "报名已结束");
    }else{
      return (this.Status="notdefined")
    }
  },
  methods: {
    daying() {
      if (this.publicationStatus == 1) {
        console.log("aa")
      }else{
         return
      }
    }
  },
  created() {},
};
</script>

<style scoped>

.main-wrap {
  padding-bottom: 60px;
}
.title {
  margin: 10px 20px;
  color: #333;
  border-bottom: 1px solid #000;
}

.match-box {
  margin-bottom: 5px;
  /* position: relative; */
  border-bottom: #d9d9d9 1px solid;
  height: 105px;
  display: flex;
}
.rpg11 {
  /* position: absolute; */
  right: 0px;
  bottom: 10px;

  /* float: right; */
  margin-right: 5px;
}
.match-img-box {
  /* float: left; */

  margin: 15px 0 0 5px;
  height: 70px;
  width: 70px;
  background: #fff;
}
.match-img-box img {
  width: 100%;
  height: 100%;
}
.match-img-box1 {
  /* color: #fff; */
  /* border: 1px solid #000; */
  flex: 1;
  margin: 15px 0 0 0px;
  /* background: #000; */
  display: flex;
  flex-direction: column;
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
