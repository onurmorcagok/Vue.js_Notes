<template>
  <div class="container">
    <!-- <h3>Öğrenci Sayfası | Student Page</h3>
    <hr />
    <p>This page is Student Page.</p> -->

    <router-view>

    </router-view>
    <hr />
    <button class="btn btn-info" @click="navigateHome">Anasayfa için tıklayınız</button>
  </div>
</template>
<script>
export default {
  name: "HomePage",
  data() {
      return {
          studentNo: this.$route.params.id
      }
  },
  methods: {
    navigateHome() {
      this.$router.push("/home");
      // this.$router.push({ path: '/home'});
      // this.$router.push({ name: 'HomePage' });
    },
  },
  watch: {
      "$route"(to,from) {
          this.studentNo = to.params.id;
      }
  }
};
</script>
