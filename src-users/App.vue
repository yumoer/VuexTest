<template>
  <div class="container">
    <Search/>
    <Content/>
  </div>
</template>

<script>
  import Search from './components/Search'
  import Content from './components/Content'
  export default {
    components:{
      Search,
      Content
    }
  }
</script>

<style scoped>

</style>
