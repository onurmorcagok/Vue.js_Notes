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
        <img :src="photo.thumbnailUrl" @click="getPhotosDetail(photo.id)" />
        <div class="title">
          {{ like }}
          <button @click="like++"><i class="fas fa-thumbs-up"></i></button>
          {{ dislike }}
          <button @click="dislike++"><i class="fas fa-thumbs-down"></i></button>
        </div>
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
      like:0,
      dislike:0,
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
    getPhotosDetail(id) {
      this.$router.push({ name: "Detail", params: { id } });
    },
  },
};
</script>

<style scoped>
.photos {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.photo {
  border: 1px solid #000;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}

.title {
  width: auto;
  height: auto;
  border: 1px solid #000;
  padding: 15px;
  margin-top: 5px;
  font-size: 15px;
  margin-bottom:15px;
}

.home {
  border: 5px solid #000;
  padding: 5px;
  margin: auto;
}
</style>