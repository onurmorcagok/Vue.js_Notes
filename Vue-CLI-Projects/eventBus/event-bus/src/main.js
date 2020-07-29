import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
