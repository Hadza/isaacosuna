<template>
  <div class="py-5">
    <router-link to="/" >Go back</router-link>
    <h1 class="text-5xl">Psychology</h1>
    <div
      v-for="post in posts" :key="post.title"
      class="md:flex sm:max-w-xl md:max-w-5xl h-48 mb-6
      lg:shadow-lg md:shadow-md sm:shadow-sm overflow-hidden"
    >
      <img class="sm:w-full md:w-1/4" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
      <div class="px-6 py-4 overflow-hidden">
        <div class="font-bold text-xl">{{post.title}}</div>
        <div class="font-light text-lg text-gray-800">{{post.subtitle}}</div>
        <p class="text-gray-600 text-base">
          {{post.content}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Psychology',
  data() {
    return {
      posts: [
        {
          title: 'Post 1',
          subtitle: 'Esta es la descripcion',
          content: 'Este es el contenidooooooooooooooooooooooooooooo '
            + 'por que cuando agregas algo mas a esto'
            + 'pues se van agregando mas palabras y mas palabras'
            + 'y pues lorem ipsum sit amet y la chingada'
            + 'y se agregan mas y mas y mas'
            + 'por que pues por que no a la verga'
            + 'hehehehehe',
          thumbnail: 'path',
        },
        {
          title: 'Post 2',
          subtitle: 'Esta es la descripcion',
          content: 'Este es el contenido',
          thumbnail: 'path',
        },
        {
          title: 'Post 3',
          subtitle: 'Esta es la descripcion',
          content: 'Este es el contenido',
          thumbnail: 'path',
        },
      ],
    };
  },
};
</script>

<style scoped>
  .post {
    position: relative;
  }

  hr {

  }
</style>
