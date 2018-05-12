<template>
  <ul class="todo-main">
    <TodoItem v-for="(todo,index) in todos" :key="index" :todo="todo" />
  </ul>
</template>

<script>
  import TodoItem from './TodoItem'
  import storageUtils from "../utils/storageUtils";
  export default {
    //声明接收标签属性
    components:{
      TodoItem
    },

    watch:{
      todos:{
         //深度监视todos，一旦有变化立即保存
        handler:storageUtils.save,
        deep:true
      }
    }
  }
</script>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
