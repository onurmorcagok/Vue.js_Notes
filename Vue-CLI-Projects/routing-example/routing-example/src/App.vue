<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">

        <router-view name="header-top">
        </router-view>

        <router-view>
        </router-view>

        <router-view name="header-bottom">
        </router-view>


      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>

</style>