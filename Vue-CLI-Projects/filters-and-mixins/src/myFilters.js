import Vue from "vue";

Vue.filter("lowerCase", (value) => { // Global Filter
  return value.toLowerCase();
});

Vue.filter("currencyTL",(value) => {
  return `${value}.00 TL`;
})

