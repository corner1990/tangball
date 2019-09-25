<template>
  <div class="main-wrap">
    <togod ></togod>
    <!-- <footer @click="footLoadLazy()" :class="{footLoadLazy:true,noload:!isStatus}" >{{footerText}}</footer> -->
  </div>
</template>
<script>
/* eslint-disable */
import matct_detail from "@/components/matchList/match_detail";
import tisp from "@/components/tisp/tisp";
import util from "@/utils/util";
import card from "@/components/card";
import mytabbar from "@/components/mytabbar/mytabbar";
import Dialog from "../../../static/vant/dialog/dialog";
import debug_item from "@/components/common/debug_item/debug_item";
import togod from '@/components/matchList/togod'
export default {
  
  components: {
    card,
    mytabbar,
    Dialog,
    tisp,
    debug_item,togod
   
  },
  data() {
    return {
     
  
    };
  },
  methods: {
    
   
   


    
  },
 
  computed: {
   
  },
  
};
</script>
<style scoped>
.foot-loadlazy {
  opacity: 0.5;
  font-weight: bold;
  /* line-height: 30px; */
  text-align: center;
  /* position: absolute;
  bottom: 9px;
  left: 0; */
  background: rgb(158, 149, 149);
  height: 30px;
  width: 100%;
}
.noload {
  color: #999999;
  background-color: #fff;
  height: 30px;
  font-weight: bold;
  text-align: center;
  line-height: 30px;
}
</style> 
