/**/
import storageUtils from '../utils/storageUtils'
import {ADD_TODO,REMOVE_TODO,DELETE_DONE,UPDATE_ALL_TODOS,RECEIVE_TODOS} from './types'

export default {
  readTodo({commit}){
    setTimeout(()=>{
      const todos = storageUtils.fetch()
      //提交commit触发muation调用
      commit(RECEIVE_TODOS,{todos})
    },1000)
  },

  addTodo({commit},todo){
    commit(ADD_TODO,{todo})
  },
  removeTodo({commit},todo){
    commit(REMOVE_TODO,{todo})
  },

  deleteDone({commit}){
    commit(DELETE_DONE)
  },

  updateAllTodos({commit},isCheck){
    commit(UPDATE_ALL_TODOS,{isCheck})
  }

}
