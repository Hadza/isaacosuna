<template>
    <div class="psychology">
      <router-link to="/">Go back</router-link>
      <h1>Psychology</h1>
      <div v-for="post in posts" :key="post" class="post">
        <h3>{{post.title}}</h3>
        <h4>{{post.subtitle}}</h4>
        <p>{{post.content}}</p>
        <hr>
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
          content: 'Este es el contenidooooooooooooooooooooooooooooo',
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
  .post{
    position:relative;
  }
  .psychology {
    width:75%;
  }
  hr {

  }
</style>
