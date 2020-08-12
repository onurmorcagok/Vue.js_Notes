<template>
  <div>
    <hr />
    <ul class="nav nav-pills">

      <router-link 
      active-class="active" 
      exact
      to="/" 
      tag="li">
        <a>Anasayfa</a>
      </router-link>

      <router-link 
      active-class="active" 
      to="/student" 
      tag="li">
        <a>Öğrenci</a>
      </router-link>

      <router-link 
      active-class="active" 
      to="/info" 
      tag="li">
        <a>İletişim</a>
      </router-link>

    </ul>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
</style>