<template>
  <div class="catalog">
    <router-link  :to="{name:'cart',params: {CART}}" class="router-list">
      <div class='catalog__link-to-cart'>
        <div class="catalog__count catalog--button">
          <div class="catalog__link-to-cart__img">
            <img class="img" :src="'https://static.tildacdn.com/tild3766-6666-4162-b933-306235383961/111.png' " alt="">
          </div>
          <div class="catalog__link-to-cart__description">
            <p class="catalog__link-to-cart_cart-name">Ваша корзина</p>
            <p class="catalog__link-to-cart_cart-cost">{{ CART.length}} ед. товара </p>
            <p class="catalog__link-to-cart_cart-value">{{ getOrderCost() }} Р. </p>
          </div>
        </div>
      </div>
    </router-link>
    <h1>Каталог</h1>

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
import '../../styles/catalog/catalog.scss';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'catalog',
  components: {
    catalogItem
  },
  props: {},
  data() {
    return {
    }
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data)
    },
    cartTotalCost() {
      let result = 0;
      if(this.CART.length)
        result = this.CART?.reduce((sum, item) =>  sum + item?.quantity, 0 );
      return result;
    },
    getOrderCost() {
      const  orderCost = this.CART?.reduce(
          (sum, cart) => sum + cart.quantity * cart.price, 0);
      return orderCost;
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART'

    ]),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/catalog/catalog.scss';
</style>
