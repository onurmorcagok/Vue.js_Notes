<template>
  <div class="container">
    <h3>Öğrenci Listesi</h3>
    <hr>
    <ul class="list-group">

      <router-link
        tag="li"
        class="list-group-item"
        to="/student/1">

      <a>Student 1</a>
      </router-link>

      <router-link
        tag="li"
        class="list-group-item"
        to="/student/2">

      <a>Student 2</a>
      </router-link>

      <router-link
        tag="li"
        class="list-group-item"
        to="/student/3">

      <a>Student 3</a>
      </router-link>

      <router-link
        tag="li"
        class="list-group-item"
        to="/student/4">

      <a>Student 4</a>
      </router-link>

      <router-link
        tag="li"
        class="list-group-item"
        to="/student/5">

      <a>Student 5</a>
      </router-link>

    </ul>
  </div>
</template>
<script>
  export default {}
</script>
