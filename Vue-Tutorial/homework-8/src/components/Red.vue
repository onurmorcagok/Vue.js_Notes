<template>
  <div>
    <slot name="title"></slot>
    <slot name="description"></slot>
    <span>{{ message }}</span>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  name: "Red",
  data() {
    return {
      message: '',
    }
  },
  created() {
      eventBus.$on('sendToMessage', (message) => {
        this.message = message;
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