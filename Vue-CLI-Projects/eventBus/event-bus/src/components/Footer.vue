<template>
  <div class="card">
    <p>{{ copyright }}</p>
    <br />
    <h3>{{ inComingMessage }}</h3>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  name: "Footer",
  data() {
    return {
      copyright: "Footer Component",
      inComingMessage: '',
    };
  },
  created() {
    eventBus.$on("changeTitle", (data) => {
      this.copyright = data;
    });
    eventBus.$on('sendToMessage',(message) => {
      this.inComingMessage = message;
    });
  },
  beforeDestroy() {

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