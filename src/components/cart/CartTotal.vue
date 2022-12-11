<link rel="stylesheet" href="../../styles/cart/cartTotal.scss">
<template>
  <div class="total-container">
    <p>Итог:</p>
    <span class ='total-container__sum'> Сумма заказа: {{ cartTotalCost }} Руб.</span>
    <span class="total-container__value"> Количество: {{cartOrderCost}}/Шт</span>
    <span class='total-container__check' v-if="selected">Установка: да</span>
    <span class='total-container__check' v-else>Установка: нет </span>
    <hr/>
    <span class="total-container__total">Стоимость товаров: {{ cartTotalCost }} Руб.</span>
    <button class="btn" @click="$emit('click')">Сделать заказ</button>
  </div>
</template>

<script>
export default {
  name: 'CartTotal',
  props: {
    cartTotalCost: Number,
    selected: Boolean,
    cartOrderCost:Number
  },
  methods: {
  }
}
</script>

<style scoped>
@import "@/styles/cart/cartTotal.scss";
@import "@/styles/button/btn.scss";
</style>
