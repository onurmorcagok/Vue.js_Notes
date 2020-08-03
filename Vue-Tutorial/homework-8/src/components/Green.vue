<template>
  <div>
    <slot name="title"></slot>
    <slot name="description"></slot>
    <p>{{ message }}</p>
    <button @click="sendToMessage">Send Message</button>
  </div>
</template>

<script>
import { eventBus } from '../main'
  export default {
    name: 'Green',
    data() {
      return {
        message: '',
      }
    },
    methods: {
        sendToMessage() {
            eventBus.$emit('sendToMessage',this.message);
        }
    },
    created() {
      eventBus.$on('sendToMessage', (message) => {
        this.message = message;
      })
    }
  }
</script>

<style scoped>
div {
  border: 1px solid green;
  background-color: lightgreen;
  padding: 30px;
  margin: 20px auto;
  text-align: center;
}
</style>