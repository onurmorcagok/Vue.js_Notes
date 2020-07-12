<template>
  <div>
    <button @click="isShow =! isShow">Göster / Gizle</button>
    <firstComponent v-if="isShow" />
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
    firstComponent: () => import("./components/firstComponent")
  },
  data() {
    return {
      isShow: false,
    };
  },
};
</script>

<style>
</style>