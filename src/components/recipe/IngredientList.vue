<template>
<div>
  <div v-if="sections">
    <div class="section" v-for="section in sections">
      <h2 class="centered">
        {{ section.title.titleize() }}
      </h2>
      <div class="ui two stackable cards">
        <ingredient
          v-for="ingredient in section.ingredients"
          :key="ingredient.original"
          :ingredient="ingredient"
        ></ingredient>
    </div>
    </div>
  </div>
  <div class="section" v-if="ingredients">
    <div class="ui two stackable cards">
      <ingredient
        v-for="ingredient in ingredients"
        :key="ingredient.original"
        :ingredient="ing"
      ></ingredient>
    </div>
  </div>
</div>
</template>

<script>
import Ingredient from './Ingredient'
export default {
  name: 'ingredient-list',
  props: [
    'sections',
    'ingredients'
  ],
  components: {
    Ingredient
  }
}
</script>

<style scoped>
.section {
  margin-bottom: 2em;
}
</style>
