<template>
  <div class=" py-16">
    <h1 class="text-5xl">Hello there!</h1>
    <h2 class="text-2xl mb-2 ml-1">I'm <a>Isaac Osuna</a>.</h2>
    <p class="max-w-lg md:max-w-3xl ml-1 font-light">
      I'm a multipotentialite who has <router-link to="/psychology">psychology</router-link>,
      <router-link to="/gastronomy">gastronomy</router-link> and
      <router-link to="/software">software engineering</router-link> as it's main interests,
      but I also like to experiment in <router-link to="/others">other fields</router-link>.</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
</style>
