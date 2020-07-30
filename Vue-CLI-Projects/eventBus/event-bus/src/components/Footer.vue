<template>
  <div class="card">
    <p>{{ copyright }}</p>
    <br />
    <h3>{{ inComingMessage2 }}</h3>
    <br />
    <input type="text" v-model="message2" placeholder="Please send to message" />
    <br />
    <button @click="sendToMessage">Send Message</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  name: "Footer",
  data() {
    return {
      copyright: "Change here",
      message2: "",
      inComingMessage2: "",
    };
  },
  methods: {
    sendToMessage() {
      eventBus.$emit("sendToMessage2", this.message2);
    },
  },
  watch: {
    message2() {
      setTimeout(() => {
        this.message2 = "";
      }, 5000);
    },
  },
  created() {
    eventBus.$on("changeTitle", (data) => {
      this.copyright = data;
    });
    eventBus.$on("sendToMessage", (message2) => {
      this.inComingMessage2 = message2;
    });
  },
  beforeDestroy() {},
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