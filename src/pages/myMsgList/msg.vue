<template>
  <div>
    <div class="top-box">
      <div class="compile-box" @click="compile()" v-show="showcompile">编辑</div>
      <div class="all-box" v-show="showSelect" @click="allCheck()">全选</div>
    </div>
    <div>
      <div class="content-box" v-if="showcontent">
        {{crowArr[gant].name}}
        <br />
        {{crowArr[gant].mas}}
        <div class="close-box" @click="shut(gant)">已 读</div>
      </div>
      <div v-show="!showcontent">
        <div class="mas-box" v-for="(mass,index) in crowArr" :key="index">
          <div class="news" @click="content(index,mass.id )">
            {{mass.name}}
            <br />
            {{mass.mas}}
            <input
              type="checkbox"
              class="delete-box"
              @click="del(index)"
              :checked="checked"
              v-if="showSelect"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-box" v-show="showSelect" @click="purification()">删 除</div>
  </div>
</template>
<script >
/* eslint-disable */

export default {
  components: {
  },
  props:{ 
    crowArr:{ 
    typr:Array,
    default:[]
    },
},
  data() { 
    return { 
      unreadBox:[],
      gant: {},
      checkedList: [],
      showcompile: true,
      checked: false,
      showSelect: false,
      showcontent: false,
    }
  },
  // watch:{
  //   crowArr:function(nval,oval){
  //     console.log("新，旧",nval,oval)
  //     this.shut()
  // },},
  methods: { 
    purification() {
      for (let i = this.crowArr.length - 1; i >= 0; i--) {
        if (this.checkedList[i]) {
          this.crowArr.splice(i, 1)
          this.checkedList.splice(i, 1)
        }
      }
      this.compile()
    },
    allCheck() { 
      for (let i = 0; i < this.checkedList.length; i++) {
        if (this.checked) {
          this.checkedList[i] = false
        } else {
          this.checkedList[i] = true
        }
      }
      this.checked = !this.checked;
    },
    del(index) { 
      this.checkedList[index] = !this.checkedList[index]
    },
    compile() { 
      if (this.showcontent) { 
      } else { 
        this.showSelect = !this.showSelect
      }
    },
    content(index,id) { 
      if (this.showSelect) { 
      } else { 
        this.showcontent = true
        this.gant = index
        this.showcompile = false
        this.unreadBox.push(this.crowArr[index])
        let transmit={newcrow:this.unreadBox}
        this.$emit('newMsgg',transmit)
      }
    },
    shut(gant) { 
      this.showcontent = false
      this.showcompile = true
      this.crowArr.splice(gant, 1)
    }
  },
  mounted() { 
    this.checkedList.length = this.crowArr.length;
    for (let i = 0; i < this.checkedList.length; i++) { 
      if (this.checkedList[i]) {
        this.checkedList[i] = !this.checkedList[i];
      } else { 
        this.checkedList[i] = false
      }
    }
  },
};
</script>
<style scoped>
.top-box {
  height: 35px;
  background: white;
  position: relative;
}
.compile-box {
  width: 35px;
  height: 35px;
  position: absolute;
  text-align: center;
  line-height: 35px;
  top: 0;
  left: 5px;
}
.all-box {
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
  background-color: #f5f5f5;
  color: #232323;
}
.news {
  height: 50px;
  text-align: left;
  line-height: 25px;
  overflow: auto;
}
.delete-box {
  margin: 10px;
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
  /* z-index:100; */
}
.content-box {
  position: relative;
  height: 350px;
  margin: 0 5px;
  padding: 5px 5px;
  border: black 1px solid;
  border-radius: 8px;
  overflow: auto;
  background-color: #f5f5f5;
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
</style>
