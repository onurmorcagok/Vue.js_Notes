<template>
  <div class="container">
    <h3>User Edit Component</h3>
    <hr>
    <p>
      Name: {{ $route.query.name }}
    </p>
    <p>
      Surname: {{ $route.query.surname }}
    </p>
    <hr>
    <button class="btn btn-primary" @click= "saved = true">Onayla</button>

    <div style="height: 800px"></div>
    <p id="data">Buraya gelecek bazı bilgiler olabilir..</p>

  </div>
</template>
<script>
  export default {
    name: 'UserEdit',
    data() {
      return {
        saved: false,
      }
    },
    beforeRouteLeave(to,from,next){
      if(this.saved){
        next();
      } else {
        if(confirm("Tüm bilgiler silinecek. Emin misiniz ?")) {
          next();
        } else {
          next(false);
        }
      }
    }
  }
</script>
