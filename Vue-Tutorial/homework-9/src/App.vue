<template>
  <div class="container">
    <div class="col-md-6 col-md-offset-3">
      <h3>Directive Sınavı</h3>

      <button v-customOn:click="clickMethod" class="btn btn-info">Click Me</button>

      <h1
        v-customOn:mousemove="mouseMethod"
        v-customOn:mouseleave="mouseLeave"
      >Lorem ipsum dolor sit amet.</h1>

      <br />
      <br />
      <br />

      <div v-color>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, saepe.</div>
      <br />
      <div v-color="'black'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, saepe.</div>
      <br />
      <div
        v-color:background="'red'"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, saepe.</div>
      <br />

      <div
        v-changeBox:background.changeColor="clickDiv"
        v-customOn:mousemove="mouseMethod"
        class="box"
      ></div>
    </div>
  </div>
</template>

<script>
import Directives from "./Directives";
export default {
  name: "App",
  directives: {
    customOn: {
      bind(el, binding) {
        const type = binding.arg;
        const fn = binding.value;

        el.addEventListener(type, fn);

        // el.onclick = function () {
        //   binding.value();
        // };
      },
    },
    changeBox: {
      bind(el, binding) {
        if (binding.modifiers["changeColor"]) {
          if (binding.arg == "background") {
            el.style.backgroundColor = "green";
          }
        }
      },
    },
  },
  methods: {
    clickMethod() {
      alert("Clicked Button..");
    },
    clickDiv() {
      console.log("Div Clicked !");
    },
    mouseMethod() {
      console.log("Mouse Move..");
    },
    mouseLeave() {
      console.log("Mouse Leave..");
    },
  },
};
</script>

<style>
.box {
  width: auto;
  height: 100px;
  background-color: blue;
}
</style>
