<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr>
    <p>
      Kullanıcının ID Değeri: {{ $route.params.id }}
    </p>

    <router-link
    tag="button"
    class="btn btn-warning"
    :to="navigationLink">
    Kullanıcı Düzenle
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'UserDetail',
    data() {
      return {
        navigationLink: {
           name: 'UserEdit', 
           params: { id: this.$route.params.id }, 
           query: {name: 'onur' , surname: 'morcagok'},
           hash: '#data',
        }
      }
    },
    beforeRouteEnter(to,from,next){
      console.log("Component Seviyesinde Kontrol...");
      next();
    }
  }
</script>
