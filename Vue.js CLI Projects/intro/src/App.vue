<template>
  <div>
    <HelloWorld name="Onur" surname="MORCAGÖK" :user="myUser"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      myUser: {
        name: "John",
        surname: "Doe"
      }
    };
  }
};
</script>

