<template>
  <div class="container">
    <Header />
    <hr />
    <div class="row">
    <listComponent/>
    <infoComponent/>
    </div>
    <hr />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import listComponent from './components/listComponent';
import infoComponent from './components/infoComponent';

export default {
  name: "App",
  components: {
    Header,
    Footer,
    listComponent,
    infoComponent,

  },
};
</script>

<style>
</style>
