<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkAll"/>
    </label>
    <span>
          <span>已完成{{completeSize}} / 全部{{totalSize}}</span>
        </span>
    <button class="btn btn-danger" @click="deleteAllCompleted">清除已完成任务</button>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    computed:{
      completeSize(){
        return this.todos.reduce((preTotal,todo)=>preTotal+(todo.complete?1:0),0)
      },
      isAllDone:{
        get(){ //决定是否勾选
          return this.completeSize === this.todos.length && this.completeSize > 0
        },
        set(value){ //点击了全选的checkbox，value是当前checkbox的选中状态（true/false）
          this.$store.dispatch(value)
        }
      }
    },
    methods:{
      deleteAllCompleted(){
        if(window.confirm('确定要删除已经完成的选项嘛？')){
          this.deleteCompleteTodos()
        }
      }
    }
  }
</script>

<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
