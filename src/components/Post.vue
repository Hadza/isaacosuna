<template>
    <div
      class="flex shadow-lg rounded post-height
        transition-height duration-500 ease-in
        max-w-5xl mb-6"
      :class="{'show-post overflow-auto flex-col': showingPost,
        'overflow-hidden flex-row': !showingPost}"
    >
      <img class="duration-500 ease-in max-h-full"
           :class="{'w-full': showingPost, 'w-1/4':!showingPost}"
           src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
      <div class="relative flex flex-col px-6 py-4">
        <div class="font-bold text-xl">{{post.title}}</div>
        <div class="hidden sm:flex font-light text-lg text-gray-800 ">{{post.subtitle}}</div>
        <p
          class="mb-8 sm:h-auto text-gray-600 text-base"
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
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: Object,
  },
  data() {
    return {
      showingPost: false,
    };
  },
};
</script>

<style lang="scss" scoped>
  .post-height{
    @apply h-48;
    &.show-post{
      height: 80vh;
    }
  }
</style>
