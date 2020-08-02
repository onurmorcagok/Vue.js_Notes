<template>
  <div class="container">
    <div class="memory">
      <slot name="title"></slot>
      <slot name="description"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Memory",
  props: {
    content: {
      type: String,
    },
  },
};
</script>

<style scoped>
div.memory {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px #666;
  padding: 10px 20px;
  margin-top: 20px;
}

.container {
  width: auto;
}
</style>