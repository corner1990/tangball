<template>
  <div class="main-wrap">
    <!-- 赛事照片 -->
    <div class>
      <swiper
        style="height:80vw"
        :indicator-dots="indicatorDots"
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration"
      >
        <block v-for="item in matchDoc.album" :key="item">
          <swiper-item>
            <image
              @click="showImg(item.url)"
              :src="item.url"
              class="slide-image"
              v-if="matchDoc.album"
            />
          </swiper-item>
        </block>
      </swiper>
      <!--显示图片弹窗-->
      <van-popup
        customStyle="height:250px"
        v-if="showBigImg"
        :show="showBigImg"
        @close="ClosePhoto"
      >
        <img style="height:250px" alt :src="bigImg" />
      </van-popup>
    </div>
    <!-- 赛事名称 -->
    <div class="match-title-box">
      <div class="FS24 TAC LH36 match-title">{{matchDoc.matchName}}</div>
      <div class="share-button-box" v-if="isLogin">
        <div>
          <button open-type="share" class="share-button">
            <van-icon name="share" class="shareImg" />
          </button>
        </div>
        <div class="share-text">分享</div>
      </div>
    </div>
    <div style="height:15px;"></div>
    <!-- 赛事步骤 -->
    <!-- <div class="steps-box" v-for="(item,index) in steps" :Key="index">
      <van-steps :steps="item" :active="activeStep.group==index?activeStep.index:-1" active-color="#F4B116"  />
    </div> -->
    <van-steps :steps="steps" :active="activeStep" active-color="#F4B116"  />
    <van-cell-group title="赛事信息">
      <van-cell title="赛事时间" title-width="100px" :value="matchTime" />
      <van-cell title="报名截止时间" :value="enrollTimeEnd" />
      <van-cell title="赛事类型" :value="matchDoc.matchForm==1?'个人赛':'团队赛'" />
      <van-cell title="可以多次报名" v-if="matchDoc.mutiEnrool " />
      <van-collapse v-model="NationalmatchIndex" @change="matchTypeChange">
        <van-collapse-item title="举办地点" name="1">
          <div class="collapse">
            <span
              style="color:black"
              v-for="(item,index) in matchDoc.venue"
              :key="index"
            >{{item.cityName}}--{{item.venueName}}</span>
            <div style="height:15px;"></div>
          </div>
        </van-collapse-item>
      </van-collapse>
      <van-collapse
        v-model="showEnrollRequirements"
        @change="enrollRequirementsChange"
        v-if="matchDoc.enrollRequirements"
      >
        <van-collapse-item title="报名要求" name="1">
          <div class="collapse">{{matchDoc.enrollRequirements}}</div>
        </van-collapse-item>
      </van-collapse>
      <van-cell title="报名费" :value="matchDoc.registrationFee+'元'" />
      <!-- <van-cell title="已报名人数" :value="matchDoc.registeredPersons" /> -->
    </van-cell-group>
    <div
      class="regulation-box"
      @click="gotoMatchManual({url:'/pages/macthManual/main'})"
      v-if="matchDoc.matchManual"
    >
      <div class="FL" style="color:#333;">赛事规程</div>
      <div class="FR">
        <van-icon name="arrow" />
      </div>
      <div style="clear:both"></div>
    </div>
    <div class="regulation-box" @click="gotoMatchManual({url:'/pages/macth_group/main'})">
      <div class="FL" style="color:#333;">对阵分组</div>
      <div class="FR">
        <van-icon name="arrow" />
      </div>
      <div style="clear:both"></div>
    </div>
    <div class="regulation-box" @click="gotoMatchManual({url:'/pages/matchResult/main'})">
      <div class="FL" style="color:#333;">成绩排名</div>
      <div class="FR">
        <van-icon name="arrow" />
      </div>
      <div style="clear:both"></div>
    </div>
    <div style="height:60px"></div>
    <!-- 如果已经截止报名和该用户已经报名，那么禁选 -->
    <div
      class="enrollButton check-box"
      v-if="isMatchIdStatus=='show'"
      @click="gotoPage(url)"
    >{{enrollText}}</div>
    <div class="enrolled enrollButton" v-else-if="isMatchIdStatus">{{enrollText}}</div>
    <van-button
      class="enrollButton"
      size="large"
      type="primary"
      @click="gotoPage(url)"
      v-else
    >{{enrollText}}</van-button>
    <!-- 显示选择球场弹窗 -->
    <van-dialog
      use-slot
      title="请选择球场"
      :show="showdDialog"
      @close="onCloseDialog"
      v-if="showdDialog"
    >
      <van-picker :columns="cityVenueList" @change="pickerChange" />
    </van-dialog>
    <van-dialog
      use-slot
      title="提示"
      :show="showLogin"
      @close="showLogin = false"
      show-cancel-button
      @confirm="showLoginDialog"
      v-if="showLogin"
      confirmButtonText="授权登录"
    >
      <div style="height:60px;line-height: 60px;" class="TAC">您还没有登录，请先登录</div>
    </van-dialog>
    <mytabbar></mytabbar>
  </div>
