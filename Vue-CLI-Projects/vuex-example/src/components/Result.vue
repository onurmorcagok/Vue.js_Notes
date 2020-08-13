<template>
  <div>
    <p class="counter-container">Sayaç : {{ counter }}</p>
  </div>
</template>

<script>
export default {
  name: "Result",
  computed: {
    counter() {
      return this.$store.getters.getCounter;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>