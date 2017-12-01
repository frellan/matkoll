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
        <i class="signal icon"></i>
        Summering
      </h4>
      <div class="ui green inverted segment">
        <div class="ui inverted statistic">
          <div class="value">
            <i class="leaf icon"></i> {{ co2.toFixed(2) }} kg
          </div>
          <div class="label">co2 per portion</div>
        </div>
      </div>
      <h4 class="ui horizontal divider header">
        <i class="cube icon"></i>
        Makronutrienter
      </h4>
      <macronutrients-chart :height="50" :nutrients="recipe.nutrients"></macronutrients-chart>
      <h4 class="ui horizontal divider header">
        <i class="cubes icon"></i>
        Mikronutrienter
      </h4>
      <h2 class="centered">Vitaminer (% av DRI per portion)</h2>
      <micronutrients-chart
        :height="180"
        :color="'#F99157'"
        :nutrients="vitamins"
        :portions="recipe.portions"
      ></micronutrients-chart>
      <h2 class="centered">Mineraler (% av DRI per portion)</h2>
      <micronutrients-chart
        :height="126"
        :color="'#C594C5'"
        :nutrients="minerals"
        :portions="recipe.portions"
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
    co2: function () {
      return this.recipe.co2.quantity / this.recipe.portions
    },
    vitamins: function () {
      return this.recipe.nutrients.filter(n => n.type === 'VITAMIN')
    },
    minerals: function () {
      return this.recipe.nutrients.filter(n => n.type === 'MINERAL')
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
