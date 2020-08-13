<template>
  <div>
    <p>Mutations</p>
    <button class="btn btn-success" @click="increaseCounter">+ Arttır</button>
    <button class="btn btn-danger" @click="decreaseCounter">- Azalt</button>
    <hr />
    <p>Actions</p>
    <button class="btn btn-success" @click="increment">+ Arttır</button>
    <button class="btn btn-danger" @click="decrement">- Azalt</button>
    <hr />
    <p>Actions ile Async Arttır (2 saniye sonra)</p>
    <button class="btn btn-success" @click="incAsync">+ Async Arttır</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
export default {
  name: "Counter",
  methods: {
      ...mapMutations([
          'increaseCounter',
          'decreaseCounter',
      ]),
      ...mapActions([
          'increment',
          'decrement',
          'incAsync'
      ])
  }
};
</script>

<style>
</style>