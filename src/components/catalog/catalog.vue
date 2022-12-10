<template>
  <div class="catalog">
    <router-link :to="{name:'cart',params: {CART}}">
      <div class="catalog__count catatlog--button">Cart: {{ CART.length }}</div>
    </router-link>
    <h1>Catalog</h1>

    <div class="catalog-list">
      <catalog-item
          v-for="product in PRODUCTS"
          :key="product.article"
          v-bind:product_data="product"
          @addToCart="addToCart"
      />
    </div>

  </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'
import catalogItem from "@/components/catalog/catalog-item";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'catalog',
  components: {
    catalogItem
  },
  props: {},
  data() {
    return {}
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data)
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART'
    ])
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/catalog.scss';
</style>
