<template>
  <div class="container">

    <h3>Öğrenci Bilgileri</h3>
    <hr />
    <p>Öğrenci Numarası: {{ $route.params.id }}</p>
    <p>Öğrenci Adı: {{ navigationLink.query.name }} </p>
    <p>Öğrenci Soyadı: {{ navigationLink.query.surname }} </p>

    <router-link
    tag="button"
    class="btn btn-warning"
    :to="navigationLink">
    Öğrenci Bilgilerini Düzenle
    </router-link>

  </div>
</template>

<script>
export default {
  name: "StudentDetail",
  data() {
      return {
          navigationLink:{
              name: 'StudentEdit',
              params: { id: this.$route.params.id },
              query: {name: 'onur' , surname: 'morcagok'},
              hash: '#data',
          }
      }
  },
};
</script>

<style>
</style>