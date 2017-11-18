<template>
<div>
  <h1 class="centered recipe-header">{{ recipe.title }}</h1>
  <div class="ui grid">
    <div class="six wide column">
      <h4 class="ui horizontal divider header">
        <i class="tag icon"></i>
        Ingredienser
      </h4>
      <div v-if="recipe.sections">
        <ingredient-list :sections="recipe.sections"></ingredient-list>
      </div>
      <div v-if="recipe.ingredients">
        <ingredient-list :ingredients="recipe.ingredients"></ingredient-list>
      </div>
    </div>
    <div class="ten wide column">
      <h4 class="ui horizontal divider header">
        <i class="cube icon"></i>
        Makronutrienter
      </h4>
      <macronutrients-chart :height="60"></macronutrients-chart>
      <h4 class="ui horizontal divider header">
        <i class="cubes icon"></i>
        Mikronutrienter
      </h4>
      <h2 class="centered">Vitaminer</h2>
      <micronutrients-chart
        :height="200"
        :color="'#F99157'"
        :nutrients="vitamins"
      ></micronutrients-chart>
      <h2 class="centered">Mineraler</h2>
      <micronutrients-chart
        :height="200"
        :color="'#C594C5'"
        :nutrients="minerals"
      ></micronutrients-chart>
    </div>
  </div>
</div>
</template>

<script>
import IngredientList from './IngredientList'
import MacronutrientsChart from '../charts/macronutrients-chart'
import MicronutrientsChart from '../charts/micronutrients-chart'

export default {
  name: 'recipe',
  props: [
    'recipe'
  ],
  components: {
    IngredientList,
    MacronutrientsChart,
    MicronutrientsChart
  },
  computed: {
    vitamins: function () {
      return this.recipe.nutrients.filter(n => n.type === 'vitamin')
    },
    minerals: function () {
      return this.recipe.nutrients.filter(n => n.type === 'mineral')
    }
  }
}
</script>

<style>
.recipe-header {
  font-size: 36px;
  margin-bottom: 1em;
}
</style>
