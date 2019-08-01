<template>
  <div class="user-info">
     
    <img src="/static/images/timg.jpg" alt="bg" class="bg" />
    <div class="avatar-row">
      <img :src="avatarUrl" alt="avatar" class="avatar" />
      <p class="name">{{nickName}}</p>123
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import debug_item from "@/components/common/debug_item/debug_item";
export default {
   components: {
     debug_item,
  },
  props: ["用户信息"],
  computed: {
    avatarUrl: function() {
      return this.$store.state.wxUserInfo.avatarUrl; //|| "/static/images/user.png"
    },
    nickName: function() {
      return this.$store.state.wxUserInfo.nickName; //|| "/static/images/user.png"
    },
    tangballUserInfo: function() {
      return this.$store.state.tangballUserInfo //
    }
  },
  mounted(){
    console.log("this.tangballUserInfo", this.tangballUserInfo);
  }
};
</script>

<style >
.user-info {
  position: relative;
  height: 180px;
  text-align: center;
  overflow: hidden;
}
.user-info .bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.avatar-row {
  position: relative;
  z-index: 2;
  text-align: center;
}

.user-info .avatar {
  width: 80px;
  height: 80px;
  margin-top: 10px;
  border-radius: 50%;
}
.user-info .name {
  color: #fff;
}
</style>
