<template>
<div>
  <h1 class="centered recipe-header">{{ recipe.title }}</h1>
  <h4 class="centered">
    <i class="pie chart icon"></i>{{ recipe.portions }} portioner
    &thinsp;
    <i class="external icon"></i>{{ sourceSite }}
  </h4>
  <div class="ui grid">
    <div class="five wide column">
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
    <div class="one wide column"></div>
    <div class="ten wide column">
      <h4 class="ui horizontal divider header">
        <i class="signal icon"></i>
        Summering
      </h4>
      <div class="ui horizontal segments">
        <div class="ui centered segment">
          <div class="ui small statistic">
            <div class="value">
              <i class="orange lightning icon"></i> {{ kcal.toFixed(0) }}
            </div>
            <div class="label">Kcal per portion</div>
          </div>
        </div>
        <div class="ui centered segment">
          <div class="ui small statistic">
            <div class="value">
              <i class="green leaf icon"></i> {{ co2.toFixed(2) }}
            </div>
            <div class="label">kg co2 per portion</div>
          </div>
        </div>
      </div>
      <h4 class="ui horizontal divider header">
        <i class="cube icon"></i>Makronutrienter
      </h4>
      <macronutrients-chart :height="30" :nutrients="recipe.nutrients"></macronutrients-chart>
      <macronutrient-table
        :nutrients="recipe.nutrients"
        :portions="recipe.portions"
      ></macronutrient-table>
      <h4 class="ui horizontal divider header">
        <i class="cubes icon"></i>Mikronutrienter
      </h4>
      <h3 class="centered">Vitaminer (% av DRI per portion)</h3>
      <micronutrients-chart
        :height="180"
        :color="'#F99157'"
        :nutrients="vitamins"
        :portions="recipe.portions"
      ></micronutrients-chart>
      <h3 class="centered">Mineraler (% av DRI per portion)</h3>
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
import MacronutrientTable from './MacronutrientTable'
import IngredientList from './IngredientList'
import MacronutrientsChart from '../charts/macronutrients-chart'
import MicronutrientsChart from '../charts/micronutrients-chart'

export default {
  name: 'recipe',
  props: [
    'recipe'
  ],
  components: {
    MacronutrientTable,
    IngredientList,
    MacronutrientsChart,
    MicronutrientsChart
  },
  computed: {
    kcal: function () {
      const value = this.recipe.nutrients
        .find(n => n.name === 'ENERGY_KCAL').value.quantity
      return value / this.recipe.portions
    },
    salt: function () {
      const value = this.recipe.nutrients
        .find(n => n.name === 'SALT').value.quantity
      return value / this.recipe.portions
    },
    co2: function () {
      return this.recipe.co2.quantity / this.recipe.portions
    },
    vitamins: function () {
      return this.recipe.nutrients.filter(n => n.type === 'VITAMIN')
    },
    minerals: function () {
      return this.recipe.nutrients.filter(n => n.type === 'MINERAL')
    },
    sourceSite: function () {
      const urlRegEx =
        new RegExp('^(?:https?:)?(?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)')
      return this.recipe.url.match(urlRegEx)[1]
    }
  }
}
</script>

<style>
.recipe-header {
  font-size: 36px;
}
</style>
