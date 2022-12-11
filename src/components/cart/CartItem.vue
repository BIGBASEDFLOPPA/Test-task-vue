<template>
  <div class="container">
    <div class="cart-item">
    <img class="catalog-item__image" :src="cart_item_data.url" alt="img">
      <div class="card-data__item">
        <div class="card--title">
          <p class="card--title__desc">{{ cart_item_data.name }}</p>
          <button class="card-del" @click="deleteFromCart">&#10006;</button>
        </div>
        <div class="card__body">
          <p class="card-description">{{cart_item_data.description}}</p>
          <div class="izmCol">
            <button @click="decrementItem" class="decr"><span>&mdash;</span></button>
            <p class="count">{{ cart_item_data.quantity }} </p>
            <button @click="incrementItem" class="incr"><span>+</span></button>
          </div>
          <p>{{cart_item_data.quantity * cart_item_data.price}} Р.</p>

        </div>
        <div class="card__footer">
          <p class="art">{{ cart_item_data.article }}</p>
          <p  v-if="cart_item_data.quantity > 1">{{ cart_item_data.price}}</p>
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
