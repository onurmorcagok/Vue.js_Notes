<template>
  <div id="container">
    <userFormComponent></userFormComponent>
  </div>
</template>

<script>
import userFormComponent from "./components/userFormComponent";

export default {
  name: "App",
  components: {
    userFormComponent
  }
};
</script>

<style>
#container {
  margin: auto;
  width: 50%;
  border: 5px solid black;
  padding: 10px;
  text-align:center;
}
</style>