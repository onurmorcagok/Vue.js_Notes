<template>
  <div>
    <li class="list-group-item">
      Sunucu #{{ serverData.id }}
      <p>
        Status:
        <b>{{ serverData.status }}</b>
      </p>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    serverData: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>