<template>
  <div id="app">
    <div id="nav">
      <appNavbar></appNavbar>
    </div>
    <router-view/>
  </div>
</template>

<script>

import Vue from 'vue';
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    appNavbar: Navbar,
  },
  created(){
    window.vueInstance = this;
  }
}
</script>

<style>
 body {
 background-image: url("https://www.indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2020/03/23/321111-338703677.jpg?itok=8VnEjVfu");
 background-size:cover;
}
</style>