<template>
  <div>
    <slot name="title"></slot>
    <slot name="description"></slot>
    <p>{{ messageBlue }}</p>
    <p>{{ messageRed }}</p>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  name: "Red",
  data() {
    return {
      messageBlue: '',
      messageRed: '',
    }
  },
  created() {
      eventBus.$on('sendToMessageRed', (messageRed) => {
        this.messageRed = messageRed;
      }),
      eventBus.$on('sendToMessageBlue', (messageBlue) => {
        this.messageBlue = messageBlue;
      })
    }
};
</script>

<style scoped>
div {
  border: 1px solid red;
  background-color: lightcoral;
  padding: 30px;
  margin: 20px auto;
  text-align: center;
}
</style>