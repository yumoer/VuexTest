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
    mounted(){
      console.log(this.$store)
    },

    //计算属性
    computed:{
      count(){
        return this.$store.state.count
      },
      eventOrOdd(){
        return this.$store.getters.eventOrOdd
      }
    },

    methods:{
      increment(){
        this.$store.dispatch('increment')
      },
      decrement(){
        this.$store.dispatch('decrement')
      },
      incrementIfOdd(){
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync(){
        this.$store.dispatch('incrementAsync')
      }
    }
  }
</script>

<style scoped>

</style>
