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
        <i class="bar chart icon"></i>
        Summering
      </h4>
      <h2 class="centered">
        Energiuppdelning
      </h2>
      <recipe-content-chart :height="60"></recipe-content-chart>
    </div>
  </div>
</div>
</template>

<script>
import IngredientList from './IngredientList'
import RecipeContentChart from '../charts/recipe-content-chart'

export default {
  name: 'recipe',
  props: [
    'recipe'
  ],
  components: {
    IngredientList,
    RecipeContentChart
  }
}
</script>

<style>
.recipe-header {
  font-size: 36px;
}
</style>
