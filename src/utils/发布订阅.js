let event = {
  events: {
  }, // 保存事件
  on (evenTypes, handle) {
    // 判断当前的事件对了里有没有对应的事件池，有的话直接push，没有的话新增
    if (!this.events[evenTypes]) {
      this.events[evenTypes] = [handle]
    } else {
      this.events[evenTypes].push(handle)
    }
  },
  emit () {
    var evenTypes = arguments[0];
    var params = Array.from(arguments).slice(1);
    // 需要执行的事件队列
    var fns = this.events[evenTypes];
    // 如果时间队列为空或者不不是数组，直接返回
    if (!Array.isArray(fns) || fns.length < 1) return false;
    // 如果有事处理函数，则遍历执行所有的事件队列
    // fns.map(fn => fn(params))
    // 处理接收参数
    fns.map(fn => fn.apply(null, params))
    // 处理只需要执行一次函数
    this.events[evenTypes] = fns.filter(fn => !fn.type || fn.type !== 'once')
  },
  del(evenTypes, handle) {
    let fns = this.events[evenTypes];
    if (!Array.isArray(fns) || fns.length === 0) return false;
    this.events[evenTypes] = fns.filter(fn => fn !== handle);
  },
  once (evenType, handle) {
    // 添加自定义属性type, 在函数执行之后方便删除
    handle.type = 'once';
    if (!this.events[evenType]) {
      this.events[evenType] = [handle]
    } else {
      this.events[evenType].push(handle)
    }
  }
};
function one(params) {
  console.log('one')
}
function two(params) {
  console.log('two')
}
function three(...params) {
  console.log('three', params)
}
function four(...params) {
  console.log('four', params)
}
// 订阅事件
event.on('evenType', one)
event.on('evenType', two)
event.once('click', three)
event.on('click', four)
// 删除事件
event.del('evenType', one)
// 发布事件
event.emit('evenType')
event.emit('click', 1,2,3,4)
event.emit('click', 1,2,3,4)
