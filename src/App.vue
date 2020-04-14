<template>
  <div id="app">
    <router-view />
    <svg-icon></svg-icon>
  </div>
</template>

<script>
  import svgIcon from './components/common/svg';
  export default {
    components: {
      svgIcon
    }
}
</script>

<style lang="scss">
  @import './style/common';
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>
