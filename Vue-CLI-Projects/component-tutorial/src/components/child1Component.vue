<template>
  <div class="wcol-md-6">
    <h3>Child Component 1</h3>
    <p>Child 1 Component</p>
    <p>Name: {{ message }}</p>
    <p>Reverse Name: {{ switchName() }}</p>
    <p>User Age: {{ age }} </p>
    <button @click="sendToParent">SendToParent</button>
  </div>
</template>

<script>
import {eventBus} from '../main';
export default {
  name: "child1Component",
  props: {
    message: {
      type: String,
      required: true,
      default: "Beşiktaş J.K",
    },
    age: {
      type: Number,
    },
  },
  methods: {
    switchName() {
      return this.message.split("").reverse().join("");
    },
    sendToParent() {
      this.$emit("sendToParent", "MORCAGÖK"); //$event kullanarak buradan gönderilen "MORCAGÖK" değerini yakalayabiliriz.
    },
  },
  created(){
      eventBus.$on("ageChanged",(age) => {
          this.age = age;
      });
  },
};
</script>

<style scoped>
div {
  background-color: lightcoral;
  padding: 20px;
  border: 1px solid #666;
  display: inline-block;
}
</style>
