<template>
  <div class="container">
    <div class="cart-item">
    <img class="catalog-item__image" :src="cart_item_data.url" alt="img">
      <div class="card-data__item">
        <div class="card--title">
          <p class="card--title__desc">{{ cart_item_data.name }}</p>
        </div>
        <div class="card__body">
<!--          <p >{{ cart_item_data.desc }}</p>-->
          <p>Кол-во {{ cart_item_data.quantity }} // добавить описание </p>
        </div>
        <div class="card__footer">
          <p >{{ cart_item_data.article  }} // стоимость</p>
          <button> Подробнее </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'cartItemViewed',
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
@import "../../styles/cart/cartItemViewed";
</style>
