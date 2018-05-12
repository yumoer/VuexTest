<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader/>
      <TodoList />
      <TodoFooter />
    </div>
  </div>
</template>
<!--
  1.先引入组件
  2.再映射组件标签
  3.添加组件标签
-->
<script>
  import TodoHeader from '../components/TodoHeader'
  import TodoList from '../components/TodoList'
  import TodoFooter from '../components/TodoFooter'

  export default {
    created(){
      //模拟异步读取数据
      this.$store.dispatch('readTodo')
    },
    components: {
      TodoHeader,
      TodoList,
      TodoFooter
    },
  }
</script>

<style scoped>

</style>
