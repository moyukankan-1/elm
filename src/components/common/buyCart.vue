<template>
  <section class="cart_module"></section>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  export default {
    data() {
      return {

      }
    },
    props:['foods','shopId'],
    computed: {
      ...mapState(['cartList'])
    },
    methods: {
      ...mapMutations(['ADD_CART','REDUCE_CART']),
    }
  }
</script>

<style scoped>

</style>