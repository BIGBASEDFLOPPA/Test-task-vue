<template>
  <div class="main-wrapper">
    <keep-alive>
      <router-view/>
    </keep-alive>

    <!--    <catalog/>-->
    <!--    <cart v-if="CART.length"-->
    <!--    :cart_data="CART"-->
    <!--    />-->
  </div>
</template>

<script>
import '../styles/main-wrapper.css'
// import catalog from './catalog'
// import cart from './cart'
import {mapGetters} from "vuex";

export default {
  name: 'mainWrapper',
  components: {
    // catalog,
    // cart
  },
  computed: {
    ...mapGetters([
      'CART'
    ])
  }
}
</script>

<style scoped>

</style>
