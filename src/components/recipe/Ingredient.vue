<template>
<div class="ui segment">
  <img
    class="right floated mini ui image"
    :src="'public/icons/' + ingredient.food.subCategory.name + '.png'"
    width="40"
    height="40"
  >
  <div class="ui small header">
    {{ ingredient.food.name }}
    <span class="comment"> {{ ingredient.comment }}</span>
    <div v-if="amountIsEmpty(this.ingredient.amount)" class="sub header">
      <i>efter behag</i>
    </div>
    <div v-else class="sub header">
      {{ ingredient.amount.quantity }} {{ ingredient.amount.unit.displayName }}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ingredient',
  props: ['ingredient'],
  methods: {
    amountIsEmpty: (amount) => amount.unit.name === 'EMPTY'
  }
}
</script>

<style scoped>
.ui.segment {
  border: 0;
}
.ui.header {
  margin: 0 !important;
}
.comment {
  font-size: 0.8em;
  color: rgba(0,0,0,.4);
}
</style>
