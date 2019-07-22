<template>
  <div class="main-wrap">
    <debug_item path="pageName" v-model="pageName" text="页面名称"/>
    <mytabbar></mytabbar>
<<<<<<< HEAD
    <div class="top-box">
      <div class="read-box" :class="!focuss?'masEvolve':''" @click="read()">已读</div>
      <div class="unread-box" :class="focuss?'masEvolve':''" @click="unread()">未读</div>
    </div>
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
=======
>>>>>>> c097b310c2026be81d6cbbf423aea36ac8d0b11f
  </div>
</template>
<script>
/* eslint-disable */
import mytabbar from '@/components/mytabbar/mytabbar'
import debug_item from '@/components/common/debug_item/debug_item'

export default {
  components: {
    mytabbar, debug_item
  },
  data() {
    return {
<<<<<<< HEAD
      unreadBox:[],
      focuss: true,
      evolve: "masEvolve",
      gant: {},
      checkedList: [],
      showcompile: true,
      checked: false,
      showSelect: false,
      showcontent: false,
      
      pageName: "个人中心-系统消息列表"
    };
  },

  methods: {
    read() {
     this.focuss = false;
    },
    unread() {
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
    }
=======
      pageName: "个人中心-系统消息列表"

    }
  },

  methods: {

  },
  created() {
>>>>>>> c097b310c2026be81d6cbbf423aea36ac8d0b11f
  }
}
</script>

<style scoped>
<<<<<<< HEAD
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
.all-box {
  width: 35px;
  height: 35px;
  position: absolute;
  text-align: center;
  line-height: 35px;
  top: 0;
  right: 5px;
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
.mas-box {
  height: 50px;
  border-radius: 10px;
  margin: 10px 8px;
  padding: 0px 5px;
  position: relative;
  background-color: #f5f5f5;
  color: #232323;
}
.masEvolve {
  background-color: #f5f5f5;
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

=======
>>>>>>> c097b310c2026be81d6cbbf423aea36ac8d0b11f
</style>
