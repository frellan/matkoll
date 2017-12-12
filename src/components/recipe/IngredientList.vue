<template>
<div>
  <div v-if="sections">
    <div class="section" v-for="section in sections">
      <h3 class="centered">{{ section.title.titleize() }}</h3>
      <ingredient
        v-for="ingredient in section.ingredients"
        :key="ingredient.original"
        :ingredient="ingredient"
      ></ingredient>
      <failed-ingredient
        v-for="failed in section.failedIngredients"
        :key="failed"
        :failedIngredient="failed"
      ></failed-ingredient>
    </div>
  </div>
  <div class="section" v-if="ingredients">
    <ingredient
      v-for="ingredient in ingredients"
      :key="ingredient.original"
      :ingredient="ingredient"
    ></ingredient>
    <failed-ingredient
      v-for="failed in failedIngredients"
      :key="failed"
      :failedIngredient="failed"
    ></failed-ingredient>
  </div>
</div>
</template>

<script>
import Ingredient from './Ingredient'
import FailedIngredient from './FailedIngredient'
export default {
  name: 'ingredient-list',
  props: [
    'sections',
    'ingredients',
    'failedIngredients'
  ],
  components: {
    Ingredient,
    FailedIngredient
  }
}
</script>

<style scoped>
.section {
  margin-bottom: 2em;
}
</style>
