<template>
<div>
  <h1 class="centered recipe-header">{{ recipe.title }}</h1>
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
  <div class="ui two stackable cards">
    <ingredient
      v-for="ing in recipe.ingredients"
      :key="ing.original"
      :ingredient="ing"
    ></ingredient>
  </div>
</div>
</template>

<script>
import IngredientList from './IngredientList'
export default {
  name: 'recipe',
  props: [
    'recipe'
  ],
  components: {
    IngredientList
  }
}
</script>

<style>
.recipe-header {
  font-size: 36px;
}
</style>
