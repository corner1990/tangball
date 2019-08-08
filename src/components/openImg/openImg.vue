<template>
  <div>
    <div>
      <swiper
        style="height:250px"
        :indicator-dots="indicatorDots"
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration"
        indicator-active-color="white"
      >
        <block v-for="item in value" :key="item.url[0]">
          <swiper-item>
            <img
              style="width:100%"
              @click="showImg(item.url)"
              :src="item.url"
              class="slide-image"
              height="250"
            />
          </swiper-item>
        </block>
      </swiper>
      <div>
        <!--显示图片弹窗-->
        <van-popup customStyle="height:250px" :show="show" @close="onClose">
          <img style="height:250px" alt :src="bigImg" />
        </van-popup>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  props: ["value"],
  data() {
    return {
      // radio: 1,
      //   注册图片
      bigImg: "",
      show: false,
      indicatorDots: true,
      autoplay: true,
      interval: 4000,
      duration: 1000
    };
  },
  methods: {
    showImg(url) {
      this.show = true;
      this.bigImg = url;
    },
    onClose() {
      this.show = false;
    }
  },
  created() {},
  mounted() {
  
  },onLoad(){
          this.show = false;
  }
};
</script>
