<template>
  <router-link to="/">
    <div class="catalog__link_to_cart catalog--button">Back to catalog</div>
  </router-link>
  <div class="task-container" v-if="CART.length!==0">
  <div class="task-container__cart">
    <div><button @click="deleteAllFromCart">Delete All From Cart</button></div>
    <div class="task-cart-container">
    <cartItem
          v-for="(item,index) in CART "
          :key="item.article"
          :cart_item_data="item"
          @deleteFromCart="deleteFromCart(index)"
          @increment="increment(index)"
          @decrement="decrement(index)"
          @deleteAllFromCart="deleteAllFromCart()"
      />
<!--      -->
    </div>
    <div class="task-cart-counter">
      <div>
        <p >Итого:</p>
        <p> Сумма заказа: {{ cartTotalCost }} РУБ.</p>
        <p >количество:</p>
        <p >установка</p>
        <button @click="sendCartToServer">Сделать заказ</button>
      </div>
    </div>
  </div>
    <div class="task-container__viewed">
      <div class="task-container__viewed__title">
        <button
            class="back"
                @click="page = page - 1"
            v-if="page > 1"
        >{{`<`}}</button>
        <span>{{page}}/ 6</span>
        <button
            class="next"
            v-if="hasNextPage"
            @click="page = page + 1"
        >{{`>`}}</button>
      </div>
      <div class="task-container__viewed__cart">
        <CartItemViewed
            v-for="item in changePage() "
            :key="item.article"
            :cart_item_data="item"
        />
      </div>

    </div>
  </div>
  <div class="notItem" v-else>
    В вашей корзине нет товаров
  </div>
</template>

<script>
import cartItem from './CartItem'
import {mapActions, mapGetters} from "vuex";
import CartItemViewed from "@/components/cart/CartItemViewed";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'cart',
  components: {
    cartItem,
    CartItemViewed
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
    return {
      page:1,
      hasNextPage: true
    }
  },
  methods: {

    ...mapActions([
      'SEND_CART_TO_SERVER',
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
    },
    sendCartToServer(){
      this.SEND_CART_TO_SERVER();
    },
    changePage() {
      const start = (this.page - 1) * 4;
      const end = this.page * 4;

      this.hasNextPage = this.CART.length > end;
      return this.CART.slice(start, end);
    },
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
