<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3" >
        <h1 class="text-center">VUEX</h1>
        <hr>
        <appResult :counter="counter"></appResult>
        <hr>
        <appSecondResult :counter="counter"></appSecondResult>
        <hr>
        <appCounter @counterEvent="counter += $event"></appCounter>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from './components/Counter'
import Result from './components/Result'
import SecondResult from './components/SecondResult'
  export default {
    name: 'App',
    data(){
      return {
        counter: 0,
      }
    },
    components: {
      appCounter: Counter,
      appResult: Result,
      appSecondResult: SecondResult,
    }
  }
</script>

<style>

</style>