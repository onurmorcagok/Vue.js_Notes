<template>
  <div class="home">
    <div class="search">
      <span>Movie Search:</span>
      <input type="text" v-model="searchText" placeholder="Enter your movie name" />
    </div>

    <div class="movies">
      <appTable :dataList="searchMovies"></appTable>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
import TableComponent from '../components/TableComponent'
import { mapState } from 'vuex';
export default {
  name: "Home",
  components: {
    appTable: TableComponent,
  },
  data() {
    return {
      searchText: '',
    }
  },
  watch: {
    searchText: debounce(function(newVal){
      this.$store.dispatch('searchMovie',newVal);
    },500)
  },
  computed: {
    ...mapState(['searchMovies'])
  }
};
</script>
