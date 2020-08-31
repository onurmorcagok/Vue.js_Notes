<template>
  <div id="app">
    Number: {{ $store.state.count }}
    <br><br>
    <button @click="increment">Increment</button> 
    |
    <button @click="decreament">Decreament</button>
    |
    <button @click="clear">Clear</button>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      increment() {
        this.$store.commit('increment');
      },
      decreament(){
        this.$store.commit('decreament');
      },
      clear(){
        this.$store.commit('clear');
      }
    },
  }
</script>

<style>
#app{
  text-align: center;
  margin-top:50px;
}
</style>