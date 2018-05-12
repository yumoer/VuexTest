/*入口js*/
import Vue from 'vue'
import Counter from './Counter'



/*创建vm*/
new Vue ({
  el:'#app',
  components:{ Counter },
  template: '<Counter/>'
})