</template>
<script>
/* eslint-disable */
import mytabbar from "@/components/mytabbar/mytabbar";
import debug_item from "@/components/common/debug_item/debug_item";
import util from "@/utils/util";
export default {
  components: {mytabbar,debug_item,util},
  data() {
    return {
      orderMsg: {},
      payStatus: false,

      isLogin: false,
      showLogin: false,
      bigImg: "", //图片点击放大地址
      showBigImg: false, //控制图片点击放大
      showdDialog: false, //控制选择球场弹窗
      cityVenueList: null, //球场列表
      venueId: null, //球场id
      venueName: null, //球场名字
      cityName: null, //球场城市名
      NationalmatchIndex: ['1'], //举办地点聚焦
      showEnrollRequirements: ['1'],//报名要求聚焦
      matchId: 37, //  当前赛事id
      isMatchIdStatus: false, //控制是否跳转报名列表的状态
      activeStep: 0, //步骤条id
      enrollText: "立即报名", //管理是否立即报名的文字
      steps: [],//步骤条数组
      matchTime: null,
      enrollTimeEnd: null,
      matchDoc: {}, //赛事详情列表
      style: "background-color:#eee;padding: 13px 0 16px 0;", //已经报名或者截止报名的样式
      indicatorDots: true,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      value: "", // 搜索value
      National: false
    };
  },
  methods: {
    //未登录弹窗
    showLoginDialog() {
      this.showLogin = false
      util.gotoPage(`/pages/authorize/main?id=${this.matchId}`);


    },
    // 跳转赛事规程的方法
    gotoMatchManual(url) {
      wx.setStorage({
        key: "matchInfo",data: JSON.stringify(this.matchDoc),
        success() {
          wx.navigateTo(url);
        }
      })
    },
    /**
     * @desc 打开点击图片放大函数
     */
    showImg(url) {
      this.showBigImg = true;
      this.bigImg = url; //缓存当前的图片地址
    },
    /**
     * @desc 关闭点击图片放大函数
     */
    ClosePhoto() {
      this.showBigImg = false; 
    },
    /**
     * @desc onCloseDialog是弹窗的关闭函数
     * @param event是默认值
     */
    onCloseDialog() {
      console.log(111)
      if (this.matchDoc.venue.length > 1) {
        this.showdDialog = !this.showdDialog; //控制是否打开弹窗
      }


      //拼接跳转到报名订单的地址
      let { matchName, matchTimeEnd, matchTime, teamMemberMax, teamMemberMin, registrationFee: total_fee, matchForm, P1, album, menCount, womenCount,mutiEnrool } = this.matchDoc;
      let { matchId, venueId, venueName, cityName } = this;
      let url = `/pages/matchEroll/main?id=1`;
      wx.setStorage({
        key: "matchInfo",
        data: JSON.stringify({
         matchName,matchTime,matchTimeEnd,//比赛结束时间
          total_fee,matchId,venueId,venueName,cityName,matchForm,teamMemberMin,
          teamMemberMax,P1,album,menCount,womenCount,mutiEnrool

        }),
        success() {
          if (matchForm == 1) {
            console.log(url)
            wx.navigateTo({ url });
          } else {

            wx.navigateTo({ url: "/pages/myEroll_groups/main" });

          }

        }
      });
    },
    /**
     * @name pickerChange是球场选择器函数
     * @desc 球场选择，缓存当前选中的球场id
     * @param event是默认值
     */
    pickerChange(event) {
      console.log(`pickerChange-1`);
      // 缓存当前选中的球场id、球场名字、城市名字
      let { index } = event.mp.detail;
      console.log(`index:${index}`);
       console.log(`pickerChange-2`);
       console.log("this.matchDoc:", this.matchDoc);
      let { venueId, cityName, venueName } = this.matchDoc.venue[index];
       console.log(`pickerChange-3`);
      this.venueId = venueId;
      this.cityName = cityName;
      this.venueName = venueName;
    },
    /**
     * @name gotoPage是立即报名函数
     * @desc 点击立即报名按钮，如果不是全国赛事则直接跳转到报名页，否则需要打开弹窗选择球场
     * @param url是跳转的地址
     */
    async gotoPage() {
      if (this.payStatus || this.isMatchIdStatus == 'show') {
        let info = this.matchDoc;
        let url = `/pages/matchEroll/main?id=2`;
        let { sex, orderMoney } = this.orderMsg;
       
        // let active = 2;
        info = { ...this.orderMsg, total_fee: orderMoney };
       let matchInfo={...this.matchDoc,total_fee:orderMoney,sex};
        if (matchInfo.matchForm == 2) {
         
          let { data } = await util.post({
            url: global.PUB.domain + "/crossList?page=tangball_team",
            param:{findJson:{orderId:info.orderId}}
          });
          this.groups = data.list[0]
          wx.setStorage({
            key: "myErollDetail",
            data: JSON.stringify({ info, matchInfo, P1: this.orderMsg.P1 }),
            success() {
              wx.setStorage({
                key: "groupsMsg",data: JSON.stringify(data.list[0]),
                success() {
                  wx.navigateTo({ url });
                }
              });
            }
          });
        } else {
          wx.setStorage({
            key: "myErollDetail",data: JSON.stringify({ info, matchInfo, P1: this.orderMsg.P1 }),
            success() {
              wx.navigateTo({ url });
            }
          });
        }
        return
      }
      // 判断是否登录后进行 操作
      let status = await util.isLogin(this, `/pages/matchDetail/main?id=${this.matchId}`)
      if (status) {
        
        if (this.matchDoc.venue.length > 1) {
          this.showdDialog = true; //打开弹窗
          this.venueId = null; //清空变量
          this.cityName = null;
          this.venueName = null;
          // 拼接球场列表数组
          this.cityVenueList = this.matchDoc.venue.map((item, index) => {
            return item.cityName + "---" + item.venueName;
          });
          let { venueId, cityName, venueName } = this.matchDoc.venue[0];
          this.venueId = venueId; //默认选中第一个
          this.cityName = cityName;
          this.venueName = venueName;
        } else {
          console.log(2222)
          let { venueId, cityName, venueName } = this.matchDoc.venue[0];
          this.venueId = venueId; //默认选中第一个
          this.cityName = cityName;
          this.venueName = venueName;
          this.onCloseDialog()

        }
      } else {
        this.showLogin = true
      }
    },
    /**
     * @name getEnrollList是获取报名订单列表函数
     * @desc 获取报名订单列表，并传入当前的赛事id，判断列表中的会员id是否等于当前会员id，通过isMatchIdStatus状态进行管理
     * @param 接口返回值是报名订单列表
     */
    async getEnrollList() {
      // 判断是否登录后进行 操作




      let { data } = await util.post({
        url: global.PUB.domain + "/crossList?page=tangball_enroll",
        param: {
          findJson: { matchId: this.matchId, memberId: this.tangballUserId }
        }
      });
      
      let nowDate = global.moment().format('YYYY-MM-DD HH:mm');
      let enrollTimeDate = global.moment(this.matchDoc.enrollTime.replace(/-/g, '/')).format('YYYY-MM-DD HH:mm');
      let enrollTimeEnd = global.moment(this.matchDoc.enrollTimeEnd.replace(/-/g, '/')).format('YYYY-MM-DD HH:mm');
      let matchTime = global.moment(this.matchDoc.matchTime.replace(/-/g, '/')).format('YYYY-MM-DD HH:mm');
      let matchTimeEnd = global.moment(this.matchDoc.matchTimeEnd.replace(/-/g, '/')).format('YYYY-MM-DD HH:mm');
    

      if (nowDate > matchTimeEnd) {2
        this.enrollText = '赛事已结束'
        this.isMatchIdStatus = true;
      } else if (nowDate > matchTime) {
        this.enrollText = '正在比赛中'
        this.isMatchIdStatus = true;
      } else if (nowDate > enrollTimeEnd) {
        this.enrollText = '报名时间已结束'
        this.isMatchIdStatus = true;
      } else if (nowDate > enrollTimeDate) {


        if (data.list.length > 0 && this.isLogin) {
     
          this.orderMsg = data.list[0]
          if (data.list[0].payStatus == 1) {
            this.payStatus = true
            this.isMatchIdStatus = false; //变量初始化为false
            this.enrollText = `您已报名，前往缴费`;
          } else {
            // 支持多次报名
            if (this.matchDoc.mutiEnrool==1) {
                this.isMatchIdStatus = false; //变量初始化为false
               this.enrollText = `立即报名`; //初始化为立即报名
            }else{
              this.payStatus = true
              console.log('this.payStatus',this.payStatus)
              this.isMatchIdStatus = "show"; //该用户已经报名
              this.enrollText = "您已报名,查看详情";
            }
          }

        }
        else {
          this.isMatchIdStatus = false; //变量初始化为false
          this.enrollText = `立即报名`; //初始化为立即报名
        }
      } else {

        this.enrollText = "报名时间未到";
        this.isMatchIdStatus = true;
      }
 


    },
    /**
     * @desc  matchTypeChange举办地点函数 当点击举办地点时，选择展开或者折叠
     * @param val是默认传的参数
     */
    matchTypeChange(val) {
      this.NationalmatchIndex = val.mp.detail;
    },
    enrollRequirementsChange(val) {

      this.showEnrollRequirements = val.mp.detail;
    },

    /**
     * @desc 搜索回调
     */
    onSearch() { },
    /**
     * @desc 赛事切换回调
     */
    tabChange(url) {
      wx.switchTab({
        url
      });
    }
  },
  onUnload() {
    wx.flagJumped = false; //页面卸载时改变状态
  },
  async mounted() {
    this.showdDialog = false;
    this.showBigImg = false;
    wx.authorizeJump = false; //控制获取权限之后跳转到当前页面
    /**
     * @desc 请求赛事详情接口函数
     */
    //
    let { data } = await util.post({
      url: global.PUB.domain + "/tangball/getMatchDetail",
      param: { id: this.matchId }
    });
    this.matchDoc = data.Doc; //赛事详情列表
    this.matchTime = global.moment(this.matchDoc.matchTime.replace(/-/g, '/')).format('YYYY-MM-DD') + "至" + global.moment(this.matchDoc.matchTimeEnd.replace(/-/g, '/')).format('YYYY-MM-DD');
    this.enrollTimeEnd = global.moment(this.matchDoc.enrollTimeEnd.replace(/-/g, '/')).format('YYYY-MM-DD HH:mm');


    // 赛事步骤处理
    // for (let index = 0; index < this.matchDoc.progress.length; index = index+3) {
    //   let list = []
    //   let j = 3
    //   if (index+3>this.matchDoc.progress.length) {
    //     j = this.matchDoc.progress.length - index
    //     console.log(j,"j")
    //   }
    //   for (let i = 0; i < j; i++) {
    //     console.log(list)
    //     if (this.matchDoc.progress[index+i].checked == true) {
    //       this.activeStep.group = index/3
    //       this.activeStep.index = i
    //     }
    //     let obj = { text: this.matchDoc.progress[index+i].name, desc: '', value: this.matchDoc.progress[index+i].name }
    //     list[i] = obj
    //   }
    //   console.log(list)
    //   this.steps.push(list)
    // }
    // console.log('this.steps',this.steps)
    this.steps = this.matchDoc.progress.map((item, index) => {
      if (item.checked == true) {
        this.activeStep = index
      }
      let obj = { text: item.name, desc: '', value: item.name }
      return obj
    })
    this.getEnrollList()


    // 如果报名未截止


  },
  async onShow() {
    this.show = true;
    this.isLogin = await util.isLogin(this, `/pages/matchDetail/main?id=${this.matchId}`)

    this.getEnrollList()


  },
  computed: {
    // 当前会员id
    tangballUserId: function () {
      return this.$store.state.tangballUserInfo.P1;
    },
    tangballUserInfo: function () {
      return this.$store.state.tangballUserInfo;
    }
  },
  /**
   * @desc 获取页面参数,
   */

  async onLoad(options) {
    this.payStatus = false
    this.orderMsg = {}

    this.NationalmatchIndex = ['1'];
    this.showEnrollRequirements = ['1']
    if (options.id) {
      //获取页面参数，并赋值与当前的赛事id
      this.matchId = options.id;
    }
    let isShare = options.isShare; //如果是从分享页进来的会有isShare=true参数
    // 显示右上角的分享页方法
    wx.showShareMenu({
      withShareTicket: true,
      success() { },
      fail() { }
    });

    let url = `/pages/matchDetail/main?id=${this.matchId}&isShare=true`; //用于分享页分享的地址
    // /--------是否获取权限和分享页进来-------------/
    if (!wx.flagJumped && isShare) {
      let result = await util.getMyWXSetting(url);
      if (result == undefined) {
        return;
      }
      // //如果未授权，先return,等待用户主动授权
      if (result == "noAuth") {
        // wx.flagJumped = false;
        wx.redirectTo({
          url: `/pages/authorize/main?id=${this.matchId}`
        }); //跳转到授权页面
        return;
      }
    }
    

  },
  //配置分享页的内容
  onShareAppMessage: function () {
    return {
      title: "唐球赛事",
      path: `/pages/matchDetail/main?id=${this.matchId}&isShare=true`
    };
  }
};
</script>
<style scoped>
.swiper-item {
  height: 1000px;
}
.slide-image {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.main-wrap {
  padding-bottom: 60px;
}
.title {
  margin: 10px 20px;
  color: #333;
  border-bottom: 1px solid #000;
}
/* 折叠面板 */
.collapse {
  text-align: center;
  border: 1px solid #fbfbfb;
  border-radius: 5px;
}
/* 折叠面板 内容*/
.collapse span {
  display: block;
  background-color: #fafafa;
  margin: 5px 15px;
}
.enrolled {
  width: 100%;

  font-size: 16px;
  background-color: #eee;
  text-align: center;
  color: gray;
  border: 1px #eee solid;
}

.regulation-box {
  font-size: 16px;
  height: 50px;
  line-height: 50px;
  color: gray;
  margin: 0 10px;
  margin-left: 20px;
  border-bottom: 1px solid #eee;
}
.enrollButton {
  font-size: 16px;
  position: fixed;
  bottom: 8%;
  width: 100%;
  height: 60px;
  line-height: 48px;
}
.match-title-box {
  display: flex;
  margin-top: 10px;
  margin-bottom: -20px;
}
.match-title {
  flex: 0 0 85%;
  padding: 0 10px;
}
.share-button-box {
  flex: 0 0 8%;
  margin-right: 15px;
}
.share-button {
  width: 40px;
  background-color: white;
  color: gray;
  padding: 0;
  border: 0 solid red;
  overflow: visible;
  line-height: 18px;
  position: static;
  text-align: center;
  margin-top: 5px;
  font-size: 20px;
}
.shareImg {
  height: 30px;
}
.share-text {
  font-size: 10px;
  line-height: 10px;
  color: gray;
  text-align: center;
}
.check-box {
  background-color: rgb(0, 155, 77);
  text-align: center;
  color: white;
}
</style>
