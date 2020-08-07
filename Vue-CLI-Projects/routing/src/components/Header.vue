<template>
  <div>
    <ul class="nav nav-pills">

      <router-link 
      active-class="active"
      to="/home" 
      exact 
      tag="li">
        <a>Home</a>
      </router-link>

      <router-link active-class="active" to="/user" exact  tag="li">
        <a>User</a>
      </router-link>

    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
</style>