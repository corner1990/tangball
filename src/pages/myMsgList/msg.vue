<template>
  <div>
    <div class="top-box" v-if="transformm">
      <div class="compile-box" @click="compile()" v-show="showcompile">编辑</div>
      <div class="all-box" v-if="showSelect" @click="allCheck()">全选</div>
    </div>
    <div class="flesh">
      <div class="content-box" v-if="showcontent">
        标题：
        <br />
        {{crowArr[gant].name}}
        <br />内容：
        <br />
        {{crowArr[gant].detail}}
        <div class="close-box" @click="shut(gant,msgId)">关 闭</div>
      </div>
      <div v-show="!showcontent">
        <div class="mas-box" v-for="(mass,index) in crowArr" :key="index">
          <div class="news" @click="content(index,mass.P1 )">
            <div class="news-title">标题：{{mass.name}}</div>
            <div class="news-detail">{{mass.detail}}</div>
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
  props: {
    //父组件传入的当前对应已读或未读的数组
    crowArr: {
      type: Array,
      default: []
    },
    //父组件传入，告知子组件此时按钮聚焦为已读或者是未读状态，
    //用于触发子组件的监听器
    transformm: {
      type: Boolean
    }
  },
  data() {
    return {
      unreadBox: [], //在$emit触发时，传递给父组件当前被选中的未读消息的对应数组数据，使父组件能在已读假数组中添加对应数据
      msgId: null, //当前被点击的消息id，通过$emit传递给父组件
      gant: {}, //当前被点击消息的index值
      checkedList: [], //暂存全选true和false状态的数组
      showcompile: true, //判断编辑按钮显隐
      checked: false, //多选时复选框默认的状态
      showSelect: false, //全选，复选框，及确认已读按钮显隐
      showcontent: false //消息列表显隐
    };
  },
  //监听器：通过监听父组件传进来的已读未读状态触发
  // 首先会默认触发全选，将复选框的值全转为false
  //然后判断消息弹窗是否显隐，如未隐藏则会判断此父组件传入的transformm值，判断是切换至已读还是未读
  //最后根据transformm值传递给父组件当前消息的index值和此时消息弹窗的位置，使父组件相应的修改已读或未读
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
    //全部已读确认按钮
    // 按钮首先判断未读消息列表复选框的true和false状态
    //然后将true状态的消息的id和内容传递给父组件并触发已读接口
    //但目前似乎是请求速度过快，导致全选后虽然有传递数据，但有时会丢失数据
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
    // 全选按钮
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
    // 消息列表点击按钮
    del(index) {
      this.checkedList[index] = !this.checkedList[index];
    },
    //编辑按钮，当为已读时不显示
    compile() {
      if (this.showcontent) {
      } else {
        this.showSelect = !this.showSelect;
      }
    },
    // 消息列表按钮，点击会向父件传值，触发事件
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
    // 消息弹窗确定按钮
    shut(gant, msgId) {
      this.showcontent = false;
      this.showcompile = true;
      this.crowArr.splice(gant, 1);
      this.$emit("reader")
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
  },
  onUnload() {
    this.crowArr = [];
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
};
</script>
<style scoped>
.top-box {
  height: 35px;
  background: white;
  position: relative;
}
.flesh {
  height: 100%;
  overflow: scroll;
}
.compile-box {
  width: 35px;
  height: 35px;
  position: absolute;
  text-align: center;
  line-height: 35px;
  top: 5px;
  left: 20px;
}
.all-box {
  width: 35px;
  height: 35px;
  position: absolute;
  text-align: center;
  line-height: 35px;
  top: 5px;
  right: 20px;
}
.mas-box {
  height: 70px;
  padding:0 15px;
  border-radius: 10px;
  margin: 10px 8px;
  position: relative;
  background-color: #f5f5f5;
  color: #232323;
}
.news {
  height: 70px;
  text-align: left;
  overflow: hidden;
}
.news-title,
.news-detail {
    line-height: 35px;
  height: 35px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
  background-color: #f4b116;
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
  overflow: scroll;
}
.close-box {
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  background-color: #f4b116;
  color: #ffffff;
  line-height: 50px;
  width: 100%;
  font-size: 20px;
}
</style>
