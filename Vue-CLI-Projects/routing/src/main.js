import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history', // URL üzerinde # kullanımı için tanımlanır. Default değeri "hash" olarak alır ve URL # ile gelir.
  scrollBehavior(to,from,savedPosition){
    if(to.hash){
      return {
        selector: to.hash
      }
    }
    // return {x:0, y:800 }
  }
});

// Tüm routerların girişinde component erişiminde componentleri kontrol ediyoruz.
router.beforeEach((to,from,next) => {

  console.log("Global olarak kontrol");
  next(); // Next kontrol açısından oldukça önemli..
  
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
