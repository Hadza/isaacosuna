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
        <div
          :class="{'overflow-hidden h-24':!showingPost, 'relative':showingPost}"
        >
          <p
            class="mb-8 pb-2 sm:h-auto text-gray-600 text-base font-light"
            v-html="content">
          </p>
          <a v-if="true"
             class="cursor-pointer absolute right-0 bottom-0 mr-4 text-gray-700
           text-base"
             :class="{'mb-2':showingPost, 'mb-4':!showingPost}"
             @click="showingPost = !showingPost"
          >
            {{showingPost ? 'show less':'show more'}}
          </a>
        </div>
      </div>
    </div>
</template>

<script>
const Mark = require('markdown-it');

const md = new Mark();

export default {
  name: 'Post',
  props: {
    post: Object,
  },
  computed: {
    content() {
      let { content } = this.post;
      content = content.split('\\n').join('\n');
      content = content.split('\\r').join('\r');
      return md.render(content);
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
