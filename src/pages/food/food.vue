<template>
  <div class="food_container">
    <head-top :head-title="headTitle" go-back="true"></head-top>
  </div>
</template>

<script>
  import headTop from "../../components/header/head"
  export default {
    components: {
      headTop
    },
    data() {
      return {
        headTitle: ""  //页面的头部标题
      }
    }
  }
</script>

<style scoped>

</style>