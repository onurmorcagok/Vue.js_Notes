<template>
  <div>
    Detail Component
    <br />
    <br />
    <div class="photo">
      <h3>Title</h3>
      <p> {{ myItem.title }} </p>
      <img :src="myItem.url">
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Detail",
  computed: {
    ...mapGetters(["allPhotos"]),
  },
  methods: {
    ...mapActions(['fetchPhotos']),
  },
  created(){
    const id = this.$route.params.id - 1;
    this.myItem = this.allPhotos[id];
  }
};
</script>

<style scoped>

</style>