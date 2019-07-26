<template>
  <div>
    <div class="top-box" v-if="transformm">
      <div class="compile-box" @click="compile()" v-show="showcompile">编辑</div>
      <div class="all-box" v-if="showSelect" @click="allCheck()">全选</div>
    </div>
    <div>
      <div class="content-box" v-if="showcontent">
        发信人：{{crowArr[gant].CreateUser}}
        <br />
        标题：{{crowArr[gant].name}}
        <br />
        {{crowArr[gant].detail}}
        <div class="close-box" @click="shut(gant,msgId)">确 定</div>
      </div>
      <div v-show="!showcontent">
        <div class="mas-box" v-for="(mass,index) in crowArr" :key="index">
          <div class="news" @click="content(index,mass.P1 )">
            发信人：{{mass.CreateUser}}
            <br />
            标题：{{mass.name}}
            <input
              type="checkbox"
              class="delete-box"
              @click="del(index)"
              :checked="checked"
              v-if="showSelect&transformm"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-box" v-show="showSelect&transformm" @click="purification()">已 读</div>
  </div>
</template>
<script >
/* eslint-disable */

export default {
  components: {},
  props: {
    crowArr: {
      type: Array,
      default: []
    },
    transformm: {
      type: Boolean
    }
  },
  data() {
    return {
      unreadBox: [],
      msgId: null,
      gant: {},
      checkedList: [],
      showcompile: true,
      checked: false,
      showSelect: false,
      showcontent: false
    };
  },
  watch: {
    transformm: function(nval, oval) {
      this.allCheck();
      if (this.showcontent) {
        this.showcontent = false;
        this.showcompile = true;
        if (this.transformm) {
          let close = { spliceCrow: { gant: this.gant, door: true } };
          this.$emit("spliceMsgg", close);
        } else {
          let close = { spliceCrow: { gant: this.gant, door: false } };
          this.$emit("spliceMsgg", close);
        }
      }
    }
  },
  methods: {
    purification() {
      for (let i = this.crowArr.length - 1; i >= 0; i--) {
        if (this.checkedList[i]) {
          this.msgId = this.crowArr[i].P1;
          this.unreadBox = this.crowArr[i];
          let transmit = {
            newcrow: { msgId: this.msgId, unreadBox: this.unreadBox }
          };
          this.$emit("newMsgg", transmit);
          this.crowArr.splice(i, 1);
          this.checkedList.splice(i, 1);
        }
      }
      this.compile();
    },
    allCheck() {
      for (let i = 0; i < this.checkedList.length; i++) {
        if (this.checked) {
          this.checkedList[i] = false;
        } else {
          this.checkedList[i] = true;
        }
      }
      this.checked = !this.checked;
    },
    del(index) {
      this.checkedList[index] = !this.checkedList[index];
    },
    compile() {
      if (this.showcontent) {
      } else {
        this.showSelect = !this.showSelect;
      }
    },
    content(index, msgId) {
      this.gant = index;
      this.msgId = msgId;
      if (this.showSelect) {
      } else {
        this.showcontent = true;
        this.showcompile = false;
        this.unreadBox = this.crowArr[index];
        let transmit = { newcrow: { msgId: msgId, unreadBox: this.unreadBox } };
        this.$emit("newMsgg", transmit);
      }
    },
    shut(gant, msgId) {
      this.showcontent = false;
      this.showcompile = true;
      this.crowArr.splice(gant, 1);
    }
  },
  mounted() {
    this.checkedList.length = this.crowArr.length;
    for (let i = 0; i < this.checkedList.length; i++) {
      if (this.checkedList[i]) {
        this.checkedList[i] = !this.checkedList[i];
      } else {
        this.checkedList[i] = false;
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
  background-color: #F4B116;
  color: #ffffff;
  height: 100px;
  line-height: 50px;
  width: 100%;
  /* z-index:100; */
}
.content-box {
  position: relative;
  height: 350px;
  margin: 25px 5px;
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
  background-color: #F4B116;
  color: #ffffff;
  line-height: 50px;
  width: 100%;
  font-size: 20px;
}
</style>
