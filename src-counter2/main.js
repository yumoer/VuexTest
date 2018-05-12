/*入口js*/
import Vue from 'vue'
import Counter from './Counter'
import store from './store'


/*创建vm*/
new Vue ({
  el:'#app',
  components:{ Counter },
  template: '<Counter/>',
  store //注册上vuex的store：所有组件对象都多一个属性 $store 方法（读/更新）
})
