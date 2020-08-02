<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br />
        <button @click="selectedComponent = 'Blue'" class="btn btn-primary">Mavi Temayı Yükle</button>
        <button @click="selectedComponent = 'Green'" class="btn btn-success">Yeşil Temayı Yükle</button>
        <button @click="selectedComponent = 'Red'" class="btn btn-danger">Kırmızı Temayı Yükle</button>
        <hr />
        <p>Selected Component: {{ selectedComponent }}</p>
        <hr />

        <keep-alive>
          <component :is="selectedComponent">
            <h1 slot="title"> {{ selectedComponent }} Title Field</h1>
            <p slot="description"> {{ selectedComponent }} Description Field</p>
          </component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  name: "App",
  components: {
    Blue,
    Green,
    Red,
  },
  data() {
    return {
      selectedComponent: "",
    };
  },
};
</script>

<style>
</style>
