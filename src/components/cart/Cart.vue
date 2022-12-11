<template>
  <router-link to="/">
    <div class="catalog__link_to_cart catalog--button">Вернуться в каталог</div>
  </router-link>
  <div class="cart-container">
    <div class="cart-container-data" v-if="CART.length!==0">
      <div class="cart-container-data__cart">

        <div class="task-cart-container">
          <div class="block-title">
            <div class="desc">
              <div class="title">Ваша корзина</div>
              <div class="countItem">{{ cartTotalCost() }} ед. товара</div>
            </div>
            <button @click="deleteAllFromCart" class="dell__carts">Очистить корзину</button>
          </div>
          <cartItem
              v-for="(item,index) in CART "
              :key="item.article"
              :cart_item_data="item"
              @deleteFromCart="deleteFromCart(index)"
              @increment="increment(index)"
              @decrement="decrement(index)"
              @deleteAllFromCart="deleteAllFromCart()"
          />
          <div class="task-cart-container__checkbox">
            <input type="checkbox" name="checkbox" id="checkbox_id"
                   value="value"
                   v-model="selected">
            <span>Установка</span>
            <br/>
            <span class="task-cart-container__checkbox_desc">Отметьте,если вам нужна консультация профессионала по монтажу выбранных товаров</span>
          </div>

        </div>
        <div class="task-cart-counter">
          <CartTotal
              :cartTotalCost="getOrderCost()"
              :selected="selected"
              :cartOrderCost="cartTotalCost()"
              @click="sendCartToServer"
          />
        </div>

      </div>
      <div class="cart-container-data ">
        <div class="slider-viewed__title">
          <span>Просмотренные товары</span>
        </div>
        <div>
          <button
              class="slider-viewed__btns"
              @click="page = page - 1"
              v-if="page > 1"
          >{{ `⇐` }}
          </button>
          <span class ='slider-viewed__pages'>{{ page }}/ 6</span>
          <button
              class="slider-viewed__btns"
              v-if="hasNextPage"
              @click="page = page + 1"
          >{{ `⇒` }}
          </button>
      </div>
        <div class="slider-viewed__cart">
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
  </div>

</template>

<script>
import cartItem from './CartItem'
import {mapActions, mapGetters} from "vuex";
import CartItemViewed from "@/components/cart/CartItemViewed";
import CartTotal from "@/components/cart/CartTotal";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'cart',
  components: {
    cartItem,
    CartItemViewed,
    CartTotal
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
      page: 1,
      hasNextPage: true,
      selected: false,
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
    sendCartToServer() {
      this.SEND_CART_TO_SERVER();
    },
    changePage() {
      const start = (this.page - 1) * 4;
      const end = this.page * 4;

      this.hasNextPage = this.CART.length > end;
      return this.CART.slice(start, end);
    },
    getOrderCost() {
      const orderCost = this.CART?.reduce(
          (sum, cart) => sum + cart.quantity * cart.price, 0);
      return orderCost;
    },
    cartTotalCost() {
      let result = 0;
      if (this.CART.length)
        result = this.CART?.reduce((sum, item) => sum + item?.quantity, 0);
      return result;
    },
  },
  computed: {
    ...mapGetters([
      'CART'
    ]),
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/cart/cart.scss";
</style>
