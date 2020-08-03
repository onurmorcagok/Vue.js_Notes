<template>
  <div>
    <slot name="title"></slot>
    <slot name="description"></slot>
    <p>{{ message }}</p>
    <p>{{ messageRed }}</p>
    <button @click="sendToMessageRed">Send Message</button>
  </div>
</template>

<script>
import { eventBus } from '../main'
  export default {
    name: 'Green',
    data() {
      return {
        message: '',
        messageRed: 'Bu mesaj Yeşil Component içerisinden gelmiştir. '
      }
    },
    methods: {
        sendToMessageRed() {
            eventBus.$emit('sendToMessageRed',this.messageRed);
        }
    },
    created() {
      eventBus.$on('sendToMessageBlue', (message) => {
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