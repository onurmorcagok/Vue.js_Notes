<template>
  <div>
    <p v-color:backgroundColor.delay>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, facilis.</p>
    <p v-color:backgroundColor.delay = "'gray'">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, facilis.</p>
    <p
      v-color:backgroundColor.delay="'black'"
    >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, facilis.</p>
    <p
      v-color:backgroundColor.delay="'yellow'"
    >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, facilis.</p>
  </div>
</template>

<script>
import Directives from "./Directives";
export default {
  name: "App",
  directives: {
    color: {
      bind(el, binding) {

        el.style.color = "red";
        // el.style.backgroundColor = "black";
        // el.style.backgroundColor = binding.value;

        if (binding.modifiers["delay"]) {
          setTimeout(() => {
            if (binding.arg == "backgroundColor") {
              el.style.backgroundColor = binding.value;
            } else {
              el.style.color = "black";
            }
          }, 1000);
        }
      }
    }
  }
}
</script>

<style>
</style>