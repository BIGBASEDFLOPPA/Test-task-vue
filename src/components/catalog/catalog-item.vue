<template>
  <div class="catalog-item">
    <img class="catalog-item__image" :src="product_data.url" alt="img">
    <p class="catalog-item__name">{{ product_data.name }}</p>
    <p class="catalog-item__name">{{ product_data.price }} Р/шт.</p>
    <button class="btn" @click="addToCart">add to card</button>
  </div>
</template>

<script>

export default {
  name: 'catalog-item',
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data);
    }
  }

}
</script>

<style lang="scss" scoped>
@import "../../styles/button/btn.scss";
@import "../../styles/catalog/catalog-item.scss";
</style>
