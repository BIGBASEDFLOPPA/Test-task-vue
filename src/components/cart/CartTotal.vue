<link rel="stylesheet" href="../../styles/cart/cartTotal.scss">
<template>
  <div class="total-container">
    <p class="total-container__total-name">Итого:</p>
    <div class="total-container-sum">
      <span class="total-container-sum__description"> Сумма заказа: </span>
      <span class="total-container-sum__cost">{{ cartTotalCost }} Руб.</span>
    </div>
    <div class="total-container-value">
      <span class="total-container-value__vdesc"> Количество: </span>
      <span class="total-container-value__vsum">{{ cartOrderCost }}/Шт</span>
    </div>
    <div class="total-container-check">
      <span class='total-container-check__check'>Установка: </span>
      <span v-if="selected" class='total-container-check__check2'>да </span>
      <span v-else class='total-container-check__check2'> нет </span>
    </div>
    <hr/>
    <div class="total-container-total">
      <span class="total-container-total__desc">Стоимость товаров: </span>
      <span class="total-container-total__cost"> {{ cartTotalCost }} Руб. </span>
    </div>
    <button class="btn total-container__btn" @click="$emit('click')">Сделать заказ</button>
  </div>
</template>

<script>
export default {
  name: 'CartTotal',
  props: {
    cartTotalCost: Number,
    selected: Boolean,
    cartOrderCost: Number
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import "@/styles/cart/cartTotal.scss";
@import "@/styles/button/btn.scss";
</style>
