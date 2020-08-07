<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <br>
        <app-Header></app-Header>
        <hr>
        <router-view>
          <!-- Bu tag ile componentlerimiz App üzerinde görüntülenecektir. -->
        </router-view>
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