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
    <url-input></url-input>
  </div>
</div>
</template>

<script>
import HomeBanner from './HomeBanner'
import UrlInput from './UrlInput'

export default {
  name: 'home',
  components: {
    HomeBanner,
    UrlInput
  },
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
