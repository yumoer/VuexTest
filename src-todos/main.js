/*入口js文件*/
import Vue from 'vue'
import App from './components/App'
import store from './store'

import './index.css'

const state = {
  todos:[]
}

/*创建vm*/
new Vue ({
  el:'#app',
  components:{ App },
  template: "<App/>",
  store
})

