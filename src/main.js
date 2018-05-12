/*入口文件*/
import Vue from 'vue'
import App from './App'
import store from './vuex/store'

/*创建vm*/
new Vue ({
  el:'#app',
  template:'<App/>',
  components: { App },
  store
})
