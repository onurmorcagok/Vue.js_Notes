import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods: {
    changeAge(age){
      this.$emit('ageChanged',age);
    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
