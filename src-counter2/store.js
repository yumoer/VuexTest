/*vuex最核心的管理对象*/
import Vue from 'vue'
import Vuex from 'vuex'

//使用vuex插件
Vue.use(Vuex)

/*相当于data对象的状态对象*/
const state = {
  count:0  //指定初始化数据
}

/*包含了n个直接更新状态方法的对象*/
const mutations = {
  INCREMENT(state){
    state.count++
  },
  DECREMENT(state){
    state.count--
  }
}

/*包含了n个间接更新状态方法的对象*/
const actions = {
  increment({commit}){
    //提交一个mutation请求,函数名是个字符串类型
    commit('INCREMENT')
  },
  decrement({commit}){
    //提交一个mutation请求,函数名是个字符串类型
    commit('DECREMENT')
  },
  incrementIfOdd({commit,state}){
    //提交一个mutation请求,函数名是个字符串类型
    if(state.count%2===1){
      commit('INCREMENT')
    }
  },
  incrementAsync({commit}){
    //提交一个mutation请求,函数名是个字符串类型
    setTimeout(()=>{
      commit('INCREMENT')
    },1000)
  },
}

//包含多个getter计算属性的对象
const getters = {
  eventOrOdd(state){  //当读取属性值时自动调用返回属性值
    return state.count%2===1?'奇数':'偶数'
  }
}

/**/
export default new Vuex.Store ({
  state,
  mutations,
  actions,
  getters
})
