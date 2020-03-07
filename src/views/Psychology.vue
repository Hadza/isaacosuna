<template>
  <div class="py-5">
    <router-link to="/" >Go back</router-link>
    <h1 class="text-5xl">Psychology</h1>
    <div
      v-for="post in posts" :key="post.title"
      class="relative shadow-lg post-height
      transition-height duration-500 ease-in
      sm:max-w-xl md:max-w-4xl  mb-6"
      :class="{'show-post overflow-auto': showingPost, 'flex overflow-hidden': !showingPost}"
    >
      <img class="transition-width duration-500 ease-in max-h-full"
           :class="{'w-full': showingPost, 'w-1/4':!showingPost}"
           src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
      <div class="relative flex flex-col px-6 py-4">
        <div class="font-bold text-xl">{{post.title}}</div>
        <div class="hidden sm:flex font-light text-lg text-gray-800 ">{{post.subtitle}}</div>
        <p
          class="sm:h-auto text-gray-600 text-base"
          :class="{'overflow-hidden h-24':!showingPost, 'overflow-auto':showingPost}">
          {{post.content.length > 150 && !showingPost ?
          post.content.substring(0, 150) + '...':post.content}}
        </p>
        <a v-if="true"
          class="cursor-pointer absolute right-0 bottom-0 mr-4 mb-4 text-gray-700 text-base"
          @click="showingPost = !showingPost"
        >
          {{showingPost ? 'show less':'show more'}}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Psychology',
  data() {
    return {
      showingPost: false,
      posts: [
        {
          title: 'Post 1',
          subtitle: 'Esta es la descripcion',
          content: 'Este es el contenido '
            + 'por que cuando agregas algo mas a esto'
            + 'pues se van agregando mas palabras y mas palabras'
            + 'y pues lorem ipsum sit amet y la chingada'
            + 'y se agregan mas y mas y mas'
            + 'por que pues por que no a la verga'
            + 'hehehehehe'
            + 'pues se van agregando mas palabras y mas palabras'
            + 'y pues lorem ipsum sit amet y la chingada'
            + 'y se agregan mas y mas y mas'
            + 'por que pues por que no a la verga'
            + 'hehehehehe'
            + 'pues se van agregando mas palabras y mas palabras'
            + 'y pues lorem ipsum sit amet y la chingada'
            + 'y se agregan mas y mas y mas'
            + 'por que pues por que no a la verga'
            + 'hehehehehe'
            + 'pues se van agregando mas palabras y mas palabras'
            + 'y pues lorem ipsum sit amet y la chingada'
            + 'y se agregan mas y mas y mas'
            + 'por que pues por que no a la verga'
            + 'hehehehehe'
            + 'pues se van agregando mas palabras y mas palabras'
            + 'y pues lorem ipsum sit amet y la chingada'
            + 'y se agregan mas y mas y mas'
            + 'por que pues por que no a la verga'
            + 'hehehehehe',
          thumbnail: 'path',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .post-height{
    @apply h-48;
    &.show-post{
      height: 24rem;
    }
  }
</style>
