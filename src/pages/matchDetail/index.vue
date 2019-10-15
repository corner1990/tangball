<template>
  <div class="main-wrap">

    <!-- 赛事照片 -->
    <div class>
      <swiper
        style="height:250px"
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
              style="width:100%"
              height="250"
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
      <div class="FS24 TAC LH36 match-title">{{matchDoc.matchName}}

      </div>
      <div class="share-button-box" v-if="isLogin">
          <div>
            <button open-type="share" class="share-button">
              <van-icon name="share" class="shareImg"/>
            </button>
          </div>
          <div class="share-text">分享</div>
        </div>


    </div>
    <div style="height:15px;"></div>
    <!-- 赛事步骤 -->

    <van-steps
      :steps="steps"
      :active="activeStep"
      active-color="#F4B116"
    />
    <van-cell-group title="赛事信息">
      <van-cell title="赛事时间" title-width="100px" :value="matchDoc.matchTime" />
      <van-cell title="距报名截止时间" :value="matchDoc.enrollTimeEnd" />
      <van-cell title="赛事类型" :value="matchDoc.matchForm==1?'个人赛':'团队赛'" />


      <van-collapse
        v-model="NationalmatchIndex"
        @change="matchTypeChange"
      >
        <van-collapse-item title="举办地点" name="1">
          <div class="collapse">
            <span
              style="color:black"
              v-for="(item,index) in matchDoc.venue"
              :key="index"
            >{{item.cityName}}--{{item.venueName}}</span>
          </div>
        </van-collapse-item>
      </van-collapse>
      <van-collapse
        v-model="showEnrollRequirements"
        @change="enrollRequirementsChange"
        v-if="matchDoc.enrollRequirements"
      >
        <van-collapse-item title="报名要求" name="1" >
          <div class="collapse">
            {{matchDoc.enrollRequirements}}
          </div>
        </van-collapse-item>
      </van-collapse>
      <van-cell title="报名费" :value="matchDoc.registrationFee" />
      <van-cell title="已报名人数" :value="matchDoc.registeredPersons" />
    </van-cell-group>
    <div class="regulation-box" @click="gotoMatchManual({url:'/pages/macthManual/main'})" v-if="matchDoc.matchManual">
      <div class="FL" style="color:#333;">赛事规程</div>
      <div class="FR"><van-icon name="arrow" /></div>
      <div style="clear:both"></div>
      </div>
    <div class="regulation-box" @click="gotoMatchManual({url:'/pages/matchResult/main'})" >
      <div class="FL" style="color:#333;">赛事结果</div>
      <div class="FR"><van-icon name="arrow" /></div>
      <div style="clear:both"></div>
      </div>
      <div style="height:60px"></div>
    <!-- 如果已经截止报名和该用户已经报名，那么禁选 -->
    <div class="enrolled enrollButton" v-if="isMatchIdStatus">{{enrollText}}</div>
    <van-button class="enrollButton" size="large" type="primary" @click="gotoPage(url)" v-else>{{enrollText}}</van-button>
    <!-- 显示选择场馆弹窗 -->
    <van-dialog
      use-slot
      title="请选择场馆"
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
  components: {
    mytabbar,
    debug_item,
    util
  },
  data() {
    return {
      isLogin:false,
      showLogin:false,
      bigImg: "", //图片点击放大地址
      showBigImg: false, //控制图片点击放大
      showdDialog: false, //控制选择场馆弹窗
      cityVenueList: null, //场馆列表
      venueId: null, //场馆id
      venueName: null, //场馆名字
      cityName: null, //场馆城市名
      NationalmatchIndex: null, //举办地点聚焦
      showEnrollRequirements:null,//报名要求聚焦
      matchId: 37, //  当前赛事id
      isMatchIdStatus: false, //控制是否跳转报名列表的状态
      activeStep: 0, //步骤条id
      enrollText: "立即报名", //管理是否立即报名的文字
      steps: [
        //步骤条数组

      ],
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
    showLoginDialog(){
      this.showLogin =false
      util.gotoPage(`/pages/authorize/main?id=${this.matchId}`);


    },
    // 跳转赛事规程的方法
    gotoMatchManual(url){
      wx.setStorage({
          key: "matchInfo",
          data: JSON.stringify(this.matchDoc),
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
      if(this.matchDoc.venue.length>1){
        this.showdDialog = !this.showdDialog; //控制是否打开弹窗
      }

      //拼接跳转到报名订单的地址
      let { matchName, matchTime,teamMemberMax,teamMemberMin, registrationFee: total_fee,matchForm } = this.matchDoc;
      let { matchId, venueId, venueName, cityName } = this;
      let url = `/pages/matchEroll/main?id=1`;
      wx.setStorage({
        key: "matchInfo",
        data: JSON.stringify({
          matchName,
          matchTime,
          total_fee,
          matchId,
          venueId,
          venueName,
          cityName,
          matchForm,
          teamMemberMin,
          teamMemberMax
        }),
        success() {
          if (matchForm == 1) {
            wx.navigateTo({ url });
          }else{

               wx.navigateTo({ url:"/pages/myEroll_groups/main" });

          }

        }
      });
    },
    /**
     * @name pickerChange是场馆选择器函数
     * @desc 场馆选择，缓存当前选中的场馆id
     * @param event是默认值
     */
    pickerChange(event) {
      // 缓存当前选中的场馆id、场馆名字、城市名字
      let { index } = event.mp.detail;
      let { venueId, cityName, venueName } = this.matchDoc.cityVenueList[index];
      this.venueId = venueId;
      this.cityName = cityName;
      this.venueName = venueName;
    },
    /**
     * @name gotoPage是立即报名函数
     * @desc 点击立即报名按钮，如果不是全国赛事则直接跳转到报名页，否则需要打开弹窗选择场馆
     * @param url是跳转的地址
     */
   async gotoPage() {
    //  console.log('aaaa');
    //   console.log('11111',wx.getStorageSync("groupsMsg"));
     // 判断是否登录后进行 操作
      let status = await util.isLogin(this,`/pages/matchDetail/main?id=${this.matchId}`)
      console.log(status);
      if (status) {
        if (this.matchDoc.venue.length>1) {
          this.showdDialog = true; //打开弹窗
        this.venueId = null; //清空变量
        this.cityName = null;
        this.venueName = null;
        // 拼接场馆列表数组
        this.cityVenueList = this.matchDoc.venue.map((item, index) => {
          return item.cityName + "---" + item.venueName;
        });
        let { venueId, cityName, venueName } = this.matchDoc.venue[0];
        this.venueId = venueId; //默认选中第一个
        this.cityName = cityName;
        this.venueName = venueName;
        }else{
          let { venueId, cityName, venueName } = this.matchDoc.venue[0];
          this.venueId = venueId; //默认选中第一个
        this.cityName = cityName;
        this.venueName = venueName;
          this.onCloseDialog()

        }
      }else{
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

      let status =await util.isLogin(this,`/pages/matchDetail/main?id=${this.matchId}`)


      if (status) {
        let { data } = await util.post({
        url: global.PUB.domain + "/crossList?page=tangball_enroll",
        param: {
          findJson: { matchId: this.matchId, memberId: this.tangballUserId }
        }
      });
      this.isMatchIdStatus = false; //变量初始化为false
      this.enrollText = "立即报名"; //初始化为立即报名
      if (data.list[0].P1) {
        this.isMatchIdStatus = true; //该用户已经报名
        this.enrollText = "您已报名";
      }
      }else{
        this.isMatchIdStatus = false; //变量初始化为false
        this.enrollText = "立即报名"; //初始化为立即报名
      }

    },
    /**
     * @desc  matchTypeChange举办地点函数 当点击举办地点时，选择展开或者折叠
     * @param val是默认传的参数
     */
    matchTypeChange(val) {
      this.NationalmatchIndex = val.mp.detail;
    },
    enrollRequirementsChange(val){
      this.showEnrollRequirements = val.mp.detail;
    },
    async onShow() {

      this.show = true;

    },
    /**
     * @desc 搜索回调
     */
    onSearch() {},
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
    console.log('this.matchDoc',this.matchDoc);

    // 赛事步骤处理
    this.steps = this.matchDoc.progress.map((item,index)=>{
      if (item.checked == true) {
        this.activeStep = index
      }
      let obj = {text:item.name,desc:'',value:item.name}
      return obj
    })
    console.log(this.matchDoc);

    // 如果报名未截止
    if (this.matchDoc.publicationStatus == 1) {
      if (this.matchDoc.enrollStatus == "3") {
        this.enrollText = "报名时间已结束";
        this.isMatchIdStatus = true;
      } else if (this.matchDoc.enrollStatus == "1") {
        this.enrollText = "报名时间未开始";
        this.isMatchIdStatus = true;
      } else if (this.matchDoc.enrollStatus == "4") {
        this.enrollText = "报名时间设置异常";
        this.isMatchIdStatus = true;
      } else {
        this.getEnrollList(); //获取报名订单列表函数
      }
    } else {
      this.enrollText = "赛事未发布";
      this.isMatchIdStatus = true;
    }
  },
  computed: {
    // 当前会员id
    tangballUserId: function() {
      return this.$store.state.tangballUserInfo.P1;
    }
  },
  /**
   * @desc 获取页面参数,
   */

  async onLoad(options) {

    this.NationalmatchIndex=null;
    if (options.id) {
      //获取页面参数，并赋值与当前的赛事id
      this.matchId = options.id;
    }
    let isShare = options.isShare; //如果是从分享页进来的会有isShare=true参数
    // 显示右上角的分享页方法
    wx.showShareMenu({
      withShareTicket: true,
      success() {},
      fail() {}
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
    this.isLogin = await util.isLogin(this,`/pages/matchDetail/main?id=${this.matchId}`)
      console.log('aaaa',this.isLogin);
  },
  //配置分享页的内容
  onShareAppMessage: function() {
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
  height: 120%;
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
  height: 50px;
  line-height: 48px;
  font-size: 16px;
  background-color: #eee;
  text-align: center;
  color: gray;
  border: 1px #eee solid;
}

.regulation-box{
  font-size: 16px;
  height: 50px;
  line-height: 50px;
  color: gray;
  margin: 0 10px;
  margin-left: 20px;
  border-bottom: 1px solid #eee;

}
.enrollButton{
  position: fixed;
  bottom: 10%;
  width: 100%;
}
.match-title-box{
  display: flex;
  margin-top:10px;
  margin-bottom: -20px;
}
.match-title{
  flex:0 0 85%;
  padding: 0 10px;
}
.share-button-box{
  flex:0 0 8%;
  margin-right: 15px
}
.share-button{

  width: 40px;
  background-color: white;
  color: gray;
  padding: 0;
  border:0 solid red;
  overflow:visible;
  line-height: 18px;
  position: static;
  text-align: center;
  margin-top:5px;
  font-size: 20px;
}
.shareImg{
  height: 30px;
}
.share-text{
  font-size: 10px;
  line-height: 10px;
  color: gray;
  text-align: center;
}
</style>
