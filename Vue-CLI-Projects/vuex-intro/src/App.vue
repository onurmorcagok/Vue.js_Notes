<template>
  <div>
    <h1>Vuex Intro</h1>
    <hr>
    <appShowData></appShowData>
    <button @click="increment">Increment</button>
    <br><br>
    <button @click="decrement">Decrement</button>
    <br><br>
    <button @click="increment2">setCounter</button>
  </div>
</template>

<script>
import ShowData from './components/ShowData'
import { mapActions } from 'vuex'
  export default {
    name: 'App',
    components: {
      appShowData: ShowData,
    },
    methods: {
      ...mapActions([
        'setCount'
      ]),
      increment(){
        this.$store.commit("increment");
      },
      decrement(){
        this.$store.commit("decrement");
      },
      increment2(){
        this.setCount();
      }
    }
  }
</script>

<style>

</style>