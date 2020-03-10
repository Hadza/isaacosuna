<template>
  <div class="py-5">
    <router-link to="/" >Go back</router-link>
    <h1 class="text-5xl">Psychology</h1>
      <div
        v-for="post in psychology"
        :key="post.id"
      >
        <Post
          :post="post"
        ></Post>
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Post from '../components/Post.vue';

export default {
  name: 'Psychology',
  components: {
    Post,
  },
  computed: {
    ...mapState(['psychology']),
  },
  methods: {
    printState() {
      console.log(this.$store.state.psychology);
    },
    ...mapActions(['bindPsychology']),
  },
  created() {
    this.bindPsychology();
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Post 1',
          subtitle: 'Esta es la descripcion',
          content: '**Este** es el contenido '
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
        {
          id: 2,
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
