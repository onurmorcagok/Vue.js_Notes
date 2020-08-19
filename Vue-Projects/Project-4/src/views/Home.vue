<template>
  <div class="home">
    <br />
    <b>Galery ID for Filter Photos</b>
    <br />
    <br />
    <select @change="filterPhotos($event)">
      <option selected disabled>Please select</option>
      <option v-for="number in numbers" v-bind:key="number.albumId">{{ number }}</option>
    </select>
    <h4>Photos</h4>
    <div class="photos">
      <div v-for="photo in allPhotos" :key="photo.id">
        <img :src="photo.thumbnailUrl" />
        <div class="title">{{ photo.thumbnailUrl }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      numbers: [1, 2, 3, 4, 5],
    };
  },
  created() {
    this.fetchPhotos();
  },
  computed: {
    ...mapGetters(["allPhotos"]),
  },
  methods: {
    ...mapActions(["fetchPhotos", "filterPhotos"]),
  },
};
</script>

<style scoped>
.photos {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
}

.photo {
  border: 1px solid #000;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.title {
  width:auto;
  height: auto;
  border: 1px solid #000;
  padding: 5px;
  margin-top: 5px;
  font-size: 15px;
}

.home {
  border: 5px solid #000;
  padding: 5px;
  margin: auto;
}
</style>