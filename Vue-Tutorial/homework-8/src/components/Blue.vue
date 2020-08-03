<template>
  <div>
    <slot name="title"></slot>
    <slot name="description"></slot>
    <p hidden>{{ message }}</p>
    <button @click="sendToMessage">Send Message</button>
  </div>
</template>

<script>
import { eventBus } from '../main'
export default {
    name: 'Blue',
    data() {
        return {
            message: 'Bu mesaj Mavi Component içerisinden gelmiştir. ',
        }
    },
    methods: {
        sendToMessage() {
            eventBus.$emit('sendToMessageBlue',this.message);
        }
    }
};
</script>

<style scoped>
div {
  border: 1px solid blue;
  background-color: lightblue;
  padding: 30px;
  margin: 20px auto;
  text-align: center;
}
</style>