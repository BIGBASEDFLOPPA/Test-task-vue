<template>
  <div class="container">
    <div class="container__cart-item-viewed">
      <img class="cart-item-viewed__image" :src="cart_item_data.url" alt="img">
      <div class="card--title">
        <p class="cart-item-viewed__name">{{ cart_item_data.name }}</p>
      </div>
      <div class="cart-item-viewed__body">
        <p> {{ cart_item_data.description }}</p>
      </div>
      <div class="cart-item-viewed__footer">
        <p>{{ cart_item_data.price }} РУБ/шт</p>
      </div>
        <button class="btn cart-item-viewed__btn"> Подробнее</button>
        <button @click="incrementItem" class="btn cart-item-viewed__btn" >
          Добавить в корзину
        </button>
      </div>
    </div>

</template>

<script>

export default {
  name: 'cartItemViewed',
  props: {
    cart_item_data: {
      type: Object,
      default: () => {
      },
    }
  },
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart')
    },
    decrementItem() {
      this.$emit('decrement')
    },
    incrementItem() {
      this.$emit('increment')
    },
    deleteAllFromCart() {
      this.$emit('deleteAllFromCart')
    }
  }

}
</script>

<style lang="scss" scoped>
@import "../../styles/cart/cartItemViewed";
@import "../../styles/button/btn.scss";
</style>
