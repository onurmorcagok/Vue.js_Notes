import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    photoList: [],
  },
  mutations: {
    setPhotos: (state, photoList) => (state.photoList = photoList),
  },
  actions: {
    async fetchPhotos({ commit }) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );

      commit("setPhotos", response.data);
      // console.log(response.data);
    },
    async filterPhotos({ commit }, event){
      const selectID = parseInt(event.target.options[event.target.options.selectedIndex].innerText);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );

      commit('setPhotos',response.data);
      console.log(response.data);

    }
  },
  modules: {},
  getters: {
    allPhotos: (state) => state.photoList,
  },
});
