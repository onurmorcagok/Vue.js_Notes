<template>
  <div class="child1">
    <div>
      <h3>{{ inComingMessage }}</h3>
      <input type="text" v-model="message" />
      <br />
      <button @click="sendMessage">Send Message</button>
    </div>
  </div>
</template>

<script>

import { EventBus, EventBusListener } from "../eventBus";
import mixins from '../mixins';

export default {
  name: "WrapperChild2",
  mixins: [mixins],
  data() {
    return {
      
    };
  },
  methods: {
    sendMessage() {
      EventBus.$emit(EventBusListener.WRAPPER_2_MESSAGE, this.message);
    },
  },
  created() {
    EventBus.$on(EventBusListener.WRAPPER_1_MESSAGE, (text) => {
      this.inComingMessage = text;
    });
  },
  beforeDestroy() {
    
  },
};
</script>

<style scoped>
.child1 {
  border: solid 1px #cccccc;
  background-color: lavender;
  padding: 10px;
}
</style>
