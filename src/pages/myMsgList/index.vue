<template>
  <div class="main-wrap">
    <debug_item path="pageName" v-model="pageName" text="页面名称" />
    <mytabbar></mytabbar>
    <div class="top-box">
      <div class="all-box" v-show="showSelect" @click="allCheck()">全选</div>

      <div class="compile-box" @click="compile()">编辑</div>
    </div>
    <div class="content-box" v-if="showcontent">
      {{crow[gant].mas}}
      <div class="close-box" @click="shut()">关闭</div>
    </div>
    <div v-show="!showcontent">
    <div class="mas-box" v-for="(mass,index) in crow" :key="mass.id" >
      <div class="news" @click="content(index)">{{mass.mas}}</div>
      <input type="checkbox" class="delete-box"  @click="del(index)" :checked="checked" v-if="showSelect">
    </div>
    </div>
    <div class="bottom-box" v-show="showSelect">删 除</div>
  </div>
</template>
<script>
/* eslint-disable */
import mytabbar from "@/components/mytabbar/mytabbar";
import debug_item from "@/components/common/debug_item/debug_item";

export default {
  components: {
    mytabbar,
    debug_item
  },
  data() {
    return {
      gant: {},
      checkedList:[],
      checked:false,
      showSelect: false,
      showcontent: false,
      crow: [
        {
          id: "1",
          mas:
            "这是一很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的消息1"
        },
        { id: "2", mas: "这是消息2" },
        { id: "3", mas: "这是消息3" }
      ],
      pageName: "个人中心-系统消息列表"
    };
  }, 

  methods: {
  allCheck(){
     for (let i = 0; i <this.checkedList.length; i++) {

         if (this.checked) {
           this.checkedList[i] = false
         }else{
           this.checkedList[i] = true
         }

     }
      this.checked = !this.checked
      console.log(this.checkedList);
      
  },
    del(index) {
           this.checkedList[index] = !this.checkedList[index]
           console.log(this.checkedList[index]);
           
    },
    compile() {
      console.log(this.showSelect);
      this.showSelect = !this.showSelect;
    },
    content(index) {
      console.log(this.showcontent);
      this.showcontent = true;
      console.log(this.gant);
     
      this.gant = index;
    },

    shut() {
      this.showcontent = false;
    }
  },
  mounted(){
    this.checkedList.length = this.crow.length
    for (let i = 0; i <this.checkedList.length; i++) {
       if (this.checkedList[i]) {
         this.checkedList[i] = !this.checkedList[i]
       }else{
         this.checkedList[i] = false
       }
       
     }
  }
};
</script>

<style scoped>
.top-box {
  height: 35px;
  background: white;
  position: relative;
}
.all-box {
  width: 35px;
  height: 35px;
  position: absolute;
  text-align: center;
  line-height: 35px;
  top: 0;
  left: 5px;
}
.compile-box {
  width: 35px;
  height: 35px;
  position: absolute;
  text-align: center;
  line-height: 35px;
  top: 0;
  right: 5px;
}
.mas-box {
  height: 50px;
  border-radius: 10px;
  margin: 10px 8px;
  padding: 0px 5px;
  position: relative;
  background-color:#9EEA6A;
  color:#232323;
}
.news {
  height: 50px;
  text-align: left;
  line-height: 25px;
  overflow: auto;
}
.delete-box {
  margin:10px;
  height: 25px;
  width: 25px;
  text-align: center;
  line-height: 25px;
  color: teal;
  position: absolute;
  top: 0;
  right: 0;

}
.bottom-box {
  position: fixed;
  bottom: 0;
  left: 0;
  text-align: center;
  background-color: #d20a0a;
  color: #ffffff;
  height: 100px;
  line-height: 50px;
  width: 100%;
}
.content-box {
  position: relative;
  height: 350px;
  margin: 0 5px;
  padding: 5px 5px;
  border: black 1px solid;
  border-radius: 8px;
  overflow: auto;
}
.close-box {
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  background-color: #d20a0a;
  color: #ffffff;
  line-height: 50px;
  width: 100%;
  font-size: 20px;
}
.chooseMas{
background-color:turquoise;
}
</style>
