<template>
  <div id="app">
    <lampComponent :key="lamp" v-for="lamp in 5"/>
  </div>
</template>

<script>

import lampComponent from './components/lampComponent';

export default {

  name: 'App',
  components: {
    lampComponent,
  }
}
</script>

<style>

</style>
