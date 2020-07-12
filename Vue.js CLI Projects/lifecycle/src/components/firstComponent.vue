<template>
  <div>
    <div>First Component Called</div>

    <button @click="message = 'Hello Vue! Message is change :)'">Message Change</button>

    <div>{{message}}</div>

  </div>
</template>

<script>
export default {
  name: "firstComponent",
  data() {
    return {
      message: "",
      isShow: false
    };
  },
  beforeCreated() {},
  created() {
    // ***
    console.log("Created is here");
    this.message = "Created";
  },
  beforeMount() {},
  mounted() {
    // ***
    console.log("Mounted is here");
    this.message = "Mounted";
  },
  beforeUpdated() {},
  updated() {
    // ***
    console.log("Updated is here");
  },
  beforeDestroy() {
    // ***
    console.log("Before Destroyed is here");
    this.message = "Before Destroy";
  },
  destroyed() {
    console.log("Destroyed is here");
    this.message = "Destroy";
  }
};
</script>

<style>
</style>