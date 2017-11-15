<template>
<div>
  <div
    class="ui inverted vertical masthead center aligned segment"
    style="background-image: url(public/vegetables_basket.jpg)"
  >
    <div class="ui container">
      <div class="ui large secondary orange pointing menu">
        <a class="active item">Matkoll</a>
        <a class="item">Om</a>
      </div>
    </div>

    <div class="ui text container">
      <h1 class="ui inverted header">
        Få koll på maten du äter
      </h1>
      <h2>Mata in din måltid nedan</h2>
    </div>
  </div>
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
import UrlInput from './UrlInput'

export default {
  name: 'home',
  components: {
    UrlInput
  },
}
</script>

<style>
.masthead {
  background-size: cover !important;
  min-height: 640px;
}

.masthead .menu {
  border-bottom: 0 !important;
}

.masthead .menu .item {
  border-color: #f99157;
  color: #f99157;
}

.masthead h1.ui.header {
  margin-top: 1em;
  font-size: 4em;
  font-weight: normal;
}

.main.container {
  padding-top: 2em;
}

.chooser {
  margin-bottom: 2em;
}
</style>
