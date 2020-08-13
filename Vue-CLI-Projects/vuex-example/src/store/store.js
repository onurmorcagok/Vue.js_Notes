import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
  },
  mutations: {
      increaseCounter(state){
          state.counter++;
      },
      decreaseCounter(state){
        state.counter--;
      }
  },
  actions: {
      increment( { commit }){
          commit('increaseCounter');
      },
      decrement( { commit }){
          commit('decreaseCounter');
      },
      incAsync( { commit }){
          setTimeout( () => {
            commit('increaseCounter');
          },2000)
      }
  },
  getters: {
    getCounter(state){
        return state.counter * 2;
      },
  },
});
