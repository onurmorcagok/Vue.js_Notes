import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchMovies:[],
    favorites:[],
  },
  mutations: {
    SET_MOVIES(state,movies){
      state.searchMovies = movies;
    },
    SET_FAVORITE(state,movie){
      state.favorites = movie;
    },
    REMOVE_FAVORITE(state,movie){
      const index = state.favorites.findIndex((item) => item.imdbID === movie.imdbID);
      state.favorites.splice(index,1);
    }
  },
  actions: {
  },
  modules: {
  }
})
