<template>
    <div
      class="flex shadow-lg rounded post-height
        transition-height duration-500 ease-in
        max-w-5xl mb-6"
      :class="{'show-post overflow-auto flex-col': showingPost,
        'overflow-hidden flex-row': !showingPost}"
    >
      <img class="object-cover duration-500 ease-in max-h-full"
           :class="{'w-full': showingPost, 'w-1/4':!showingPost}"
           :src="post.thumbnail" :alt="post.title">
      <div class="relative flex flex-col px-6 py-4 w-full h-full">
        <div class="font-bold text-xl">{{post.title}}</div>
        <div class="hidden sm:flex font-light text-lg text-gray-800 ">{{post.subtitle}}</div>
        <p
          class="mb-8 sm:h-auto text-gray-600 text-base"
          :class="{'overflow-hidden h-24':!showingPost, 'relative':showingPost}">
          <VueMarkdown :source="content" class="pb-4">
          </VueMarkdown>
          <a v-if="true"
             class="cursor-pointer absolute right-0 bottom-0 mr-4 text-gray-700
           text-base"
             :class="{'mb-4':!showingPost}"
             @click="showingPost = !showingPost"
          >
            {{showingPost ? 'show less':'show more'}}
          </a>
        </p>
      </div>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  name: 'Post',
  components: {
    VueMarkdown,
  },
  props: {
    post: Object,
  },
  computed: {
    content() {
      let { content } = this.post;
      content = content.split('\\n').join('\n');
      content = content.split('\\r').join('\r');
      return content;
    },
  },
  data() {
    return {
      showingPost: false,
      meesage: '',
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
