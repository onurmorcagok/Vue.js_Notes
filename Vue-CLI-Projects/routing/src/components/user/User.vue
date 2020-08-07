<template>
  <div class="container">
    <router-view>

    </router-view>
    <hr>
    <button class="btn btn-info" @click="navigateHome">Home Component</button>
  </div>
</template>
<script>
  export default {
    name: 'User',
    data() {
      return {
        userID: this.$route.params.id,
      }
    },
    methods:{
      navigateHome(){
        // this.$router.push("/");
        // this.$router.push({ path: '/'});
        this.$router.push({ name: 'AnaSayfa'});
      }
    },
    watch:{
      "$route"(to,from){ // route izle yani hangi user çağırılıyorsa ona göre değişiklik var mı yok mu ?
        this.userID = to.params.id;

        //to değişen rout from değişmeden önceki rout değeri

      }
    }
  }
</script>
