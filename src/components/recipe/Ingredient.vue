<template>
<div class="ui card">
  <div class="content">
    <img
      class="right floated mini ui image"
      :src="'public/icons/' + ingredient.food.category.name + '.png'"
      width="48"
      height="48"
    >
    <div class="header">
      {{ ingredient.food.name }}
      <span class="comment"> {{ ingredient.comment }}</span>
    </div>
    <div class="meta">
      {{ ingredient.amount.quantity }} {{ ingredient.amount.unit }}
    </div>
  </div>
  <table class="ui compact padded table nutrient-table">
    <thead>
      <tr>
        <th>Näringsämne</th>
        <th>Mängd</th>
        <th>% av RDI</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Approved</td>
        <td>Approved</td>
      </tr>
      <tr>
        <td>Jamie</td>
        <td>Approved</td>
        <td>Approved</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: 'ingredient',
  props: [
    'ingredient'
  ],
  computed: {
    kcal: function () {
      var value = this.ingredient.nutrients
        .find(n => n.type === 'energy' && n.unit === 'kcal')
      return value ? value : 'n/a'
    },
    carbs: function () {
      var value = this.ingredient.nutrients
        .find(n => n.name === 'kolhydrater')
      return value ? value : 'n/a'
    },
    protein: function () {
      var value = this.ingredient.nutrients
        .find(n => n.name === 'protein')
      return value ? value : 'n/a'
    },
    fat: function () {
      var value = this.ingredient.nutrients
        .find(n => n.name === 'fett')
      return value ? value : 'n/a'
    }
  }
}
</script>

<style scoped>
.content {
  padding-bottom: 0.1em !important;
}
.comment {
  color: rgba(0,0,0,.4);
}
.statistic {
  margin: 0 !important;
}
.nutrient-table {
  margin: 0;
  border-width: 1px 0 0 0;
}
.nutrient-table tr>th:first-child {
  padding-left: 1em;
}
.nutrient-table tr>td:first-child {
  padding-left: 1em;
}
.nutrient-table tr>th {
  padding-top: 0.5em !important;
  padding-bottom: 0.5em !important;
}
</style>
