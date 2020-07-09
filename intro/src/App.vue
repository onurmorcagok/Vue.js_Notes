<template>
  <div id="container">
    Hello {{ name }}
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "Onur",
      number1: 21,
      number2: 12,
      result: null
    };
  },
  methods: {
    topla() {
      this.result = this.number1 + this.number2;
    }
  }
};
</script>

<style>
</style>
