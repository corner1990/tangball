<template>
  <div class="main-wrap">
    <debug_item path="pageName" v-model="pageName" text="页面名称" />
    <mytabbar></mytabbar>
    <div class="top-box">
      <div class="read-box" :class="!focuss?'masEvolve':''" @click="read">已读</div>
      <div class="unread-box" :class="focuss?'masEvolve':''" @click="unread">未读</div>
    </div>
<<<<<<< HEAD
    <msg  :crowArr="msgg"></msg>
    <msg :crowArr="msgg"></msg>
=======
    <div class="top-box">
      <div class="compile-box" @click="compile()" v-show="showcompile">编辑</div>
      <div class="all-box" v-show="showSelect" @click="allCheck()">全选</div>
    </div>
    <div class="content-box" v-if="showcontent">
      {{crow[gant].name}}
      <br />
      {{crow[gant].mas}}
      <div class="close-box" @click="shut()">已 读</div>
    </div>
    <div v-show="!showcontent">
      <div class="mas-box" v-for="(mass,index) in crow" :key="index">
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
    <div class="bottom-box" v-show="showSelect" @click="purification()">删 除</div>
>>>>>>> 3438088cab21587082a1832b81eca6ea4076d27f
  </div>
</template>
<script>
/* eslint-disable */
import msg from "@/pages/myMsgList/msg";
import mytabbar from "@/components/mytabbar/mytabbar";
import debug_item from "@/components/common/debug_item/debug_item";

export default {
  components: {
    mytabbar,
    debug_item,
    msg
  },
  data() {
    return {
<<<<<<< HEAD
      msgg:"",
=======
      unreadBox:[],
>>>>>>> 3438088cab21587082a1832b81eca6ea4076d27f
      focuss: true,
      evolve: "masEvolve",
      crow: [
        {
          id: "1",
          name: "发信人1",
          mas:
            "这是一很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的消息1"
        },
        { id: "2", name: "发信人2", mas: "这是消息2" },
        { id: "3", name: "发信人3", mas: "这是消息3" },
        { id: "4", name: "发信人4", mas: "这是消息4" },
        { id: "5", name: "发信人5", mas: "这是消息5" },
        { id: "6", name: "发信人6", mas: "这是消息6" },
        { id: "7", name: "发信人7", mas: "这是消息7" },
        { id: "8", name: "发信人8", mas: "这是消息8" },
        { id: "9", name: "发信人9", mas: "这是消息9" }
      ],
      crow2: [],
      pageName: "个人中心-系统消息列表"
    };
  },

  methods: {
    read() {
      this.focuss = false;
      this.msgg = this.crow2;
    },
    unread() {
<<<<<<< HEAD
      this.focuss = true;
      this.msgg = this.crow;
=======
       this.focuss = true;
    },
    purification() {
      for (let i = this.crow.length - 1; i >= 0; i--) {
        if (this.checkedList[i]) {
          this.crow.splice(i, 1);
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
    content(index,id) {
      if (this.showSelect) {
      } else {
        this.showcontent = true;
        this.gant = index;
        this.showcompile = false;
        this.unreadBox.push(this.crow[index])
        console.log(this.unreadBox)
      
      }
    },
    shut() {
      this.showcontent = false;
      this.showcompile = true;
    }
  },
  mounted() {
    this.checkedList.length = this.crow.length;
    for (let i = 0; i < this.checkedList.length; i++) {
      if (this.checkedList[i]) {
        this.checkedList[i] = !this.checkedList[i];
      } else {
        this.checkedList[i] = false;
      }
>>>>>>> 3438088cab21587082a1832b81eca6ea4076d27f
    }
  }
};
</script>

<style scoped>
<<<<<<< HEAD
.main-wrap {
  padding-bottom: 100px;
}
=======
>>>>>>> 3438088cab21587082a1832b81eca6ea4076d27f
.top-box {
  height: 35px;
  background: white;
  position: relative;
}

.read-box {
  width: 50%;
  height: 35px;
  position: absolute;
  text-align: center;
  line-height: 35px;
  top: 0;
  right: 0px;
}
.unread-box {
  width: 50%;
  height: 35px;
  position: absolute;
  text-align: center;
  line-height: 35px;
  top: 0;
  left: 0px;
}
.masEvolve {
  background-color: #f5f5f5;
}
<<<<<<< HEAD
=======
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

>>>>>>> 3438088cab21587082a1832b81eca6ea4076d27f
</style>
