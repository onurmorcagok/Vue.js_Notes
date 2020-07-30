<template>
  <div class="col-md-s6">
    <h3>Child Component 2</h3>
    <p>Child 2 Component</p>
    <p>User Age: {{ age }}</p>
    <button @click="changeAge">Yaş Bilgisini Değiştir</button>
  </div>
</template>

<script>
import {eventBus} from "../main";
export default {
  name: "child2Component",
  props: {
    age: {
      type: Number,
    },
  },
  methods: {
    changeAge() {
      this.age = 30;
      //this.$emit("ageChanged", this.age);
      //eventBus.$emit("ageChanged", this.age);
      eventBus.changeAge(this.age);
    },
  },
};
</script>

<style scoped>
div {
  background-color: lightgoldenrodyellow;
  padding: 20px;
  border: 1px solid #666;
  display: inline-block;
}
</style>

