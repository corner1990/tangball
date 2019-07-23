<template>
  <div class="main-wrap">
    <debug_item path="pageName" v-model="pageName" text="页面名称" />
    <mytabbar></mytabbar>
    <div class="top-box">
      <div class="read-box" :class="!focuss?'masEvolve':''" @click="read">已读</div>
      <div class="unread-box" :class="focuss?'masEvolve':''" @click="unread">未读</div>
    </div>
<<<<<<< HEAD
    <msg :crowArr="msgg" @newMsgg="moveMsg"></msg>
=======
    <msg  :crowArr="msgg"></msg>
    <msg :crowArr="msgg"></msg>
>>>>>>> 876e487b6163238c54e26bb9bf6a5fda2a5e4f33
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
      msgg: "",
=======
      msgg:"",
>>>>>>> 876e487b6163238c54e26bb9bf6a5fda2a5e4f33
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
  created() {
    this.msgg = this.crow;
  },
  methods: {
    read() {
      this.focuss = false;
      this.msgg = this.crow2;
    },
    unread() {
      this.focuss = true;
      this.msgg = this.crow;
<<<<<<< HEAD
    },
    moveMsg(transmit) {
      this.crow2 = transmit.newcrow;
=======
>>>>>>> 876e487b6163238c54e26bb9bf6a5fda2a5e4f33
    }
  }
};
</script>

<style scoped>
.main-wrap {
  padding-bottom: 100px;
}
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
</style>
