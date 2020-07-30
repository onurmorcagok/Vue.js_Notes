<template>
  <div>
      <parent-component></parent-component>
  </div>
</template>

<script>
import parentComponent from "./components/parentComponent";
export default {
    name:'App',
    components:{
        parentComponent
    }
};
</script>

<style>
</style>