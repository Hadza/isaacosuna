<template>
  <div class="py-5">
    <router-link to="/" >Go back</router-link>
    <h1 class="text-5xl">{{topic.charAt(0).toUpperCase() + topic.slice(1)}}</h1>
    <transition-group name="slide-in" tag="div">
      <div
        v-for="post in blog"
        :key="post.id"
      >
        <Post
          :post="post"
        ></Post>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Post from '../components/Post.vue';

export default {
  created() {
    this.$store.commit('setTopic', this.topic);
    this.bindBlog();
  },
  props: {
    topic: String,
  },
  components: {
    Post,
  },
  computed: {
    ...mapState(['blog']),
  },
  methods: {
    ...mapActions(['bindBlog']),
  },
};
</script>
