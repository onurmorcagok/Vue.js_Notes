<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">IMDB Movie Project</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/favorite" class="nav-link">Favorite</router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>