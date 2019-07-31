<template>
  <div class="user-info">
    <img src="/static/images/timg.jpg" alt="bg" class="bg" />
    <div class="avatar-row">
      <img :src="avatarUrl" alt="avatar" class="avatar" />
      <p class="name">{{nickName}}</p>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: ["用户信息"],
  computed: {
    avatarUrl: function() {
      return this.$store.state.userInfo.avatarUrl; //|| "/static/images/user.png"
    },
    nickName: function() {
      return this.$store.state.userInfo.nickName; //|| "/static/images/user.png"
    }
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
