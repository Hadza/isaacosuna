<template>
  <div id="app" >
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: 'slide-in',
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || 'Isaac Osuna';
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        this.transitionName = (toDepth < fromDepth) || from.path !== '/' ? 'slide-out' : 'slide-in';
      },
    },
  },
};
</script>

<style lang="scss">

  @font-face {
    font-family: "Rubik";
    src: url('assets/fonts/Rubik/Rubik-Regular.ttf');
  }
  #app {
  font-family: 'Rubik';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: calc(15px + 0.33vw);
  padding: 5vh 10vw;
  color: #121314;
  animation: fadein 1s;
}
  @keyframes fadein {
    from { opacity: 0}
    to   { opacity: 1}
  }

  h1 {
    font-weight: 300;
  }
  h2 {
    font-weight: 300;
  }

  div {
    div {
      position: absolute;
    }
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
      bottom: 0;
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
        transform: scaleY(3);
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

  .slide-in-leave-active,
  .slide-in-enter-active {
    transition-property: opacity;
    transition-duration: .10s;
    transition: 1s;
  }
  .slide-in-enter {
    transform: translate(0, -100%);
    opacity:0;
  }
  .slide-in-leave-to {
    transform: translate(0, 100%);
    opacity: 0;
  }

  .slide-out-leave-active,
  .slide-out-enter-active {
    transition-property: opacity;
    transition-duration: .10s;
    transition: 1s;
  }
  .slide-out-enter {
    transform: translate(0, 100%);
    opacity:0;
  }
  .slide-out-leave-to {
    transform: translate(0, -100%);
    opacity: 0;
  }

</style>
