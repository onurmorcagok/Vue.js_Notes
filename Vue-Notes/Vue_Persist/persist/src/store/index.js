import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: "vuejsBootcamp",
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decreament(state) {
      state.count--;
    },
    clear(state) {
      confirm("Do you want to delete ?");
      state.count = 0;
    },
  },
  actions: {},
  modules: {},

  plugins: [vuexLocal.plugin],
});
