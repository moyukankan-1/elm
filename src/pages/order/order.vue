<template>
  <div class="order_page">
    <head-top head-title="订单列表" go-back='true'></head-top>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
  import headTop from "../../components/header/head"
  import footGuide from "../../components/footer/footGuide"
  export default {
    components: {
      headTop,
      footGuide
    }
  }
</script>

<style scoped>

</style>