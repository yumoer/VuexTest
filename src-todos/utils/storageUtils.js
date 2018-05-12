/*向local中存储数据的功能工具模块*/
/*
  1.向外暴露一个函数（功能）, 只有一个功能需要暴露
  export default fun1(){}
  export default fun2(){}
  2.向外暴露一个对象（功能），有多个功能需要暴露
  export default {fun1(){},fun2(){}}
*/
const TODOS_KEY = 'todos_key'
export default {
  readTodos () {
    return JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
  },
  savaTodos (todos) {
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos))
  }
}
