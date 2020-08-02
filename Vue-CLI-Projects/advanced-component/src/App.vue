<template>
  <div class="container">
    <div class="col-md-6 col-md-offset-3">
      <br />
      <br />
      <button @click="selectedComponent = 'Memory'" class="btn btn-sm btn-primary">Memory Component</button>
      <button @click="selectedComponent = 'NewMemory'" class="btn btn-sm btn-primary">NewMemory Component</button>
      <button @click="selectedComponent = 'Author'" class="btn btn-sm btn-primary">Author Component</button>
      <hr />
      <p>Selected Component: {{ selectedComponent }}</p>
      <hr />

      <keep-alive> <!-- Component'i canlı tutar, tekrar destroy etmez. -->
        <component :is="selectedComponent">
          <h1 slot="title">Have a nice day...</h1>
          <p slot="description">This is nice week.</p>
        </component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Memory from "./components/Memory";
import NewMemory from "./components/NewMemory";
import Author from "./components/Author";
export default {
  name: "App",
  components: {
    Memory,
    Author,
    NewMemory,
  },
  data() {
    return {
      selectedComponent: "Memory",
    };
  },
};
</script>

<style>
</style>