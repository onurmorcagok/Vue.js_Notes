import Vue from 'vue'

Vue.directive('color',{
  bind(el,binding){
    el.style.backgroundColor = "green";
    el.style.color = "white"
    el.style.backgroundColor = binding.value;

    if(binding.arg == 'red'){
      el.style.backgroundColor = binding.value;
    } 
  }
});