<template>
  <div class="debug_item">
    <div class="FWB PSR">
      {{text}}:{{pathNeed}}
      <van-icon class="PSA R3 T3" :name="iconName" size="20px" @click="expand"/>
    </div>
    <div class="valueShow" :style="{'max-height':maxHeight+'px;'}">{{valueNeed}}</div>
  </div>
</template>

<script>
/* eslint-disable */
import util from "@/utils/util";
import lodash from "lodash";
console.log("util", util);
export default {
  components: {
    //注册组件
  },
  watch: {
    value: {
      handler(newName, oldName) {
        console.log("value changed");
        this.setValue(); //调用：{设置值函数}
      },
      immediate: true,
      deep: true
    }
  },

  props: ["text", "value"],
  data() {
    //var valueNeed = JSON.stringify(this.value);//{Json对象转换Json字符串函数}

    return {
      pathNeed:null,
      iconName: "arrow-down",
      maxHeight: 100,
      valueNeed: this.value
    };
  },

  methods: {
    expand() {
      console.log("expand");
      if (this.maxHeight == 100) {
        this.maxHeight = 10000;
        this.iconName = "arrow-up";
      } else {
        this.maxHeight = 100;
        this.iconName = "arrow-down";
      }
    },
    setValue() {
      //函数：{设置值函数}
      let type = util.type(this.value);
      if (type === "array" || type === "object") {
        //如果{000}000
        this.valueNeed = JSON.stringify(this.value, null, 2); //{Json对象转换Json字符串函数}
      } else {
        this.valueNeed = this.value;
      }
    }
  },
  created() {
//获取v-model变量名（表达式）
    this.pathNeed  = lodash.get(this, "$vnode.data.model.expression");
console.log("this.pathNeed", this.pathNeed);

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.valueShow {
  overflow-y: auto;
  max-height: 200px;
  white-space: pre-wrap;
}

.debug_item {
  padding: 5px;
  border: 1px #f30 solid;
  margin: 5px;
}
</style>
