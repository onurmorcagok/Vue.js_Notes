<template>
  <div>
    <p class="counter-container">Second Result Sayaç : {{ getCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SecondResult",
  computed: {
    ...mapGetters({
      getCounter: "getCounter"
    }),
    // counter() {
    //   return this.$store.getters.getCounter;
    // },
  },
};
</script>

<style lang="scss" scoped>
</style>