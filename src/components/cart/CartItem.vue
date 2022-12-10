<template>
  <div class="container">
    <div class="cart-item">
    <img class="catalog-item__image" :src="cart_item_data.url" alt="img">
      <div class="card-data__item">
        <div class="card--title">
          <p class="card--title__desc">{{ cart_item_data.name }}</p>
          <button class="card-del" @click="deleteFromCart">&cupcap;</button>
        </div>
        <div class="card__body">
<!--          <p >{{ cart_item_data.desc }}</p>-->
          <button @click="decrementItem">-</button>
          <p>Кол-во {{ cart_item_data.quantity }} </p>
          <button @click="incrementItem">+</button>
        </div>
        <div class="card__footer">
          <p >{{ cart_item_data.article }}</p>
        </div>
      </div>

    </div>
  </div>
  <hr>
</template>

<script>

export default {
  name: 'cartItem',
  props: {
    cart_item_data: {
      type: Object,
      default: () => {},
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
@import '../../styles/cart/cartItem.scss';
</style>
