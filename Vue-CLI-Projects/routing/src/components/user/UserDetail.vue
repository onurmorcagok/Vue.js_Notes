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
    :to="{ name: 'UserEdit', params: { id: $route.params.id } }">
    Kullanıcı Düzenle
    </router-link>

  </div>
</template>
<script>
  export default {}
</script>
