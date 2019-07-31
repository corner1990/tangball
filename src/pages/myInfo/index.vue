<template>
  <div class="myInfo-box">
    <h1 class="message-head">基本信息</h1>
    <div class="message-main" >
      <div style="height:5px;"></div>
      <!-- 循环遍历信息，渲染页面 -->
          <div class="message-box" v-for="(message,index) in memberMessageList" :key="index" style="margin:5px 0px">
            <div class="message-text">{{message.value}}</div>
            <div class="message-input">
              <!-- 如果input类型是单选框，显示单选框 -->
              <div  v-if="message.type=='redio'">
                <div class="input-text" v-if="!showRadio" @click="showRadio=!showRadio">{{sex}}</div>
                <div v-if="showRadio" >
                  <radio-group @change="changeSex">
                    <radio :value="1" :checked="memberMessage[message.index]=='1'?true:false"/>男
                    <radio :value="2" :checked="memberMessage[message.index]=='2'?true:false"/>女
                  </radio-group>
                </div>
              </div>
              <!-- 如果input类型是下拉框，显示单选框 -->
              <div v-else-if="message.type=='select'">
                <div class="input-text" v-if="!showSelect" @click="showSelect=!showSelect">{{ballAge}}</div>
                <div v-if="showSelect">
                    <div class="mask-layer"></div>
                    <van-picker class="picker-box" :columns="columns" 
                    show-toolbar="true"
                    @confirm="changeSelect"
                    @cancel="closeSelect"/>
                </div>
              </div>
              <input v-else
              class="input-text" :class="focusIndex==index?'active':''" type="text" v-model="memberMessage[message.index]"
              @click="focusIndex=index"/>
            </div>
            <div style="clear:both"></div>
          </div>
          <div style="height:10px;"></div>
    </div>
    <div @click="modifyMember()" class="button-modify">保存修改</div>
    <mytabbar></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import mytabbar from '@/components/mytabbar/mytabbar'
import debug_item from '@/components/common/debug_item/debug_item'
import util from '@/utils/util'

export default {
  components: {
    mytabbar, debug_item
  },
  data() {
    return {
      ballAge:"",
      sex:"",
      num:"aa",
      memberId:"28",
      modifyList:{},
      memberMessage:{},
      focusIndex:-1,
      showSelect:false,
      showRadio:false,
      columns:["一年以下","一到三年","三到五年","五到十年","十年以上"],
      memberMessageList:[
        {index:"name",value:"姓名:"},
        {index:"sex",value:"性别:",type:"redio"},
        {index:"ballAge",value:"球龄:",type:"select"},
        {index:"idCard",value:"身份证证号:"},
        {index:"phone",value:"手机号码:"},
        {index:"career",value:"职业:"}
      ]
    }
  },
  computed: {
  //唐球会员信息-在vuex中获取
    tangballUserInfo: function() {
      return this.$store.state.tangballUserInfo 
    }
  },

  methods: {
    // 点击下拉款确定的话将数据信息保存下来，实现双向绑定
    changeSelect(event){
      this.showSelect=!this.showSelect;
      this.memberMessage.ballAge=event.mp.detail.index+1;
      this.ballAgeToString();
    },
    closeSelect(){
      this.showSelect=!this.showSelect
    },
    // 切换单选框的时候将数据信息保存下来，实现双向绑定
    changeSex(event){
      this.memberMessage['sex']=event.mp.detail.value
      this.sexToString()
      this.showRadio=!this.showRadio
    },
    // 由于接口返回的性别是数字，需要通过这个方法处理转换成字符串
    sexToString(){
      if(this.memberMessage.sex=="1"){
        this.sex = "男"
      }else if(this.memberMessage.sex=="2"){
        this.sex = "女"
      }
    },
    // 由于接口返回的球龄是数字，需要通过这个方法处理转换成字符串
    ballAgeToString(){
      switch (this.memberMessage.ballAge) {
        case 1:
          this.ballAge="一年以下"
          break;
        case 2:
          this.ballAge="一到三年"
          break;
        case 3:
          this.ballAge="三到五年"
          break;
        case 4:
          this.ballAge="五到十年"
          break;
        case 5:
          this.ballAge="十年以上"
          break;
        default:
          break;
      }
    },
    // 请求会员接口
    async getMember() {
      let { data } = await util.post({
        url: global.PUB.domain + "/crossList?page=tangball_member",
        param: {
          findJson: {
            // P1: this.memberId
            openid:this.tangballUserInfo.openid
          },
        }
      });
      this.memberMessage = data.list[0]
      this.sexToString();
      this.ballAgeToString();
     console.log(this.memberMessage);
  },
  // 请求修改接口,修改成功跳转到首页
  async modifyMember(){
      let { data } = await util.post({
        url: global.PUB.domain + "/crossModify?page=tangball_member",
        param: {
          findJson: {openid: this.tangballUserInfo.openid},
          modifyJson:this.memberMessage
        }
      });
      wx.switchTab({url:"/pages/index/main"})
       wx.showToast({
      title: '修改成功',
      icon: 'success'
    })
  }
  },
  mounted(){
    // 页面加载请求会员数据
    this.getMember();
  }

}
</script>

<style scoped>
.myInfo-box{
  height: 500px;
  background-color: rgb(246, 248, 250)
}
.message-head{
  font-size:18px;
  padding-left: 2px;
}
.message-main{
  background-color: rgb(255, 255, 255);
  margin:10px 20px;
  border-radius: 10px;
  padding: 0px 10px;
}
  .message-box{
    font-size: 16px;
    box-sizing: border-box;
    border-bottom:2px solid rgb(252, 252, 252);;
  }
  .message-text{
    float:left;
    width: 30%;
    height: 40px;
    line-height: 40px;
    padding-left: 3px;
  }
  .message-input{
    float:left;
    height: 40px;
    width: 69%;
    line-height: 40px;
  }
   .input-text{
     margin-top:5px;
     background-color: rgb(252, 252, 252);
     border: 1px solid rgb(252, 252, 252);;
     height: 60%;
     width: 98%;
     padding-left: 10px;
     border-radius: 5px;
   }
   /* input聚焦样式 */
   .active{
     border: 1px solid #F4B116;
   }
   .button-modify{
     background-color: #F4B116;
     text-align: center;
     margin-left: 5%;
     height: 30px;
     line-height: 30px;
     width:30%;
     color: white;
     font-size: 16px;
   }
   /* 遮罩层样式 */
   .mask-layer{
     position: absolute;
     top:0;
     left:0;
     width: 100%;
     height: 100%;
     background: rgba(0,0,0,0.5);
     z-index: 100;
   }
   /* 下拉框样式 */
   .picker-box{
     position: absolute;
     bottom: 0;
     left:0;
     width: 100%;
     z-index: 101;
   }
</style>
