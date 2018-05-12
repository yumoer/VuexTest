<template>
  <div>
    <p>clieked:{{count}} , count is {{eventOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        count:0
      }
    },

    //计算属性
    computed:{
      eventOrOdd(){
        return this.count%2===1?'奇数':'偶数'
      }
    },

    methods:{
      increment(){
        return this.count++
      },
      decrement(){
        return this.count--
      },
      incrementIfOdd(){
        if(this.count%2===1){
          return this.count++
        }
      },
      incrementAsync(){
        setTimeout(()=>{
          return this.count++
        },1000)
      }
    }
  }
</script>

<style scoped>

</style>
