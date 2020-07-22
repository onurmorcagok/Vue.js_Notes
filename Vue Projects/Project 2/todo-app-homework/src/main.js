import Vue from 'vue'
import App from './App.vue'

import { extend, localize } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import tr from 'vee-validate/dist/locale/tr.json';

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});
localize('tr', tr);

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
