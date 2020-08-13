<template>
  <div>
    <p>Mutations</p>
    <button class="btn btn-success" @click="increaseCounter">+ Arttır</button>
    <button class="btn btn-danger" @click="decreaseCounter">- Azalt</button>
    <hr>
    <p>Actions</p>
    <button class="btn btn-success" @click="increment">+ Arttır</button>
    <button class="btn btn-danger" @click="decrement">- Azalt</button>
    <hr>
    <p>Actions ile Async Arttır (2 saniye sonra)</p>
    <button class="btn btn-success" @click="incAsync({time:2000})">+ Async Arttır</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
export default {
  methods : {

    ...mapMutations([
      "increaseCounter",
      "decreaseCounter",
    ]),

    ...mapActions([
      'increment',
      'decrement',
      'incAsync',
    ]),

    // increment(){
    //   this.$store.dispatch("increment");
    // },
    // decrement(){
    //   this.$store.dispatch("decrement");
    // },
    // incrementAsync(){
    //   this.$store.dispatch("incAsync");
    // },
  
    // incrementCounter(){
    //   // this.$store.state.counter++;
    //   this.$store.commit('increaseCounter');
    // },
    // decrementCounter(){
    //   // this.$store.state.counter--;
    //   this.$store.commit('decreaseCounter');
    // }
  }
}
</script>

<style>
</style>
