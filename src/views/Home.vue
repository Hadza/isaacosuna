<template>
  <div class="home">
    <h1 class="text-5xl">Hello there!</h1>
    <h2 class="text-3xl mb-6">I'm <a>Isaac Osuna</a>.</h2>
    <p>I'm a multipotentialite who has <router-link to="/psychology">psychology</router-link>,
      <router-link to="/gastronomy">gastronomy</router-link> and
      <router-link to="/software">software engineering</router-link> as it's main interests,
      but I also like to experiment in <router-link to="/other">other fields</router-link>.</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
};
</script>

<style scoped>
</style>
