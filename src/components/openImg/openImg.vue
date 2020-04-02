<template>
  <div>
    <div>
      <swiper
        :style="imgHeight"
        :indicator-dots="indicatorDots"
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration"
        indicator-active-color="white"
      >
        <block v-for="item in value" :key="item.url[0]">
          <swiper-item>
            <img
               v-if="item.url"
              style="width:100%;height:100%"
              @click="showImg(item.url)"
              :src="item.url"
              class="slide-image"
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
      imgHeight:'height:150px',
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
  mounted() {},
  onLoad() {
    this.show = false;
    let width = 150
         wx.getSystemInfo({
           success:function (res) {
             width = res.screenWidth
             
             
           }
         })
         this.imgHeight =`height:${width*0.8}px`
  }
};
</script>
