<template>
  <div id="app">
    <transition name="slide-right">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || 'Some Default Title';
      },
    },
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Rubik:400,700&display=swap');

#app {
  font-family: 'Rubik';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: calc(15px + 0.33vw);
  padding: 5vh 10vw;
  color: #121314;
}

  h1 {
    font-weight: 300;
  }
  h2 {
    font-weight: 300;
  }

  a {
    display: inline-block;
    position: relative;
    color: #343434;
    text-decoration: none;
    padding: 0 6px;
    &:before, &:after {
      will-change: transform;
      content: "";
      display: block;
      position: absolute;
      z-index: -1;
    }
    &:before {
      transition: 100ms ease-out 50ms;
      transform-origin: bottom;
      bottom: 3px;
      left: 0;
      width: 100%;
      height: 30%;
      background: mix(#f1f1f1, #0077ff, 80%);
    }
    &:after {
      transition: 50ms ease-out;
      transform: scaleX(0);
      transform-origin: left center;
      border: 8px solid transparent;
    }
    &:hover {
      &:before {
        transition: 100ms ease-out;
        transform: scaleY(2.5);
        background: mix(#f1f1f1, #0077ff, 60%);
      }
      &:after {
        transition: 50ms ease-out 100ms;
        transform: none;
      }
    }
    &:active {
      &:before {
        transition: 100ms ease-in;
        background: mix(#f1f1f1, #0077ff, 40%);
      }
      &:after {
        transition: 100ms ease-in;
      }
    }
  }
</style>
