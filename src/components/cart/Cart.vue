<template>
  <div class="task-container">
    <router-link to="/">
      <div class="catalog__link_to_cart catatlog--button">Back to catalog</div>
    </router-link>
    <p v-if="CART.length==0">your shopping cart is empty</p>
    <button @click="deleteAllFromCart">Delete All From Cart</button>
    <div class="task-cart-container">
      <cartItem
          v-for="(item,index) in CART " :key="item.article"
          :cart_item_data="item"
          @deleteFromCart="deleteFromCart(index)"
          @increment="increment(index)"
          @decrement="decrement(index)"
          @deleteAllFromCart="deleteAllFromCart()"
      />
<!--      -->

    </div>
    <div class="v-cart-total">
      <p class="v-cart-total">{{ cartTotalCost }} РУБ.</p>
      <p class="total-name"></p>
    </div>
  </div>
</template>

<script>
import cartItem from './CartItem'
import {mapActions, mapGetters} from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'cart',
  components: {
    cartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM',
      'DELETE_ALL_FROM_CART'
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
    deleteAllFromCart() {
      this.DELETE_ALL_FROM_CART();
    }
  },
  computed: {
    ...mapGetters([
      'CART'
    ]),
    cartTotalCost() {
      let result = []
      if (this.CART.length) {
        for (let item of this.CART) {
          result.push(item.price * item.quantity)
        }
        result = result.reduce(function (sum, item) {
          return sum + item;
        })
        return result;
      } else {
        return 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/cart/cart.scss";
</style>
