<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <br>
        <hr>
        <router-view name="header-top">
          <!-- Bu tag ile componentlerimiz App üzerinde görüntülenecektir. -->
        </router-view>
        <router-view></router-view>
        <router-view name="header-bottom"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
  export default {
    name: 'App',
    components:{
      appHeader : Header,
    }
  }
</script>

<style>

</style>