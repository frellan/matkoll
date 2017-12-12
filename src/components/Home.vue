<template>
<div>
  <home-banner></home-banner>
  <div class="ui main container">
    <div class="centered chooser">
      <div class="ui massive buttons">
        <button class="ui button">Skriv in ingredienser</button>
        <div class="or" data-text="elr"></div>
        <button class="ui positive button">Läs in från webbsida</button>
      </div>
    </div>
    <url-input
      @recipeFetched="recipeFetched($event)"
      @error="showError = true"
    ></url-input>
    <div v-if="showRecipe">
      <recipe :recipe="recipe"></recipe>
    </div>
    <div v-if="showError">
      <div class="ui negative icon message">
        <i class="warning circle icon"></i>
        <div class="header">
          Receptet kunde inte hämtas från den givna adressen, är det en korrekt adress?
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import HomeBanner from './HomeBanner'
import UrlInput from './UrlInput'
import Recipe from './recipe/Recipe'

export default {
  name: 'home',
  data() {
    return {
      showError: false,
      showRecipe: false,
      recipe: {}
    }
  },
  components: {
    HomeBanner,
    UrlInput,
    Recipe
  },
  methods: {
    recipeFetched(recipe) {
      this.showError = false
      this.recipe = recipe
      this.showRecipe = true
    }
  }
}
</script>

<style>
.main.container {
  padding-top: 2em;
}
.chooser {
  margin-bottom: 2em;
}
</style>
