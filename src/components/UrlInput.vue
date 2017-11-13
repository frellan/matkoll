<template>
<div>
  <div class="recipe-input">
    <div class="field">
      <div class="ui huge fluid action input" v-bind:class="{ error: isError }">
        <input v-model="url" type="text" placeholder="Klistra in en url här">
        <button
          v-on:click="redirect()"
          v-bind:class="{ loading: isLoading }"
          class="ui positive button">
          Hämta recept
        </button>
      </div>
    </div>
  </div>
  <div v-if="showRecipe">
    <recipe :recipe="recipe"></recipe>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import Recipe from './recipe/Recipe'

export default {
  name: 'url-input',
  data() {
    return {
      url: '',
      recipe: {},
      isLoading: false,
      isError: false,
      showRecipe: false
    }
  },
  components: {
    Recipe
  },
  methods: {
    redirect() {
      this.$router.push('?url=' + this.url)
    },
    fetchRecipe() {
      this.url = this.$route.query.url
      this.showRecipe = false
      this.isError = false
      this.isLoading = true
      axios.get('http://localhost:9000/parseUrl?url=' + this.url)
        .then((response) => {
          this.recipe = response.data
          this.showRecipe = true
          this.isLoading = false
        })
        .catch(() => {
          this.isError = true
          this.isLoading = false
        })
    }
  },
  created: function() {
    if (this.$route.query.url) {
      this.fetchRecipe()
    }
  },
  watch: {
    $route: function() {
      if (this.$route.query.url) {
        this.fetchRecipe()
      } else {
        this.url = ''
      }
    }
  }
}
</script>

<style>
.recipe-input {
  margin-bottom: 2em;
}
</style>
