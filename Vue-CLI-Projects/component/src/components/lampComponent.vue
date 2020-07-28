<template>
  <div>
    <p>Lamba Durumu: {{ status }}</p>
    <hr />
    <button @click="openLamp">Lambayı Aç</button>
  </div>
</template>

<script>
export default {
  name: "lampComponent",
  data() {
    return {
      status: "Kapalı",
    };
  },
  methods: {
    openLamp() {
        this.status = "Açık";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>