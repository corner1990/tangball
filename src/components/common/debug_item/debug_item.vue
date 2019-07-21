<template>
  <div class="debug_item">
    <div class="FWB">{{text}}:{{path}}</div>
    <div class="valueShow">{{valueNeed}}</div>
  </div>
</template>

<script>
/* eslint-disable */
import  util  from '@/utils/util'
console.log("util", util);
export default {
  components: {
    //注册组件

  },
  watch: {
    value: {
      handler(newName, oldName) {
        console.log('value changed');
        this.setValue()//调用：{设置值函数}
       

      },
      immediate: true,
      deep: true
    }
  },

  props: ["path", "text", "value"],
  data() {


    //var valueNeed = JSON.stringify(this.value);//{Json对象转换Json字符串函数}

    return {
      valueNeed: this.value,
    };
  },

  methods: {
    setValue(){//函数：{设置值函数}
       let type = util.type(this.value);
        if (type === "array" || type === "object") {//如果{000}000
          this.valueNeed = JSON.stringify(this.value, null, 2);//{Json对象转换Json字符串函数}




        }else{
           this.valueNeed = this.value;
        }
    }

  },
  created() {



  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.valueShow {
  overflow-y: auto;
  max-height: 120px;
}

.debug_item {
  padding: 5px;
  border: 1px #f30 solid;
  margin: 5px;
}
</style>
