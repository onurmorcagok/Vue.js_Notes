<template>
  <div class="card">
    <p>{{ copyright }}</p>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  name: "Footer",
  data() {
    return {
      copyright: "Onur 2020",
    };
  },
  created() {
    eventBus.$on("changeTitle", (data) => {
      this.copyright = data;
    });
  },
};
</script>

<style scoped>
.card {
  margin: 20px;
  padding: 20px;
  border: 1px solid black;
  text-align: center;
  width: auto;
}
</style>